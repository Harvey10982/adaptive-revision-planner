type Tier = "foundation" | "higher" | null;

export function buildSpecKey(
  qualification: string,
  examBoard: string,
  subjectSlug: string,
  tier: Tier = null,
  pathway: string | null = null
): string {

  let base = `${qualification}/${examBoard}/${subjectSlug}`;

  if (pathway) {
    return `${base}/${pathway}`;
  }

  if (tier) {
    return `${base}/${tier}`;
  }

  return base;
}
