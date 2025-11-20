"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  type DialogProps,
} from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedDialogProps extends DialogProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export function AnimatedDialog({
  children,
  title,
  description,
  ...props
}: AnimatedDialogProps) {
  return (
    <Dialog {...props}>
      <AnimatePresence>
        {props.open && (
          <DialogContent asChild>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
            >
              {(title || description) && (
                <DialogHeader>
                  {title && <DialogTitle>{title}</DialogTitle>}
                  {description && (
                    <DialogDescription>{description}</DialogDescription>
                  )}
                </DialogHeader>
              )}
              {children}
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
