"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";

interface AnimatedListItemProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function AnimatedListItem({
  children,
  className,
  onClick,
}: AnimatedListItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={cn(
        "p-4 rounded-lg transition-colors cursor-pointer",
        isHovered && "bg-accent",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
