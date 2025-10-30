import { useCallback, useEffect, useMemo, useState } from "react";

export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";

function getSystemPrefersDark(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function")
    return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyThemeClass(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

function readStoredTheme(): Theme | null {
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY);
    return v === "dark" || v === "light" ? v : null;
  } catch {
    return null;
  }
}

function writeStoredTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // ignore
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = readStoredTheme();
    return stored ?? (getSystemPrefersDark() ? "dark" : "light");
  });

  // Apply class on mount and whenever theme changes
  useEffect(() => {
    applyThemeClass(theme);
  }, [theme]);

  // Track system changes only when user has not chosen explicitly
  useEffect(() => {
    if (readStoredTheme() !== null) return;
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    const listener = (e: MediaQueryListEvent) => {
      setThemeState(e.matches ? "dark" : "light");
    };
    mediaQueryList.addEventListener("change", listener);

    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, []);

  const setTheme = useCallback((next: Theme) => {
    writeStoredTheme(next);
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      writeStoredTheme(next);
      return next;
    });
  }, []);

  return useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );
}

export function initThemeBeforeReact() {
  const stored = readStoredTheme();
  const start: Theme = stored ?? (getSystemPrefersDark() ? "dark" : "light");
  applyThemeClass(start);
}
