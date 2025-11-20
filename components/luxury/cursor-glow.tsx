'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Check if hovering over CTA elements
      const target = e.target as HTMLElement;
      const isCTA = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null;
      
      setIsHoveringCTA(isCTA);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY]);
  
  if (!mounted) return null;
  
  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-screen hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isHoveringCTA ? 80 : 40,
            height: isHoveringCTA ? 80 : 40,
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              background: isHoveringCTA
                ? 'radial-gradient(circle, rgba(245,158,11,0.4) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* Secondary glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-screen hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isHoveringCTA ? 120 : 60,
            height: isHoveringCTA ? 120 : 60,
            opacity: isHoveringCTA ? 0.6 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 rounded-full border-2"
            style={{
              borderColor: isHoveringCTA
                ? 'rgba(245,158,11,0.3)'
                : 'rgba(168,85,247,0.2)',
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}

