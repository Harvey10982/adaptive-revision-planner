export type RevisionSessionStatus =
  | "PLANNED"
  | "COMPLETED"
  | "MISSED";

export interface RevisionSession {
  id: string;

  // Which selected course this belongs to
  courseId: string;

  // For colour / UI display
  subjectSlug: string;

  // What is being revised
  unitId: string;
  topicId?: string;
  subtopicId?: string;

  // Scheduling
  scheduledDate: string; // ISO date (YYYY-MM-DD)
  startTime?: string;     // "17:00"
  endTime?: string;       // "18:00"

  durationMinutes: number;

  status: RevisionSessionStatus;
}
