/** Canonical origin for metadata, Open Graph, and JSON-LD (override via env for previews). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://slapmac.com.br";

export const SITE_ORIGIN = new URL(SITE_URL).origin;

/** Object path in Firebase Storage (default bucket) and suggested download filename. */
export const DOWNLOAD_STORAGE_OBJECT_PATH = "SlapMac-1.0.0-arm64.dmg";

export const DOWNLOAD_FILENAME = DOWNLOAD_STORAGE_OBJECT_PATH;

export function absoluteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
