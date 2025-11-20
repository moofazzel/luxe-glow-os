"use client";

import { ScrollReveal } from "@/components/luxury/page-transition";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Milestone {
  label: string;
  value: string;
}

export function ResultsSection() {
  const [sliderPosition, setSliderPosition] = useState(55);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  useEffect(() => {
    if (!isDragging) return;
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, [isDragging]);

  const milestones: Milestone[] = [
    { label: "Clients see visible change", value: "95%" },
    { label: "Average time to glow", value: "21 days" },
    { label: "Treatments perfected", value: "10K+" },
  ];

  return (
    <section className="relative py-32 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[0.85fr,1.15fr] items-center max-w-6xl mx-auto">
          <ScrollReveal variant="fadeRight" className="space-y-8">
            <div className="space-y-4">
              <p className="uppercase tracking-[0.4em] text-xs text-slate-400">
                results
              </p>
              <h2 className="font-(family-name:--font-playfair) text-4xl sm:text-5xl text-slate-900 dark:text-white leading-tight">
                Real stories. Documented change.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Inspired by data-forward clinics like Ever/Body and LaserAway,
                we document every protocol with medical photography and measure
                improvements at each visit.
              </p>
            </div>
            <ul className="space-y-4 text-slate-600 dark:text-slate-300">
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1 text-lg">•</span> Custom
                3-step plan (prep · treatment · recovery)
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1 text-lg">•</span> Digital
                before/after studio with calibrated lighting
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1 text-lg">•</span> RN follow
                up within 72 hours post-treatment
              </li>
            </ul>

            <div className="grid sm:grid-cols-3 gap-4">
              {milestones.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-slate-200 dark:border-white/10 px-5 py-6 text-center"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {metric.label}
                  </p>
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeLeft">
            <div className="rounded-[36px] bg-stone-50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-white/10 p-6 shadow-[0_30px_60px_rgba(15,23,42,0.2)]">
              <p className="uppercase tracking-[0.4em] text-xs text-slate-400 text-center mb-4">
                360° before / after
              </p>
              <div
                ref={containerRef}
                className="relative h-[420px] rounded-[28px] overflow-hidden cursor-ew-resize select-none"
                onMouseMove={handleMouseMove}
                onMouseDown={() => setIsDragging(true)}
              >
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=900&q=80"
                    alt="Before treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 text-xs tracking-[0.2em] uppercase">
                    Before
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900&q=80"
                    alt="After treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-400/80 text-xs tracking-[0.2em] uppercase text-white">
                    After
                  </div>
                </motion.div>
                <div
                  className="absolute top-0 bottom-0 w-px bg-white/80"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 text-white flex items-center justify-center text-xs tracking-[0.2em]">
                    drag
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4">
                Case study: RF Microneedling + Injectables · 6 weeks
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

