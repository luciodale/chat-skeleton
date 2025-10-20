import { useMediaQuery } from "../hooks/useMediaQuery";
import { Sidebar } from "../icons/Sidebar";

export function LeftSidebar() {
  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  return (
    <div
      style={
        {
          // transform: isSmallScreen ? "translateX(-100%)" : "translateX(0)",
        }
      }
      className="top-0 bottom-0 z-50 bg-amber-200 active w-[320px] md:w-[260px] flex-shrink-0 transform overflow-x-hidden transition-all duration-200 ease-in-out"
    >
      <Sidebar />f some text for triyng things out hellp hello here I am
    </div>
  );
}
