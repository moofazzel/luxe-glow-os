"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circle" | "rectangle";
}

export function Skeleton({ className, variant = "rectangle" }: SkeletonProps) {
  const variantClasses = {
    text: "h-4 w-full",
    circle: "h-12 w-12 rounded-full",
    rectangle: "h-24 w-full",
  };

  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      className={cn("bg-muted rounded", variantClasses[variant], className)}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-lg border p-4 space-y-3">
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="text" className="w-1/2" />
      <Skeleton variant="rectangle" className="h-32" />
    </div>
  );
}
