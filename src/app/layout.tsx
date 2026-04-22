import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Header } from "@/components/layout/header";
import { htmlLangFor } from "@/lib/i18n/constants";
import { LocaleProvider } from "@/lib/i18n/provider";
import { resolveServerLocale } from "@/lib/i18n/server";
import { ThemeInitScript } from "@/lib/theme/init-script";
import { getThemeFromCookie } from "@/lib/theme/server";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Slap Mac",
  description: "Slap Mac website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, locale] = await Promise.all([
    getThemeFromCookie(),
    resolveServerLocale(),
  ]);

  return (
    <html
      lang={htmlLangFor(locale)}
      className={urbanist.variable}
      data-theme={theme ?? undefined}
      suppressHydrationWarning
    >
      <head>
        <ThemeInitScript />
      </head>
      
      <body className={urbanist.className}>
        <LocaleProvider initialLocale={locale}>
          <Header />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
