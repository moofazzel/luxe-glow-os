# LuxeGlow Components Documentation

This directory contains all reusable components for the LuxeGlow application, organized by category.

## 📁 Directory Structure

```
components/
├── ui/              # Shadcn/ui base components
├── aceternity/      # Aceternity UI components for marketing
├── react-bits/      # React Bits micro-interaction components
├── motion/          # Framer Motion wrapper components
├── layout/          # Layout components (Navbar, Footer)
├── features/        # Feature-specific components
└── shared/          # Reusable business components
```

## 🎨 Component Categories

### Motion Wrappers (`/motion`)

Reusable animation wrappers built with Framer Motion.

#### FadeIn

Fade in animation with directional options.

```tsx
import { FadeIn } from '@/components/motion/fade-in';

<FadeIn direction="up" delay={0.2}>
  <h1>Welcome</h1>
</FadeIn>
```

**Props:**
- `direction`: 'up' | 'down' | 'left' | 'right' (default: 'up')
- `delay`: number (default: 0)
- `duration`: number (default: 0.25)

#### ScaleOnHover

Scale effect on hover and tap.

```tsx
import { ScaleOnHover } from '@/components/motion/scale-on-hover';

<ScaleOnHover scale={1.05}>
  <Card>Content</Card>
</ScaleOnHover>
```

**Props:**
- `scale`: number (default: 1.02)

#### StaggerContainer & StaggerItem

Staggered animations for lists.

```tsx
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-container';

<StaggerContainer staggerDelay={0.1}>
  {items.map(item => (
    <StaggerItem key={item.id}>
      <Card>{item.name}</Card>
    </StaggerItem>
  ))}
</StaggerContainer>
```

### React Bits Components (`/react-bits`)

Professional micro-interaction components.

#### AnimatedButton

Shadcn Button with hover/tap animations.

```tsx
import { AnimatedButton } from '@/components/react-bits/animated-button';

<AnimatedButton variant="default" size="lg">
  Click Me
</AnimatedButton>
```

**Props:** All Shadcn Button props

#### AnimatedInput

Input with focus animations and error states.

```tsx
import { AnimatedInput } from '@/components/react-bits/animated-input';

<AnimatedInput
  label="Email"
  placeholder="Enter email"
  error="Invalid email"
  success={false}
/>
```

**Props:**
- `label`: string (optional)
- `error`: string (optional)
- `success`: boolean (optional)
- All Shadcn Input props

#### AnimatedCard

Card with hover lift and shadow effects.

```tsx
import { AnimatedCard } from '@/components/react-bits/animated-card';

<AnimatedCard clickable onClick={() => console.log('clicked')}>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
</AnimatedCard>
```

**Props:**
- `clickable`: boolean (default: false)
- All Shadcn Card props

#### SearchInput

Search input with animated clear button.

```tsx
import { SearchInput } from '@/components/react-bits/search-input';

<SearchInput
  value={searchValue}
  onChange={(e) => setSearchValue(e.target.value)}
  onClear={() => setSearchValue('')}
  placeholder="Search..."
/>
```

#### Toggle

Smooth toggle switch.

```tsx
import { Toggle } from '@/components/react-bits/toggle';

<Toggle
  checked={isEnabled}
  onChange={setIsEnabled}
  label="Enable notifications"
/>
```

#### Toast & ToastProvider

Toast notification system.

```tsx
// Wrap app in ToastProvider
import { ToastProvider, useToast } from '@/components/react-bits/toast-provider';

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}

// Use in components
function MyComponent() {
  const { showToast } = useToast();
  
  const handleClick = () => {
    showToast({
      type: 'success',
      title: 'Success!',
      message: 'Operation completed',
      duration: 5000,
    });
  };
}
```

#### ProgressBar

Animated progress indicator.

```tsx
import { ProgressBar } from '@/components/react-bits/progress-bar';

<ProgressBar value={75} max={100} showPercentage />
```

#### Badge

Badge with entrance animation.

