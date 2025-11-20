# LuxeGlow OS - Project Context

## Tech Stack
- **Framework:** Next.js 16, React 19.2
- **Styling:** Tailwind v4
- **UI Libraries:** Shadcn/ui, Aceternity UI, React Bits
- **Language:** TypeScript (strict - no `any` types)

## Key Principles
1. **Server Components First** - Only use `"use client"` when necessary
2. **Animation Mandatory** - Every interactive element needs animations
3. **Single Responsibility** - One component = one job
4. **Type Safety** - Explicit TypeScript types always

## Component Organization
```
components/
├── ui/              # Shadcn primitives (forms, buttons, etc.)
├── aceternity/      # Marketing/hero components (Aurora, 3D cards)
├── react-bits/      # Micro-interactions (animated buttons, inputs)
├── motion/          # Reusable motion wrappers (fade-in, scale-on-hover)
├── layout/          # Navbar, footer, sidebar
├── luxury/          # Luxury-specific effects (cursor-glow, luxury-button, etc.)
└── shared/          # Reusable business components

app/
├── page.tsx         # Landing page
├── components/      # Landing page components (co-located with page.tsx)
│   ├── hero-section.tsx
│   ├── services-section.tsx
│   ├── gallery-section.tsx
│   ├── results-section.tsx
│   ├── testimonials-section.tsx
│   └── cta-section.tsx
└── (public)/        # Other pages follow same pattern
    └── about/
        ├── page.tsx
        └── components/  # About page components
```

### Page-Level Component Pattern
**All components related to a specific page are kept at the page level in `app/[page-path]/components/`**

- Landing page (`app/page.tsx`) → `app/components/` (co-located with page.tsx)
- Nested pages (`app/(public)/about/page.tsx`) → `app/(public)/about/components/`
- Each page has its own `components/` folder at the same level as `page.tsx`
- This keeps page-specific code organized and co-located with the page file
- Main page file imports from its local components directory using relative imports
- Example: `app/page.tsx` → `import { HeroSection } from './components/hero-section'`

## UI Library Usage
- **Aceternity** → Marketing pages, hero sections, eye-catching effects
- **React Bits** → Micro-interactions on ALL interactive elements
- **Shadcn/ui** → Functional components (forms, tables, dialogs)
- **Best Practice:** Combine Shadcn + React Bits (structure + animations)

## Animation Rules
- All buttons: `whileHover={{ scale: 1.02 }}` + `whileTap={{ scale: 0.98 }}`
- Loading states: Use skeletons, NOT spinners
- Use motion wrappers from `components/motion/` instead of direct `motion.div`
- Animation timing: fast (150ms), normal (250ms), slow (400ms)
- Respect `prefers-reduced-motion`

## Styling Standards
- **Spacing:** Use Tailwind scale (space-y-2, space-y-4, space-y-6, etc.)
- **Colors:** Use theme colors (bg-primary, text-foreground, etc.) NOT hardcoded
- **Typography:** Mobile-first responsive (text-4xl sm:text-5xl lg:text-6xl)
- **Files:** kebab-case (booking-wizard.tsx), Components: PascalCase (BookingWizard)

## Landing Page Structure
The landing page (`app/page.tsx`) is composed of:
- **HeroSection** - Editorial panorama with palm leaves and promo card
- **ServicesSection** - Signature programs (Injectables, Fillers, Facials)
- **GallerySection** - Bento grid gallery with parallax effects
- **ResultsSection** - Before/after slider with milestones
- **TestimonialsSection** - Client testimonials with ratings
- **CTASection** - Consultation booking call-to-action

All landing page components are located in `app/components/` (co-located with `app/page.tsx`) and imported using relative imports.

## Code Quality Checklist
- [ ] Server Component by default
- [ ] No `any` types
- [ ] All interactive elements have animations
- [ ] Error/loading/empty states handled
- [ ] Proper TypeScript interfaces
- [ ] Accessible (aria labels, keyboard navigation)
- [ ] Uses next/image for images
- [ ] Theme colors (not hardcoded)
- [ ] Page-specific components organized at page level in `app/[page-path]/components/`
- [ ] Landing page components in `app/components/` (co-located with `app/page.tsx`)

