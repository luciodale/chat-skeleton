import { NewChat } from "../icons/NewChat";
import { Sidebar } from "../icons/Sidebar";
import { Button } from "./Button";

type LeftSidebarProps = {
  isLeftSidebarCollapsed: boolean;
  onLeftSidebarToggleCollapse: () => void;
};

export function LeftSidebar({
  isLeftSidebarCollapsed,
  onLeftSidebarToggleCollapse,
}: LeftSidebarProps) {
  return (
    <div
      style={{
        // transform: isSmallScreen ? "translateX(-100%)" : "translateX(0)",
        ...(isLeftSidebarCollapsed && {
          transform: "translateX(-100%)",
          width: "0px",
        }),
      }}
      className="top-0 bottom-0 z-50 active w-[320px] md:w-[260px] flex-shrink-0 transform overflow-x-hidden bg-surface-primary-alt transition-all duration-200 ease-in-out"
    >
      <div className="flex items-center w-full justify-between gap-4 p-2 h-14">
        <Button onClick={onLeftSidebarToggleCollapse}>
          <Sidebar />
        </Button>
        <Button onClick={() => {}}>
          <NewChat />
        </Button>
      </div>
      <div>sdflds,f sd,f lds,f dslf, sdlf, sdlf, sldf, dls f</div>
    </div>
  );
}
