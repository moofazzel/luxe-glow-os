"use client";

import { Card, type CardProps } from "@/components/ui/card";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface AnimatedCardProps extends CardProps {
  clickable?: boolean;
}

export const AnimatedCard = forwardRef<
  HTMLDivElement,
  AnimatedCardProps & HTMLMotionProps<"div">
>(({ children, clickable = false, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      whileHover={{
        y: -4,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      whileTap={clickable ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.2 }}
    >
      <Card {...props} className={clickable ? "cursor-pointer" : undefined}>
        {children}
      </Card>
    </motion.div>
  );
});

AnimatedCard.displayName = "AnimatedCard";
