import { useSwipeBarContext } from "@luciodale/swipe-bar";
import { Link } from "react-router-dom";
import { useChat } from "../context/ChatContext";
import { useTheme } from "../context/ThemeContext";
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

  return (
    <div className="sticky top-0 z-10 flex h-14 w-full items-center gap-2 p-2 text-text-primary">
      {!isLeftOpen && (
        <>
          <Link to="/home">
            <Button onClick={() => {}}>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Button>
          </Link>
          <Button onClick={() => openSidebar("left")}>
            <SidebarIcon />
          </Button>
          <Button onClick={() => createNewConversation()}>
            <NewChatIcon />
          </Button>
        </>
      )}
      {/* <ResponsiveSelect
        id="model-select"
        label="Model"
        options={MODEL_OPTIONS}
        value={selectedModel}
        onChange={(v) => setSelectedModel(v)}
        leadingIcon={<GoogleIcon />}
      /> */}
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
      <div className="ml-auto font-light text-xs gap-2">v0.0.32</div>
    </div>
  );
}
