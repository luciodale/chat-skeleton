import { useCallback, useEffect, useMemo, useState } from "react";

export type Theme = "light" | "dark" | "system";

const THEME_STORAGE_KEY = "theme";

function getSystemPrefersDark(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function")
    return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyThemeClass(effectiveTheme: "light" | "dark") {
  const root = document.documentElement;
  if (effectiveTheme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

function readStoredTheme(): Theme | null {
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY);
    return v === "dark" || v === "light" || v === "system" ? v : null;
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
    return stored ?? "system";
  });

  const [systemPrefersDark, setSystemPrefersDark] = useState<boolean>(() =>
    getSystemPrefersDark()
  );

  // Listen to system changes when in system mode
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    )
      return;
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    function handleChange(e: MediaQueryListEvent) {
      setSystemPrefersDark(e.matches);
    }
    mediaQueryList.addEventListener("change", handleChange);
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, []);

  // Apply class whenever the effective theme changes
  useEffect(() => {
    const effective: "light" | "dark" =
      theme === "system" ? (systemPrefersDark ? "dark" : "light") : theme;
    applyThemeClass(effective);
  }, [theme, systemPrefersDark]);

  const setTheme = useCallback((next: Theme) => {
    writeStoredTheme(next);
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      if (prev === "system") {
        const next = systemPrefersDark ? "light" : "dark";
        writeStoredTheme(next);
        return next;
      }
      const next: Theme = prev === "dark" ? "light" : "dark";
      writeStoredTheme(next);
      return next;
    });
  }, [systemPrefersDark]);

  const resolvedTheme = useMemo<"light" | "dark">(
    () => (theme === "system" ? (systemPrefersDark ? "dark" : "light") : theme),
    [theme, systemPrefersDark]
  );

  return useMemo(
    () => ({ theme, setTheme, toggleTheme, resolvedTheme }),
    [theme, setTheme, toggleTheme, resolvedTheme]
  );
}

export function initThemeBeforeReact() {
  const stored = readStoredTheme();
  const startEffective: "light" | "dark" = (() => {
    if (stored === "system" || stored === null) {
      return getSystemPrefersDark() ? "dark" : "light";
    }
    return stored;
  })();
  applyThemeClass(startEffective);
}
