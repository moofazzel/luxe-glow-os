"use client";

import { LuxuryButton } from "@/components/luxury/luxury-button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-stone-50 to-stone-100 dark:from-slate-950 dark:to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(120deg,rgba(255,255,255,0.65),rgba(245,237,230,0.7))]" />

      {/* Palm leaves behind hero panel */}
      <motion.div
        className="absolute left-0 top-24 z-1"
        style={{ y: scrollY * 0.08 }}
        initial={{ opacity: 0, x: -80, rotate: -8 }}
        animate={{ opacity: 0.5, x: 0, rotate: 0 }}
        transition={{ duration: 0.9 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600411832986-5a5d7e0f8c99?w=900&q=80"
          alt="Palm leaf"
          width={520}
          height={720}
          className="object-contain mix-blend-multiply"
        />
      </motion.div>

      <motion.div
        className="absolute right-0 bottom-10 z-1"
        style={{ y: scrollY * 0.06 }}
        initial={{ opacity: 0, x: 80, rotate: 8 }}
        animate={{ opacity: 0.5, x: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600411832986-5a5d7e0f8c99?w=900&q=80"
          alt="Palm leaf"
          width={480}
          height={680}
          className="object-contain mix-blend-multiply scale-x-[-1]"
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="flex flex-col items-center gap-10 text-center">
          <motion.div
            className="relative w-full max-w-5xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative bg-stone-50/90 dark:bg-slate-900/70 rounded-[48px] px-6 sm:px-10 py-10 shadow-[0_30px_80px_rgba(15,23,42,0.15)] border border-white/60 dark:border-white/10 overflow-hidden">
              {/* corner promo card */}
              <motion.div
                className="absolute top-6 right-6 hidden md:block"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-56 rounded-3xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-white/10 shadow-xl p-4 space-y-3">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                    Special for new clients
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=400&q=80"
                        alt="Treatment preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">All fillers</p>
                      <p className="text-xl font-semibold text-slate-900 dark:text-white">
                        20% OFF
                      </p>
                    </div>
                  </div>
                  <button className="w-full rounded-2xl border border-slate-300/70 text-[11px] uppercase tracking-[0.2em] py-2 text-slate-600 hover:bg-slate-900 hover:text-white transition">
                    Claim
                  </button>
                </div>
              </motion.div>

              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] items-center">
                <div className="text-left space-y-6">
                  <p className="font-(family-name:--font-playfair) text-4xl sm:text-5xl text-slate-700 dark:text-slate-100 leading-tight">
                    <span className="font-light">Captivate and </span>
                    <span className="text-slate-900 dark:text-white">
                      Rejuvenate
                    </span>
                    <span className="font-light"> with LuxeGlow.</span>
                  </p>
                  <p className="font-(family-name:--font-playfair) text-lg sm:text-xl text-slate-500 dark:text-slate-300 italic">
                    We believe that true beauty and wellness come from a
                    harmonious balance of mind, body, and spirit.
                  </p>
                </div>

                <div className="relative">
                  <div className="relative mx-auto w-full h-[420px] sm:h-[460px]">
                    <Image
                      src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=80"
                      alt="Luxury spa portrait"
                      fill
                      className="object-cover object-top rounded-[40px]"
                      priority
                    />
                  </div>
                  <motion.span
                    className="absolute -right-6 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.5em] text-slate-400 dark:text-slate-500 font-semibold hidden sm:block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    style={{ writingMode: "vertical-rl" }}
                  >
                    REJUVENATE
                  </motion.span>
                </div>
              </div>

              {/* leaf overlays inside panel */}
              <motion.div
                className="absolute -left-10 lg:-left-16 top-1/3 hidden sm:block pointer-events-none"
                style={{ y: scrollY * 0.04 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600411832986-5a5d7e0f8c99?w=600&q=80"
                  alt="Leaf accent"
                  width={220}
                  height={400}
                  className="object-contain opacity-70"
                />
              </motion.div>
              <motion.div
                className="absolute -right-8 lg:-right-14 bottom-16 hidden sm:block pointer-events-none"
                style={{ y: scrollY * 0.03 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600411832986-5a5d7e0f8c99?w=600&q=80"
                  alt="Leaf accent"
                  width={200}
                  height={340}
                  className="object-contain opacity-70 scale-x-[-1]"
                />
              </motion.div>

              <div className="mt-10 pt-6 border-t border-slate-200/60 dark:border-white/10 text-center">
                <p className="font-(family-name:--font-playfair) text-xl text-slate-500 dark:text-slate-200 italic">
                  Discover a new and revamped you.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <LuxuryButton
              variant="primary"
              size="lg"
              className="px-12 py-4 font-medium bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-white/90"
            >
              Book Now
            </LuxuryButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
