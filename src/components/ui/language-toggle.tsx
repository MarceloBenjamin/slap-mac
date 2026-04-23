"use client";

import { useLocale } from "@/lib/i18n/provider";

export function LanguageToggle() {
  const { locale, toggleLocale, t } = useLocale();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.switch_language()}
      title={t.switch_language()}
      className="inline-flex cursor-pointer h-10 min-w-10 items-center justify-center rounded-full border px-3 text-sm font-semibold transition-colors hover:opacity-80"
      style={{
        borderColor: "var(--color-border-line)",
        background: "var(--color-surface-bg)",
        color: "var(--color-text-main)",
      }}
    >
      <span aria-hidden>{t.current_language_label()}</span>
      <span className="sr-only">
        {locale === "en" ? "English" : "Português (Brasil)"}
      </span>
    </button>
  );
}
