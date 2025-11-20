"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export function StaggerItem({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
