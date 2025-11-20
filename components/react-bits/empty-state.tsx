"use client";

import { motion } from "framer-motion";
import { FileQuestion } from "lucide-react";
import { AnimatedButton } from "./animated-button";

interface EmptyStateProps {
  icon?: React.ElementType;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({
  icon: Icon = FileQuestion,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center p-8 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.1,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className="mb-4 rounded-full bg-muted p-6"
      >
        <Icon className="h-12 w-12 text-muted-foreground" />
      </motion.div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-muted-foreground mb-4 max-w-md">{description}</p>
      )}
      {action && (
        <AnimatedButton onClick={action.onClick}>{action.label}</AnimatedButton>
      )}
    </motion.div>
  );
}
