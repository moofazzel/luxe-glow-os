"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  type SelectProps,
} from "@/components/ui/select";
import { motion } from "framer-motion";

interface AnimatedSelectProps extends SelectProps {
  placeholder?: string;
  items: { value: string; label: string }[];
}

export function AnimatedSelect({
  placeholder,
  items,
  ...props
}: AnimatedSelectProps) {
  return (
    <Select {...props}>
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.15 }}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </motion.div>
      <SelectContent>
        {items.map((item, index) => (
          <motion.div
            key={item.value}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.15 }}
          >
            <SelectItem value={item.value}>{item.label}</SelectItem>
          </motion.div>
        ))}
      </SelectContent>
    </Select>
  );
}
