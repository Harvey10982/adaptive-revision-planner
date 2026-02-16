import { specificationRegistry } from "./specRegistry";
import type { SubjectSpecification } from "../types/subjectSpecification";

export function resolveSpec(key: string): SubjectSpecification {
  const spec = specificationRegistry[key];

  if (!spec) {
    throw new Error(`Specification not found for key: ${key}`);
  }

  return spec;
}
