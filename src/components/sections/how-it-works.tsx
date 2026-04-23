"use client";

import { Download, Hand, ShieldCheck, Unlock, type LucideIcon } from "lucide-react";
import { useT } from "@/lib/i18n/provider";

export function HowItWorks() {
  const t = useT();

  const steps: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }> = [
    {
      icon: Download,
      title: t.how_step1_title(),
      description: t.how_step1_desc(),
    },
    {
      icon: Unlock,
      title: t.how_step2_title(),
      description: t.how_step2_desc(),
    },
    {
      icon: ShieldCheck,
      title: t.how_step3_title(),
      description: t.how_step3_desc(),
    },
    {
      icon: Hand,
      title: t.how_step4_title(),
      description: t.how_step4_desc(),
    },
  ];

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="relative flex w-full justify-center py-16 sm:py-24 lg:py-28"
    >
      <div className="flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm"
            style={{ color: "var(--color-primary-base)" }}
          >
            {t.how_eyebrow()}
          </p>
          <h2
            id="how-heading"
            className="mt-3! text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            {t.how_title()}
          </h2>
          <p
            className="mt-4 text-base sm:text-lg"
            style={{ color: "var(--color-text-muted)" }}
          >
            {t.how_subtitle()}
          </p>
        </div>

        <ol className="relative mt-12! grid w-full grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          <Connector />
          {steps.map((step, i) => (
            <Step
              key={step.title}
              number={i + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function Connector() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden border-t-2 border-dashed lg:block"
      style={{ borderColor: "var(--color-border-line)" }}
    />
  );
}

function Step({
  number,
  icon: Icon,
  title,
  description,
}: {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <li className="relative flex flex-col items-center text-center">
      <div className="relative">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary-base), var(--color-secondary-base))",
            boxShadow:
              "0 8px 20px -8px color-mix(in srgb, var(--color-primary-base) 60%, transparent)",
          }}
        >
          <Icon className="h-6 w-6 text-white" strokeWidth={2.25} />
        </div>
        <span
          className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold"
          style={{
            backgroundColor: "var(--color-surface-bg)",
            borderColor: "var(--color-border-line)",
            color: "var(--color-text-main)",
          }}
        >
          {number}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight sm:text-xl">
        {title}
      </h3>
      <p
        className="mt-2 max-w-xs text-sm leading-relaxed sm:text-base"
        style={{ color: "var(--color-text-muted)" }}
      >
        {description}
      </p>
    </li>
  );
}
