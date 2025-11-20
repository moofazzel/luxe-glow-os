/**
 * Animation timing constants
 * Used throughout the app for consistent animation durations
 */
export const animations = {
  fast: 0.15, // 150ms - Quick feedback (button press, toggle)
  normal: 0.25, // 250ms - Standard transitions (modal open, card hover)
  slow: 0.4, // 400ms - Dramatic effects (page transition)
  verySlow: 0.6, // 600ms - Special moments (section reveals)
} as const;

/**
 * Easing curves for natural motion
 */
export const easings = {
  easeOut: [0, 0.55, 0.45, 1] as const, // Elements entering
  easeIn: [0.55, 0, 1, 0.45] as const, // Elements exiting
  easeInOut: [0.76, 0, 0.24, 1] as const, // Elements moving
  spring: { type: "spring" as const, stiffness: 300, damping: 30 }, // Playful interactions
} as const;
