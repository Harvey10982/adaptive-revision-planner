/* eslint-disable @typescript-eslint/consistent-type-assertions */
/**
 * GCSE AQA Food Preparation and Nutrition (8585) — curriculum structure only.
 *
 * Notes:
 * - This file intentionally contains NO selection/catalog metadata.
 * - If you want a Higher file for consistency, duplicate this file as `higher.ts`.
 */

export const specification: SubjectSpecification = {
  units: [
    {
      id: "unit-food-preparation-skills",
      name: "Food preparation skills",
      topics: [
        {
          id: "topic-skill-1-general-practical-skills",
          name: "Skill 1: General practical skills",
          subTopics: [
            { id: "subtopic-weigh-and-measure", name: "Weigh and measure accurately" },
            { id: "subtopic-prepare-equipment", name: "Prepare ingredients and equipment" },
            { id: "subtopic-adjust-cooking-times", name: "Select and adjust cooking times/processes" },
            { id: "subtopic-test-readiness", name: "Test for readiness" },
            { id: "subtopic-modify-sensory", name: "Judge and modify sensory properties" },
          ],
        },
        {
          id: "topic-skill-2-knife-skills",
          name: "Skill 2: Knife skills",
          subTopics: [
            { id: "subtopic-bridge-claw", name: "Bridge hold and claw grip" },
            { id: "subtopic-fruit-veg-cuts", name: "Peel, slice, dice; batons/julienne" },
            { id: "subtopic-meat-fish-alternatives", name: "Portion/fillet; trim; slice evenly (incl. alternatives)" },
          ],
        },
        {
          id: "topic-skill-3-preparing-fruit-and-veg",
          name: "Skill 3: Preparing fruit and vegetables",
          subTopics: [
            { id: "subtopic-prep-techniques", name: "Mash, shred, crush, grate, peel, segment, de-skin/de-seed, blanch" },
            { id: "subtopic-blend-juice-garnish", name: "Blend, juice, prepare garnishes; control browning/spoilage" },
          ],
        },
        {
          id: "topic-skill-4-use-of-the-cooker",
          name: "Skill 4: Use of the cooker",
          subTopics: [
            { id: "subtopic-grill", name: "Using the grill (char/grill/toast)" },
            { id: "subtopic-oven", name: "Using the oven (baking/roasting/casseroles/tagines/braising)" },
          ],
        },
        {
          id: "topic-skill-5-use-of-equipment",
          name: "Skill 5: Use of equipment",
          subTopics: [
            { id: "subtopic-equipment", name: "Use of blender, food processor, mixer, pasta machine, microwave oven" },
          ],
        },
        {
          id: "topic-skill-6-cooking-methods",
          name: "Skill 6: Cooking methods",
          subTopics: [
            { id: "subtopic-water-based", name: "Water-based (steaming, boiling, simmering, blanching, poaching)" },
            { id: "subtopic-dry-heat-fat-based", name: "Dry heat and fat-based (dry/shallow/stir frying)" },
          ],
        },
        {
          id: "topic-skill-7-prepare-combine-shape",
          name: "Skill 7: Prepare, combine and shape",
          subTopics: [
            { id: "subtopic-roll-wrap-skewer", name: "Roll, wrap, skewer, mix, coat, layer" },
            { id: "subtopic-shape-bind", name: "Shape and bind wet mixtures (eg burgers, fish cakes, meatballs)" },
            { id: "subtopic-safe-handling", name: "Prevent cross contamination; handle high-risk foods correctly" },
          ],
        },
        {
          id: "topic-skill-8-sauce-making",
          name: "Skill 8: Sauce making",
          subTopics: [
            { id: "subtopic-starch-gelatinisation", name: "Starch-based sauces and gelatinisation (eg roux/velouté/béchamel)" },
            { id: "subtopic-reduction", name: "Reduction sauces (evaporation concentrates flavour/changes viscosity)" },
            { id: "subtopic-emulsions", name: "Emulsion sauces (eg salad dressings) and stabilising emulsions" },
          ],
        },
        {
          id: "topic-skill-9-tenderise-and-marinate",
          name: "Skill 9: Tenderise and marinate",
          subTopics: [
            { id: "subtopic-acids-denature", name: "Acids and protein denaturation" },
            { id: "subtopic-marinades", name: "Marinades to develop flavour/texture" },
          ],
        },
        {
          id: "topic-skill-10-dough",
          name: "Skill 10: Dough",
          subTopics: [
            { id: "subtopic-develop-gluten", name: "Develop gluten structure; kneading and proving (where relevant)" },
            { id: "subtopic-shortcrust-choux", name: "Doughs/pastries (eg shortcrust; other dough types as taught)" },
          ],
        },
        {
          id: "topic-skill-11-raising-agents",
          name: "Skill 11: Raising agents",
          subTopics: [
            { id: "subtopic-chemical", name: "Chemical raising agents (eg baking powder)" },
            { id: "subtopic-biological", name: "Biological raising agents (eg yeast)" },
            { id: "subtopic-physical", name: "Physical raising (eg whisking/steam)" },
          ],
        },
        {
          id: "topic-skill-12-setting-mixtures",
          name: "Skill 12: Setting mixtures",
          subTopics: [
            { id: "subtopic-gelation", name: "Gelation (starch setting on chilling/for desserts)" },
            { id: "subtopic-protein-setting", name: "Protein setting (denaturation/coagulation, eg eggs)" },
          ],
        },
      ],
    },
    {
      id: "unit-food-nutrition-and-health",
      name: "Food, nutrition and health",
      topics: [
        {
          id: "topic-macronutrients",
          name: "Macronutrients",
          subTopics: [
            { id: "subtopic-protein", name: "Protein (functions, sources, deficiency/excess; alternatives)" },
            { id: "subtopic-carbohydrates", name: "Carbohydrates (sugars, starches; functions and sources)" },
            { id: "subtopic-fats", name: "Fats and oils (saturated/unsaturated; functions and sources)" },
          ],
        },
        {
          id: "topic-micronutrients",
          name: "Micronutrients",
          subTopics: [
            { id: "subtopic-vitamins", name: "Vitamins (A, B group, C, D; roles and sources)" },
            { id: "subtopic-minerals", name: "Minerals (eg calcium, iron; roles and sources)" },
          ],
        },
        {
          id: "topic-nutritional-needs",
          name: "Nutritional needs across life stages",
          subTopics: [
            { id: "subtopic-life-stages", name: "Different needs for different life stages and groups" },
            { id: "subtopic-dietary-reference-values", name: "Dietary reference values and balanced diets" },
          ],
        },
        {
          id: "topic-diet-and-health",
          name: "Diet, nutrition and health",
          subTopics: [
            { id: "subtopic-energy-balance", name: "Energy balance and healthy eating" },
            { id: "subtopic-diet-related-disease", name: "Diet-related disease, deficiency and excess" },
            { id: "subtopic-nutritional-analysis", name: "Nutritional analysis and evaluating diets" },
          ],
        },
      ],
    },
    {
      id: "unit-food-science",
      name: "Food science",
      topics: [
        { id: "topic-functional-chemical-properties", name: "Functional and chemical properties of food", subTopics: [] },
        { id: "topic-heat-transfer-and-cooking", name: "Heat transfer and the cooking of food", subTopics: [] },
        { id: "topic-setting-and-raising", name: "Setting and raising agents in food production", subTopics: [] },
      ],
    },
    {
      id: "unit-food-safety",
      name: "Food safety",
      topics: [
        { id: "topic-food-contamination", name: "Food contamination and cross contamination", subTopics: [] },
        { id: "topic-food-poisoning", name: "Food poisoning and foodborne illness", subTopics: [] },
        { id: "topic-storage-handling", name: "Safe storage, handling and temperature control", subTopics: [] },
      ],
    },
    {
      id: "unit-food-choice",
      name: "Food choice",
      topics: [
        {
          id: "topic-factors-affecting-food-choice",
          name: "Factors affecting food choice",
          subTopics: [
            { id: "subtopic-economic-social", name: "Economic and social factors" },
            { id: "subtopic-cultural-religious", name: "Cultural and religious influences" },
            { id: "subtopic-ethical-moral", name: "Ethical and moral considerations" },
            { id: "subtopic-health-medical", name: "Health and medical factors" },
          ],
        },
        {
          id: "topic-food-choices",
          name: "Food choices",
          subTopics: [
            { id: "subtopic-religion-culture", name: "Food choice related to religion and culture" },
            { id: "subtopic-ethical-beliefs", name: "Ethical and moral beliefs (eg vegetarian/vegan choices)" },
            { id: "subtopic-medical-conditions", name: "Medical conditions and dietary needs" },
          ],
        },
      ],
    },
    {
      id: "unit-food-provenance",
      name: "Food provenance",
      topics: [
        {
          id: "topic-food-sources",
          name: "Food sources",
          subTopics: [
            { id: "subtopic-grown", name: "Grown ingredients (fruits, vegetables, cereals)" },
            { id: "subtopic-reared", name: "Reared ingredients (meat and poultry)" },
            { id: "subtopic-caught", name: "Caught ingredients (fish)" },
          ],
        },
        {
          id: "topic-food-and-the-environment",
          name: "Food and the environment",
          subTopics: [
            { id: "subtopic-seasonal", name: "Seasonal foods" },
            { id: "subtopic-sustainability", name: "Sustainability (eg fish farming)" },
            { id: "subtopic-transportation", name: "Transportation and food miles" },
          ],
        },
      ],
    },
    {
      id: "unit-food-preparation-and-cooking-techniques",
      name: "Food preparation and cooking techniques",
      topics: [
        { id: "topic-knife-and-prep", name: "Preparation techniques and knife skills", subTopics: [] },
        { id: "topic-cooking-methods", name: "Cooking methods and heat control", subTopics: [] },
        { id: "topic-sensory-quality", name: "Sensory analysis, quality and presentation", subTopics: [] },
      ],
    },
  ],
  papers: [
    {
      id: "paper-1",
      name: "Paper 1: Food preparation and nutrition",
      assessedNodeIds: [
        "unit-food-nutrition-and-health",
        "unit-food-science",
        "unit-food-safety",
        "unit-food-choice",
        "unit-food-provenance",
      ],
    },
    {
      id: "nea",
      name: "Non-exam assessment (NEA)",
      assessedNodeIds: ["unit-food-preparation-skills", "unit-food-preparation-and-cooking-techniques"],
    },
  ],
};
