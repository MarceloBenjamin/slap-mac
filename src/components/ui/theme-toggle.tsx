"use client";

import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n/provider";
import { getCurrentTheme, toggleTheme } from "@/lib/theme/client";
import type { Theme } from "@/lib/theme/constants";

export function ThemeToggle() {
  const t = useT();
  const [theme, setThemeState] = useState<Theme | null>(null);

  useEffect(() => {
    setThemeState(getCurrentTheme());
  }, []);

  function handleClick() {
    const next = toggleTheme();
    setThemeState(next);
  }

  const isDark = theme === "dark";
  const label = isDark ? t.switch_to_light_theme() : t.switch_to_dark_theme();

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:opacity-80"
      style={{
        borderColor: "var(--color-border-line)",
        background: "var(--color-surface-bg)",
        color: "var(--color-text-main)",
      }}
    >
      {theme === null ? (
        <span aria-hidden className="block h-4 w-4" />
      ) : isDark ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
