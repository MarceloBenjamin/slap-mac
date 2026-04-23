"use client";

import { Mail } from "lucide-react";
import { useT } from "@/lib/i18n/provider";

const CONTACT_EMAIL = "marcelo.dfx@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/marcelobenjamin/";

export function About() {
  const t = useT();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative flex w-full justify-center py-4 sm:py-24 lg:py-10"
    >
      <div className="flex w-full max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="about-heading"
          className="mt-3 text-lg font-light tracking-tight sm:text-3xl lg:text-lg"
        >
          {t.about_title()}
        </h2>

        <p
          className="mt-3 max-w-xl text-sm sm:text-base"
          style={{ color: "var(--color-text-muted)" }}
        >
          {t.about_subtitle()}
        </p>

        <div className="mt-4! flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
          <ContactLink
            href={`mailto:${CONTACT_EMAIL}`}
            icon={<Mail className="h-4 w-4" strokeWidth={2.25} />}
            label={t.about_email()}
          />
          <ContactLink
            href={LINKEDIN_URL}
            external
            icon={<LinkedInIcon />}
            label={t.about_linkedin()}
          />
        </div>
      </div>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ContactLink({
  href,
  external,
  icon,
  label,
}: {
  href: string;
  external?: boolean;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-md"
      style={{
        borderColor: "var(--color-border-line)",
        backgroundColor: "var(--color-surface-bg)",
        color: "var(--color-text-main)",
      }}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
