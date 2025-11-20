'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
  showRadialGradient?: boolean;
}

export function AuroraBackground({
  children,
  className,
  showRadialGradient = true,
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col h-[100vh] items-center justify-center bg-background text-foreground transition-bg',
        className
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--aurora-purple:280_70%_60%]
            [--aurora-gold:40_80%_55%]
            [--aurora-pink:320_70%_65%]
            
            [--dark-gradient:repeating-linear-gradient(100deg,hsl(var(--aurora-purple))_10%,hsl(var(--aurora-gold))_15%,hsl(var(--aurora-pink))_20%,hsl(var(--aurora-purple))_25%,hsl(var(--aurora-gold))_30%)]
            [background-image:var(--dark-gradient)]
            [background-size:300%_100%]
            [background-position:50%_50%]
            absolute -inset-[10px] opacity-50 blur-[10px]
            after:absolute after:inset-0 
            after:[background-attachment:fixed] 
            after:mix-blend-difference
            pointer-events-none
            `,
            'animate-aurora'
          )}
        />
      </div>
      {showRadialGradient && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background/50 via-background/80 to-background pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
      <style jsx>{`
        @keyframes aurora {
          0%,
          100% {
            background-position: 50% 50%, 50% 50%;
          }
          50% {
            background-position: 350% 50%, 350% 50%;
          }
        }
        .animate-aurora {
          animation: aurora 60s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

