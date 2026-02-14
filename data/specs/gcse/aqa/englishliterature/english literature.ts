import { SubjectSpecification } from "@/types/SubjectSpecification";

type SubTopic = { id: string; name: string };

const makeTextStudySubTopics = (prefix: string): SubTopic[] => [
  { id: `${prefix}-plot-structure`, name: "Plot and structure" },
  { id: `${prefix}-characters`, name: "Characters" },
  { id: `${prefix}-themes-ideas`, name: "Themes and ideas" },
  { id: `${prefix}-context`, name: "Context" },
  { id: `${prefix}-language-form-structure`, name: "Language, form and structure" },
  { id: `${prefix}-key-quotes`, name: "Key quotations and evidence" },
  { id: `${prefix}-extract-question`, name: "Extract question skills" },
  { id: `${prefix}-whole-text-essay`, name: "Whole-text essay skills" },
  { id: `${prefix}-planning-timing`, name: "Planning and timing" }
];

const makePoetryClusterSubTopics = (prefix: string, poems: string[]): SubTopic[] => [
  ...poems.map((title) => ({
    id: `${prefix}-poem-${title
      .toLowerCase()
      .replace(/’/g, "")
      .replace(/'/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")}`,
    name: title
  })),
  { id: `${prefix}-methods`, name: "Poetic methods (language, form and structure)" },
  { id: `${prefix}-themes`, name: "Themes across the cluster" },
  { id: `${prefix}-comparison`, name: "Comparison skills (linking poems)" },
  { id: `${prefix}-essay-planning`, name: "Essay planning and timing" }
];

