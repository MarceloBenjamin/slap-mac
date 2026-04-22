"use client";

import {
  THEME_COOKIE_MAX_AGE,
  THEME_COOKIE_NAME,
  isTheme,
  type Theme,
} from "./constants";

export function getCurrentTheme(): Theme {
  const explicit = document.documentElement.getAttribute("data-theme");
  if (isTheme(explicit)) return explicit;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
}

export function persistTheme(theme: Theme): void {
  document.cookie = `${THEME_COOKIE_NAME}=${theme}; Path=/; Max-Age=${THEME_COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function setTheme(theme: Theme): void {
  applyTheme(theme);
  persistTheme(theme);
}

export function toggleTheme(): Theme {
  const next: Theme = getCurrentTheme() === "dark" ? "light" : "dark";
  setTheme(next);
  return next;
}
