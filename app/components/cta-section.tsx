"use client";

import { LuxuryButton } from "@/components/luxury/luxury-button";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="relative py-32 bg-white dark:bg-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto rounded-[48px] border border-slate-200 dark:border-white/10 bg-stone-50/80 dark:bg-slate-900/70 shadow-[0_30px_80px_rgba(15,23,42,0.12)] overflow-hidden">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr]">
            <div className="p-10 space-y-6 text-left">
              <p className="uppercase tracking-[0.4em] text-xs text-slate-400">
                concierge
              </p>
              <h2 className="font-(family-name:--font-playfair) text-4xl text-slate-900 dark:text-white leading-tight">
                Ready for your private consultation?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Speak directly with our clinical concierge to design a tailored
                plan that mirrors the personalized service of top-tier spas like
                Ever/Body, LaserAway, and Strauss MD.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <div>
                  <p className="uppercase tracking-[0.3em] text-xs text-slate-400">
                    Availability
                  </p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">
                    7 days
                  </p>
                  <p>In-person + virtual</p>
                </div>
                <div>
                  <p className="uppercase tracking-[0.3em] text-xs text-slate-400">
                    Concierge
                  </p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">
                    1:1 RN team
                  </p>
                  <p>Follow-up within 24h</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <LuxuryButton
                  variant="primary"
                  size="lg"
                  className="bg-slate-900 text-white hover:bg-slate-800"
                >
                  Book Consultation
                </LuxuryButton>
                <LuxuryButton variant="ghost" size="lg">
                  Download Pricing
                </LuxuryButton>
              </div>
            </div>
            <div className="relative h-[360px] lg:h-full">
              <Image
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80"
                alt="Concierge desk"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white text-xs uppercase tracking-[0.4em]">
                Studio Concierge
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

