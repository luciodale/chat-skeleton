import { useSwipeBarContext } from "@luciodale/swipe-bar";
import { useState } from "react";
import { useChat } from "../context/ChatContext";
import { useTheme } from "../context/ThemeContext";
import { GoogleIcon } from "../icons/GoogleIcon";
import { MonitorIcon } from "../icons/MonitorIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { NewChatIcon } from "../icons/NewChatIcon";
import { SidebarIcon } from "../icons/SidebarIcon";
import { SunIcon } from "../icons/SunIcon";
import { Button } from "./Button";
import { ResponsiveSelect } from "./ResponsiveSelect";

export function Header() {
  const { createNewConversation } = useChat();
  const { theme, setTheme } = useTheme();
  const { isLeftOpen, openSidebar } = useSwipeBarContext();

  const MODEL_OPTIONS = [
    { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash" },
    { id: "gemini-2.0-pro", label: "Gemini 2.0 Pro" },
    { id: "gemini-1.5-flash", label: "Gemini 1.5 Flash" },
  ] as const;
  type ModelId = (typeof MODEL_OPTIONS)[number]["id"];
  const [selectedModel, setSelectedModel] =
    useState<ModelId>("gemini-2.5-flash");
  return (
    <div className="sticky top-0 z-10 flex h-14 w-full items-center gap-2 p-2 text-text-primary">
      {!isLeftOpen && (
        <>
          <Button onClick={() => openSidebar("left")}>
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
      <div className="ml-auto font-light text-xs gap-2">v0.0.31</div>
    </div>
  );
}
