import { LuxuryCard } from "@/components/luxury/luxury-card";
import { GradientText } from "@/components/luxury/gradient-text";
import Image from "next/image";

const values = [
  {
    title: "Clinical excellence",
    description: "Our injectors and estheticians are credentialed medical experts obsessed with precision and safety.",
  },
  {
    title: "Modern calm",
    description: "Serene palettes, spa acoustics, and warm hospitality keep every visit unrushed and restorative.",
  },
  {
    title: "Data-led care",
    description: "Treatment maps, photo-tracking, and transparent outcomes inform each plan—never guesswork.",
  },
];

const team = [
  {
    name: "Dr. Elise Warren",
    role: "Medical Director, MD, FAAD",
    focus: "Facial harmonization, regenerative aesthetics",
    image: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?w=600&q=80",
  },
  {
    name: "Jordan Lee, NP",
    role: "Lead Injector & Trainer",
    focus: "Neuromodulators, threads, and advanced contouring",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
  {
    name: "Mila Ortiz, LE",
    role: "Aesthetician",
    focus: "Laser resurfacing, corrective peels, and skin coaching",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=80",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-linear-to-b from-stone-50 via-white to-stone-100 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] items-center">
          <div className="space-y-4">
            <GradientText as="p" className="text-sm uppercase tracking-[0.25em] text-emerald-500">
              About LuxeGlow
            </GradientText>
            <h1 className="font-(family-name:--font-playfair) text-4xl sm:text-5xl font-semibold">
              Where medical precision meets sensorial calm
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              LuxeGlow is crafted for modern clients who want artistry without compromise. Every ritual blends evidence-based
              protocols with spa-level comfort, so you leave feeling both restored and radiant.
            </p>
          </div>
          <LuxuryCard className="overflow-hidden h-full">
            <div className="relative h-[320px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=80"
                alt="Luxury med spa"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
            <div className="p-6 space-y-3 bg-white/75 dark:bg-slate-900/70">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-500">The Experience</p>
              <p className="text-slate-700 dark:text-slate-200">
                Ambient lighting, aromatherapy, and curated playlists accompany warm hand treatments and heated beds. Guests are
                greeted with seasonal teas and leave with tailored post-care.
              </p>
            </div>
          </LuxuryCard>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <LuxuryCard key={value.title} className="h-full bg-white/80 dark:bg-slate-900/70">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-500">Our Promise</p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{value.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{value.description}</p>
            </LuxuryCard>
          ))}
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-500">Meet the team</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Clinicians who champion natural results</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <LuxuryCard key={member.name} className="overflow-hidden h-full">
                <div className="relative h-60 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5 space-y-2 bg-white/80 dark:bg-slate-900/70">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="text-sm text-emerald-600">{member.role}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{member.focus}</p>
                </div>
              </LuxuryCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
