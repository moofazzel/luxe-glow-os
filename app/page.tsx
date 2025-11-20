"use client";

import { CursorGlow } from "@/components/luxury/cursor-glow";
import { CTASection } from "./components/cta-section";
import { GallerySection } from "./components/gallery-section";
import { HeroSection } from "./components/hero-section";
import { ResultsSection } from "./components/results-section";
import { ServicesSection } from "./components/services-section";
import { TestimonialsSection } from "./components/testimonials-section";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <div className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <ResultsSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
}
