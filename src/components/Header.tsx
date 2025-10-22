import { Dispatch, SetStateAction } from "react";
import { NewChatIcon } from "../icons/NewChatIcon";
import { SidebarIcon } from "../icons/SidebarIcon";
import { Button } from "./Button";
import { DarkModeToggle } from "./DarkModeToggle";

type HeaderProps = {
  isLeftSidebarCollapsed: boolean;
  setIsLeftSidebarCollapsed: Dispatch<SetStateAction<boolean>>;
};

export function Header({
  isLeftSidebarCollapsed,
  setIsLeftSidebarCollapsed,
}: HeaderProps) {
  return (
    <div className="sticky top-0 z-10 flex h-14 w-full items-center gap-2 p-2 font-semibold text-text-primary">
      {isLeftSidebarCollapsed && (
        <>
          <Button
            onClick={() => setIsLeftSidebarCollapsed(!isLeftSidebarCollapsed)}
          >
            <SidebarIcon />
          </Button>
          <Button onClick={() => {}}>
            <NewChatIcon />
          </Button>
        </>
      )}
      <DarkModeToggle />
    </div>
  );
}
