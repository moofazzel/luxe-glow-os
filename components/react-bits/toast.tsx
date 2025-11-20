"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Info, X } from "lucide-react";

export interface Toast {
  id: string;
  title?: string;
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
}

interface ToastProps extends Toast {
  onClose: () => void;
}

const iconMap = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
};

const colorMap = {
  success: "text-green-600 dark:text-green-400",
  error: "text-destructive",
  info: "text-blue-600 dark:text-blue-400",
};

export function ToastComponent({
  title,
  message,
  type = "info",
  onClose,
}: ToastProps) {
  const Icon = iconMap[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.2 },
      }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className={cn(
        "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-card border shadow-lg"
      )}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="shrink-0">
            <Icon className={cn("h-5 w-5", colorMap[type])} />
          </div>
          <div className="ml-3 w-0 flex-1">
            {title && (
              <p className="text-sm font-semibold text-foreground">{title}</p>
            )}
            <p className="mt-1 text-sm text-muted-foreground">{message}</p>
          </div>
          <div className="ml-4 flex shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
            >
              <span className="sr-only">Close</span>
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
