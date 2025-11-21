"use client";

import { LuxuryCard } from "@/components/luxury/luxury-card";
import { GradientText } from "@/components/luxury/gradient-text";
import { LuxuryButton } from "@/components/luxury/luxury-button";
import Image from "next/image";
import { useMemo, useState } from "react";

const galleryItems = [
  {
    title: "Lip Hydration",
    category: "Injectables",
    description: "Featherlight filler for hydration and pillowy softness.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80",
  },
  {
    title: "Cheek Contour",
    category: "Injectables",
    description: "High-point lifting with sculpted definition.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80&sat=-15",
  },
  {
    title: "Skin Clarity",
    category: "Laser & Light",
    description: "IPL brightening to blur redness and spots.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80&hue=-15",
  },
  {
    title: "Poreless Glow",
    category: "Laser & Light",
    description: "Fractional refinement for texture and pores.",
    image:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=900&q=80",
  },
  {
    title: "Lifted Profile",
    category: "Skin Rituals",
    description: "Microcurrent and contour massage for lift.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80&sat=-25",
  },
  {
    title: "Glass Skin",
    category: "Skin Rituals",
    description: "Peptide peel and LED calm for glassy radiance.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80&hue=10",
  },
];

const categories = ["All", ...new Set(galleryItems.map((item) => item.category))];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-linear-to-b from-white via-stone-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 space-y-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <GradientText as="p" className="text-sm uppercase tracking-[0.25em] text-emerald-500">
            Before & After
          </GradientText>
          <h1 className="font-(family-name:--font-playfair) text-4xl sm:text-5xl font-semibold">
            See the LuxeGlow finish in every detail
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Real transformations captured under studio lighting. Explore by category and discover what your ritual could look like.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {categories.map((category) => (
              <LuxuryButton
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "primary" : "ghost"}
                className="rounded-full px-5 text-sm"
              >
                {category}
              </LuxuryButton>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <LuxuryCard key={item.title} className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-5 space-y-2 bg-white/70 dark:bg-slate-900/60">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-500">{item.category}</p>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            </LuxuryCard>
          ))}
        </div>
      </div>
    </div>
  );
}
