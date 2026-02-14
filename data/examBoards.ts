// data/examBoards.ts

export type ExamBoardId = "aqa" | "ocr" | "edexcel";

export interface ExamBoard {
  id: ExamBoardId;
  name: string;
  qualifications: Array<"gcse" | "alevel">;
}

export const examBoards: ExamBoard[] = [
  {
    id: "aqa",
    name: "AQA",
    qualifications: ["gcse", "alevel"],
  },
  {
    id: "ocr",
    name: "OCR",
    qualifications: ["gcse", "alevel"],
  },
  {
    id: "edexcel",
    name: "Edexcel",
    qualifications: ["gcse", "alevel"],
  },
];
