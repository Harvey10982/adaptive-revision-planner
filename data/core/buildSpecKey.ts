import type { BoardChoice, QualificationChoice, TierChoice } from "../types/courseSelection";

export function buildSpecKey(
  qualification: QualificationChoice,
  board: BoardChoice,
  subjectSlug: string,
  tier: TierChoice | null = null,
  pathway: string | null = null
): string {
  const safeSubject = subjectSlug.trim();
  if (!safeSubject) {
    throw new Error("buildSpecKey: subjectSlug is required");
  }

  const base = `${qualification}/${board}/${safeSubject}`;

  if (pathway) {
    return `${base}/${pathway}`;
  }

  if (tier) {
    return `${base}/${tier}`;
  }

  return base;
}
