"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

interface ScaleOnHoverProps extends HTMLMotionProps<"div"> {
  scale?: number;
}

export function ScaleOnHover({
  children,
  scale = 1.02,
  ...props
}: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: scale - 0.02 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
