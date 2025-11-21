"use client";

import { LuxuryButton } from "@/components/luxury/luxury-button";
import { LuxuryCard } from "@/components/luxury/luxury-card";
import { GradientText } from "@/components/luxury/gradient-text";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Sparkles, Wand2 } from "lucide-react";
import { useMemo, useState } from "react";

const serviceCategories = [
  {
    name: "Injectables",
    tagline: "Subtle, sculpted enhancements",
    services: [
      {
        name: "Signature Neuromodulator",
        description: "Precision smoothing for expression lines with a featherlight finish.",
        duration: "35 min",
        price: "$325",
        highlights: ["Zero-downtime comfort", "Mapped to your facial balance"],
      },
      {
        name: "Contour Dermal Filler",
        description: "Hyaluronic artistry for cheeks, chin, and lips with pillowy softness.",
        duration: "45 min",
        price: "$720",
        highlights: ["Luxe numbing ritual", "Photogenic, natural finish"],
      },
      {
        name: "Glow Skin Booster",
        description: "Micro-fine hydrators and peptides for glassy luminosity in days.",
        duration: "40 min",
        price: "$380",
        highlights: ["Dewy radiance", "Perfect pre-event ritual"],
      },
    ],
  },
  {
    name: "Laser & Light",
    tagline: "Ultra-targeted clarity and collagen",
    services: [
      {
        name: "Diamond IPL Clarify",
        description: "Target sun spots, diffuse redness, and refine tone with minimal downtime.",
        duration: "50 min",
        price: "$450",
        highlights: ["Calming post-care mask", "Complexion evenness"],
      },
      {
        name: "Silk Fractional",
        description: "Collagen-safe resurfacing for texture, pores, and soft lines.",
        duration: "60 min",
        price: "$690",
        highlights: ["Numbing + LED recovery", "Texture refinement"],
      },
      {
        name: "Luxe LED Reset",
        description: "Multi-spectrum LED to calm, brighten, and boost recovery after treatments.",
        duration: "25 min",
        price: "$120",
        highlights: ["Zero downtime", "Pairs with any ritual"],
      },
    ],
  },
  {
    name: "Skin Rituals",
    tagline: "Couture facials with clinical-grade actives",
    services: [
      {
        name: "Caviar Enzyme Facial",
        description: "Enzyme polish, lymphatic lift, and oxygen infusion for red-carpet glow.",
        duration: "55 min",
        price: "$260",
        highlights: ["Neck & décolleté", "LED calm finish"],
      },
      {
        name: "Glass Skin Peel",
        description: "Ultra-gentle peel layered with peptides, niacinamide, and barrier support.",
        duration: "45 min",
        price: "$210",
        highlights: ["No-flake finish", "Brighter within 72 hours"],
      },
      {
        name: "Cryo Sculpt Lift",
        description: "Toning cryo globes, gua sha, and microcurrent for lifted definition.",
        duration: "50 min",
        price: "$240",
        highlights: ["Instant snatched effect", "Event-perfect"],
      },
    ],
  },
];

const perks = [
  {
    title: "Medical-grade team",
    description: "Board-certified providers who map every visit to your facial anatomy and goals.",
    icon: CheckCircle,
  },
  {
    title: "Immersive rituals",
    description: "Aromatherapy, warm towels, and soothing playlists wrap every protocol.",
    icon: Sparkles,
  },
  {
    title: "Time-precise",
    description: "Sessions start on time with concierge text updates and sleek digital intake.",
    icon: Clock,
  },
  {
    title: "Post-care concierge",
    description: "Personalized aftercare with AI-backed reminders and on-call messaging.",
    icon: Wand2,
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const visibleServices = useMemo(() => {
    if (activeCategory === "All") return serviceCategories;
    return serviceCategories.filter((category) => category.name === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-linear-to-b from-stone-50 via-white to-stone-100 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 space-y-14">
        <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
          <GradientText as="p" className="text-sm uppercase tracking-[0.25em] text-emerald-500">
            LuxeGlow Signatures
          </GradientText>
          <h1 className="font-(family-name:--font-playfair) text-4xl sm:text-5xl font-semibold">
            Sculpted enhancements, curated for luminous skin
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Choose a ritual and we will tailor the protocol, numbing, and post-care to your skin, lifestyle, and upcoming events.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["All", ...serviceCategories.map((category) => category.name)].map((category) => (
              <LuxuryButton
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "primary" : "ghost"}
                className={cn(
                  "rounded-full px-5 text-sm",
                  activeCategory === category ? "shadow-luxury-md" : "border border-slate-200 dark:border-slate-800"
                )}
              >
                {category}
              </LuxuryButton>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {visibleServices.map((category) => (
            <section key={category.name} className="space-y-6">
              <div className="flex flex-col gap-2 text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
                  {category.name}
                </h2>
                <p className="text-slate-600 dark:text-slate-300">{category.tagline}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {category.services.map((service, idx) => (
                  <LuxuryCard
                    key={service.name}
                    withFloat
                    className="group h-full bg-white/70 dark:bg-slate-900/60 backdrop-blur border border-white/60 dark:border-white/10"
                  >
                    <div className="flex flex-col h-full space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-semibold">{service.name}</div>
                        <span className="rounded-full bg-emerald-500/10 text-emerald-600 px-3 py-1 text-xs font-medium">
                          {service.duration}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.highlights.map((highlight) => (
                          <motion.span
                            key={highlight}
                            className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs text-slate-700 dark:text-slate-200"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.04 }}
                          >
                            <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <span className="text-lg font-semibold text-emerald-600">{service.price}</span>
                        <LuxuryButton size="sm">Book this ritual</LuxuryButton>
                      </div>
                    </div>
                  </LuxuryCard>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {perks.map((perk) => (
            <LuxuryCard
              key={perk.title}
              variant="glassStrong"
              withGlow
              className="flex items-start gap-4 bg-white/80 dark:bg-slate-900/70"
            >
              <div className="rounded-2xl bg-emerald-500/15 text-emerald-600 p-3">
                <perk.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{perk.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{perk.description}</p>
              </div>
            </LuxuryCard>
          ))}
        </div>
      </div>
    </div>
  );
}
