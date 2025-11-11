import { useEffect, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { CubeIcon } from "../icons/CubeIcon";
import { PromptIcon } from "../icons/PromptIcon";
import { ShowHideIcon } from "../icons/ShowHideIcon";
import { RightSidebarAgentBuilder } from "./RightSidebarAgentBuilder";
import { RightSidebarItem } from "./RightSidebarItem";
import { RightSidebarPrompts } from "./RightSidebarPrompts";
import { SwipeBarRight, useSwipeBarContext } from "@luciodale/swipe-bar";

type CurrentItem = "agent-builder" | "prompts";

export function RightSidebar() {
  const isSmallScreen = useMediaQuery("small");

  const [currentItem, setCurrentItem] = useState<CurrentItem | null>();

  const { closeSidebar, isRightOpen, openSidebar } = useSwipeBarContext();

  useEffect(() => {
    if (isSmallScreen) {
      closeSidebar("right");
    }
  }, [isSmallScreen]);

  useEffect(() => {
    if (!isRightOpen) {
      setCurrentItem(null);
    }
  }, [isRightOpen]);

  return (
    <SwipeBarRight>
      <div className="flex flex-col items-center w-full justify-between gap-2 py-2 px-3 safe-area-inset-top">
        <div className="w-full">
          <RightSidebarItem
            active={currentItem === "agent-builder"}
            onClick={() =>
              setCurrentItem(
                currentItem === "agent-builder" ? null : "agent-builder"
              )
            }
          >
            <CubeIcon />
            Agent Builder
          </RightSidebarItem>
          <RightSidebarAgentBuilder
            isVisible={currentItem === "agent-builder"}
          />
        </div>
        <div className="w-full">
          <RightSidebarItem
            active={currentItem === "prompts"}
            onClick={() =>
              setCurrentItem(currentItem === "prompts" ? null : "prompts")
            }
          >
            <PromptIcon />
            Prompts
          </RightSidebarItem>
          <RightSidebarPrompts isVisible={currentItem === "prompts"} />
        </div>
        <RightSidebarItem
          onClick={() =>
            isRightOpen ? closeSidebar("right") : openSidebar("right")
          }
        >
          <ShowHideIcon />
          Hide Panel
        </RightSidebarItem>
      </div>
    </SwipeBarRight>
  );
}
