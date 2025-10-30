import { Dispatch, SetStateAction } from "react";
import { useChat } from "../context/ChatContext";
import { GoogleIcon } from "../icons/GoogleIcon";
import { NewChatIcon } from "../icons/NewChatIcon";
import { SidebarIcon } from "../icons/SidebarIcon";
import { Button } from "./Button";
import { useTheme } from "../hooks/useTheme";
import { MoonIcon } from "../icons/MoonIcon";

type HeaderProps = {
  isLeftSidebarCollapsed: boolean;
  setIsLeftSidebarCollapsed: Dispatch<SetStateAction<boolean>>;
};

export function Header({
  isLeftSidebarCollapsed,
  setIsLeftSidebarCollapsed,
}: HeaderProps) {
  const { createNewConversation } = useChat();
  const { toggleTheme } = useTheme();
  return (
    <div className="sticky top-0 z-10 flex h-14 w-full items-center gap-2 p-2 font-semibold text-text-primary">
      {isLeftSidebarCollapsed && (
        <>
          <Button
            onClick={() => setIsLeftSidebarCollapsed(!isLeftSidebarCollapsed)}
          >
            <SidebarIcon />
          </Button>
          <Button onClick={() => createNewConversation()}>
            <NewChatIcon />
          </Button>
        </>
      )}
      <Button onClick={() => {}}>
        <GoogleIcon />
        gemini-2.5-flash
      </Button>
      <Button onClick={toggleTheme}>
        <MoonIcon />
      </Button>
      <div className="ml-auto flex items-center gap-2">v0.0.9</div>
    </div>
  );
}
