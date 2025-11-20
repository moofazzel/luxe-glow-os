'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/luxury-effects';

export interface LuxuryCardProps {
  children: ReactNode;
  variant?: 'glass' | 'glassStrong' | 'solid';
  withTilt?: boolean;
  withGlow?: boolean;
  withFloat?: boolean;
  className?: string;
  onClick?: () => void;
}

export function LuxuryCard({
  children,
  variant = 'glass',
  withTilt = true,
  withGlow = true,
  withFloat = false,
  className,
  onClick,
}: LuxuryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!withTilt || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    
    x.set(deltaX);
    y.set(deltaY);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  const variantClasses = {
    glass: 'backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10',
    glassStrong: 'backdrop-blur-2xl bg-white/20 dark:bg-white/10 border border-white/20 dark:border-white/10',
    solid: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800',
  };
  
  return (
    <motion.div
      ref={cardRef}
      style={
        withTilt
          ? {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
          : {}
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      className={cn(
        'relative rounded-2xl p-6',
        'shadow-luxury-md hover:shadow-luxury-xl',
        'transition-shadow duration-300',
        onClick && 'cursor-pointer',
        variantClasses[variant],
        className
      )}
    >
      {/* Gradient border that appears on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(16,185,129,0.5), rgba(245,158,11,0.5))',
          padding: '2px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Inner glow on hover */}
      {withGlow && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(16,185,129,0.15), transparent 70%)',
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Floating animation */}
      {withFloat && (
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0"
        />
      )}
      
      <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
        {children}
      </div>
    </motion.div>
  );
}

