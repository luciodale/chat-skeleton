import { Dispatch, SetStateAction } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import cn from "../utils/cn";

type RightSidebarToggleProps = {
  isRightSidebarCollapsed: boolean;
  setIsRightSidebarCollapsed: Dispatch<SetStateAction<boolean>>;
};

export function RightSidebarToggle({
  isRightSidebarCollapsed,
  setIsRightSidebarCollapsed,
}: RightSidebarToggleProps) {
  const isSmallScreen = useMediaQuery("small");

  const transition = {
    transition: "transform 0.3s ease, opacity 0.2s ease",
  };

  return (
    <div className="relative flex w-px items-center justify-center">
      <div
        className={cn(
          "fixed z-10 top-0 left-0 w-full h-full bg-black transition-opacity duration-200 pointer-events-none",
          isSmallScreen && !isRightSidebarCollapsed
            ? "opacity-50 pointer-events-auto"
            : "opacity-0"
        )}
        onClick={() => setIsRightSidebarCollapsed(true)}
      />

      <button
        onClick={() => setIsRightSidebarCollapsed(!isRightSidebarCollapsed)}
        className={cn(
          "fixed top-1/2 -translate-y-1/2 cursor-pointer",
          !isRightSidebarCollapsed ? "rotate-0 mr-9" : "rotate-180 mr-16",
          isSmallScreen && isRightSidebarCollapsed && "mr-10",
          isSmallScreen && !isRightSidebarCollapsed && "hidden"
        )}
      >
        <div>
          <div
            className="relative flex h-[72px] w-8 items-center justify-center hover:opacity-100 opacity-50"
            style={{ ...transition }}
          >
          
          <div className="sm:hidden absolute top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-surface-active-alt"/>

            <div className="flex h-6 w-6 flex-col items-center">
              {/* Top bar */}
              <div
                className="h-3 w-1 rounded-full bg-black dark:bg-white"
                style={{
                  ...transition,
                  transform: `translateY(0.15rem) rotate(-15deg) translateZ(0px)`,
                }}
              />
              {/* Bottom bar */}
              <div
                className="h-3 w-1 rounded-full bg-black dark:bg-white"
                style={{
                  ...transition,
                  transform: `translateY(-0.15rem) rotate(15deg) translateZ(0px)`,
                }}
              />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
