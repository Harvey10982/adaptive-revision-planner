import type { SubjectSpecification } from "../../../../types/SubjectSpecification"

export const specification: SubjectSpecification = {
  units: [
    {
      id: "unit-core-technical-principles",
      name: "Core technical principles",
      topics: [
        {
          id: "topic-new-and-emerging-technologies",
          name: "New and emerging technologies",
          subTopics: [
            { id: "subtopic-industry-and-enterprise", name: "Industry and enterprise" },
            { id: "subtopic-sustainability", name: "Sustainability and environmental impact" },
            { id: "subtopic-culture-and-society", name: "People, culture and society" },
            { id: "subtopic-production-techniques", name: "Production techniques and systems" },
            { id: "subtopic-digital-technologies", name: "Digital technologies and the modern world of design and manufacturing" },
          ],
        },
        {
          id: "topic-energy-generation-and-storage",
          name: "Energy generation and storage",
          subTopics: [
            { id: "subtopic-renewable-and-nonrenewable", name: "Renewable and non-renewable energy sources" },
            { id: "subtopic-generation-methods", name: "Methods of energy generation" },
            { id: "subtopic-energy-storage", name: "Energy storage (eg batteries and other storage methods)" },
          ],
        },
        {
          id: "topic-developments-in-new-materials",
          name: "Developments in new materials",
          subTopics: [
            { id: "subtopic-smart-materials", name: "Smart materials" },
            { id: "subtopic-composites", name: "Composites and modern composites" },
            { id: "subtopic-polymers-and-nanomaterials", name: "Polymers and (where relevant) nanomaterials" },
          ],
        },
        {
          id: "topic-systems-approach",
          name: "Systems approach to designing",
          subTopics: [
            { id: "subtopic-input-process-output", name: "Input–process–output and feedback" },
            { id: "subtopic-system-diagrams", name: "System diagrams and modelling" },
            { id: "subtopic-control", name: "Control, monitoring and iteration" },
          ],
        },
        {
          id: "topic-mechanical-devices",
          name: "Mechanical devices",
          subTopics: [
            { id: "subtopic-levers-and-linkages", name: "Levers and linkages" },
            { id: "subtopic-gears-and-transmission", name: "Gears, pulleys and transmission systems" },
            { id: "subtopic-cams-and-cranks", name: "Cams, followers, cranks and rotary-to-linear motion" },
          ],
        },
        {
          id: "topic-materials-and-working-properties",
          name: "Materials and their working properties",
          subTopics: [
            { id: "subtopic-timber", name: "Timber and manufactured boards" },
            { id: "subtopic-metals", name: "Ferrous and non-ferrous metals and alloys" },
            { id: "subtopic-polymers", name: "Polymers (including thermoplastics and thermosets)" },
            { id: "subtopic-textiles", name: "Textiles and fibres" },
            { id: "subtopic-paper-and-boards", name: "Paper and boards" },
            { id: "subtopic-composite-and-smart", name: "Composite and smart materials" },
          ],
        },
      ],
    },
    {
      id: "unit-specialist-technical-principles",
      name: "Specialist technical principles",
      topics: [
        {
          id: "topic-materials-components-selection",
          name: "Selection of materials and components",
          subTopics: [
            { id: "subtopic-performance-characteristics", name: "Performance characteristics (function, strength, durability)" },
            { id: "subtopic-aesthetics", name: "Aesthetics, ergonomics and user needs" },
            { id: "subtopic-cost-availability", name: "Cost, availability and suitability" },
          ],
        },
        {
          id: "topic-forces-and-stresses",
          name: "Forces and stresses",
          subTopics: [
            { id: "subtopic-tension-compression", name: "Tension and compression" },
            { id: "subtopic-torsion-shear-bending", name: "Torsion, shear and bending" },
            { id: "subtopic-stress-strain", name: "Stress and strain (basic understanding in context)" },
          ],
        },
        {
          id: "topic-ecological-social-footprint",
          name: "Ecological and social footprint",
          subTopics: [
            { id: "subtopic-life-cycle-thinking", name: "Life cycle thinking and impact reduction" },
            { id: "subtopic-ethical-social", name: "Ethical and social considerations in design and manufacture" },
          ],
        },
        {
          id: "topic-sources-and-origins",
          name: "Sources and origins of materials",
          subTopics: [
            { id: "subtopic-extraction-harvesting", name: "Extraction/harvesting and processing" },
            { id: "subtopic-supply-chains", name: "Supply chains and traceability" },
            { id: "subtopic-sustainability-materials", name: "Sustainability and responsible sourcing" },
          ],
        },
        {
          id: "topic-using-working-with-materials",
          name: "Using and working with materials",
          subTopics: [
            { id: "subtopic-cutting-shaping-forming", name: "Cutting, shaping and forming" },
            { id: "subtopic-joining-fixing", name: "Joining and fixing methods" },
            { id: "subtopic-quality-control", name: "Accuracy, tolerances and quality control" },
          ],
        },
        {
          id: "topic-stock-forms-scales-production",
          name: "Stock forms, sizes and scales of production",
          subTopics: [
            { id: "subtopic-stock-forms", name: "Stock forms and standard sizing" },
            { id: "subtopic-batch-mass", name: "One-off, batch and mass production" },
            { id: "subtopic-cad-cam", name: "CAD/CAM and digital manufacture (where relevant)" },
          ],
        },
        {
          id: "topic-specialist-techniques-processes",
          name: "Specialist techniques and processes",
          subTopics: [
            { id: "subtopic-workshop-processes", name: "Workshop and industrial processes (material-dependent)" },
            { id: "subtopic-process-selection", name: "Process selection to achieve quality outcomes" },
          ],
        },
        {
          id: "topic-surface-treatments-finishes",
          name: "Surface treatments and finishes",
          subTopics: [
            { id: "subtopic-finishing-techniques", name: "Finishing techniques and surface protection" },
            { id: "subtopic-aesthetic-finishes", name: "Aesthetic finishes and user appeal" },
          ],
        },
      ],
    },
    {
      id: "unit-designing-and-making-principles",
      name: "Designing and making principles",
      topics: [
        {
          id: "topic-investigation-analysis",
          name: "Investigation and analysis",
          subTopics: [
            { id: "subtopic-user-needs", name: "Understanding users, needs and context" },
            { id: "subtopic-research", name: "Primary and secondary research" },
            { id: "subtopic-design-specification", name: "Writing a design specification" },
          ],
        },
        {
          id: "topic-design-strategies",
          name: "Design strategies",
          subTopics: [
            { id: "subtopic-iterative-design", name: "Iterative design, modelling and testing" },
            { id: "subtopic-innovation", name: "Innovation and creativity" },
          ],
        },
        {
          id: "topic-communication-of-design-ideas",
          name: "Communication of design ideas",
          subTopics: [
            { id: "subtopic-sketching", name: "Sketching, annotation and technical drawing" },
            { id: "subtopic-cad", name: "CAD and digital communication" },
          ],
        },
        {
          id: "topic-prototype-development",
          name: "Prototype development",
          subTopics: [
            { id: "subtopic-prototypes", name: "Types of prototypes and modelling" },
            { id: "subtopic-testing", name: "Testing, evaluation and refinement" },
          ],
        },
        {
          id: "topic-manufacture-quality-safety",
          name: "Manufacture, quality and safety",
          subTopics: [
            { id: "subtopic-health-safety", name: "Health and safety in making" },
            { id: "subtopic-quality-assurance", name: "Quality assurance and control" },
            { id: "subtopic-tolerances", name: "Tolerances and accuracy in manufacture" },
          ],
        },
      ],
    },
  ],
  papers: [
    {
      id: "paper-1",
      name: "Written exam",
      assessedNodeIds: [
        "unit-core-technical-principles",
        "unit-specialist-technical-principles",
        "unit-designing-and-making-principles",
      ],
    },
    {
      id: "nea",
      name: "Non-exam assessment (NEA)",
      assessedNodeIds: ["unit-specialist-technical-principles", "unit-designing-and-making-principles"],
    },
  ],
};
