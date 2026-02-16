import type { SubjectSpecification } from "../../../../types/SubjectSpecification"

export const specification: SubjectSpecification = {
  units: [
    // =====================================================
    // 1. PERFORMANCE SKILLS
    // =====================================================
    {
      id: "unit-performance-skills",
      name: "Performance skills",
      topics: [
        {
          id: "topic-physical-technical-skills",
          name: "Physical and technical skills",
          subTopics: [
            { id: "sub-action-content", name: "Action content (steps, gestures, locomotion)" },
            { id: "sub-space-and-pathways", name: "Space (levels, pathways, directions, formations)" },
            { id: "sub-time-and-rhythm", name: "Time (rhythm, tempo, timing, pace)" },
            { id: "sub-dynamics", name: "Dynamics (energy, force, flow, weight)" },
            { id: "sub-accuracy-control", name: "Accuracy and control" },
            { id: "sub-stamina-strength-flexibility", name: "Stamina, strength and flexibility" },
            { id: "sub-alignment-posture", name: "Alignment and posture" },
            { id: "sub-safe-practice", name: "Safe practice and injury prevention" }
          ]
        },
        {
          id: "topic-expressive-skills",
          name: "Expressive skills",
          subTopics: [
            { id: "sub-focus-and-projection", name: "Focus and projection" },
            { id: "sub-communication-intent", name: "Communication of intent" },
            { id: "sub-interpretation-style", name: "Interpretation of style and genre" },
            { id: "sub-emotional-qualities", name: "Emotional and performance qualities" },
            { id: "sub-musicality", name: "Musicality and sensitivity to accompaniment" },
            { id: "sub-performance-presence", name: "Performance presence" }
          ]
        },
        {
          id: "topic-collaboration",
          name: "Collaboration and rehearsal",
          subTopics: [
            { id: "sub-working-with-others", name: "Working with others (duet/trio/group)" },
            { id: "sub-rehearsal-discipline", name: "Rehearsal discipline and professionalism" },
            { id: "sub-feedback-improvement", name: "Using feedback to improve" },
            { id: "sub-rehearsal-planning", name: "Planning rehearsals (targets and refinement)" }
          ]
        }
      ]
    },

    // =====================================================
    // 2. CHOREOGRAPHY
    // =====================================================
    {
      id: "unit-choreography",
      name: "Choreography",
      topics: [
        {
          id: "topic-choreographic-process",
          name: "Choreographic process",
          subTopics: [
            { id: "sub-starting-points", name: "Starting points (idea, stimulus, theme)" },
            { id: "sub-intentions-communication", name: "Intentions and communication of meaning" },
            { id: "sub-development-and-structure", name: "Development and structure" },
            { id: "sub-evaluation-refinement", name: "Evaluation and refinement" }
          ]
        },
        {
          id: "topic-choreographic-devices",
          name: "Choreographic devices",
          subTopics: [
            { id: "sub-canon", name: "Canon" },
            { id: "sub-unison", name: "Unison" },
            { id: "sub-contrast", name: "Contrast" },
            { id: "sub-repetition", name: "Repetition" },
            { id: "sub-variation", name: "Variation" },
            { id: "sub-retrograde", name: "Retrograde" },
            { id: "sub-accumulation", name: "Accumulation" },
            { id: "sub-fragmentation", name: "Fragmentation" },
            { id: "sub-transitions", name: "Transitions" }
          ]
        },
        {
          id: "topic-structuring-dance",
          name: "Structuring dance",
          subTopics: [
            { id: "sub-phrase-structure", name: "Phrase structure" },
            { id: "sub-formations-and-grouping", name: "Formations and grouping" },
            { id: "sub-dramatic-structure", name: "Dramatic structure (climax, tension, resolution)" },
            { id: "sub-motifs", name: "Motifs (creation and development)" }
          ]
        },
        {
          id: "topic-choreographic-elements",
          name: "Choreographic elements",
          subTopics: [
            { id: "sub-action", name: "Action" },
            { id: "sub-space", name: "Space" },
            { id: "sub-relationships", name: "Relationships (with dancers / audience)" },
            { id: "sub-dynamics", name: "Dynamics" },
            { id: "sub-time", name: "Time" }
          ]
        }
      ]
    },

    // =====================================================
    // 3. APPRECIATION AND ANALYSIS
    // =====================================================
    {
      id: "unit-appreciation",
      name: "Appreciation and analysis",
      topics: [
        {
          id: "topic-analysing-dance",
          name: "Analysing dance",
          subTopics: [
            { id: "sub-describe", name: "Describe (what you see)" },
            { id: "sub-analyse", name: "Analyse (how meaning is created)" },
            { id: "sub-interpret", name: "Interpret (intentions and impact)" },
            { id: "sub-evaluate", name: "Evaluate (judgements and justification)" },
            { id: "sub-evidence-from-work", name: "Using evidence from the work" },
            { id: "sub-dance-vocabulary", name: "Accurate dance vocabulary" }
          ]
        },
        {
          id: "topic-production-elements",
          name: "Production elements",
          subTopics: [
            { id: "sub-accompaniment", name: "Accompaniment / music / sound" },
            { id: "sub-physical-setting", name: "Physical setting / staging" },
            { id: "sub-costume", name: "Costume" },
            { id: "sub-lighting", name: "Lighting" },
            { id: "sub-set-props", name: "Set and props" }
          ]
        },
        {
          id: "topic-set-works-options",
          name: "Set works (options)",
          subTopics: [
            { id: "sub-set-work-1", name: "Set work 1 (teacher selects the correct title for the series)" },
            { id: "sub-set-work-2", name: "Set work 2 (teacher selects the correct title for the series)" },
            { id: "sub-professional-works-context", name: "Context, style, genre and influences" }
          ]
        },
        {
          id: "topic-anthology-excerpts",
          name: "Anthology / professional excerpts (options)",
          subTopics: [
            { id: "sub-anthology-excerpt-1", name: "Professional excerpt 1 (if applicable)" },
            { id: "sub-anthology-excerpt-2", name: "Professional excerpt 2 (if applicable)" }
          ]
        }
      ]
    }
  ],

  papers: [
    {
      id: "component-1",
      name: "Component 1: Performance and choreography",
      assessedNodeIds: [
        "unit-performance-skills",
        "unit-choreography"
      ]
    },
    {
      id: "component-2",
      name: "Component 2: Dance appreciation",
      assessedNodeIds: [
        "unit-appreciation"
      ]
    }
  ]
};
