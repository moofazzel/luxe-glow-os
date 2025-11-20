"use client";

import { animations, easings } from "@/lib/animations";
import { motion, type HTMLMotionProps } from "framer-motion";

interface SlideInProps extends HTMLMotionProps<"div"> {
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
}

export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = animations.normal,
  ...props
}: SlideInProps) {
  const directions = {
    up: { y: 100 },
    down: { y: -100 },
    left: { x: -100 },
    right: { x: 100 },
  };

  return (
    <motion.div
      initial={directions[direction]}
      animate={{ x: 0, y: 0 }}
      transition={{
        type: "spring",
        ...easings.spring,
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
