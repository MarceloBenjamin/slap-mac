"use client";

import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_MAX_AGE,
  LOCALE_COOKIE_NAME,
  isLocale,
  normalizeLanguageTag,
  type Locale,
} from "./constants";

function readCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const prefix = `${name}=`;
  const parts = document.cookie ? document.cookie.split("; ") : [];
  for (const part of parts) {
    if (part.startsWith(prefix)) {
      return decodeURIComponent(part.slice(prefix.length));
    }
  }
  return undefined;
}

export function detectClientLocale(): Locale {
  const fromCookie = readCookie(LOCALE_COOKIE_NAME);
  if (isLocale(fromCookie)) return fromCookie;

  if (typeof navigator !== "undefined") {
    const candidates = [
      navigator.language,
      ...(navigator.languages ?? []),
    ].filter(Boolean) as string[];
    for (const candidate of candidates) {
      const normalized = normalizeLanguageTag(candidate);
      if (normalized) return normalized;
    }
  }

  return DEFAULT_LOCALE;
}

export function persistLocaleCookie(locale: Locale): void {
  if (typeof document === "undefined") return;
  document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`;
}
