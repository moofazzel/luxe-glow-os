'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/luxury-effects';

export interface LuxurySkeletonProps {
  variant?: 'text' | 'card' | 'circle' | 'rectangle';
  width?: string;
  height?: string;
  className?: string;
}

export function LuxurySkeleton({
  variant = 'text',
  width = 'w-full',
  height,
  className,
}: LuxurySkeletonProps) {
  const variantClasses = {
    text: 'h-4 rounded',
    card: 'h-48 rounded-2xl',
    circle: 'rounded-full',
    rectangle: 'rounded-xl',
  };
  
  const defaultHeight = {
    text: 'h-4',
    card: 'h-48',
    circle: 'w-12 h-12',
    rectangle: 'h-32',
  };
  
  return (
    <div
      className={cn(
        'relative overflow-hidden',
        'bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200',
        'dark:from-slate-800 dark:via-slate-700 dark:to-slate-800',
        width,
        height || defaultHeight[variant],
        variantClasses[variant],
        className
      )}
    >
      {/* Shimmer overlay with purple-gold gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.2) 25%, rgba(245,158,11,0.2) 50%, rgba(168,85,247,0.2) 75%, transparent 100%)',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['0% center', '200% center'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="glass rounded-2xl p-6 space-y-4">
      <LuxurySkeleton variant="circle" className="w-16 h-16 mb-4" />
      <LuxurySkeleton variant="text" width="w-3/4" className="h-6" />
      <LuxurySkeleton variant="text" width="w-full" />
      <LuxurySkeleton variant="text" width="w-5/6" />
      <LuxurySkeleton variant="rectangle" className="h-10 mt-6" />
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="glass rounded-2xl p-8 space-y-4">
      <div className="flex items-center gap-4 mb-4">
        <LuxurySkeleton variant="circle" className="w-16 h-16" />
        <div className="flex-1 space-y-2">
          <LuxurySkeleton variant="text" width="w-1/3" className="h-5" />
          <LuxurySkeleton variant="text" width="w-1/4" className="h-4" />
        </div>
      </div>
      <LuxurySkeleton variant="text" width="w-full" />
      <LuxurySkeleton variant="text" width="w-full" />
      <LuxurySkeleton variant="text" width="w-4/5" />
    </div>
  );
}

export function GallerySkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <LuxurySkeleton variant="card" className="md:row-span-2 h-96 md:h-full" />
      <div className="grid grid-cols-2 gap-4">
        <LuxurySkeleton variant="card" />
        <LuxurySkeleton variant="card" />
        <LuxurySkeleton variant="card" />
        <LuxurySkeleton variant="card" />
      </div>
    </div>
  );
}

