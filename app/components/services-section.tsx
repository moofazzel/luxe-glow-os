"use client";

import { LuxuryButton } from "@/components/luxury/luxury-button";
import { ScrollReveal } from "@/components/luxury/page-transition";
import Image from "next/image";

interface Service {
  title: string;
  subtitle: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
  image: string;
}

export function ServicesSection() {
  const services: Service[] = [
    {
      title: "Injectables",
      subtitle: "Botox · Dysport · Sculptra",
      description:
        "Personalized neuromodulator treatments that preserve your natural expression while softening fine lines.",
      stats: [
        { label: "Downtime", value: "< 30 mins" },
        { label: "Benefit", value: "Immediate" },
      ],
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b7?w=900&q=80",
    },
    {
      title: "Dermal Fillers",
      subtitle: "Cheeks · Lips · Jawline",
      description:
        "Artistically restore volume with premium HA fillers and collagen stimulators for sculpted balance.",
      stats: [
        { label: "Longevity", value: "12-18 mos" },
        { label: "Formulated", value: "FDA approved" },
      ],
      image:
        "https://images.unsplash.com/photo-1616394585036-9a66fdeb9b8d?w=900&q=80",
    },
    {
      title: "Energy Facials",
      subtitle: "Laser · RF Microneedling",
      description:
        "Technology-forward resurfacing that tightens, brightens, and refines texture with minimal downtime.",
      stats: [
        { label: "Sessions", value: "3-4 series" },
        { label: "Recovery", value: "24 hrs" },
      ],
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=80",
    },
  ];

  return (
    <section className="relative py-32 bg-stone-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4 mb-16">
          <p className="uppercase tracking-[0.4em] text-xs text-slate-400">
            treatments
          </p>
          <h2 className="font-(family-name:--font-playfair) text-4xl sm:text-5xl text-slate-900 dark:text-white">
            Signature Programs
          </h2>
          <p className="text-slate-500 dark:text-slate-300">
            Inspired by top med-spa brands (Ever/Body, SkinSpirit, Remedy Place)
            we group services into curated journeys with clear benefits.
          </p>
        </div>

        <div className="grid gap-10 lg:gap-16">
          {services.map((service, idx) => (
            <ScrollReveal
              key={service.title}
              variant={idx % 2 === 0 ? "fadeRight" : "fadeLeft"}
            >
              <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
                <div className="space-y-6 text-left">
                  <p className="uppercase tracking-[0.3em] text-xs text-slate-400">
                    {service.subtitle}
                  </p>
                  <h3 className="font-(family-name:--font-playfair) text-3xl sm:text-4xl text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-6">
                    {service.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="min-w-[140px] border border-slate-200/80 dark:border-white/10 rounded-2xl px-5 py-4"
                      >
                        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                          {stat.label}
                        </div>
                        <div className="text-xl font-semibold text-slate-900 dark:text-white">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <LuxuryButton
                      variant="ghost"
                      size="lg"
                      className="border-slate-300 text-slate-900 dark:text-white"
                    >
                      Explore Plan
                    </LuxuryButton>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-br from-emerald-100/50 to-amber-50/50 dark:from-slate-800/50 dark:to-emerald-900/20 rounded-[40px]" />
                  <div className="relative rounded-[36px] overflow-hidden h-[360px] shadow-[0_25px_50px_rgba(15,23,42,0.15)]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 45vw, 90vw"
                      priority={idx === 0}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
