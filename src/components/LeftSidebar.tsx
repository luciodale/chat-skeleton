import { Dispatch, SetStateAction } from "react";
import { useChat } from "../context/ChatContext";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { GoogleIcon } from "../icons/GoogleIcon";
import { NewChatIcon } from "../icons/NewChatIcon";
import { SidebarIcon } from "../icons/SidebarIcon";
import { ThreeDotsIcon } from "../icons/ThreeDotsIcon";
import cn from "../utils/cn";
import { Button } from "./Button";
import { LeftSidebarItem } from "./LeftSidebarItem";

type LeftSidebarProps = {
  isLeftSidebarCollapsed: boolean;
  setIsLeftSidebarCollapsed: Dispatch<SetStateAction<boolean>>;
  dragTranslateX?: number | null;
};

export function LeftSidebar({
  isLeftSidebarCollapsed,
  setIsLeftSidebarCollapsed,
  dragTranslateX,
}: LeftSidebarProps) {
  const isSmallScreen = useMediaQuery("small");
  const { conversations, currentConversation, selectConversation, createNewConversation } = useChat();

  return (
    <>
      <div
        className={cn(
          "fixed z-10 top-0 left-0 w-full h-full bg-black transition-opacity duration-200 pointer-events-none",
          isSmallScreen && !isLeftSidebarCollapsed
            ? "opacity-50 pointer-events-auto"
            : "opacity-0"
        )}
        onClick={() => setIsLeftSidebarCollapsed(true)}
      />

      <div
        style={{
          willChange: "transform",
          ...(dragTranslateX != null
            ? {
                transform: `translate3d(${dragTranslateX}px, 0, 0)`,
                transition: "none",
              }
            : isLeftSidebarCollapsed
            ? { transform: "translateX(-100%)", width: "0px" }
            : {}),
        }}
        className={cn(
          "top-0 bottom-0 z-50 active w-[320px] md:w-[260px] shrink-0 transform overflow-x-hidden bg-surface-primary-alt transition-all duration-200 ease-in-out",
          isSmallScreen && "fixed left-0 top-0 bottom-0"
        )}
      >
        <div className="z-20 flex items-center w-full justify-between gap-4 p-2 h-14">
          <Button
            onClick={() => setIsLeftSidebarCollapsed(!isLeftSidebarCollapsed)}
          >
            <SidebarIcon />
          </Button>
          <Button onClick={() => createNewConversation()}>
            <NewChatIcon />
          </Button>
        </div>
        <div className="p-2 flex flex-col gap-2">
          {conversations.map((c) => (
            <LeftSidebarItem
              key={c.id}
              isActive={currentConversation?.id === c.id}
              onClick={() => selectConversation(c.id)}
            >
              <div className="w-full flex items-center justify-between px-2 text-text-primary">
                <div className="flex items-center gap-2">
                  <GoogleIcon />
                  {c.title || "New Chat"}
                </div>
                <ThreeDotsIcon />
              </div>
            </LeftSidebarItem>
          ))}
        </div>
      </div>
    </>
  );
}
