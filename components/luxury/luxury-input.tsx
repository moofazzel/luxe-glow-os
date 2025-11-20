'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useState, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/luxury-effects';

export interface LuxuryInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  error?: string;
  success?: boolean;
  helperText?: string;
}

export function LuxuryInput({
  label,
  error,
  success,
  helperText,
  className,
  onFocus,
  onBlur,
  ...props
}: LuxuryInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value !== '');
    onBlur?.(e);
  };
  
  return (
    <div className="relative w-full">
      <div className="relative">
        {/* Input container with animated border */}
        <motion.div
          className={cn(
            'relative rounded-xl overflow-hidden',
            'border-2 transition-colors duration-300',
            error
              ? 'border-red-500'
              : success
              ? 'border-emerald-500'
              : isFocused
              ? 'border-emerald-500'
              : 'border-slate-300 dark:border-slate-700'
          )}
          animate={{
            scale: isFocused ? 1.01 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Gradient border glow on focus */}
          <AnimatePresence>
            {isFocused && !error && (
              <motion.div
                className="absolute inset-0 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(245,158,11,0.3))',
                  filter: 'blur(8px)',
                }}
              />
            )}
          </AnimatePresence>
          
          {/* Gold underline animation on focus */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-400"
            initial={{ width: '0%' }}
            animate={{ width: isFocused ? '100%' : '0%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
          
          <input
            {...props}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={cn(
              'w-full px-4 pt-6 pb-2 bg-white dark:bg-slate-900',
              'text-slate-900 dark:text-slate-100',
              'outline-none transition-all duration-200',
              'peer',
              className
            )}
            placeholder=" "
          />
          
          {/* Floating label */}
          <motion.label
            className={cn(
              'absolute left-4 pointer-events-none',
              'transition-all duration-200',
              'text-slate-600 dark:text-slate-400',
              isFocused || hasValue || props.value
                ? 'top-2 text-xs font-medium'
                : 'top-4 text-base'
            )}
            animate={{
              color: isFocused
                ? 'rgb(16, 185, 129)'
                : error
                ? 'rgb(239, 68, 68)'
                : success
                ? 'rgb(16, 185, 129)'
                : undefined,
            }}
          >
            {label}
          </motion.label>
          
          {/* Success/Error icon */}
          <AnimatePresence>
            {(success || error) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {success ? (
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                    <X className="w-4 h-4 text-white" />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Character shimmer effect on typing */}
        {isFocused && !error && (
          <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        )}
      </div>
      
      {/* Error message with shake animation */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              x: [0, -10, 10, -10, 10, 0],
            }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              x: { duration: 0.4, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
            }}
            className="mt-2 text-sm text-red-500 flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
      
      {/* Helper text */}
      {helperText && !error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-sm text-slate-600 dark:text-slate-400"
        >
          {helperText}
        </motion.p>
      )}
    </div>
  );
}

