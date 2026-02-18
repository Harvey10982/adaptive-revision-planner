/* eslint-disable @typescript-eslint/consistent-type-assertions */
/**
 * AQA subject catalog (File 1 / selection index).
 *
 * Purpose:
 * - Drive the initial setup flow:
 *   - Qualification (GCSE vs A-Level)
 *   - Exam board (AQA)
 *   - Post-16 level (AS vs A-Level) where relevant
 *   - Subject
 *   - Tier (Foundation/Higher) only for tiered GCSEs
 *   - Subject options where the specification requires choices (eg English Literature set texts)
 *
 * Data sources (AQA):
 * - Qualification + subject + spec-code lists are taken from the AQA "All qualifications" page.
 * - English Literature (8702) option lists are taken from AQA's subject-content pages.
 * - GCSE tiering for: Maths (8300), Sciences (8461/8462/8463/8464), Statistics (8382) and MFL/GCSE Languages is taken from AQA "specification at a glance" pages.
 *
 * Notes:
 * - Some subjects have multiple spec variants (eg languages with legacy + current, Business new + legacy, Art pathways).
 *   These appear under `specs[]` and should be presented as an extra dropdown when `specs.length > 1`.
 * - `optionGroups[]` are choices that do not change the spec code, but do change which content the learner studies.
 */

export type ExamBoardId = "AQA";
export type QualificationId = "GCSE" | "A_LEVEL";
export type Post16LevelId = "AS" | "A_LEVEL";
export type TierId = "FOUNDATION" | "HIGHER";
export type SpecStatus = "CURRENT" | "LEGACY";

export type Tiering =
  | { kind: "TIERED"; tiers: readonly TierId[] }
  | { kind: "NOT_TIERED" };

export interface SpecVariant {
  /** Eg "8702" */
  code: string;
  /** Human label shown to users. */
  title: string;
  /** CURRENT vs LEGACY (where AQA explicitly marks a spec as legacy). */
  status: SpecStatus;
  /** Optional metadata when it is known/important for UI (eg "first teaching 2024"). */
  firstTeachingYear?: number;
  firstExamYear?: number;
  lastExamYear?: number;
  notes?: string;
}

export interface Option {
  id: string;
  label: string;
  notes?: string;
  validFromExamYear?: number;
  validToExamYear?: number;
}

export interface OptionGroup {
  id: string;
  label: string;
  required: boolean;
  multiSelect: boolean;
  options: readonly Option[];
}

export interface SubjectMenuItem {
  id: string;
  name: string;
  examBoard: ExamBoardId;
  qualification: QualificationId;
  /** Only set for post-16 subjects (AS vs A-Level). */
  level?: Post16LevelId;
  tiering: Tiering;
  /** 1+ AQA spec variants that represent the same "subject" in UI. */
  specs: readonly SpecVariant[];
  /** Subject options (eg English Lit set texts). */
  optionGroups?: readonly OptionGroup[];
}

export interface ExamBoardCatalog {
  examBoard: ExamBoardId;
  gcse: readonly SubjectMenuItem[];
  post16: {
    as: readonly SubjectMenuItem[];
    aLevel: readonly SubjectMenuItem[];
  };
}

export const TIERED_FH = { kind: "TIERED", tiers: ["FOUNDATION", "HIGHER"] as const } as const;
export const NOT_TIERED = { kind: "NOT_TIERED" } as const;

const slugify = (s: string): string =>
  s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const makeId = (...parts: string[]): string => parts.map(slugify).join("__");

/**
 * English Literature (8702) — GCSE — AQA
 * Option groups are modelled exactly as "choose one" blocks on AQA.
 */
