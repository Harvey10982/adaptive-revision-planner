import type { SubjectSpecification } from "../../../../types/subjectSpecification"

export const specification: SubjectSpecification = {
  units: [
    // =====================================================
    // 1. PORTFOLIO (Component 1)
    // =====================================================
    {
      id: "unit-portfolio",
      name: "Portfolio (Component 1)",
      topics: [
        {
          id: "topic-project-planning",
          name: "Project Planning",
          subTopics: [
            { id: "sub-brief-selection", name: "Selecting a theme / brief" },
            { id: "sub-intentions-success-criteria", name: "Intentions and success criteria" },
            { id: "sub-timeline-milestones", name: "Timeline and milestones" },
            { id: "sub-presenting-work", name: "Presenting work coherently" }
          ]
        },
        {
          id: "topic-contextual-studies",
          name: "Research & Contextual Studies (AO1)",
          subTopics: [
            { id: "sub-artist-research", name: "Artist / designer / maker research" },
            { id: "sub-visual-analysis", name: "Visual analysis of sources" },
            { id: "sub-annotated-references", name: "Annotated references and written insight" },
            { id: "sub-links-to-own-work", name: "Linking research to own intentions" },
            { id: "sub-cultural-historical-context", name: "Cultural / historical context (where relevant)" }
          ]
        },
        {
          id: "topic-experimentation-refinement",
          name: "Experimentation & Refinement (AO2)",
          subTopics: [
            { id: "sub-exploring-media", name: "Exploring media, materials and techniques" },
            { id: "sub-iterative-development", name: "Iterative development (versions and improvements)" },
            { id: "sub-compositional-tests", name: "Compositional and design tests" },
            { id: "sub-feedback-and-refine", name: "Using feedback to refine outcomes" },
            { id: "sub-risk-taking", name: "Risk-taking and experimentation" }
          ]
        },
        {
          id: "topic-recording-development",
          name: "Recording & Development (AO3)",
          subTopics: [
            { id: "sub-observational-recording", name: "Observational recording (studies, photos, sketches)" },
            { id: "sub-idea-development", name: "Developing ideas through recording" },
            { id: "sub-technical-recording", name: "Recording technical decisions and process" },
            { id: "sub-annotation-explanations", name: "Annotation explaining choices and progress" }
          ]
        },
        {
          id: "topic-final-outcome",
          name: "Final Outcome & Presentation (AO4)",
          subTopics: [
            { id: "sub-final-piece-quality", name: "Quality of final piece(s)" },
            { id: "sub-personal-response", name: "Personal and meaningful response" },
            { id: "sub-presentation", name: "Presentation (layout, sequencing, clarity)" },
            { id: "sub-evaluation", name: "Evaluation against intentions" }
          ]
        },
        {
          id: "topic-technical-skills",
          name: "Technical Skills (Art and Design (Three-dimensional design))",
          subTopics: [
                { id: "sub-tech-design-development-idea-sketches-models-iterations", name: "Design development (idea sketches, models, iterations)" },
                { id: "sub-tech-materials-and-making-processes-wood-metal-plastic-etc", name: "Materials and making processes (wood, metal, plastic, etc.)" },
                { id: "sub-tech-model-making-and-prototyping", name: "Model-making and prototyping" },
                { id: "sub-tech-cad-cam-basics-where-appropriate", name: "CAD/CAM basics (where appropriate)" },
                { id: "sub-tech-form-function-and-ergonomics", name: "Form, function and ergonomics" },
                { id: "sub-tech-sustainability-and-material-choices", name: "Sustainability and material choices" }
          ]
        }
      ]
    },

    // =====================================================
    // 2. EXTERNALLY SET ASSIGNMENT (Component 2)
    // =====================================================
    {
      id: "unit-externally-set-assignment",
      name: "Externally Set Assignment (Component 2)",
      topics: [
        {
          id: "topic-esa-responding-to-theme",
          name: "Responding to the Paper / Starting Points",
          subTopics: [
            { id: "sub-choose-starting-point", name: "Choosing a starting point" },
            { id: "sub-interpretation", name: "Interpreting the theme creatively" },
            { id: "sub-intentions", name: "Setting intentions and planned outcome(s)" }
          ]
        },
        {
          id: "topic-esa-preparatory-work",
          name: "Preparatory Studies",
          subTopics: [
            { id: "sub-esa-research", name: "Research and contextual links (AO1)" },
            { id: "sub-esa-experiment", name: "Experimentation and refinement (AO2)" },
            { id: "sub-esa-record", name: "Recording observations and ideas (AO3)" },
            { id: "sub-esa-planning-final", name: "Planning the final outcome" }
          ]
        },
        {
          id: "topic-esa-10-hour-period",
          name: "Sustained Focus / Timed Final Outcome",
          subTopics: [
            { id: "sub-esa-time-management", name: "Time management in the timed period" },
            { id: "sub-esa-executing-final", name: "Executing the final outcome(s) (AO4)" },
            { id: "sub-esa-presenting", name: "Presentation of final work" }
          ]
        }
      ]
    }
  ],

  papers: [
    {
      id: "component-1",
      name: "Component 1: Portfolio",
      assessedNodeIds: [
        "unit-portfolio"
      ]
    },
    {
      id: "component-2",
      name: "Component 2: Externally Set Assignment",
      assessedNodeIds: [
        "unit-externally-set-assignment"
      ]
    }
  ]
};
