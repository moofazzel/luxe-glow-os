"use client";

import { Parallax, ScrollReveal } from "@/components/luxury/page-transition";
import { motion } from "framer-motion";
import Image from "next/image";

interface GalleryItem {
  name: string;
  image: string;
}

export function GallerySection() {
  const gallery: GalleryItem[] = [
    {
      name: "Glow Facial",
      image:
        "https://images.unsplash.com/photo-1585238341986-38b8d30d008d?w=900&q=80",
    },
    {
      name: "Laser Renewal",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80",
    },
    {
      name: "Lymphatic Sculpt",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80",
    },
    {
      name: "Neck Refinement",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80",
    },
  ];

  return (
    <section className="relative py-32 bg-stone-100 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] items-center max-w-6xl mx-auto">
          <ScrollReveal variant="fadeRight" className="space-y-6 text-left">
            <p className="uppercase tracking-[0.4em] text-xs text-slate-400">
              studio
            </p>
            <h2 className="font-(family-name:--font-playfair) text-4xl sm:text-5xl text-slate-900 dark:text-white leading-tight">
              Behind-the-Scenes Rituals
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Modeled after luxury clinics like Ever/Body and Rescue Spa, each
              room is styled for calm, natural light, and cutting-edge devices.
            </p>
            <div className="flex flex-wrap gap-6">
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Studios
                </div>
                <div className="text-3xl font-semibold text-slate-900 dark:text-white">
                  12
                </div>
                <p className="text-xs text-slate-500">Bi-coastal</p>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Protocols
                </div>
                <div className="text-3xl font-semibold text-slate-900 dark:text-white">
                  27
                </div>
                <p className="text-xs text-slate-500">Clinician-designed</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeLeft">
            <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[520px]">
              <Parallax
                offset={20}
                className="col-span-3 row-span-4 relative rounded-[32px] overflow-hidden shadow-lg"
              >
                <Image
                  src={gallery[0].image}
                  alt={gallery[0].name}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 30vw, 80vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white text-sm tracking-[0.2em] uppercase">
                  {gallery[0].name}
                </div>
              </Parallax>

              <Parallax
                offset={10}
                className="col-span-3 row-span-3 relative rounded-[32px] overflow-hidden shadow-lg"
              >
                <Image
                  src={gallery[1].image}
                  alt={gallery[1].name}
                  fill
                  className="object-cover"
                />
              </Parallax>

              <Parallax
                offset={30}
                className="col-span-2 row-span-3 relative rounded-[28px] overflow-hidden shadow-lg"
              >
                <Image
                  src={gallery[2].image}
                  alt={gallery[2].name}
                  fill
                  className="object-cover"
                />
              </Parallax>

              <Parallax
                offset={15}
                className="col-span-2 row-span-3 relative rounded-[28px] overflow-hidden shadow-lg"
              >
                <Image
                  src={gallery[3].image}
                  alt={gallery[3].name}
                  fill
                  className="object-cover"
                />
              </Parallax>

              <motion.div
                className="absolute top-6 right-6 hidden lg:block"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-xs tracking-[0.6em] text-slate-400">
                  PROVEN PROTOCOLS
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

