/** Canonical origin for metadata, Open Graph, and JSON-LD (override via env for previews). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://slapmac.com.br";

export const SITE_ORIGIN = new URL(SITE_URL).origin;

export const DOWNLOAD_DMG_PATH = "/downloads/SlapMac-1.0.0-arm64.dmg";

export function absoluteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
