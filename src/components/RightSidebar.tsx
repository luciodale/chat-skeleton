import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import cn from "../utils/cn";
import { CubeIcon } from "../icons/CubeIcon";
import { RightSidebarItem } from "./RightSidebarItem";
import { PromptIcon } from "../icons/PromptIcon";
import { ShowHideIcon } from "../icons/ShowHideIcon";
import { RightSidebarAgentBuilder } from "./RightSidebarAgentBuilder";
import { RightSidebarPrompts } from "./RightSidebarPrompts";

type RightSidebarProps = {
  isRightSidebarCollapsed: boolean;
  setIsRightSidebarCollapsed: Dispatch<SetStateAction<boolean>>;
};

type CurrentItem = "agent-builder" | "prompts";

export function RightSidebar({
  isRightSidebarCollapsed,
  setIsRightSidebarCollapsed,
}: RightSidebarProps) {
  const isSmallScreen = useMediaQuery("small");

  const [currentItem, setCurrentItem] = useState<CurrentItem | null>();

  useEffect(() => {
    if (isSmallScreen) {
      setIsRightSidebarCollapsed(true);
    }
  }, [isSmallScreen]);

  useEffect(() => {
    if (isRightSidebarCollapsed) {
      setCurrentItem(null);
    }
  }, [isRightSidebarCollapsed]);

  return (
    <nav
      style={{
        ...(isRightSidebarCollapsed && {
          transform: "translateX(100%)",
          width: "0px",
        }),
      }}
      className={cn(
        "z-20 hide-scrollbar border-l border-border-light bg-background py-1 transition-all duration-200 w-[340px] sm:w-[352px] opacity-100",
        isSmallScreen && "fixed right-0 top-0 bottom-0"
      )}
    >
      <div className="flex flex-col items-center w-full justify-between gap-2 py-2 px-3">
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
        <RightSidebarItem onClick={() => setIsRightSidebarCollapsed(true)}>
          <ShowHideIcon />
          Hide Panel
        </RightSidebarItem>
      </div>
    </nav>
  );
}
