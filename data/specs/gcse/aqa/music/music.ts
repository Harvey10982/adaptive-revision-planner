import type { SubjectSpecification } from "../../../../types/SubjectSpecification"

export const specification: SubjectSpecification = {
  units: [
    {
      id: "unit-understanding-music",
      name: "Understanding music",
      topics: [
        {
          id: "topic-musical-elements",
          name: "Musical elements",
          subTopics: [
            { id: "subtopic-melody", name: "Melody and pitch" },
            { id: "subtopic-harmony-tonality", name: "Harmony and tonality" },
            { id: "subtopic-rhythm-metre-tempo", name: "Rhythm, metre and tempo" },
            { id: "subtopic-dynamics-timbre", name: "Dynamics and timbre" },
            { id: "subtopic-texture", name: "Texture" },
            { id: "subtopic-structure-form", name: "Structure and form" },
            { id: "subtopic-instrumentation", name: "Instrumentation and sonority" },
          ],
        },
        {
          id: "topic-musical-contexts",
          name: "Musical contexts",
          subTopics: [
            { id: "subtopic-purpose-audience", name: "Purpose, audience and function" },
            { id: "subtopic-style-genre", name: "Style, genre and tradition" },
            { id: "subtopic-social-historical", name: "Social, cultural and historical context" },
          ],
        },
        {
          id: "topic-musical-language",
          name: "Musical language",
          subTopics: [
            { id: "subtopic-notation", name: "Notation and music theory basics" },
            { id: "subtopic-compositional-devices", name: "Compositional devices and techniques" },
            { id: "subtopic-production-technology", name: "Production and music technology (where relevant)" },
          ],
        },
        {
          id: "topic-area-of-study-1",
          name: "Area of study 1: Western Classical Tradition 1650–1910",
          subTopics: [
            { id: "subtopic-baroque", name: "Baroque period" },
            { id: "subtopic-classical", name: "Classical period" },
            { id: "subtopic-romantic", name: "Romantic period (as applicable within the range)" },
          ],
        },
        {
          id: "topic-area-of-study-2",
          name: "Area of study 2: Popular music",
          subTopics: [
            { id: "subtopic-rock-pop", name: "Rock and pop styles" },
            { id: "subtopic-popular-music-techniques", name: "Popular-music performance and production features" },
          ],
        },
        {
          id: "topic-area-of-study-3",
          name: "Area of study 3: Traditional music",
          subTopics: [
            { id: "subtopic-traditional-styles", name: "Traditional styles and world/folk influences (as specified)" },
            { id: "subtopic-traditional-instruments", name: "Traditional instruments, texture and rhythmic features" },
          ],
        },
        {
          id: "topic-area-of-study-4",
          name: "Area of study 4: Western Classical Tradition since 1910",
          subTopics: [
            { id: "subtopic-modernism", name: "Modern and contemporary classical styles" },
            { id: "subtopic-film-game", name: "Music for film/media (where applicable in teaching)" },
          ],
        },
      ],
    },
    {
      id: "unit-performing-music",
      name: "Performing music",
      topics: [
        { id: "topic-performance-overview", name: "Performance overview (solo and ensemble)", subTopics: [] },
        { id: "topic-performance-skills", name: "Technical and expressive skills", subTopics: [] },
        { id: "topic-rehearsal", name: "Rehearsal, practice and refinement", subTopics: [] },
      ],
    },
    {
      id: "unit-composing-music",
      name: "Composing music",
      topics: [
        { id: "topic-composition-1", name: "Composition 1", subTopics: [] },
        { id: "topic-composition-2", name: "Composition 2", subTopics: [] },
        { id: "topic-compositional-techniques", name: "Compositional techniques and development", subTopics: [] },
        { id: "topic-notation-technology", name: "Notation, sequencing and music technology", subTopics: [] },
      ],
    },
  ],
  papers: [
    {
      id: "paper-1",
      name: "Component 1: Understanding music",
      assessedNodeIds: ["unit-understanding-music"],
    },
    {
      id: "coursework-performing",
      name: "Component 2: Performing music",
      assessedNodeIds: ["unit-performing-music"],
    },
    {
      id: "coursework-composing",
      name: "Component 3: Composing music",
      assessedNodeIds: ["unit-composing-music"],
    },
  ],
};
