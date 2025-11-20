'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/luxury-effects';

export interface LuxuryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'luxury';
  size?: 'sm' | 'md' | 'lg';
  withMagnetic?: boolean;
  withRipple?: boolean;
}

export function LuxuryButton({
  children,
  variant = 'primary',
  size = 'md',
  withMagnetic = true,
  withRipple = true,
  className,
  onClick,
  ...props
}: LuxuryButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  
  // Magnetic hover effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!withMagnetic || !buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;
    
    x.set(deltaX);
    y.set(deltaY);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (withRipple) {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (rect) {
        const rippleX = e.clientX - rect.left;
        const rippleY = e.clientY - rect.top;
        const newRipple = { x: rippleX, y: rippleY, id: Date.now() };
        setRipples([...ripples, newRipple]);
        
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);
      }
    }
    
    onClick?.(e);
  };
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-luxury-md hover:shadow-luxury-lg',
    secondary: 'bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-900 shadow-luxury-md hover:shadow-luxury-lg',
    ghost: 'bg-transparent border-2 border-emerald-600/50 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600/10',
    luxury: 'bg-gradient-to-r from-purple-600 via-violet-500 to-amber-400 hover:from-purple-500 hover:via-violet-400 hover:to-amber-300 text-white shadow-luxury-md hover:shadow-luxury-lg hover:glow-purple',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <motion.button
      ref={buttonRef}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative overflow-hidden rounded-xl font-semibold',
        'transition-all duration-300 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {/* Shine overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{
          x: '100%',
          transition: { duration: 0.6, ease: 'easeInOut' },
        }}
      />
      
      {/* Ripple effect */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{
            width: 300,
            height: 300,
            opacity: 0,
            x: -150,
            y: -150,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
      
      {/* Pulsing border on hover */}
      {variant === 'luxury' && (
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-amber-400/0"
          whileHover={{
            borderColor: 'rgba(251, 191, 36, 0.5)',
            transition: {
              duration: 0.3,
              repeat: Infinity,
              repeatType: 'reverse',
            },
          }}
        />
      )}
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

