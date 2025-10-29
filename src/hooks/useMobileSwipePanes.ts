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

// Minimal swipe handling focused on horizontal gestures on small screens.
// Doesn't prevent default to preserve native text selection and scrolling.
export function useMobileSwipePanes(cbs: SwipeCallbacks) {
  const isSmallScreen = useMediaQuery("small");

  const draggingRef = useRef<
    | null
    | {
        startX: number;
        startY: number;
        activeSide: "left-closing" | "right-closing" | "left-opening" | "right-opening" | null;
      }
  >(null);

  useEffect(() => {
    if (!isSmallScreen) return;

    const edgeThresholdPx = 40; // start from edges when opening
    const activationDx = 12; // minimal horizontal movement to consider swipe
    const horizontalDominance = 1.5; // horizontal must dominate vertical
    const LEFT_PANE_WIDTH = 320; // px
    const RIGHT_PANE_WIDTH = 352; // px

    const isEditableTarget = (el: EventTarget | null) => {
      if (!(el instanceof Element)) return false;
      const editable = el.closest("input, textarea, [contenteditable='true']");
      return !!editable;
    };

    function onPointerDown(e: PointerEvent) {
      if (e.pointerType !== "touch") return;
      if (isEditableTarget(e.target)) return;

      draggingRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        activeSide: null,
      };
    }

    function onPointerMove(e: PointerEvent) {
      if (e.pointerType !== "touch") return;
      if (!draggingRef.current) return;

      const dx = e.clientX - draggingRef.current.startX;
      const dy = e.clientY - draggingRef.current.startY;

      // Determine intent
      if (draggingRef.current.activeSide == null) {
        if (Math.abs(dx) < activationDx) return;
        if (Math.abs(dx) < Math.abs(dy) * horizontalDominance) return;

        const leftOpen = cbs.getIsLeftOpen();
        const rightOpen = cbs.getIsRightOpen();

        if (leftOpen) {
          if (dx < 0) {
            draggingRef.current.activeSide = "left-closing";
          } else {
            // opposite direction ignored when pane is open
            draggingRef.current = null;
            cbs.onLeftDrag?.(null);
            cbs.onRightDrag?.(null);
            return;
          }
        } else if (rightOpen) {
          if (dx > 0) {
            draggingRef.current.activeSide = "right-closing";
          } else {
            draggingRef.current = null;
            cbs.onLeftDrag?.(null);
            cbs.onRightDrag?.(null);
            return;
          }
        } else {
          // none open → edge swipe only
          const vw = window.innerWidth;
          if (dx > 0 && draggingRef.current.startX <= edgeThresholdPx) {
            draggingRef.current.activeSide = "left-opening";
          } else if (dx < 0 && draggingRef.current.startX >= vw - edgeThresholdPx) {
            draggingRef.current.activeSide = "right-opening";
          } else {
            // Not from edge → ignore
            draggingRef.current = null;
            return;
          }
        }
      }

      // Update drag visuals (translate relative to fully open position)
      if (draggingRef.current?.activeSide === "left-closing") {
        const translate = Math.min(0, Math.max(-LEFT_PANE_WIDTH, dx)); // 0..-width
        cbs.onLeftDrag?.(translate);
      } else if (draggingRef.current?.activeSide === "right-closing") {
        const translate = Math.max(0, Math.min(RIGHT_PANE_WIDTH, dx)); // 0..width
        cbs.onRightDrag?.(translate);
      } else if (draggingRef.current?.activeSide === "left-opening") {
        // from offscreen (-width) toward 0
        const translate = Math.min(0, Math.max(-LEFT_PANE_WIDTH, -LEFT_PANE_WIDTH + dx));
        cbs.onLeftDrag?.(translate);
      } else if (draggingRef.current?.activeSide === "right-opening") {
        const translate = Math.max(0, Math.min(RIGHT_PANE_WIDTH, RIGHT_PANE_WIDTH + dx));
        cbs.onRightDrag?.(translate);
      }
    }

    function onPointerUp(e: PointerEvent) {
      if (e.pointerType !== "touch") return;
      if (!draggingRef.current) return;

      const active = draggingRef.current.activeSide;
      draggingRef.current = null;

      // Snap behavior: open/close at gesture end.
      if (active === "left-closing") {
        cbs.onLeftDrag?.(null);
        cbs.closeLeft();
      } else if (active === "right-closing") {
        cbs.onRightDrag?.(null);
        cbs.closeRight();
      } else if (active === "left-opening") {
        cbs.onLeftDrag?.(null);
        cbs.openLeft();
      } else if (active === "right-opening") {
        cbs.onRightDrag?.(null);
        cbs.openRight();
      } else {
        cbs.onLeftDrag?.(null);
        cbs.onRightDrag?.(null);
      }
    }

    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onPointerUp, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", onPointerDown as any);
      window.removeEventListener("pointermove", onPointerMove as any);
      window.removeEventListener("pointerup", onPointerUp as any);
      window.removeEventListener("pointercancel", onPointerUp as any);
    };
  }, [isSmallScreen, cbs]);
}

export default useMobileSwipePanes;

