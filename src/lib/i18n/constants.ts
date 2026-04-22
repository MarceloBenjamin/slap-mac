import { locales as paraglideLocales } from "@/paraglide/runtime";

export type Locale = (typeof paraglideLocales)[number];

export const LOCALES = paraglideLocales;
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_COOKIE_NAME = "locale";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" && (LOCALES as readonly string[]).includes(value)
  );
}

export function htmlLangFor(locale: Locale): string {
  return locale === "pt-br" ? "pt-BR" : "en";
}

export function normalizeLanguageTag(tag: string): Locale | null {
  const lower = tag.toLowerCase().trim();
  if (lower.startsWith("pt")) return "pt-br";
  if (lower.startsWith("en")) return "en";
  return null;
}
