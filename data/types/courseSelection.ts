export type QualificationChoice = "gcse" | "alevel";
export type BoardChoice = "aqa" | "ocr" | "edexcel";
export type TierChoice = "foundation" | "higher";

export interface CourseOptionSelection {
  groupId: string;
  groupLabel: string;
  selectedOptionIds: string[];
  selectedOptionLabels: string[];
}

export interface SelectedCourse {
  id: string;
  specKey: string;
  qualification: QualificationChoice;
  board: BoardChoice;
  subjectId: string;
  subjectName: string;
  tier: TierChoice | null;
  optionSelections: CourseOptionSelection[];
}
