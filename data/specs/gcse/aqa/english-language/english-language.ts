import type { SubjectSpecification } from "../../../../types/subjectSpecification"

export const specification: SubjectSpecification = {
  units: [

    // =====================================================
    // 1. READING SKILLS
    // =====================================================
    {
      id: "unit-reading-skills",
      name: "Reading Skills",
      topics: [

        // -------------------------
        // Fiction Analysis (Paper 1)
        // -------------------------
        {
          id: "topic-fiction-analysis",
          name: "Fiction Text Analysis",
          subTopics: [
            { id: "sub-inference", name: "Inference & Deduction" },
            { id: "sub-evidence-selection", name: "Selecting Relevant Evidence" },
            { id: "sub-language-analysis", name: "Language Analysis" },
            { id: "sub-structure-analysis", name: "Structure Analysis" },
            { id: "sub-evaluation-fiction", name: "Critical Evaluation of Fiction" }
          ]
        },

        {
          id: "topic-language-devices",
          name: "Language Devices",
          subTopics: [
            { id: "sub-simile", name: "Simile" },
            { id: "sub-metaphor", name: "Metaphor" },
            { id: "sub-personification", name: "Personification" },
            { id: "sub-pathetic-fallacy", name: "Pathetic Fallacy" },
            { id: "sub-imagery", name: "Imagery" },
            { id: "sub-alliteration", name: "Alliteration" },
            { id: "sub-onomatopoeia", name: "Onomatopoeia" },
            { id: "sub-hyperbole", name: "Hyperbole" },
            { id: "sub-emotive-language", name: "Emotive Language" },
            { id: "sub-rhetorical-questions", name: "Rhetorical Questions" }
          ]
        },

        {
          id: "topic-structural-devices",
          name: "Structural Devices",
          subTopics: [
            { id: "sub-foreshadowing", name: "Foreshadowing" },
            { id: "sub-flashback", name: "Flashback" },
            { id: "sub-cyclical-structure", name: "Cyclical Structure" },
            { id: "sub-climax-anticlimax", name: "Climax & Anticlimax" },
            { id: "sub-shifts-focus", name: "Shifts in Focus" },
            { id: "sub-narrative-voice", name: "Narrative Voice" }
          ]
        },

        // -------------------------
        // Non-Fiction Analysis (Paper 2)
        // -------------------------
        {
          id: "topic-nonfiction-analysis",
          name: "Non-Fiction & Viewpoints",
          subTopics: [
            { id: "sub-identifying-viewpoints", name: "Identifying Viewpoints & Perspectives" },
            { id: "sub-comparing-texts", name: "Comparing Texts" },
            { id: "sub-tone-analysis", name: "Tone Analysis" },
            { id: "sub-bias", name: "Bias" },
            { id: "sub-fact-vs-opinion", name: "Fact vs Opinion" },
            { id: "sub-evaluation-nonfiction", name: "Evaluation of Non-Fiction" }
          ]
        }
      ]
    },

    // =====================================================
    // 2. WRITING SKILLS
    // =====================================================
    {
      id: "unit-writing-skills",
      name: "Writing Skills",
      topics: [

        // -------------------------
        // Creative Writing (Paper 1)
        // -------------------------
        {
          id: "topic-creative-writing",
          name: "Creative Writing",
          subTopics: [
            { id: "sub-descriptive-writing", name: "Descriptive Writing" },
            { id: "sub-narrative-writing", name: "Narrative Writing" },
            { id: "sub-characterisation", name: "Characterisation" },
            { id: "sub-setting-description", name: "Setting Description" },
            { id: "sub-show-dont-tell", name: "Show Don't Tell" },
            { id: "sub-sensory-details", name: "Sensory Details" },
            { id: "sub-vocabulary-choices", name: "Ambitious Vocabulary Choices" }
          ]
        },

        // -------------------------
        // Transactional Writing (Paper 2)
        // -------------------------
        {
          id: "topic-transactional-writing",
          name: "Transactional & Persuasive Writing",
          subTopics: [
            { id: "sub-articles", name: "Articles" },
            { id: "sub-speeches", name: "Speeches" },
            { id: "sub-letters", name: "Letters" },
            { id: "sub-essays", name: "Essays" },
            { id: "sub-persuasive-techniques", name: "Persuasive Techniques" },
            { id: "sub-argument-writing", name: "Argument Writing" },
            { id: "sub-audience-purpose", name: "Audience & Purpose" }
          ]
        },

        // -------------------------
        // Technical Accuracy
        // -------------------------
        {
          id: "topic-technical-accuracy",
          name: "Spelling, Punctuation & Grammar",
          subTopics: [
            { id: "sub-sentence-structures", name: "Sentence Structures" },
            { id: "sub-simple-complex-compound", name: "Simple, Compound & Complex Sentences" },
            { id: "sub-punctuation", name: "Punctuation" },
            { id: "sub-paragraphing", name: "Paragraphing" },
            { id: "sub-tense-control", name: "Tense Control" },
            { id: "sub-accurate-spelling", name: "Accurate Spelling" }
          ]
        }
      ]
    },

    // =====================================================
    // 3. SPOKEN LANGUAGE
    // =====================================================
    {
      id: "unit-spoken-language",
      name: "Spoken Language",
      topics: [
        {
          id: "topic-presentations",
          name: "Presentations & Discussion",
          subTopics: [
            { id: "sub-planning-presentation", name: "Planning a Presentation" },
            { id: "sub-speaking-clearly", name: "Speaking Clearly & Confidently" },
            { id: "sub-responding-questions", name: "Responding to Questions" },
            { id: "sub-using-standard-english", name: "Using Standard English" }
          ]
        }
      ]
    }

  ],

  // =====================================================
  // PAPERS
  // =====================================================
  papers: [
    {
      id: "paper-1",
      name: "Paper 1 – Explorations in Creative Reading and Writing",
      assessedNodeIds: [
        "unit-reading-skills",
        "unit-writing-skills"
      ]
    },
    {
      id: "paper-2",
      name: "Paper 2 – Writers’ Viewpoints and Perspectives",
      assessedNodeIds: [
        "unit-reading-skills",
        "unit-writing-skills"
      ]
    }
  ]
};