const GCSE_AQA_ENGLISH_LITERATURE_OPTIONS: readonly OptionGroup[] = [
  {
    id: "shakespeare",
    label: "Shakespeare play (Paper 1)",
    required: true,
    multiSelect: false,
    options: [
      { id: "macbeth", label: "Macbeth" },
      { id: "romeo-and-juliet", label: "Romeo and Juliet" },
      { id: "the-tempest", label: "The Tempest" },
      { id: "the-merchant-of-venice", label: "The Merchant of Venice" },
      { id: "much-ado-about-nothing", label: "Much Ado About Nothing" },
      { id: "julius-caesar", label: "Julius Caesar" },
    ],
  },
  {
    id: "nineteenth-century-novel",
    label: "19th-century novel (Paper 1)",
    required: true,
    multiSelect: false,
    options: [
      { id: "a-christmas-carol", label: "A Christmas Carol" },
      { id: "great-expectations", label: "Great Expectations" },
      { id: "jane-eyre", label: "Jane Eyre" },
      { id: "frankenstein", label: "Frankenstein" },
      { id: "dr-jekyll-and-mr-hyde", label: "The Strange Case of Dr Jekyll and Mr Hyde" },
      { id: "pride-and-prejudice", label: "Pride and Prejudice" },
      { id: "the-sign-of-four", label: "The Sign of Four" },
    ],
  },
  {
    id: "modern-text",
    label: "Modern text (Paper 2)",
    required: true,
    multiSelect: false,
    options: [
      // Drama
      { id: "an-inspector-calls", label: "An Inspector Calls" },
      { id: "blood-brothers", label: "Blood Brothers (musical version)" },
      { id: "dna", label: "DNA" },
      { id: "a-taste-of-honey", label: "A Taste of Honey" },
      { id: "princess-and-the-hustler", label: "Princess & The Hustler", validFromExamYear: 2025 },
      { id: "leave-taking", label: "Leave Taking", validFromExamYear: 2025 },
      // Withdrawn after 2024
      { id: "the-history-boys", label: "The History Boys", validToExamYear: 2024, notes: "Last exam 2024 (withdrawn after this series)." },
      { id: "the-curious-incident", label: "The Curious Incident of the Dog in the Night-Time (play script)", validToExamYear: 2024, notes: "Last exam 2024 (withdrawn after this series)." },

      // Prose
      { id: "lord-of-the-flies", label: "Lord of the Flies" },
      { id: "telling-tales", label: "Telling Tales (AQA anthology)" },
      { id: "animal-farm", label: "Animal Farm" },
      { id: "anita-and-me", label: "Anita and Me" },
      { id: "pigeon-english", label: "Pigeon English" },
      { id: "my-name-is-leon", label: "My Name is Leon", validFromExamYear: 2025 },
      // Withdrawn after 2024
      { id: "never-let-me-go", label: "Never Let Me Go", validToExamYear: 2024, notes: "Last exam 2024 (withdrawn after this series)." },
    ],
  },
  {
    id: "poetry-cluster",
    label: "Poetry cluster (Paper 2)",
    required: true,
    multiSelect: false,
    options: [
      { id: "love-and-relationships", label: "Love and Relationships" },
      { id: "power-and-conflict", label: "Power and Conflict" },
      { id: "worlds-and-lives", label: "Worlds and Lives", validFromExamYear: 2025 },
    ],
  },
] as const;

