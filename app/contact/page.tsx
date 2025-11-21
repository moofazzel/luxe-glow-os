"use client";

import { LuxuryButton } from "@/components/luxury/luxury-button";
import { LuxuryInput } from "@/components/luxury/luxury-input";
import { LuxuryCard } from "@/components/luxury/luxury-card";
import { GradientText } from "@/components/luxury/gradient-text";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-linear-to-b from-white via-stone-50 to-white text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 space-y-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <GradientText as="p" className="text-sm uppercase tracking-[0.25em] text-emerald-500">
            Visit LuxeGlow
          </GradientText>
          <h1 className="font-(family-name:--font-playfair) text-4xl sm:text-5xl font-semibold">
            Concierge scheduling for modern aesthetics
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Message our team for bespoke recommendations, priority booking, or private group appointments. We respond within one business hour.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <LuxuryCard className="bg-white/80 dark:bg-slate-900/70">
            <form onSubmit={handleSubmit} className="space-y-6">
              <LuxuryInput
                label="Full name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
              <LuxuryInput
                label="Email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
              <LuxuryInput
                label="Phone"
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
              <div className="space-y-2">
                <label className="text-sm text-slate-600 dark:text-slate-300">Tell us about your goals</label>
                <textarea
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  rows={4}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  We will reach out with times that align to your provider and service preferences.
                </p>
                <LuxuryButton type="submit">Submit</LuxuryButton>
              </div>
              {submitted && (
                <p className="text-sm text-emerald-600">Message received. Our concierge will reply shortly.</p>
              )}
            </form>
          </LuxuryCard>

          <div className="space-y-4">
            <LuxuryCard className="bg-white/80 dark:bg-slate-900/70">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Studio hours</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Monday – Saturday, 9:00 AM – 7:00 PM</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Sundays by private appointment</p>
            </LuxuryCard>
            <LuxuryCard className="bg-white/80 dark:bg-slate-900/70">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Visit</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                1280 Aurora Lane, Suite 18
                <br />
                West Hollywood, CA 90046
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Complimentary valet + sparkling refreshments.</p>
            </LuxuryCard>
            <LuxuryCard className="bg-white/80 dark:bg-slate-900/70">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Connect</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Text: (424) 555-0198</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Email: concierge@luxeglow.studio</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Instagram: @luxeglow.studio</p>
            </LuxuryCard>
          </div>
        </div>
      </div>
    </div>
  );
}
