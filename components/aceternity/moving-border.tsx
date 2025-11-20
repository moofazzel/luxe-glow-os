'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MovingBorderProps {
  children: ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: React.ElementType;
}

export function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = 'button',
}: MovingBorderProps) {
  return (
    <Component
      className={cn(
        'relative p-[1px] overflow-hidden bg-transparent text-foreground',
        containerClassName
      )}
    >
      <div
        className={cn(
          'absolute inset-0 rounded-[inherit]',
          borderClassName
        )}
        style={{
          background: `
            linear-gradient(90deg, 
              hsl(var(--primary)) 0%, 
              hsl(var(--secondary)) 50%, 
              hsl(var(--primary)) 100%
            )
          `,
          backgroundSize: '200% 100%',
          animation: `moveBorder ${duration}ms linear infinite`,
        }}
      />
      <div
        className={cn(
          'relative bg-card rounded-[inherit] px-6 py-3 font-medium',
          className
        )}
      >
        {children}
      </div>
      <style jsx>{`
        @keyframes moveBorder {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </Component>
  );
}

