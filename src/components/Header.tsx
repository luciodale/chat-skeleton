import { Dispatch, SetStateAction, useState } from "react";
import { useChat } from "../context/ChatContext";
import { GoogleIcon } from "../icons/GoogleIcon";
import { NewChatIcon } from "../icons/NewChatIcon";
import { SidebarIcon } from "../icons/SidebarIcon";
import { Button } from "./Button";
import { useTheme } from "../hooks/useTheme";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";
import { MonitorIcon } from "../icons/MonitorIcon";
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
  const { theme, setTheme } = useTheme();
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
      {(() => {
        const THEME_OPTIONS = [
          { id: "light", label: "Light" },
          { id: "dark", label: "Dark" },
          { id: "system", label: "System" },
        ] as const;
        type ThemeId = (typeof THEME_OPTIONS)[number]["id"];
        const iconFor = (id: ThemeId) =>
          id === "dark" ? (
            <MoonIcon />
          ) : id === "light" ? (
            <SunIcon />
          ) : (
            <MonitorIcon />
          );
        return (
          <ResponsiveSelect<ThemeId>
            id="theme-select"
            label="Theme"
            options={THEME_OPTIONS}
            value={theme as ThemeId}
            onChange={(v) => setTheme(v)}
            renderTrigger={(selected) => (
              <span
                aria-label={selected?.label ?? "Theme"}
                title={selected?.label}
              >
                {iconFor((selected?.id ?? "system") as ThemeId)}
              </span>
            )}
            renderOption={(opt) => (
              <span className="inline-flex items-center" title={opt.label}>
                {iconFor(opt.id as ThemeId)}
              </span>
            )}
          />
        );
      })()}
      <div className="ml-auto flex items-center gap-2">v0.0.20</div>
    </div>
  );
}
