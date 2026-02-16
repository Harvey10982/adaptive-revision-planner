import type { SubjectSpecification } from "../../../../types/subjectSpecification"

export const specification: SubjectSpecification = {
  units: [
    {
      id: "unit-applied-anatomy-and-physiology",
      name: "Applied anatomy and physiology",
      topics: [
        {
          id: "topic-musculoskeletal-system",
          name: "The structure and functions of the musculoskeletal system",
          subTopics: [
            { id: "subtopic-bones", name: "Bones (key locations)" },
            { id: "subtopic-muscles", name: "Major muscles and muscle groups" },
            { id: "subtopic-joints", name: "Synovial joints and joint movement" },
            { id: "subtopic-antagonistic-pairs", name: "Antagonistic muscle action at major joints" },
          ],
        },
        {
          id: "topic-cardio-respiratory-system",
          name: "The structure and functions of the cardio-respiratory system",
          subTopics: [
            { id: "subtopic-pathway-of-air", name: "Pathway of air and gaseous exchange" },
            { id: "subtopic-blood-vessels", name: "Blood vessels and blood flow" },
            { id: "subtopic-heart-structure-cycle", name: "Heart structure, cardiac cycle and pathway of blood" },
            { id: "subtopic-breathing-mechanics", name: "Mechanics of breathing and spirometer traces" },
            { id: "subtopic-cardiac-output", name: "Cardiac output, stroke volume and heart rate" },
          ],
        },
        {
          id: "topic-aerobic-and-anaerobic-exercise",
          name: "Anaerobic and aerobic exercise",
          subTopics: [
            { id: "subtopic-definitions", name: "Definitions and basic equations/summaries" },
            { id: "subtopic-intensity-duration", name: "Practical examples (intensity, duration and energy systems)" },
            { id: "subtopic-epoc", name: "EPOC/oxygen debt and recovery process" },
          ],
        },
        {
          id: "topic-effects-of-exercise",
          name: "The short and long term effects of exercise",
          subTopics: [
            { id: "subtopic-immediate", name: "Immediate effects (during exercise)" },
            { id: "subtopic-short-term", name: "Short-term effects (up to ~36 hours)" },
            { id: "subtopic-long-term", name: "Long-term effects (months/years of exercising)" },
          ],
        },
      ],
    },
    {
      id: "unit-movement-analysis",
      name: "Movement analysis",
      topics: [
        {
          id: "topic-lever-systems",
          name: "Lever systems and mechanical advantage",
          subTopics: [
            { id: "subtopic-first-second-third-class", name: "First, second and third class levers" },
            { id: "subtopic-fulcrum-load-effort", name: "Fulcrum, load and effort in sporting examples" },
          ],
        },
        {
          id: "topic-planes-and-axes",
          name: "Planes and axes of movement",
          subTopics: [
            { id: "subtopic-planes", name: "Planes: frontal, transverse, sagittal" },
            { id: "subtopic-axes", name: "Axes: longitudinal, transverse, sagittal" },
            { id: "subtopic-sporting-actions", name: "Applying planes/axes to sporting actions" },
          ],
        },
      ],
    },
    {
      id: "unit-physical-training",
      name: "Physical training",
      topics: [
        {
          id: "topic-health-and-fitness",
          name: "Relationship between health and fitness",
          subTopics: [
            { id: "subtopic-definitions", name: "Definitions of health and fitness" },
            { id: "subtopic-relationship", name: "How health and fitness influence each other" },
          ],
        },
        {
          id: "topic-components-of-fitness",
          name: "Components of fitness (benefits, measurement and improvement)",
          subTopics: [
            { id: "subtopic-physical", name: "Physical components (eg strength, endurance, speed, flexibility)" },
            { id: "subtopic-skill-related", name: "Skill-related components (eg agility, balance, coordination, reaction time)" },
          ],
        },
        {
          id: "topic-principles-of-training",
          name: "Principles of training and overload/progression",
          subTopics: [
            { id: "subtopic-specificity", name: "Specificity" },
            { id: "subtopic-progressive-overload", name: "Progressive overload" },
            { id: "subtopic-reversibility", name: "Reversibility" },
          ],
        },
        {
          id: "topic-training-methods",
          name: "Training methods",
          subTopics: [
            { id: "subtopic-continuous", name: "Continuous training" },
            { id: "subtopic-interval", name: "Interval training" },
            { id: "subtopic-fartlek", name: "Fartlek training" },
            { id: "subtopic-circuit", name: "Circuit training" },
            { id: "subtopic-plyometric", name: "Plyometric training" },
            { id: "subtopic-weight", name: "Weight training" },
          ],
        },
        {
          id: "topic-warm-up-cool-down",
          name: "Warm up and cool down",
          subTopics: [
            { id: "subtopic-physiological-psychological", name: "Physiological and psychological benefits" },
            { id: "subtopic-stretching", name: "Stretching and mobility" },
          ],
        },
        {
          id: "topic-fitness-testing",
          name: "Fitness testing",
          subTopics: [
            { id: "subtopic-test-selection", name: "Selecting tests for components of fitness" },
            { id: "subtopic-validity-reliability", name: "Validity, reliability and practicality" },
          ],
        },
      ],
    },
    {
      id: "unit-use-of-data",
      name: "Use of data",
      topics: [
        {
          id: "topic-collecting-data",
          name: "Collecting data (qualitative and quantitative)",
          subTopics: [
            { id: "subtopic-questionnaires-surveys", name: "Questionnaires and surveys" },
            { id: "subtopic-interviews-observations", name: "Interviews and observations" },
          ],
        },
        {
          id: "topic-presenting-data",
          name: "Presenting data",
          subTopics: [
            { id: "subtopic-tables", name: "Tables" },
            { id: "subtopic-graphs", name: "Graphs (bar charts, line graphs)" },
          ],
        },
        {
          id: "topic-analysing-data",
          name: "Analysing and evaluating data",
          subTopics: [
            { id: "subtopic-interpretation", name: "Interpreting tables/graphs (incl. pie charts)" },
            { id: "subtopic-evaluation", name: "Evaluating conclusions and limitations" },
          ],
        },
      ],
    },
    {
      id: "unit-sports-psychology",
      name: "Sports psychology",
      topics: [
        {
          id: "topic-skill-classification",
          name: "Classification of skills",
          subTopics: [
            { id: "subtopic-basic-complex", name: "Basic/complex" },
            { id: "subtopic-open-closed", name: "Open/closed" },
            { id: "subtopic-self-externally-paced", name: "Self-paced/externally paced" },
            { id: "subtopic-gross-fine", name: "Gross/fine" },
          ],
        },
        {
          id: "topic-goal-setting",
          name: "Goal setting and SMART targets",
          subTopics: [
            { id: "subtopic-performance-outcome-goals", name: "Performance and outcome goals" },
            { id: "subtopic-smart", name: "SMART targets" },
          ],
        },
        {
          id: "topic-information-processing",
          name: "Basic information processing",
          subTopics: [
            { id: "subtopic-stages", name: "Input, decision making, output and feedback" },
            { id: "subtopic-memory", name: "Short-term and long-term memory" },
          ],
        },
        {
          id: "topic-guidance-feedback",
          name: "Guidance and feedback",
          subTopics: [
            { id: "subtopic-types-of-guidance", name: "Visual, verbal, manual and mechanical guidance" },
            { id: "subtopic-feedback", name: "Types of feedback and effectiveness" },
          ],
        },
        {
          id: "topic-mental-preparation",
          name: "Mental preparation for performance",
          subTopics: [
            { id: "subtopic-arousal", name: "Arousal and the inverted-U theory" },
            { id: "subtopic-anxiety", name: "Anxiety and effects on performance" },
            { id: "subtopic-motivation", name: "Intrinsic and extrinsic motivation" },
          ],
        },
      ],
    },
    {
      id: "unit-socio-cultural-influences",
      name: "Socio-cultural influences",
      topics: [
        {
          id: "topic-engagement-patterns",
          name: "Engagement patterns of different social groups",
          subTopics: [
            { id: "subtopic-gender", name: "Gender" },
            { id: "subtopic-race-religion-culture", name: "Race/religion/culture" },
            { id: "subtopic-age", name: "Age" },
            { id: "subtopic-family-friends-peers", name: "Family/friends/peers" },
            { id: "subtopic-disability", name: "Disability" },
          ],
        },
        {
          id: "topic-commercialisation",
          name: "Commercialisation of physical activity and sport",
          subTopics: [
            { id: "subtopic-sponsorship", name: "Sponsorship types" },
            { id: "subtopic-media", name: "Media types and influence" },
          ],
        },
        {
          id: "topic-ethical-issues",
          name: "Ethical and socio-cultural issues",
          subTopics: [
            { id: "subtopic-etiquette-sportsmanship", name: "Etiquette, sportsmanship, gamesmanship, contract to compete" },
            { id: "subtopic-prohibited-substances", name: "Prohibited substances and performance-enhancing drugs" },
          ],
        },
      ],
    },
    {
      id: "unit-health-fitness-and-wellbeing",
      name: "Health, fitness and wellbeing",
      topics: [
        {
          id: "topic-health-wellbeing",
          name: "Physical, emotional and social health, fitness and wellbeing",
          subTopics: [
            { id: "subtopic-participation-benefits", name: "Benefits of participation in physical activity and sport" },
            { id: "subtopic-different-needs", name: "How exercise can suit different needs" },
          ],
        },
        {
          id: "topic-sedentary-lifestyle",
          name: "Consequences of a sedentary lifestyle",
          subTopics: [
            { id: "subtopic-obesity", name: "Weight gain/obesity" },
            { id: "subtopic-cardiovascular", name: "Heart disease and hypertension" },
            { id: "subtopic-diabetes", name: "Diabetes and wider impacts" },
            { id: "subtopic-mental-health", name: "Self-esteem, sleep and lethargy" },
          ],
        },
        {
          id: "topic-energy-diet-nutrition-hydration",
          name: "Energy use, diet, nutrition and hydration",
          subTopics: [
            { id: "subtopic-energy-requirements", name: "Energy requirements and expenditure" },
            { id: "subtopic-balanced-diet", name: "Balanced diet and nutrients" },
            { id: "subtopic-hydration", name: "Hydration and performance" },
          ],
        },
      ],
    },
  ],
  papers: [
    {
      id: "paper-1",
      name: "Paper 1: The human body and movement in physical activity and sport",
      assessedNodeIds: [
        "unit-applied-anatomy-and-physiology",
        "unit-movement-analysis",
        "unit-physical-training",
        "unit-use-of-data",
      ],
    },
    {
      id: "paper-2",
      name: "Paper 2: Socio-cultural influences and wellbeing in physical activity and sport",
      assessedNodeIds: ["unit-sports-psychology", "unit-socio-cultural-influences", "unit-health-fitness-and-wellbeing", "unit-use-of-data"],
    },
    {
      id: "nea",
      name: "Non-exam assessment (NEA): Practical performance and analysis/evaluation",
      assessedNodeIds: ["unit-physical-training", "unit-use-of-data"],
    },
  ],
};
