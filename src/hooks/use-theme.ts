import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "ambesh-theme";

function isDarkClassSet(): boolean {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

function readStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* ignore */
  }
  return "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => (isDarkClassSet() ? "dark" : readStoredTheme()));

  useEffect(() => {
    const root = document.documentElement;
    // Disable CSS transitions while the theme class flips so switching is instant
    root.classList.add("theme-switching");
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        root.classList.remove("theme-switching");
      });
    });
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);

  return { theme, setTheme, toggle };
}
