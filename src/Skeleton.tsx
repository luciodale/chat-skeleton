import { useState } from "react";
import { Chat } from "./components/Chat";
import { Header } from "./components/Header";
import { LeftSidebar } from "./components/LeftSidebar";
import { RightSidebar } from "./components/RightSidebar";
import { RightSidebarToggle } from "./components/RightSidebarToggle";
import {
  defaultLeftSidebarCollapsed,
  defaultRightSidebarCollapsed,
} from "./defaults";
import { useMobileSwipePanes } from "./hooks/useMobileSwipePanes";

export function Skeleton() {
  const [isLeftSidebarCollapsed, setIsLeftSidebarCollapsed] = useState(
    defaultLeftSidebarCollapsed
  );

  const [isRightSidebarCollapsed, setIsRightSidebarCollapsed] = useState(
    defaultRightSidebarCollapsed
  );

  const [leftDragX, setLeftDragX] = useState<number | null>(null);
  const [rightDragX, setRightDragX] = useState<number | null>(null);

  useMobileSwipePanes({
    getIsLeftOpen: () => !isLeftSidebarCollapsed,
    getIsRightOpen: () => !isRightSidebarCollapsed,
    openLeft: () => {
      setIsLeftSidebarCollapsed(false);
      setIsRightSidebarCollapsed(true);
    },
    closeLeft: () => setIsLeftSidebarCollapsed(true),
    openRight: () => {
      setIsRightSidebarCollapsed(false);
      setIsLeftSidebarCollapsed(true);
    },
    closeRight: () => setIsRightSidebarCollapsed(true),
    onLeftDrag: setLeftDragX,
    onRightDrag: setRightDragX,
  });

  return (
    <div className="flex" style={{ height: "100dvh" }}>
      <div className="relative z-0 flex h-full w-full overflow-hidden">
        <LeftSidebar
          isLeftSidebarCollapsed={isLeftSidebarCollapsed}
          setIsLeftSidebarCollapsed={setIsLeftSidebarCollapsed}
          dragTranslateX={leftDragX ?? undefined}
        />
        <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
          <div className="h-full relative flex w-full grow overflow-hidden bg-presentation">
            {/* split between main and left component */}
            <div className="flex flex-col transition-width relative h-full w-full flex-1 overflow-auto bg-presentation">
              {/* main chat */}
              <main className="flex h-full flex-col overflow-y-auto overscroll-contain">
                <div className="flex h-full w-full flex-col">
                  <Header
                    isLeftSidebarCollapsed={isLeftSidebarCollapsed}
                    setIsLeftSidebarCollapsed={setIsLeftSidebarCollapsed}
                  />
                  <Chat />
                </div>
              </main>
              {/*  right sidebar */}
            </div>
            <RightSidebarToggle
              isRightSidebarCollapsed={isRightSidebarCollapsed}
              setIsRightSidebarCollapsed={setIsRightSidebarCollapsed}
            />
            <RightSidebar
              isRightSidebarCollapsed={isRightSidebarCollapsed}
              setIsRightSidebarCollapsed={setIsRightSidebarCollapsed}
              dragTranslateX={rightDragX ?? undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
