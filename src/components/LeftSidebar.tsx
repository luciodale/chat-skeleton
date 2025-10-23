import { Dispatch, SetStateAction } from "react";
import { NewChatIcon } from "../icons/NewChatIcon";
import { SidebarIcon } from "../icons/SidebarIcon";
import { Button } from "./Button";
import cn from "../utils/cn";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ThreeDotsIcon } from "../icons/ThreeDotsIcon";
import { LeftSidebarItem } from "./LeftSidebarItem";
import { GoogleIcon } from "../icons/GoogleIcon";

type LeftSidebarProps = {
  isLeftSidebarCollapsed: boolean;
  setIsLeftSidebarCollapsed: Dispatch<SetStateAction<boolean>>;
};

export function LeftSidebar({
  isLeftSidebarCollapsed,
  setIsLeftSidebarCollapsed,
}: LeftSidebarProps) {
  const isSmallScreen = useMediaQuery("small");

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
          ...(isLeftSidebarCollapsed && {
            transform: "translateX(-100%)",
            width: "0px",
          }),
        }}
        className={cn(
          "top-0 bottom-0 z-50 active w-[320px] md:w-[260px] flex-shrink-0 transform overflow-x-hidden bg-surface-primary-alt transition-all duration-200 ease-in-out",
          isSmallScreen && "fixed left-0 top-0 bottom-0"
        )}
      >
        <div className="z-20 flex items-center w-full justify-between gap-4 p-2 h-14">
          <Button
            onClick={() => setIsLeftSidebarCollapsed(!isLeftSidebarCollapsed)}
          >
            <SidebarIcon />
          </Button>
          <Button onClick={() => {}}>
            <NewChatIcon />
          </Button>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <LeftSidebarItem isActive={true}>
            <div className="w-full flex items-center justify-between px-2 text-text-primary">
              <div className="flex items-center gap-2">
                <GoogleIcon />
                Title of Chat
              </div>
              <ThreeDotsIcon />
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem isActive={false}>
            <div className="w-full flex items-center justify-between px-2 text-text-primary">
              <div className="flex items-center gap-2">
                <GoogleIcon />
                Another Chat
              </div>
              <ThreeDotsIcon />
            </div>
          </LeftSidebarItem>
        </div>
      </div>
    </>
  );
}