export const specification: SubjectSpecification = {
  units: [
    // =====================================================
    // SHAKESPEARE (choose ONE play)
    // =====================================================
    {
      id: "unit-shakespeare",
      name: "Shakespeare",
      topics: [
        {
          id: "topic-shakespeare-macbeth",
          name: "Macbeth",
          subTopics: makeTextStudySubTopics("sub-shakespeare-macbeth")
        },
        {
          id: "topic-shakespeare-romeo-and-juliet",
          name: "Romeo and Juliet",
          subTopics: makeTextStudySubTopics("sub-shakespeare-romeo-and-juliet")
        },
        {
          id: "topic-shakespeare-the-tempest",
          name: "The Tempest",
          subTopics: makeTextStudySubTopics("sub-shakespeare-the-tempest")
        },
        {
          id: "topic-shakespeare-the-merchant-of-venice",
          name: "The Merchant of Venice",
          subTopics: makeTextStudySubTopics("sub-shakespeare-the-merchant-of-venice")
        },
        {
          id: "topic-shakespeare-much-ado-about-nothing",
          name: "Much Ado About Nothing",
          subTopics: makeTextStudySubTopics("sub-shakespeare-much-ado-about-nothing")
        },
        {
          id: "topic-shakespeare-julius-caesar",
          name: "Julius Caesar",
          subTopics: makeTextStudySubTopics("sub-shakespeare-julius-caesar")
        }
      ]
    },

    // =====================================================
    // 19TH-CENTURY NOVEL (choose ONE novel)
    // =====================================================
    {
      id: "unit-19th-century-novel",
      name: "19th-century novel",
      topics: [
        {
          id: "topic-19c-jekyll-and-hyde",
          name: "The Strange Case of Dr Jekyll and Mr Hyde",
          subTopics: makeTextStudySubTopics("sub-19c-jekyll-and-hyde")
        },
        {
          id: "topic-19c-a-christmas-carol",
          name: "A Christmas Carol",
          subTopics: makeTextStudySubTopics("sub-19c-a-christmas-carol")
        },
        {
          id: "topic-19c-great-expectations-1867",
          name: "Great Expectations (1867)",
          subTopics: makeTextStudySubTopics("sub-19c-great-expectations-1867")
        },
        {
          id: "topic-19c-jane-eyre",
          name: "Jane Eyre",
          subTopics: makeTextStudySubTopics("sub-19c-jane-eyre")
        },
        {
          id: "topic-19c-frankenstein-1831",
          name: "Frankenstein (1831)",
          subTopics: makeTextStudySubTopics("sub-19c-frankenstein-1831")
        },
        {
          id: "topic-19c-pride-and-prejudice",
          name: "Pride and Prejudice",
          subTopics: makeTextStudySubTopics("sub-19c-pride-and-prejudice")
        },
        {
          id: "topic-19c-the-sign-of-four",
          name: "The Sign of Four",
          subTopics: makeTextStudySubTopics("sub-19c-the-sign-of-four")
        }
      ]
    },

    // =====================================================
    // MODERN TEXTS (choose ONE text)
    // =====================================================
    {
      id: "unit-modern-texts",
      name: "Modern texts",
      topics: [
        // Drama
        {
          id: "topic-modern-an-inspector-calls",
          name: "An Inspector Calls",
          subTopics: makeTextStudySubTopics("sub-modern-an-inspector-calls")
        },
        {
          id: "topic-modern-blood-brothers-musical-version",
          name: "Blood Brothers (musical version)",
          subTopics: makeTextStudySubTopics("sub-modern-blood-brothers-musical-version")
        },
        {
          id: "topic-modern-the-history-boys-last-exam-2024",
          name: "The History Boys (Last exam 2024)",
          subTopics: makeTextStudySubTopics("sub-modern-the-history-boys-last-exam-2024")
        },
        {
          id: "topic-modern-dna",
          name: "DNA",
          subTopics: makeTextStudySubTopics("sub-modern-dna")
        },
        {
          id: "topic-modern-curious-incident-play-script-last-exam-2024",
          name: "The Curious Incident of the Dog in the Night-Time (play script) (Last exam 2024)",
          subTopics: makeTextStudySubTopics("sub-modern-curious-incident-play-script-last-exam-2024")
        },
        {
          id: "topic-modern-a-taste-of-honey",
          name: "A Taste of Honey",
          subTopics: makeTextStudySubTopics("sub-modern-a-taste-of-honey")
        },
        {
          id: "topic-modern-princess-and-the-hustler-first-teaching-2023-first-exam-2025",
          name: "Princess & The Hustler (First teaching 2023, first exam 2025)",
          subTopics: makeTextStudySubTopics("sub-modern-princess-and-the-hustler-first-teaching-2023-first-exam-2025")
        },
        {
          id: "topic-modern-leave-taking-first-teaching-2023-first-exam-2025",
          name: "Leave Taking (First teaching 2023, first exam 2025)",
          subTopics: makeTextStudySubTopics("sub-modern-leave-taking-first-teaching-2023-first-exam-2025")
        },

        // Prose
        {
          id: "topic-modern-lord-of-the-flies",
          name: "Lord of the Flies",
          subTopics: makeTextStudySubTopics("sub-modern-lord-of-the-flies")
        },
        {
          id: "topic-modern-aqa-anthology-telling-tales",
          name: "AQA Anthology Telling Tales",
          subTopics: makeTextStudySubTopics("sub-modern-aqa-anthology-telling-tales")
        },
        {
          id: "topic-modern-animal-farm",
          name: "Animal Farm",
          subTopics: makeTextStudySubTopics("sub-modern-animal-farm")
        },
        {
          id: "topic-modern-never-let-me-go-last-exam-2024",
          name: "Never Let Me Go (Last exam 2024)",
          subTopics: makeTextStudySubTopics("sub-modern-never-let-me-go-last-exam-2024")
        },
        {
          id: "topic-modern-anita-and-me",
          name: "Anita and Me",
          subTopics: makeTextStudySubTopics("sub-modern-anita-and-me")
        },
        {
          id: "topic-modern-pigeon-english",
          name: "Pigeon English",
          subTopics: makeTextStudySubTopics("sub-modern-pigeon-english")
        },
        {
          id: "topic-modern-my-name-is-leon-first-teaching-2023-first-exam-2025",
          name: "My Name is Leon (First teaching 2023, first exam 2025)",
          subTopics: makeTextStudySubTopics("sub-modern-my-name-is-leon-first-teaching-2023-first-exam-2025")
        }
      ]
    },

    // =====================================================
    // POETRY ANTHOLOGY (choose ONE cluster; study the full cluster)
    // =====================================================
    {
      id: "unit-poetry-anthology",
      name: "Poetry anthology",
      topics: [
        {
          id: "topic-poetry-love-and-relationships",
          name: "Love and relationships",
          subTopics: makePoetryClusterSubTopics("sub-poetry-love-and-relationships", [
            "When We Two Parted",
            "Love’s Philosophy",
            "Porphyria’s Lover",
            "Sonnet 29 – ‘I think of thee!’",
            "Neutral Tones",
            "Letters from Yorkshire",
            "The Farmer’s Bride",
            "Walking Away",
            "Eden Rock",
            "Follower",
            "Mother, any distance",
            "Before You Were Mine",
            "Winter Swans",
            "Singh Song!",
            "Climbing My Grandfather"
          ])
        },
        {
          id: "topic-poetry-power-and-conflict",
          name: "Power and conflict",
          subTopics: makePoetryClusterSubTopics("sub-poetry-power-and-conflict", [
            "Ozymandias",
            "London",
            "Extract from, The Prelude",
            "My Last Duchess",
            "The Charge of the Light Brigade",
            "Exposure",
            "Storm on the Island",
            "Bayonet Charge",
            "Remains",
            "Poppies",
            "War Photographer",
            "Tissue",
            "The Emigrée",
            "Checking Out Me History",
            "Kamikaze"
          ])
        },
        {
          id: "topic-poetry-worlds-and-lives",
          name: "Worlds and lives",
          subTopics: makePoetryClusterSubTopics("sub-poetry-worlds-and-lives", [
            "Lines Written in Early Spring",
            "England in 1819",
            "Shall earth no more inspire thee",
            "In a London Drawingroom",
            "On an Afternoon Train from Purley to Victoria, 1955",
            "Name Journeys",
            "pot",
            "A Wider View",
            "Homing",
            "A Century Later",
            "The Jewellery Maker",
            "With Birds You’re Never Lonely",
            "A Portable Paradise",
            "Like an Heiress",
            "Thirteen"
          ])
        }
      ]
    },

    // =====================================================
    // UNSEEN POETRY (always assessed on Paper 2)
    // =====================================================
    {
      id: "unit-unseen-poetry",
      name: "Unseen poetry",
      topics: [
        {
          id: "topic-unseen-poetry-analysis",
          name: "Unseen poem analysis",
          subTopics: [
            { id: "sub-unseen-first-read-annotate", name: "First read and annotation" },
            { id: "sub-unseen-language-methods", name: "Language methods (imagery, word choices, tone)" },
            { id: "sub-unseen-form-structure", name: "Form and structure (voice, perspective, shifts)" },
            { id: "sub-unseen-interpretation", name: "Developing an interpretation (AO1)" },
            { id: "sub-unseen-evidence-quotes", name: "Selecting evidence (quotations and references)" },
            { id: "sub-unseen-evaluation-effects", name: "Effects and evaluation (AO2)" },
            { id: "sub-unseen-timing", name: "Timing and planning" }
          ]
        },
        {
          id: "topic-unseen-poetry-comparison",
          name: "Unseen poem comparison",
          subTopics: [
            { id: "sub-unseen-compare-approach", name: "Comparison approach (similarities and differences)" },
            { id: "sub-unseen-compare-themes", name: "Comparing themes and ideas" },
            { id: "sub-unseen-compare-methods", name: "Comparing methods (language, form and structure)" },
            { id: "sub-unseen-compare-structure", name: "Structuring a comparison response" },
            { id: "sub-unseen-compare-timing", name: "Timing and planning" }
          ]
        }
      ]
    },

    // =====================================================
    // SKILLS (cross-course)
    // =====================================================
    {
      id: "unit-exam-skills",
      name: "Skills",
      topics: [
        {
          id: "topic-skills-reading-comprehension",
          name: "Reading comprehension and reading critically",
          subTopics: [
            { id: "sub-skills-literal-inferential", name: "Literal and inferential comprehension" },
            { id: "sub-skills-plot-character-setting", name: "Plot, characterisation, events and settings" },
            { id: "sub-skills-explicit-implied", name: "Explicit vs implied meaning" },
            { id: "sub-skills-motivation-sequence", name: "Motivation and sequencing" },
            { id: "sub-skills-critical-reading", name: "Critical reading and different interpretations" },
            { id: "sub-skills-context-informed", name: "Using social, historical and cultural context" }
          ]
        },
        {
          id: "topic-skills-writers-methods",
          name: "Writer’s methods",
          subTopics: [
            { id: "sub-skills-vocabulary-grammar-structure", name: "Vocabulary, grammar and structural choices" },
            { id: "sub-skills-language-form-structure", name: "Language, form and structure" },
            { id: "sub-skills-presentation-impact", name: "Presentation, quality and impact" },
            { id: "sub-skills-terminology", name: "Using relevant terminology accurately" }
          ]
        },
        {
          id: "topic-skills-comparing-texts",
          name: "Comparing texts",
          subTopics: [
            { id: "sub-skills-compare-contrast", name: "Compare and contrast texts" },
            { id: "sub-skills-compare-theme-character-context-style", name: "Theme, character, context, style and literary quality" },
            { id: "sub-skills-comparison-argument", name: "Building a comparison argument" }
          ]
        },
        {
          id: "topic-skills-writing",
          name: "Writing about literature",
          subTopics: [
            { id: "sub-skills-clear-coherent", name: "Clear and coherent analytical writing" },
            { id: "sub-skills-explain-analyse-evaluate", name: "Describe, explain, analyse and evaluate" },
            { id: "sub-skills-viewpoint", name: "Maintain a point of view" },
            { id: "sub-skills-select-quote", name: "Select and integrate quotations effectively" },
            { id: "sub-skills-spag", name: "Accurate spelling, punctuation and grammar" }
          ]
        }
      ]
    }
  ],

  papers: [
    {
      id: "paper-1",
      name: "Paper 1: Shakespeare and the 19th-century novel",
      assessedNodeIds: ["unit-shakespeare", "unit-19th-century-novel", "unit-exam-skills"]
    },
    {
      id: "paper-2",
      name: "Paper 2: Modern texts and poetry",
      assessedNodeIds: ["unit-modern-texts", "unit-poetry-anthology", "unit-unseen-poetry", "unit-exam-skills"]
    }
  ]
};
