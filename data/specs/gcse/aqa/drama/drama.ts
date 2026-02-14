import { SubjectSpecification } from "@/types/SubjectSpecification";

export const specification: SubjectSpecification = {
  units: [
    // =====================================================
    // 1. DEVISING DRAMA (Component 2)
    // =====================================================
    {
      id: "unit-devising-drama",
      name: "Devising drama (Component 2)",
      topics: [
        {
          id: "topic-devising-process",
          name: "Devising process",
          subTopics: [
            { id: "sub-devising-stimulus", name: "Using a stimulus to create drama" },
            { id: "sub-idea-generation", name: "Idea generation and development" },
            { id: "sub-structure-and-style", name: "Structure, style and genre" },
            { id: "sub-rehearsal-and-refinement", name: "Rehearsal and refinement" },
            { id: "sub-evaluation-decisions", name: "Evaluating decisions and outcomes" }
          ]
        },
        {
          id: "topic-performance-skills",
          name: "Performance skills",
          subTopics: [
            { id: "sub-vocal-skills", name: "Vocal skills (pace, pause, pitch, projection, tone)" },
            { id: "sub-physical-skills", name: "Physical skills (movement, gesture, posture, proxemics)" },
            { id: "sub-characterisation", name: "Characterisation" },
            { id: "sub-use-of-space", name: "Use of space and stage areas" },
            { id: "sub-interaction", name: "Interaction and responding to others" }
          ]
        },
        {
          id: "topic-devising-log",
          name: "Devising log / written portfolio",
          subTopics: [
            { id: "sub-structure-of-log", name: "Structure of the devising log" },
            { id: "sub-analysis-of-research", name: "Research and influences" },
            { id: "sub-reflection-process", name: "Reflection on process and progress" },
            { id: "sub-justifying-decisions", name: "Justifying artistic decisions" },
            { id: "sub-evaluating-final", name: "Evaluating the final performance" }
          ]
        }
      ]
    },

    // =====================================================
    // 2. TEXTS IN PRACTICE (Component 3)
    // =====================================================
    {
      id: "unit-texts-in-practice",
      name: "Texts in practice (Component 3)",
      topics: [
        {
          id: "topic-performance-from-text",
          name: "Performance from a text",
          subTopics: [
            { id: "sub-understanding-text", name: "Understanding the text and intentions" },
            { id: "sub-interpretation", name: "Interpretation (choices and style)" },
            { id: "sub-blocking-stagecraft", name: "Blocking and stagecraft" },
            { id: "sub-vocal-physical-integration", name: "Integrating vocal and physical skills" },
            { id: "sub-working-with-director", name: "Working with a director and feedback" }
          ]
        },
        {
          id: "topic-set-text-options",
          name: "Set texts (options)",
          subTopics: [
            { id: "sub-set-text-1", name: "Set text option 1 (teacher selects correct title)" },
            { id: "sub-set-text-2", name: "Set text option 2 (teacher selects correct title)" },
            { id: "sub-set-text-3", name: "Set text option 3 (teacher selects correct title)" },
            { id: "sub-set-text-4", name: "Set text option 4 (teacher selects correct title)" }
          ]
        }
      ]
    },

    // =====================================================
    // 3. UNDERSTANDING DRAMA (Written exam - Component 1)
    // =====================================================
    {
      id: "unit-understanding-drama",
      name: "Understanding drama (Component 1)",
      topics: [
        {
          id: "topic-drama-terminology",
          name: "Drama terminology and conventions",
          subTopics: [
            { id: "sub-style-genre", name: "Style and genre" },
            { id: "sub-structure", name: "Structure (plot, tension, pace, contrast)" },
            { id: "sub-character-relationships", name: "Character and relationships" },
            { id: "sub-performance-conventions", name: "Performance conventions" },
            { id: "sub-dramatic-tension", name: "Dramatic tension and audience impact" }
          ]
        },
        {
          id: "topic-theatre-maker-skills",
          name: "Theatre maker skills",
          subTopics: [
            { id: "sub-acting", name: "Acting (interpretation and communication)" },
            { id: "sub-directing", name: "Directing (stagecraft and interpretation)" },
            { id: "sub-design", name: "Design (set, costume, lighting, sound, props)" }
          ]
        },
        {
          id: "topic-live-theatre-evaluation",
          name: "Live theatre evaluation",
          subTopics: [
            { id: "sub-live-theatre-experience", name: "Describing a live theatre experience" },
            { id: "sub-evaluating-acting", name: "Evaluating acting and performance choices" },
            { id: "sub-evaluating-design", name: "Evaluating design choices" },
            { id: "sub-evaluating-directing", name: "Evaluating directing and staging" },
            { id: "sub-writing-structure", name: "Writing structure and using evidence" }
          ]
        },
        {
          id: "topic-set-text-analysis",
          name: "Set text knowledge and analysis",
          subTopics: [
            { id: "sub-plot-characters-themes", name: "Plot, characters and themes" },
            { id: "sub-context-intentions", name: "Context and playwright intentions" },
            { id: "sub-performance-interpretation", name: "Performance interpretation (how to stage/act it)" },
            { id: "sub-design-interpretation", name: "Design interpretation (set/costume/lighting/sound)" }
          ]
        }
      ]
    }
  ],

  papers: [
    {
      id: "component-1",
      name: "Component 1: Understanding drama (Written exam)",
      assessedNodeIds: [
        "unit-understanding-drama"
      ]
    },
    {
      id: "component-2",
      name: "Component 2: Devising drama",
      assessedNodeIds: [
        "unit-devising-drama"
      ]
    },
    {
      id: "component-3",
      name: "Component 3: Texts in practice",
      assessedNodeIds: [
        "unit-texts-in-practice"
      ]
    }
  ]
};
