/**
 * Luxury Visual Effects Utilities
 * Glassmorphism, gradients, glows, and premium effects
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Glassmorphism effect - frosted glass appearance
 */
export const glassmorphism = {
  base: "backdrop-blur-xl bg-white/10 dark:bg-white/5",
  strong: "backdrop-blur-2xl bg-white/20 dark:bg-white/10",
  subtle: "backdrop-blur-md bg-white/5 dark:bg-white/3",
  border: "border border-white/20 dark:border-white/10",
};

/**
 * Gradient border utilities
 */
export const gradientBorder = {
  emeraldGold: "bg-gradient-to-r from-emerald-600 via-amber-500 to-amber-400",
  purpleGold: "bg-gradient-to-r from-purple-600 via-violet-500 to-amber-400",
  junglePurple: "bg-gradient-to-r from-emerald-700 via-teal-600 to-purple-600",
};

/**
 * Glow effects for premium feel
 */
export const glow = {
  purple: "shadow-[0_0_30px_rgba(168,85,247,0.4)]",
  gold: "shadow-[0_0_30px_rgba(245,158,11,0.4)]",
  emerald: "shadow-[0_0_30px_rgba(16,185,129,0.4)]",
  purpleStrong: "shadow-[0_0_50px_rgba(168,85,247,0.6)]",
  goldStrong: "shadow-[0_0_50px_rgba(245,158,11,0.6)]",
};

/**
 * Luxury shadow system - soft, ambient shadows
 */
export const luxuryShadow = {
  sm: "shadow-[0_2px_20px_rgba(0,0,0,0.08)]",
  md: "shadow-[0_4px_30px_rgba(0,0,0,0.12)]",
  lg: "shadow-[0_8px_40px_rgba(0,0,0,0.15)]",
  xl: "shadow-[0_12px_50px_rgba(0,0,0,0.18)]",
  "2xl": "shadow-[0_20px_60px_rgba(0,0,0,0.22)]",
  inner: "shadow-[inset_0_2px_20px_rgba(0,0,0,0.1)]",
};

/**
 * Shimmer animation keyframes
 */
export const shimmerKeyframes = `
@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

@keyframes shimmer-slow {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}
`;

/**
 * Shimmer effect classes
 */
export const shimmer = {
  gold: "bg-gradient-to-r from-transparent via-amber-400/30 to-transparent bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]",
  purple:
    "bg-gradient-to-r from-transparent via-purple-400/30 to-transparent bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]",
  emerald:
    "bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]",
};

/**
 * Gradient text utilities
 */
export const gradientText = {
  purpleGold:
    "bg-gradient-to-r from-purple-600 via-violet-500 to-amber-400 bg-clip-text text-transparent",
  emeraldGold:
    "bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-400 bg-clip-text text-transparent",
  junglePurple:
    "bg-gradient-to-r from-emerald-700 via-teal-600 to-purple-600 bg-clip-text text-transparent",
  roseGold:
    "bg-gradient-to-r from-rose-400 via-amber-300 to-amber-500 bg-clip-text text-transparent",
};

/**
 * Texture overlay for premium feel
 */
export const textureOverlay = {
  noise:
    "before:absolute before:inset-0 before:bg-[url('/noise.svg')] before:opacity-[0.02] before:pointer-events-none",
  grain:
    "before:absolute before:inset-0 before:bg-[url('/grain.svg')] before:opacity-[0.03] before:pointer-events-none",
};

/**
 * Floating animation classes
 */
export const floating = {
  slow: "animate-[float_6s_ease-in-out_infinite]",
  normal: "animate-[float_4s_ease-in-out_infinite]",
  fast: "animate-[float_3s_ease-in-out_infinite]",
};

/**
 * Magnetic hover effect calculation
 * Returns transform values based on mouse position relative to element
 */
export const calculateMagneticEffect = (
  mouseX: number,
  mouseY: number,
  elementX: number,
  elementY: number,
  elementWidth: number,
  elementHeight: number,
  strength: number = 0.3
) => {
  const centerX = elementX + elementWidth / 2;
  const centerY = elementY + elementHeight / 2;

  const deltaX = (mouseX - centerX) * strength;
  const deltaY = (mouseY - centerY) * strength;

  return {
    x: deltaX,
    y: deltaY,
  };
};

/**
 * Tilt effect calculation for cards
 */
export const calculateTiltEffect = (
  mouseX: number,
  mouseY: number,
  elementX: number,
  elementY: number,
  elementWidth: number,
  elementHeight: number,
  maxTilt: number = 15
) => {
  const centerX = elementX + elementWidth / 2;
  const centerY = elementY + elementHeight / 2;

  const deltaX = mouseX - centerX;
  const deltaY = mouseY - centerY;

  const rotateX = (deltaY / (elementHeight / 2)) * -maxTilt;
  const rotateY = (deltaX / (elementWidth / 2)) * maxTilt;

  return {
    rotateX: Math.max(-maxTilt, Math.min(maxTilt, rotateX)),
    rotateY: Math.max(-maxTilt, Math.min(maxTilt, rotateY)),
  };
};

/**
 * Gradient background utilities
 */
export const gradientBg = {
  purpleMidnight:
    "bg-gradient-to-br from-purple-900 via-purple-800 to-slate-900",
  emeraldNight: "bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900",
  jungleMystic:
    "bg-gradient-to-br from-emerald-800 via-purple-900 to-slate-900",
  goldLuxury: "bg-gradient-to-br from-amber-600 via-amber-500 to-orange-600",
};

/**
 * Premium button variants
 */
export const buttonVariants = {
  primary: cn(
    "bg-gradient-to-r from-emerald-600 to-teal-600",
    "hover:from-emerald-500 hover:to-teal-500",
    "text-white font-semibold",
    "transition-all duration-300"
  ),
  secondary: cn(
    "bg-gradient-to-r from-amber-500 to-amber-400",
    "hover:from-amber-400 hover:to-amber-300",
    "text-slate-900 font-semibold",
    "transition-all duration-300"
  ),
  ghost: cn(
    "bg-transparent border-2",
    "border-emerald-600/50 hover:border-emerald-500",
    "text-emerald-600 dark:text-emerald-400",
    "hover:bg-emerald-600/10",
    "transition-all duration-300"
  ),
  luxury: cn(
    "bg-gradient-to-r from-purple-600 via-violet-500 to-amber-400",
    "hover:from-purple-500 hover:via-violet-400 hover:to-amber-300",
    "text-white font-semibold",
    "transition-all duration-300"
  ),
};

/**
 * Card variants with glassmorphism
 */
export const cardVariants = {
  glass: cn(
    glassmorphism.base,
    glassmorphism.border,
    luxuryShadow.md,
    "rounded-2xl"
  ),
  glassStrong: cn(
    glassmorphism.strong,
    glassmorphism.border,
    luxuryShadow.lg,
    "rounded-2xl"
  ),
  solid: cn(
    "bg-white dark:bg-slate-900",
    "border border-slate-200 dark:border-slate-800",
    luxuryShadow.md,
    "rounded-2xl"
  ),
};
