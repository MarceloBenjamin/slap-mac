"use client";

import { useT } from "@/lib/i18n/provider";

const DOWNLOAD_FILE = "/downloads/SlapMac-1.0.0-arm64.dmg";
const DOWNLOAD_FILENAME = "SlapMac-1.0.0-arm64.dmg";

export function Hero() {
  const t = useT();

  return (
    <section className="relative isolate overflow-hidden flex justify-center">
      <BackgroundGlow />

      <div className="flex w-full max-w-7xl flex-col items-center px-4 pt-10 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-16 lg:pt-12">
        <CompatBanner label={t.hero_compat()} />

        <h1 className="mt-6 text-center text-5xl font-bold leading-[1.1] tracking-tight sm:mt-8 sm:text-6xl lg:text-7xl xl:text-8xl">
          <span className="block">{t.hero_headline_line1()}</span>
          <span
            className="block bg-clip-text pb-2 text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--color-primary-base), var(--color-secondary-base))",
            }}
          >
            {t.hero_headline_line2()}
          </span>
        </h1>

        <p
          className="mt-6 max-w-2xl text-center text-base sm:mt-8 sm:text-lg lg:text-xl"
          style={{ color: "var(--color-text-muted)" }}
        >
          {t.hero_subheadline()}
        </p>

        <div className="mt-8! flex flex-col items-center gap-3 sm:mt-10">
          <DownloadButton label={t.hero_download()} />
          <p
            className="text-xs sm:text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            {t.hero_download_meta()}
          </p>
        </div>
      </div>
    </section>
  );
}

function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] opacity-60"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--color-primary-base) 18%, transparent), transparent 70%)",
      }}
    />
  );
}

function CompatBanner({ label }: { label: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium backdrop-blur-sm sm:text-sm"
      style={{
        borderColor: "var(--color-border-line)",
        backgroundColor:
          "color-mix(in srgb, var(--color-surface-bg) 70%, transparent)",
        color: "var(--color-text-muted)",
      }}
    >
      <AppleIcon />
      <span>{label}</span>
    </div>
  );
}

function DownloadButton({ label }: { label: string }) {
  return (
    <a
      href={DOWNLOAD_FILE}
      download={DOWNLOAD_FILENAME}
      className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.99] sm:px-8 sm:py-4 sm:text-lg"
      style={{
        background:
          "linear-gradient(135deg, var(--color-primary-base), var(--color-secondary-base))",
        boxShadow:
          "0 10px 30px -10px color-mix(in srgb, var(--color-primary-base) 60%, transparent)",
      }}
    >
      <DownloadIcon />
      <span>{label}</span>
    </a>
  );
}

function AppleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5"
      aria-hidden
    >
      <path d="M17.05 12.04c-.03-2.79 2.28-4.13 2.39-4.2-1.31-1.91-3.34-2.17-4.06-2.2-1.73-.18-3.37 1.02-4.25 1.02-.88 0-2.23-1-3.67-.97-1.89.03-3.63 1.1-4.6 2.79-1.96 3.4-.5 8.43 1.41 11.19.93 1.35 2.04 2.86 3.49 2.81 1.4-.06 1.93-.91 3.62-.91 1.7 0 2.17.91 3.66.88 1.51-.03 2.47-1.37 3.39-2.73 1.07-1.57 1.51-3.09 1.54-3.17-.03-.01-2.95-1.13-2.98-4.51zM14.27 4.07c.77-.94 1.29-2.24 1.15-3.54-1.11.05-2.45.74-3.25 1.67-.71.83-1.34 2.16-1.17 3.43 1.24.1 2.5-.63 3.27-1.56z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 transition-transform group-hover:translate-y-0.5"
      aria-hidden
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
