import { useEffect, useRef } from "react";
import { useMediaQuery } from "./useMediaQuery";

type SwipeCallbacks = {
  getIsLeftOpen: () => boolean;
  getIsRightOpen: () => boolean;
  openLeft: () => void;
  closeLeft: () => void;
  openRight: () => void;
  closeRight: () => void;
  onLeftDrag?: (translateX: number | null) => void;
  onRightDrag?: (translateX: number | null) => void;
};

const EDGE_SWIPE_THRESHOLD_PX = 40; // px from the screen edge to start opening when closed
const ACTIVATION_DELTA_X_PX = 20; // minimal horizontal movement to lock onto a gesture
const LEFT_PANE_WIDTH_PX = 320;
const RIGHT_PANE_WIDTH_PX = 352;
const OPENING_SNAP_FRACTION = 0.1; // if pane is closed, open when >= 33% of the way
const CLOSING_SNAP_FRACTION = 0.1; // if pane is open, close when >= 33% of the way

export function useMobileSwipePanes(cbs: SwipeCallbacks) {
  const isSmallScreen = useMediaQuery("small");

  const draggingRef = useRef<
    | null
    | {
        touchStartX: number;
        touchStartY: number;
        activeGesture: "left-closing" | "right-closing" | "left-opening" | "right-opening" | null;
        activeTouchId: number | null;
      }
  >(null);
  const lastLeftTranslateRef = useRef<number | null>(null);
  const lastRightTranslateRef = useRef<number | null>(null);

  // Destructure for stable deps; these are memoized in the parent
  const {
    getIsLeftOpen,
    getIsRightOpen,
    openLeft,
    closeLeft,
    openRight,
    closeRight,
    onLeftDrag,
    onRightDrag,
  } = cbs;

  useEffect(() => {
    if (!isSmallScreen) return;

    // Helper to detect inputs/contenteditable
    const isEditableTarget = (el: EventTarget | null) => {
      if (!(el instanceof Element)) return false;
      const editable = el.closest("input, textarea, [contenteditable='true']");
      return !!editable;
    };

    function onTouchStart(e: TouchEvent) {
      if (isEditableTarget(e.target)) return;
      if (e.changedTouches.length === 0) return;

      const firstTouch = e.changedTouches[0];
      draggingRef.current = {
        touchStartX: firstTouch.clientX,
        touchStartY: firstTouch.clientY,
        activeGesture: null,
        activeTouchId: firstTouch.identifier,
      };
      lastLeftTranslateRef.current = null;
      lastRightTranslateRef.current = null;
    }

    function onTouchMove(e: TouchEvent) {
      if (!draggingRef.current) return;

      // Find the tracked touch
      const trackedId = draggingRef.current.activeTouchId;
      let changedTouch: Touch | null = null;
      for (let i = 0; i < e.changedTouches.length; i++) {
        const candidateTouch = e.changedTouches[i];
        if (trackedId == null || candidateTouch.identifier === trackedId) {
          changedTouch = candidateTouch;
          break;
        }
      }
      if (!changedTouch) return;

      const deltaX = changedTouch.clientX - draggingRef.current.touchStartX;

      // If not yet locked on a gesture, decide intent
      if (draggingRef.current.activeGesture == null) {
        if (Math.abs(deltaX) < ACTIVATION_DELTA_X_PX) return;

        const leftOpen = getIsLeftOpen();
        const rightOpen = getIsRightOpen();

        if (leftOpen) {
          if (deltaX < 0) {
            draggingRef.current.activeGesture = "left-closing";
          } else {
            // opposite direction ignored when pane is open
            draggingRef.current = null;
            onLeftDrag?.(null);
            onRightDrag?.(null);
            return;
          }
        } else if (rightOpen) {
          if (deltaX > 0) {
            draggingRef.current.activeGesture = "right-closing";
          } else {
            draggingRef.current = null;
            onLeftDrag?.(null);
            onRightDrag?.(null);
            return;
          }
        } else {
          // none open → require an edge swipe to open
          const viewportWidth = window.innerWidth;
          if (deltaX > 0 && draggingRef.current.touchStartX <= EDGE_SWIPE_THRESHOLD_PX) {
            draggingRef.current.activeGesture = "left-opening";
          } else if (deltaX < 0 && draggingRef.current.touchStartX >= viewportWidth - EDGE_SWIPE_THRESHOLD_PX) {
            draggingRef.current.activeGesture = "right-opening";
          } else {
            // Not from edge → ignore this interaction
            draggingRef.current = null;
            return;
          }
        }
      }

      // If a pane gesture is active, prevent the browser from scrolling
      if (draggingRef.current.activeGesture != null) {
        e.preventDefault();
      }

      // Apply live transform while dragging, clamped to pane widths
      if (draggingRef.current?.activeGesture === "left-closing") {
        const translateX = Math.min(0, Math.max(-LEFT_PANE_WIDTH_PX, deltaX)); // 0..-width
        onLeftDrag?.(translateX);
        lastLeftTranslateRef.current = translateX;

      } else if (draggingRef.current?.activeGesture === "right-closing") {
        const translateX = Math.max(0, Math.min(RIGHT_PANE_WIDTH_PX, deltaX)); // 0..width
        onRightDrag?.(translateX);
        lastRightTranslateRef.current = translateX;

      } else if (draggingRef.current?.activeGesture === "left-opening") {
        // from offscreen (-width) toward 0
        const translateX = Math.min(0, Math.max(-LEFT_PANE_WIDTH_PX, -LEFT_PANE_WIDTH_PX + deltaX));
        onLeftDrag?.(translateX);
        lastLeftTranslateRef.current = translateX;

      } else if (draggingRef.current?.activeGesture === "right-opening") {
        const translateX = Math.max(0, Math.min(RIGHT_PANE_WIDTH_PX, RIGHT_PANE_WIDTH_PX + deltaX));
        onRightDrag?.(translateX);
        lastRightTranslateRef.current = translateX;

      }
    }

    function onTouchEnd(e: TouchEvent) {
      if (!draggingRef.current) return;

      const trackedId = draggingRef.current.activeTouchId;
      let endedTracked = false;
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === trackedId) {
          endedTracked = true;
          break;
        }
      }
      if (!endedTracked) return;

      const active = draggingRef.current.activeGesture;
      draggingRef.current = null;

      // Decide final state based on last live translate with distinct thresholds:
      // - Opening gestures (pane was closed): open if >= OPENING_SNAP_FRACTION of the way
      // - Closing gestures (pane was open): close if >= CLOSING_SNAP_FRACTION of the way
      if (active === "left-opening") {
        const lastTranslateX = lastLeftTranslateRef.current ?? -LEFT_PANE_WIDTH_PX; // -width..0
        const openingBoundaryTranslateX = -LEFT_PANE_WIDTH_PX * (1 - OPENING_SNAP_FRACTION);
        if (lastTranslateX >= openingBoundaryTranslateX) openLeft(); else closeLeft();
        onLeftDrag?.(null);
      } else if (active === "left-closing") {
        const lastTranslateX = lastLeftTranslateRef.current ?? 0; // 0..-width
        const closingBoundaryTranslateX = -LEFT_PANE_WIDTH_PX * CLOSING_SNAP_FRACTION; // negative value
        if (lastTranslateX <= closingBoundaryTranslateX) closeLeft(); else openLeft();
        onLeftDrag?.(null);
      } else if (active === "right-opening") {
        const lastTranslateX = lastRightTranslateRef.current ?? RIGHT_PANE_WIDTH_PX; // width..0
        const openingBoundaryTranslateX = RIGHT_PANE_WIDTH_PX * (1 - OPENING_SNAP_FRACTION);
        if (lastTranslateX <= openingBoundaryTranslateX) openRight(); else closeRight();
        onRightDrag?.(null);
      } else if (active === "right-closing") {
        const lastTranslateX = lastRightTranslateRef.current ?? 0; // 0..width
        const closingBoundaryTranslateX = RIGHT_PANE_WIDTH_PX * CLOSING_SNAP_FRACTION;
        if (lastTranslateX >= closingBoundaryTranslateX) closeRight(); else openRight();
        onRightDrag?.(null);
      } else {
        onLeftDrag?.(null);
        onRightDrag?.(null);
      }
    }

    function onTouchCancel() {
      draggingRef.current = null;
      onLeftDrag?.(null);
      onRightDrag?.(null);
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    // touchmove must be non-passive to allow preventDefault() for scroll lock during gesture
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchCancel, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchCancel);
    };
  }, [
    isSmallScreen,
    getIsLeftOpen,
    getIsRightOpen,
    openLeft,
    closeLeft,
    openRight,
    closeRight,
    onLeftDrag,
    onRightDrag,
  ]);
}



