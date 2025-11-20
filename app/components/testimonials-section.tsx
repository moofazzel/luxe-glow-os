"use client";

import { ScrollReveal } from "@/components/luxury/page-transition";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "The LuxeGlow team understands restraint. My injectables look effortless and my confidence is back.",
      name: "Sarah Mitchell",
      role: "Creative Director, LA",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    {
      quote:
        "From lymphatic massages to clinical facials, every visit feels curated, not templated. The care is unmatched.",
      name: "Jennifer Adams",
      role: "Entrepreneur, NYC",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    },
    {
      quote:
        "My surgeon referred me here for maintenance. The skin imaging, follow-ups, and RN guidance are next level.",
      name: "Emily Rodriguez",
      role: "Fashion Designer, Miami",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    },
  ];

  return (
    <section className="relative py-32 bg-stone-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[0.7fr,1.3fr] items-center max-w-6xl mx-auto">
          <ScrollReveal variant="fadeRight" className="space-y-4">
            <p className="uppercase tracking-[0.4em] text-xs text-slate-400">
              voices
            </p>
            <h2 className="font-(family-name:--font-playfair) text-4xl sm:text-5xl text-slate-900 dark:text-white leading-tight">
              What our community says
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Real testimonials curated from top-tier clientele that demand
              discreet, consistent outcomes.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                  Rating
                </p>
                <p className="text-3xl font-semibold text-slate-900 dark:text-white">
                  4.9/5
                </p>
                <p className="text-xs text-slate-500">Across 2,400+ reviews</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                  Referrals
                </p>
                <p className="text-3xl font-semibold text-slate-900 dark:text-white">
                  68%
                </p>
                <p className="text-xs text-slate-500">
                  New clients via word-of-mouth
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeLeft">
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.name}
                  className="rounded-[32px] border border-slate-200/70 dark:border-white/10 bg-white dark:bg-slate-900/60 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.12)] flex flex-col gap-4"
                  whileHover={{ y: -6 }}
                >
                  <Quote className="w-6 h-6 text-emerald-400" />
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

