/** Canonical origin for metadata, Open Graph, and JSON-LD (override via env for previews). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://slapmac.com.br";

export const SITE_ORIGIN = new URL(SITE_URL).origin;

/** Public DMG hosted on Firebase Storage (signed download URL). */
export const DOWNLOAD_DMG_URL =
  "https://firebasestorage.googleapis.com/v0/b/slap-mac-94172.firebasestorage.app/o/SlapMac-1.0.0-arm64.dmg?alt=media&token=d80cadd1-0bd6-4817-8fa0-0c89782eb9ff";

export const DOWNLOAD_FILENAME = "SlapMac-1.0.0-arm64.dmg";

export function absoluteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
