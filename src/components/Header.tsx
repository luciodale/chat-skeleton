import { Sidebar } from "../icons/Sidebar";
import { NewChat } from "../icons/NewChat";
import { Button } from "./Button";
import { DarkModeToggle } from "./DarkModeToggle";

type HeaderProps = {
  isLeftSidebarCollapsed: boolean;
  onLeftSidebarToggleCollapse: () => void;
};

export function Header({
  isLeftSidebarCollapsed,
  onLeftSidebarToggleCollapse,
}: HeaderProps) {
  return (
    <div className="sticky top-0 z-10 flex h-14 w-full items-center gap-2 p-2 font-semibold text-text-primary">
      {isLeftSidebarCollapsed && (
        <>
          <Button onClick={onLeftSidebarToggleCollapse}>
            <Sidebar />
          </Button>
          <Button onClick={() => {}}>
            <NewChat />
          </Button>
        </>
      )}
      <DarkModeToggle />
    </div>
  );
}
