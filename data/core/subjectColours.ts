/**
 * Central subject → colour mapping.
 *
 * Rules:
 * - Colours are tied to SUBJECT TYPE, not exam board.
 * - GCSE and A-Level share the same colour.
 * - Languages share a colour family.
 * - Combined sciences resolve to inner subject colours later.
 */

export const SUBJECT_COLOURS: Record<string, string> = {
  // Mathematics
  mathematics: "#EF4444", // Red

  // Sciences
  biology: "#10B981",     // Green
  chemistry: "#3B82F6",   // Blue
  physics: "#8B5CF6",     // Purple
  "combined-science": "#0EA5E9",

  // Humanities
  geography: "#F59E0B",   // Amber
  history: "#6B7280",     // Slate
  "religious-studies": "#6366F1",

  // Languages (shared colour family)
  french: "#2563EB",
  german: "#2563EB",
  spanish: "#2563EB",
  italian: "#2563EB",
  urdu: "#2563EB",
  bengali: "#2563EB",
  panjabi: "#2563EB",
  polish: "#2563EB",
  "chinese-mandarin": "#2563EB",
  "hebrew-modern": "#2563EB",

  // Creative subjects
  "art-and-design": "#EC4899",
  drama: "#F43F5E",
  music: "#F97316",
  dance: "#FB7185",

  // Social sciences
  psychology: "#14B8A6",
  sociology: "#0D9488",
  economics: "#A855F7",
  business: "#9333EA",

  // Technology
  "computer-science": "#22C55E",
  "design-and-technology": "#0EA5E9",
  engineering: "#64748B",

  // Physical education
  "physical-education": "#16A34A",

  // Fallback
  default: "#3B82F6",
};

/**
 * Resolve subject slug to colour.
 */
export function getSubjectColour(subjectSlug: string): string {
  return SUBJECT_COLOURS[subjectSlug] ?? SUBJECT_COLOURS.default;
}
