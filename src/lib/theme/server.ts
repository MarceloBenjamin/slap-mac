import "server-only";
import { cookies } from "next/headers";
import { THEME_COOKIE_NAME, isTheme, type Theme } from "./constants";

export async function getThemeFromCookie(): Promise<Theme | null> {
  const store = await cookies();
  const value = store.get(THEME_COOKIE_NAME)?.value;
  return isTheme(value) ? value : null;
}
