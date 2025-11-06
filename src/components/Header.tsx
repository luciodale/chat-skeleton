import { Dispatch, SetStateAction, useState } from "react";
import { useChat } from "../context/ChatContext";
import { GoogleIcon } from "../icons/GoogleIcon";
import { NewChatIcon } from "../icons/NewChatIcon";
import { SidebarIcon } from "../icons/SidebarIcon";
import { Button } from "./Button";
import { useTheme } from "../hooks/useTheme";
import { MoonIcon } from "../icons/MoonIcon";
import { ResponsiveSelect } from "./ResponsiveSelect";

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
  const MODEL_OPTIONS = [
    { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash" },
    { id: "gemini-2.0-pro", label: "Gemini 2.0 Pro" },
    { id: "gemini-1.5-flash", label: "Gemini 1.5 Flash" },
  ] as const;
  type ModelId = (typeof MODEL_OPTIONS)[number]["id"];
  const [selectedModel, setSelectedModel] =
    useState<ModelId>("gemini-2.5-flash");
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
      <ResponsiveSelect
        id="model-select"
        label="Model"
        options={MODEL_OPTIONS}
        value={selectedModel}
        onChange={(v) => setSelectedModel(v)}
        leadingIcon={<GoogleIcon />}
      />
      <Button onClick={toggleTheme}>
        <MoonIcon />
      </Button>
      <div className="ml-auto flex items-center gap-2">v0.0.19</div>
    </div>
  );
}
