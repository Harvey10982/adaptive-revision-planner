import { specificationRegistry } from "./specRegistry";
import type { SubjectSpecification } from "../types/subjectSpecification";

export function resolveSpecification(
  key: string
): SubjectSpecification | null {
  return specificationRegistry[key] ?? null;
}

// Backwards-compatible alias (older UI code imports `resolveSpec`).
export const resolveSpec = resolveSpecification;