export const AQA_GCSE_SUBJECTS: readonly SubjectMenuItem[] = [
    {
      id: makeId("AQA", "GCSE", "Art and Design"),
      name: "Art and Design",
      examBoard: "AQA",
      qualification: "GCSE",
      tiering: NOT_TIERED,
      // Pathways are separate AQA specs; expose as spec variants.
      specs: [
        { code: "8201", title: "Art and Design (Art, craft and design)", status: "CURRENT" },
        { code: "8202", title: "Art and Design (Fine art)", status: "CURRENT" },
        { code: "8203", title: "Art and Design (Graphic communication)", status: "CURRENT" },
        { code: "8204", title: "Art and Design (Textile design)", status: "CURRENT" },
        { code: "8205", title: "Art and Design (Three-dimensional design)", status: "CURRENT" },
        { code: "8206", title: "Art and Design (Photography)", status: "CURRENT" },
      ],
    },
    { id: makeId("AQA", "GCSE", "Bengali"), name: "Bengali", examBoard: "AQA", qualification: "GCSE", tiering: TIERED_FH, specs: [{ code: "8638", title: "Bengali", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Biology"), name: "Biology", examBoard: "AQA", qualification: "GCSE", tiering: TIERED_FH, specs: [{ code: "8461", title: "Biology", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Business"), name: "Business", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8132", title: "Business", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Chemistry"), name: "Chemistry", examBoard: "AQA", qualification: "GCSE", tiering: TIERED_FH, specs: [{ code: "8462", title: "Chemistry", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Chinese (Mandarin)"), name: "Chinese (Mandarin)", examBoard: "AQA", qualification: "GCSE", tiering: TIERED_FH, specs: [{ code: "8673", title: "Chinese (Mandarin)", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Citizenship Studies"), name: "Citizenship Studies", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8100", title: "Citizenship Studies", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Combined Science: Synergy"), name: "Combined Science: Synergy", examBoard: "AQA", qualification: "GCSE", tiering: TIERED_FH, specs: [{ code: "8465", title: "Combined Science: Synergy", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Combined Science: Trilogy"), name: "Combined Science: Trilogy", examBoard: "AQA", qualification: "GCSE", tiering: TIERED_FH, specs: [{ code: "8464", title: "Combined Science: Trilogy", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Computer Science"), name: "Computer Science", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8525", title: "Computer Science", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Dance"), name: "Dance", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8236", title: "Dance", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Design and Technology"), name: "Design and Technology", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8552", title: "Design and Technology", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Drama"), name: "Drama", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8261", title: "Drama", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Economics"), name: "Economics", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8136", title: "Economics", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Engineering"), name: "Engineering", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8852", title: "Engineering", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "English Language"), name: "English Language", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8700", title: "English Language", status: "CURRENT" }] },
    {
      id: makeId("AQA", "GCSE", "English Literature"),
      name: "English Literature",
      examBoard: "AQA",
      qualification: "GCSE",
      tiering: NOT_TIERED,
      specs: [{ code: "8702", title: "English Literature", status: "CURRENT" }],
      optionGroups: GCSE_AQA_ENGLISH_LITERATURE_OPTIONS,
    },
    { id: makeId("AQA", "GCSE", "Food Preparation and Nutrition"), name: "Food Preparation and Nutrition", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8585", title: "Food Preparation and Nutrition", status: "CURRENT" }] },
    {
      id: makeId("AQA", "GCSE", "French"),
      name: "French",
      examBoard: "AQA",
      qualification: "GCSE",
      tiering: TIERED_FH,
      specs: [
        { code: "8652", title: "French (current specification)", status: "CURRENT", firstTeachingYear: 2024, firstExamYear: 2026 },
      ],
    },
    { id: makeId("AQA", "GCSE", "Geography"), name: "Geography", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8035", title: "Geography", status: "CURRENT" }] },
    {
      id: makeId("AQA", "GCSE", "German"),
      name: "German",
      examBoard: "AQA",
      qualification: "GCSE",
      tiering: TIERED_FH,
      specs: [
        { code: "8662", title: "German (current specification)", status: "CURRENT" },
      ],
    },
    { id: makeId("AQA", "GCSE", "Hebrew (Modern)"), name: "Hebrew (Modern)", examBoard: "AQA", qualification: "GCSE", tiering: TIERED_FH, specs: [{ code: "8678", title: "Hebrew (Modern)", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "History"), name: "History", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8145", title: "History", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Italian"), name: "Italian", examBoard: "AQA", qualification: "GCSE", tiering: TIERED_FH, specs: [{ code: "8633", title: "Italian", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Mathematics"), name: "Mathematics", examBoard: "AQA", qualification: "GCSE", tiering: TIERED_FH, specs: [{ code: "8300", title: "Mathematics", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Media Studies"), name: "Media Studies", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8572", title: "Media Studies", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Music"), name: "Music", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8271", title: "Music", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Panjabi"), name: "Panjabi", examBoard: "AQA", qualification: "GCSE", tiering: TIERED_FH, specs: [{ code: "8683", title: "Panjabi", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Physical Education"), name: "Physical Education", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8582", title: "Physical Education", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Physics"), name: "Physics", examBoard: "AQA", qualification: "GCSE", tiering: TIERED_FH, specs: [{ code: "8463", title: "Physics", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Polish"), name: "Polish", examBoard: "AQA", qualification: "GCSE", tiering: TIERED_FH, specs: [{ code: "8688", title: "Polish", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Psychology"), name: "Psychology", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8182", title: "Psychology", status: "CURRENT" }] },
    
    {
      id: makeId("AQA", "GCSE", "Religious Studies"),
      name: "Religious Studies",
      examBoard: "AQA",
      qualification: "GCSE",
      tiering: NOT_TIERED,
      specs: [
        { code: "8061", title: "Religious Studies (Route A)", status: "CURRENT" },
        { code: "8062", title: "Religious Studies (Route B)", status: "CURRENT" },
        { code: "8063", title: "Religious Studies (Short Course)", status: "CURRENT" },
      ],
    },

    { id: makeId("AQA", "GCSE", "Sociology"), name: "Sociology", examBoard: "AQA", qualification: "GCSE", tiering: NOT_TIERED, specs: [{ code: "8192", title: "Sociology", status: "CURRENT" }] },
    {
      id: makeId("AQA", "GCSE", "Spanish"),
      name: "Spanish",
      examBoard: "AQA",
      qualification: "GCSE",
      tiering: TIERED_FH,
      specs: [
        { code: "8692", title: "Spanish (current specification)", status: "CURRENT", firstTeachingYear: 2024, firstExamYear: 2026 },
      ],
    },
    { id: makeId("AQA", "GCSE", "Statistics"), name: "Statistics", examBoard: "AQA", qualification: "GCSE", tiering: TIERED_FH, specs: [{ code: "8382", title: "Statistics", status: "CURRENT" }] },
    { id: makeId("AQA", "GCSE", "Urdu"), name: "Urdu", examBoard: "AQA", qualification: "GCSE", tiering: TIERED_FH, specs: [{ code: "8648", title: "Urdu", status: "CURRENT" }] },
  ];

/** Convenience helper. */
export const listGcseSubjectsAqa = (): readonly SubjectMenuItem[] => AQA_GCSE_SUBJECTS;
