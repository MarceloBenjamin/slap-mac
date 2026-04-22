"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { m } from "@/paraglide/messages";
import { overwriteGetLocale } from "@/paraglide/runtime";
import { detectClientLocale, persistLocaleCookie } from "./client";
import { htmlLangFor, isLocale, type Locale } from "./constants";

type Messages = typeof m;

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Messages;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const localeRef = useRef<Locale>(initialLocale);
  localeRef.current = locale;

  useEffect(() => {
    overwriteGetLocale(() => localeRef.current);
  }, []);

  useEffect(() => {
    const detected = detectClientLocale();
    if (detected !== locale) setLocaleState(detected);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = htmlLangFor(locale);
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    if (!isLocale(next)) return;
    persistLocaleCookie(next);
    setLocaleState(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(localeRef.current === "en" ? "pt-br" : "en");
  }, [setLocale]);

  const t = useMemo<Messages>(() => {
    return new Proxy(m, {
      get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value !== "function") return value;
        return (inputs?: unknown, opts?: { locale?: Locale }) =>
          (value as (i?: unknown, o?: { locale?: Locale }) => string)(inputs, {
            locale,
            ...opts,
          });
      },
    }) as Messages;
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, toggleLocale, t }),
    [locale, setLocale, toggleLocale, t],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside <LocaleProvider>");
  }
  return ctx;
}

export function useT(): Messages {
  return useLocale().t;
}
