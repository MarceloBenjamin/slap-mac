import Image from "next/image";
import Link from "next/link";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-xl backdrop-saturate-150 flex justify-center"
      style={{
        borderColor: "var(--color-border-line)",
        backgroundColor: "color-mix(in srgb, var(--color-bg) 80%, transparent)",
      }}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-md outline-none transition-opacity hover:opacity-80 focus-visible:ring-2"
          style={{ color: "var(--color-text-main)" }}
        >
          <LogoMark />
          <span
            className="text-lg font-semibold tracking-tight sm:text-xl"
            aria-hidden
          >
            Slap Mac
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <span
      className="inline-flex h-8 w-8 items-center justify-center rounded-lg shadow-sm"
      style={{
        background:
          "linear-gradient(135deg, var(--color-primary-base), var(--color-secondary-base))",
      }}
    >
      <Image
        src="/icon/logo.svg"
        alt="Slap Mac — logo with stylized hand mark"
        width={20}
        height={20}
        className="h-5 w-5"
        priority
      />
    </span>
  );
}
