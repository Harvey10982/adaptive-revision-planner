/* eslint-disable @typescript-eslint/consistent-type-assertions */
/**
 * AQA subject catalog — Post-16 (AS + A-Level)
 *
 * This file contains only AS/A-Level menu items.
 * Shared types/helpers live in `aqaSubjectIndex.gcse.ts` to keep the split to two files.
 */
import type { SubjectMenuItem } from "./aqaSubjectIndex.gcse";
import { makeId, NOT_TIERED } from "./aqaSubjectIndex.gcse";

export const AQA_AS_SUBJECTS: readonly SubjectMenuItem[] = [
      { id: makeId("AQA", "AS", "Biology"), name: "Biology", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7401", title: "Biology (AS)", status: "CURRENT" }] },
      {
        id: makeId("AQA", "AS", "Business"),
        name: "Business",
        examBoard: "AQA",
        qualification: "A_LEVEL",
        level: "AS",
        tiering: NOT_TIERED,
        specs: [
          { code: "7131", title: "Business (AS) (legacy specification)", status: "LEGACY" },
          { code: "7137", title: "Business (AS) (new specification)", status: "CURRENT" },
        ],
      },
      { id: makeId("AQA", "AS", "Chemistry"), name: "Chemistry", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7404", title: "Chemistry (AS)", status: "CURRENT" }] },
      { id: makeId("AQA", "AS", "Computer Science"), name: "Computer Science", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7516", title: "Computer Science (AS)", status: "CURRENT" }] },
      { id: makeId("AQA", "AS", "Economics"), name: "Economics", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7135", title: "Economics (AS)", status: "CURRENT" }] },
      { id: makeId("AQA", "AS", "English Language"), name: "English Language", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7701", title: "English Language (AS)", status: "CURRENT" }] },
      { id: makeId("AQA", "AS", "English Literature A"), name: "English Literature A", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7711", title: "English Literature A (AS)", status: "CURRENT" }] },
      { id: makeId("AQA", "AS", "English Literature B"), name: "English Literature B", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7716", title: "English Literature B (AS)", status: "CURRENT" }] },
      { id: makeId("AQA", "AS", "French"), name: "French", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7651", title: "French (AS)", status: "CURRENT" }] },
      { id: makeId("AQA", "AS", "Further Mathematics"), name: "Further Mathematics", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7366", title: "Further Mathematics (AS)", status: "CURRENT" }] },
      { id: makeId("AQA", "AS", "Geography"), name: "Geography", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7036", title: "Geography (AS)", status: "CURRENT" }] },
      { id: makeId("AQA", "AS", "German"), name: "German", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7661", title: "German (AS)", status: "CURRENT" }] },
      { id: makeId("AQA", "AS", "History"), name: "History", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7041", title: "History (AS)", status: "CURRENT" }] },
      { id: makeId("AQA", "AS", "Mathematics"), name: "Mathematics", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7356", title: "Mathematics (AS)", status: "CURRENT" }] },
      { id: makeId("AQA", "AS", "Physics"), name: "Physics", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7407", title: "Physics (AS)", status: "CURRENT" }] },
      { id: makeId("AQA", "AS", "Psychology"), name: "Psychology", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7181", title: "Psychology (AS)", status: "CURRENT" }] },
      { id: makeId("AQA", "AS", "Religious Studies"), name: "Religious Studies", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7061", title: "Religious Studies (AS)", status: "CURRENT" }] },
      { id: makeId("AQA", "AS", "Sociology"), name: "Sociology", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7191", title: "Sociology (AS)", status: "CURRENT" }] },
      { id: makeId("AQA", "AS", "Spanish"), name: "Spanish", examBoard: "AQA", qualification: "A_LEVEL", level: "AS", tiering: NOT_TIERED, specs: [{ code: "7691", title: "Spanish (AS)", status: "CURRENT" }] },
    ];


export const AQA_ALEVEL_SUBJECTS: readonly SubjectMenuItem[] = [
      { id: makeId("AQA", "A_LEVEL", "Accounting"), name: "Accounting", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7127", title: "Accounting", status: "CURRENT" }] },
      {
        id: makeId("AQA", "A_LEVEL", "Art and Design"),
        name: "Art and Design",
        examBoard: "AQA",
        qualification: "A_LEVEL",
        level: "A_LEVEL",
        tiering: NOT_TIERED,
        specs: [
          { code: "7201", title: "Art and Design (Art, craft and design)", status: "CURRENT" },
          { code: "7202", title: "Art and Design (Fine art)", status: "CURRENT" },
          { code: "7203", title: "Art and Design (Graphic communication)", status: "CURRENT" },
          { code: "7204", title: "Art and Design (Textile design)", status: "CURRENT" },
          { code: "7205", title: "Art and Design (Three-dimensional design)", status: "CURRENT" },
          { code: "7206", title: "Art and Design (Photography)", status: "CURRENT" },
        ],
      },
      { id: makeId("AQA", "A_LEVEL", "Bengali"), name: "Bengali", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7637", title: "Bengali", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Biology"), name: "Biology", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7402", title: "Biology", status: "CURRENT" }] },
      {
        id: makeId("AQA", "A_LEVEL", "Business"),
        name: "Business",
        examBoard: "AQA",
        qualification: "A_LEVEL",
        level: "A_LEVEL",
        tiering: NOT_TIERED,
        specs: [
          { code: "7132", title: "Business (legacy specification)", status: "LEGACY" },
          { code: "7138", title: "Business (new specification)", status: "CURRENT" },
        ],
      },
      { id: makeId("AQA", "A_LEVEL", "Chemistry"), name: "Chemistry", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7405", title: "Chemistry", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Computer Science"), name: "Computer Science", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7517", title: "Computer Science", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Dance"), name: "Dance", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7237", title: "Dance", status: "CURRENT" }] },
      {
        id: makeId("AQA", "A_LEVEL", "Design and Technology"),
        name: "Design and Technology",
        examBoard: "AQA",
        qualification: "A_LEVEL",
        level: "A_LEVEL",
        tiering: NOT_TIERED,
        specs: [
          { code: "7552", title: "Design and Technology", status: "CURRENT" },
          { code: "7562", title: "Design and Technology", status: "CURRENT" },
        ],
      },
      { id: makeId("AQA", "A_LEVEL", "Drama and Theatre"), name: "Drama and Theatre", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7262", title: "Drama and Theatre", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Economics"), name: "Economics", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7136", title: "Economics", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "English Language"), name: "English Language", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7702", title: "English Language", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "English Language and Literature"), name: "English Language and Literature", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7707", title: "English Language and Literature", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "English Literature A"), name: "English Literature A", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7712", title: "English Literature A", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "English Literature B"), name: "English Literature B", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7717", title: "English Literature B", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Environmental Science"), name: "Environmental Science", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7447", title: "Environmental Science", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "French"), name: "French", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7652", title: "French", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Further Mathematics"), name: "Further Mathematics", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7367", title: "Further Mathematics", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Geography"), name: "Geography", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7037", title: "Geography", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "German"), name: "German", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7662", title: "German", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Hebrew (Biblical)"), name: "Hebrew (Biblical)", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7677", title: "Hebrew (Biblical)", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Hebrew (Modern)"), name: "Hebrew (Modern)", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7672", title: "Hebrew (Modern)", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "History"), name: "History", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7042", title: "History", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Law"), name: "Law", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7162", title: "Law", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Mathematics"), name: "Mathematics", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7357", title: "Mathematics", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Media Studies"), name: "Media Studies", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7572", title: "Media Studies", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Music"), name: "Music", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7272", title: "Music", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Panjabi"), name: "Panjabi", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7682", title: "Panjabi", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Philosophy"), name: "Philosophy", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7172", title: "Philosophy", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Physical Education"), name: "Physical Education", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7582", title: "Physical Education", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Physics"), name: "Physics", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7408", title: "Physics", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Polish"), name: "Polish", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7687", title: "Polish", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Politics"), name: "Politics", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7152", title: "Politics", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Psychology"), name: "Psychology", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7182", title: "Psychology", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Religious Studies"), name: "Religious Studies", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7062", title: "Religious Studies", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Sociology"), name: "Sociology", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7192", title: "Sociology", status: "CURRENT" }] },
      { id: makeId("AQA", "A_LEVEL", "Spanish"), name: "Spanish", examBoard: "AQA", qualification: "A_LEVEL", level: "A_LEVEL", tiering: NOT_TIERED, specs: [{ code: "7692", title: "Spanish", status: "CURRENT" }] },
    ];


export const AQA_POST16 = {
  as: AQA_AS_SUBJECTS,
  aLevel: AQA_ALEVEL_SUBJECTS,
} as const;

/** Convenience helpers. */
export const listAsSubjectsAqa = (): readonly SubjectMenuItem[] => AQA_AS_SUBJECTS;
export const listALevelSubjectsAqa = (): readonly SubjectMenuItem[] => AQA_ALEVEL_SUBJECTS;
