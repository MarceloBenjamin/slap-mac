"use client";

import {
  PanelTop,
  SlidersHorizontal,
  Volume2,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useT } from "@/lib/i18n/provider";

export function Features() {
  const t = useT();

  const items: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }> = [
    {
      icon: Zap,
      title: t.feat_detection_title(),
      description: t.feat_detection_desc(),
    },
    {
      icon: Volume2,
      title: t.feat_audio_title(),
      description: t.feat_audio_desc(),
    },
    {
      icon: SlidersHorizontal,
      title: t.feat_sensitivity_title(),
      description: t.feat_sensitivity_desc(),
    },
    {
      icon: PanelTop,
      title: t.feat_menubar_title(),
      description: t.feat_menubar_desc(),
    },
  ];

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative w-full py-2 sm:py-28 lg:py-2 flex justify-center"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm"
            style={{ color: "var(--color-primary-base)" }}
          >
            {t.features_eyebrow()}
          </p>

          <h2
            id="features-heading"
            className="mt-3! text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            {t.features_title()}
          </h2>

          <p
            className="mt-4! text-base sm:text-lg"
            style={{ color: "var(--color-text-muted)" }}
          >
            {t.features_subtitle()}
          </p>
        </div>

        <div className="mt-12! grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {items.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 sm:p-8"
      style={{
        borderColor: "var(--color-border-line)",
        backgroundColor: "var(--color-surface-bg)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 0% 0%, color-mix(in srgb, var(--color-primary-base) 10%, transparent), transparent 70%)",
        }}
      />

      <div
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary-base), var(--color-secondary-base))",
          boxShadow:
            "0 8px 20px -8px color-mix(in srgb, var(--color-primary-base) 60%, transparent)",
        }}
      >
        <Icon className="h-5 w-5 text-white" strokeWidth={2.25} />
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight sm:text-xl">
        {title}
      </h3>
      <p
        className="mt-2 text-sm leading-relaxed sm:text-base"
        style={{ color: "var(--color-text-muted)" }}
      >
        {description}
      </p>
    </article>
  );
}
