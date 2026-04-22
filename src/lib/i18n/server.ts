import "server-only";
import { cookies, headers } from "next/headers";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  isLocale,
  normalizeLanguageTag,
  type Locale,
} from "./constants";

export async function resolveServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  if (isLocale(cookieValue)) return cookieValue;

  const headerList = await headers();
  const accept = headerList.get("accept-language");
  if (accept) {
    const candidates = accept.split(",").map((part) => part.split(";")[0]);
    for (const candidate of candidates) {
      const normalized = normalizeLanguageTag(candidate);
      if (normalized) return normalized;
    }
  }

  return DEFAULT_LOCALE;
}
