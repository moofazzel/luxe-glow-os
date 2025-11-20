'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { cn } from '@/lib/luxury-effects';

export interface GradientTextProps {
  children: ReactNode;
  variant?: 'purpleGold' | 'emeraldGold' | 'junglePurple' | 'roseGold';
  withShimmer?: boolean;
  withSparkles?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export function GradientText({
  children,
  variant = 'purpleGold',
  withShimmer = true,
  withSparkles = false,
  className,
  as: Component = 'span',
}: GradientTextProps) {
  const gradientVariants = {
    purpleGold: 'from-purple-600 via-violet-500 to-amber-400',
    emeraldGold: 'from-emerald-600 via-teal-500 to-amber-400',
    junglePurple: 'from-emerald-700 via-teal-600 to-purple-600',
    roseGold: 'from-rose-400 via-amber-300 to-amber-500',
  };
  
  return (
    <Component
      className={cn(
        'relative inline-block',
        className
      )}
    >
      <motion.span
        className={cn(
          'bg-gradient-to-r bg-clip-text text-transparent',
          'font-bold',
          gradientVariants[variant]
        )}
        style={
          withShimmer
            ? {
                backgroundSize: '200% 100%',
              }
            : undefined
        }
        animate={
          withShimmer
            ? {
                backgroundPosition: ['0% center', '200% center'],
              }
            : undefined
        }
        transition={
          withShimmer
            ? {
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }
            : undefined
        }
      >
        {children}
      </motion.span>
      
      {/* Sparkle particles on hover */}
      {withSparkles && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial="rest"
          whileHover="hover"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              variants={{
                rest: {
                  opacity: 0,
                  scale: 0,
                },
                hover: {
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  y: [0, -20],
                  transition: {
                    duration: 0.6,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 1,
                  },
                },
              }}
            />
          ))}
        </motion.div>
      )}
    </Component>
  );
}