```tsx
import { Badge } from '@/components/react-bits/badge';

<Badge variant="default">New</Badge>
<Badge variant="success">Active</Badge>
```

#### Skeleton

Pulsing skeleton loader.

```tsx
import { Skeleton, CardSkeleton } from '@/components/react-bits/skeleton';

<Skeleton variant="text" />
<Skeleton variant="circle" />
<CardSkeleton />
```

#### EmptyState

Empty state with illustration.

```tsx
import { EmptyState } from '@/components/react-bits/empty-state';

<EmptyState
  title="No results"
  description="Try adjusting your search"
  action={{
    label: 'Clear filters',
    onClick: clearFilters
  }}
/>
```

### Aceternity UI Components (`/aceternity`)

Eye-catching components for marketing pages.

#### AuroraBackground

Animated gradient background for hero sections.

```tsx
import { AuroraBackground } from '@/components/aceternity/aurora-background';

<AuroraBackground>
  <h1>Welcome to LuxeGlow</h1>
</AuroraBackground>
```

#### CardContainer3D

3D tilt card effect.

```tsx
import { CardContainer3D, CardBody3D, CardItem3D } from '@/components/aceternity/3d-card';

<CardContainer3D>
  <CardBody3D>
    <CardItem3D translateZ={50}>
      <h3>Service Name</h3>
    </CardItem3D>
    <CardItem3D translateZ={70}>
      <p>Description</p>
    </CardItem3D>
  </CardBody3D>
</CardContainer3D>
```

#### MovingBorder

Animated border button for CTAs.

```tsx
import { MovingBorder } from '@/components/aceternity/moving-border';

<MovingBorder as="button" duration={2000}>
  Book Appointment
</MovingBorder>
```

#### LampEffect

Dramatic lighting effect for section headers.

```tsx
import { LampEffect } from '@/components/aceternity/lamp-effect';

<LampEffect>
  <h1>Our Services</h1>
</LampEffect>
```

#### ParallaxScroll

Parallax scrolling image grid.

```tsx
import { ParallaxScroll } from '@/components/aceternity/parallax-scroll';

<ParallaxScroll images={['/img1.jpg', '/img2.jpg', '/img3.jpg']} />
```

### Layout Components (`/layout`)

#### Navbar

Sticky navigation with mobile menu.

```tsx
import { Navbar } from '@/components/layout/navbar';

<Navbar />
```

#### Footer

Footer with links and contact info.

```tsx
import { Footer } from '@/components/layout/footer';

<Footer />
```

## 🎨 Design Patterns

### When to Use Each Library

- **Aceternity UI**: Marketing pages, hero sections, landing pages
- **React Bits**: All interactive elements (forms, buttons, cards)
- **Shadcn/ui**: Base structure and accessibility
- **Motion Wrappers**: Custom animations and transitions

### Animation Best Practices

1. **Timing**: Use constants from `/lib/animations.ts`
2. **Reduced Motion**: All components respect `prefers-reduced-motion`
3. **Performance**: Animate `transform` and `opacity` only
4. **Subtlety**: Keep animations under 300ms for interactions

## 🔧 Utilities

### cn() Function

Merge Tailwind classes safely.

```tsx
import { cn } from '@/lib/utils';

<div className={cn('base-class', isActive && 'active-class', className)} />
```

### Animation Constants

```tsx
import { animations, easings } from '@/lib/animations';

// Use in motion components
<motion.div
  transition={{ duration: animations.normal, ease: easings.easeOut }}
/>
```

## 📋 Component Checklist

Before creating a new component:

- [ ] Does it have a single responsibility?
- [ ] Is it using the correct library (Aceternity/React Bits/Shadcn)?
- [ ] Does it have proper TypeScript types (no `any`)?
- [ ] Does it have hover/focus states?
- [ ] Does it respect `prefers-reduced-motion`?
- [ ] Is it mobile responsive?
- [ ] Does it follow the naming convention (kebab-case files, PascalCase components)?

## 🎯 Examples

See `app/page.tsx` for a comprehensive showcase of all components in action.

