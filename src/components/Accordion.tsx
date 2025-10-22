import { useCallback, useEffect, useState } from "react";
import cn from "../utils/cn";

export type AccordionProps = {
  isVisible: boolean;
  children: React.ReactNode;
  durationMs?: number;
};

export function Accordion({
  isVisible,
  children,
  durationMs = 200,
}: AccordionProps) {
  const [shouldRenderChildren, setShouldRenderChildren] =
    useState<boolean>(isVisible);

  // When opening, ensure children are mounted before starting the expand transition
  useEffect(() => {
    if (isVisible) {
      setShouldRenderChildren(true);
    } else if (durationMs === 0) {
      setShouldRenderChildren(false);
    }
  }, [isVisible, durationMs]);

  const handleTransitionEnd = useCallback(
    (event: React.TransitionEvent<HTMLDivElement>) => {
      // Only unmount after the grid row transition completes on the container itself
      if (
        !isVisible &&
        event.currentTarget === event.target &&
        event.propertyName === "grid-template-rows"
      ) {
        setShouldRenderChildren(false);
      }
    },
    [isVisible]
  );

  return (
    <div
      style={{ transitionDuration: `${durationMs}ms` }}
      className={cn(
        "w-full grid transition-[grid-template-rows] ease-in-out",
        isVisible ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      )}
      onTransitionEnd={handleTransitionEnd}
      aria-hidden={!isVisible}
    >
      <div className="min-h-0 overflow-hidden">
        {shouldRenderChildren ? children : null}
      </div>
    </div>
  );
}
