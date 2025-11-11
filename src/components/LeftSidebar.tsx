import { SwipeBarLeft, useSwipeBarContext } from "@luciodale/swipe-bar";
import { useChat } from "../context/ChatContext";
import { GoogleIcon } from "../icons/GoogleIcon";
import { NewChatIcon } from "../icons/NewChatIcon";
import { SidebarIcon } from "../icons/SidebarIcon";
import { ThreeDotsIcon } from "../icons/ThreeDotsIcon";
import { Button } from "./Button";
import { LeftSidebarItem } from "./LeftSidebarItem";

export function LeftSidebar() {
  const {
    conversations,
    currentConversation,
    selectConversation,
    createNewConversation,
  } = useChat();

  const { closeSidebar, isLeftOpen, openSidebar } = useSwipeBarContext();

  return (
    <SwipeBarLeft>
      <div>
      <div className="z-20 flex items-center w-full justify-between gap-4 p-2 h-14 safe-area-inset-top">
        <Button
          onClick={() =>
            isLeftOpen ? closeSidebar("left") : openSidebar("left")
          }
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
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <GoogleIcon className="shrink-0" />
                <span className="truncate">{c.title || "New Chat"}</span>
              </div>
              <ThreeDotsIcon className="shrink-0" />
            </div>
          </LeftSidebarItem>
        ))}
      </div>
      </div>
    </SwipeBarLeft>
  );
}
