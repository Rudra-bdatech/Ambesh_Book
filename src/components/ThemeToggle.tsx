import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/use-theme";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-rule text-ink-soft transition-colors hover:border-ink/40 hover:text-ink dark:border-white/15 dark:text-[#bbe0fa] dark:hover:border-[#3282b7] dark:hover:text-[#3282b7] ${className}`}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
