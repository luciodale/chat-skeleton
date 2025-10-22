import { Dispatch, SetStateAction, useEffect } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import cn from "../utils/cn";

type RightSidebarProps = {
  isRightSidebarCollapsed: boolean;
  setIsRightSidebarCollapsed: Dispatch<SetStateAction<boolean>>;
};

export function RightSidebar({
  isRightSidebarCollapsed,
  setIsRightSidebarCollapsed,
}: RightSidebarProps) {
  const isSmallScreen = useMediaQuery("small");

  useEffect(() => {
    if (isSmallScreen) {
      setIsRightSidebarCollapsed(true);
    }
  }, [isSmallScreen]);

  return (
    <nav
      style={{
        ...(isRightSidebarCollapsed && {
          transform: "translateX(100%)",
          width: "0px",
        }),
      }}
      className={cn(
        "z-20 hide-scrollbar border-l border-border-light bg-background py-1 transition-all duration-200 w-[340px] sm:w-[352px] opacity-100",
        isSmallScreen && "fixed right-0 top-0 bottom-0"
      )}
    >
      right sidebar
    </nav>
  );
}
