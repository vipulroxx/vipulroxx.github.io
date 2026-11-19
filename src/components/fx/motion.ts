// Shared guards so effects degrade gracefully in tests, SSR and for users who prefer less motion.
export const isTest = process.env.NODE_ENV === "test";

export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
}
