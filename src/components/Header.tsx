import { Dispatch, SetStateAction } from "react";
import { NewChat } from "../icons/NewChat";
import { Sidebar } from "../icons/Sidebar";
import { Button } from "./Button";
import { DarkModeToggle } from "./DarkModeToggle";

type HeaderProps = {
  isLeftSidebarCollapsed: boolean;
  setIsLeftSidebarCollapsed: Dispatch<SetStateAction<boolean>>
};

export function Header({
  isLeftSidebarCollapsed,
  setIsLeftSidebarCollapsed,
}: HeaderProps) {
  return (
    <div className="sticky top-0 z-10 flex h-14 w-full items-center gap-2 p-2 font-semibold text-text-primary">
      {isLeftSidebarCollapsed && (
        <>
          <Button onClick={() => setIsLeftSidebarCollapsed(!isLeftSidebarCollapsed)}>
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
