import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Header } from "@/components/layout/header";
import { DEFAULT_LOCALE, htmlLangFor } from "@/lib/i18n/constants";
import { LocaleProvider } from "@/lib/i18n/provider";
import { absoluteUrl, DOWNLOAD_DMG_PATH, SITE_URL } from "@/lib/site";
import { FirebaseAnalytics } from "@/components/firebase-analytics";
import { ThemeInitScript } from "@/lib/theme/init-script";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const defaultTitle =
  "Slap Mac — MacBook menu bar app: tap the chassis, hear a sound";

const defaultDescription =
  "Free Slap Mac app for Apple Silicon MacBooks: reads the Sudden Motion Sensor in real time, plays slap and drum sounds from the menu bar. macOS 14.6+ (Sonoma), M1 Pro or newer. No accounts, no ads, ~2 MB download.";

const keywords = [
  "Slap Mac",
  "MacBook",
  "menu bar app",
  "Sudden Motion Sensor",
  "Apple Silicon",
  "macOS",
  "free Mac app",
  "accelerometer",
  "sound effects",
  "app MacBook",
  "sensor de movimento",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | Slap Mac",
  },
  description: defaultDescription,
  applicationName: "Slap Mac",
  authors: [{ name: "Marcelo Benjamin", url: "https://www.linkedin.com/in/marcelobenjamin/" }],
  keywords,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    url: "/",
    siteName: "Slap Mac",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/icon/logo.svg",
        width: 500,
        height: 500,
        alt: "Slap Mac logo — stylized hand mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/icon/logo.svg"],
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Slap Mac",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "macOS 14.6 or newer",
  description: defaultDescription,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  downloadUrl: absoluteUrl(DOWNLOAD_DMG_PATH),
  url: SITE_URL.replace(/\/$/, ""),
  author: {
    "@type": "Person",
    name: "Marcelo Benjamin",
    sameAs: "https://www.linkedin.com/in/marcelobenjamin/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Static export: no cookies()/headers(). Locale/theme come from client
  // (LocaleProvider, ThemeInitScript, theme-toggle) after hydration.
  const locale = DEFAULT_LOCALE;

  return (
    <html
      lang={htmlLangFor(locale)}
      className={urbanist.variable}
      suppressHydrationWarning
    >
      <head>
        <ThemeInitScript />
      </head>
      
      <body className={urbanist.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareJsonLd),
          }}
        />
        <LocaleProvider initialLocale={locale}>
          <FirebaseAnalytics />
          <Header />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
