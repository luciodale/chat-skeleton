import { Dispatch, SetStateAction, useEffect } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

type RightSidebarProps = {
  isRightSidebarCollapsed: boolean;
  setIsRightSidebarCollapsed: Dispatch<SetStateAction<boolean>>
};


export function RightSidebar({ isRightSidebarCollapsed, setIsRightSidebarCollapsed }: RightSidebarProps) {
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
        transform: "translateX(-100%)",
        width: "0px",
      }),
    }}
    className="hide-scrollbar border-l border-border-light bg-background py-1 transition-opacity w-[340px] sm:w-[352px] opacity-100">
      right sidebar
    </nav>
  );
}
