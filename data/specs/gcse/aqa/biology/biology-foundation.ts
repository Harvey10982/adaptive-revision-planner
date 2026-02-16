import type { SubjectSpecification } from "../../../../types/SubjectSpecification"

export const specification: SubjectSpecification = {
  units: [
    {
      id: "unit-cell-biology",
      name: "Cell Biology",
      topics: [
        {
          id: "topic-cell-biology-cell-structure",
          name: "Cell Structure",
          subTopics: [
            { id: "sub-cell-biology-cell-structure-eukaryotes-prokaryotes", name: "Eukaryotes & Prokaryotes" },
            { id: "sub-cell-biology-cell-structure-animal-plant-cells", name: "Animal & Plant Cells" },
            { id: "sub-cell-biology-cell-structure-cell-specialisation", name: "Cell Specialisation" },
            { id: "sub-cell-biology-cell-structure-cell-differentiation", name: "Cell Differentiation" }
          ]
        },
        {
          id: "topic-cell-biology-microscopy",
          name: "Microscopy",
          subTopics: [
            { id: "sub-cell-biology-microscopy-microscopy", name: "Microscopy" },
            { id: "sub-cell-biology-microscopy-required-practical-microscopy", name: "Required Practical: Microscopy" }
          ]
        },
        {
          id: "topic-cell-biology-culturing-microorganisms",
          name: "Culturing Microorganisms",
          subTopics: [
            { id: "sub-cell-biology-culturing-microorganisms-culturing-microorganisms", name: "Culturing Microorganisms" },
            { id: "sub-cell-biology-culturing-microorganisms-required-practical-growth", name: "Required Practical: Growth" }
          ]
        },
        {
          id: "topic-cell-biology-cell-division",
          name: "Cell Division",
          subTopics: [
            { id: "sub-cell-biology-cell-division-chromosomes", name: "Chromosomes" },
            { id: "sub-cell-biology-cell-division-mitosis-the-cell-cycle", name: "Mitosis & the Cell Cycle" },
            { id: "sub-cell-biology-cell-division-stem-cells", name: "Stem Cells" }
          ]
        },
        {
          id: "topic-cell-biology-transport-in-cells",
          name: "Transport in Cells",
          subTopics: [
            { id: "sub-cell-biology-transport-in-cells-diffusion", name: "Diffusion" },
            { id: "sub-cell-biology-transport-in-cells-factors-that-affect-diffusion", name: "Factors that Affect Diffusion" },
            { id: "sub-cell-biology-transport-in-cells-diffusion-in-multicellular-organisms", name: "Diffusion in Multicellular Organisms" },
            { id: "sub-cell-biology-transport-in-cells-osmosis", name: "Osmosis" },
            { id: "sub-cell-biology-transport-in-cells-required-practical-osmosis", name: "Required Practical: Osmosis" },
            { id: "sub-cell-biology-transport-in-cells-active-transport", name: "Active transport" },
            { id: "sub-cell-biology-transport-in-cells-transport-summary-applications", name: "Transport Summary & Applications" }
          ]
        }
      ]
    },

    {
      id: "unit-organisation",
      name: "Organisation",
      topics: [
        {
          id: "topic-organisation-organisation-digestion",
          name: "Organisation: Digestion",
          subTopics: [
            { id: "sub-organisation-organisation-digestion-principles-of-organisation", name: "Principles of Organisation" },
            { id: "sub-organisation-organisation-digestion-the-stomach", name: "The Stomach" },
            { id: "sub-organisation-organisation-digestion-the-human-digestive-system", name: "The Human Digestive System" },
            { id: "sub-organisation-organisation-digestion-enzymes-metabolism", name: "Enzymes & Metabolism" },
            { id: "sub-organisation-organisation-digestion-required-practical-enzymes", name: "Required Practical: Enzymes" },
            { id: "sub-organisation-organisation-digestion-enzymes-digestion", name: "Enzymes & Digestion" },
            { id: "sub-organisation-organisation-digestion-required-practical-food-tests", name: "Required Practical: Food Tests" }
          ]
        },
        {
          id: "topic-organisation-organisation-the-cardiovascular-respiratory-system",
          name: "Organisation: The Cardiovascular & Respiratory System",
          subTopics: [
            { id: "sub-organisation-organisation-the-cardiovascular-respiratory-system-the-lungs", name: "The Lungs" },
            { id: "sub-organisation-organisation-the-cardiovascular-respiratory-system-the-heart", name: "The Heart" },
            { id: "sub-organisation-organisation-the-cardiovascular-respiratory-system-blood-vessels-blood", name: "Blood Vessels & Blood" },
            { id: "sub-organisation-organisation-the-cardiovascular-respiratory-system-health-disease", name: "Health & Disease" },
            { id: "sub-organisation-organisation-the-cardiovascular-respiratory-system-chd-a-non-communicable-disease", name: "CHD: A Non-Communicable Disease" },
            { id: "sub-organisation-organisation-the-cardiovascular-respiratory-system-health-issues", name: "Health Issues" },
            { id: "sub-organisation-organisation-the-cardiovascular-respiratory-system-lifestyle-non-communicable-diseases", name: "Lifestyle & Non-Communicable Diseases" },
            { id: "sub-organisation-organisation-the-cardiovascular-respiratory-system-data-lifestyle-factors", name: "Data & Lifestyle Factors" },
            { id: "sub-organisation-organisation-the-cardiovascular-respiratory-system-cancer", name: "Cancer" }
          ]
        },
        {
          id: "topic-organisation-plant-tissues-organs-systems",
          name: "Plant Tissues, Organs & Systems",
          subTopics: [
            { id: "sub-organisation-plant-tissues-organs-systems-plant-tissues", name: "Plant Tissues" },
            { id: "sub-organisation-plant-tissues-organs-systems-plant-organ-system", name: "Plant Organ System" },
            { id: "sub-organisation-plant-tissues-organs-systems-transpiration", name: "Transpiration" },
            { id: "sub-organisation-plant-tissues-organs-systems-translocation", name: "Translocation" }
          ]
        }
      ]
    },

    {
      id: "unit-infection-response",
      name: "Infection & Response",
      topics: [
        {
          id: "topic-infection-response-communicable-diseases",
          name: "Communicable Diseases",
          subTopics: [
            { id: "sub-infection-response-communicable-diseases-communicable-infectious-diseases", name: "Communicable (Infectious) Diseases" },
            { id: "sub-infection-response-communicable-diseases-viral-diseases", name: "Viral Diseases" },
            { id: "sub-infection-response-communicable-diseases-bacterial-diseases", name: "Bacterial Diseases" },
            { id: "sub-infection-response-communicable-diseases-fungal-diseases", name: "Fungal Diseases" },
            { id: "sub-infection-response-communicable-diseases-protist-diseases", name: "Protist Diseases" }
          ]
        },
        {
          id: "topic-infection-response-human-defence-systems",
          name: "Human Defence Systems",
          subTopics: [
            { id: "sub-infection-response-human-defence-systems-human-defence-systems", name: "Human Defence Systems" },
            { id: "sub-infection-response-human-defence-systems-vaccination", name: "Vaccination" },
            { id: "sub-infection-response-human-defence-systems-antibiotics-painkillers", name: "Antibiotics & Painkillers" },
            { id: "sub-infection-response-human-defence-systems-discovery-development-of-drugs", name: "Discovery & Development of Drugs" }
          ]
        },
        {
          id: "topic-infection-response-monoclonal-antibodies",
          name: "Monoclonal Antibodies",
          subTopics: [
            { id: "sub-infection-response-monoclonal-antibodies-monoclonal-antibodies", name: "Monoclonal Antibodies" },
            { id: "sub-infection-response-monoclonal-antibodies-producing-monoclonal-antibodies", name: "Producing Monoclonal Antibodies" },
            { id: "sub-infection-response-monoclonal-antibodies-uses-of-monoclonal-antibodies", name: "Uses of Monoclonal Antibodies" }
          ]
        },
        {
          id: "topic-infection-response-plant-disease",
          name: "Plant Disease",
          subTopics: [
            { id: "sub-infection-response-plant-disease-plant-disease", name: "Plant Disease" },
            { id: "sub-infection-response-plant-disease-detection-and-identification-of-plant-diseases", name: "Detection and Identification of Plant Diseases" },
            { id: "sub-infection-response-plant-disease-plant-defence-responses", name: "Plant Defence Responses" }
          ]
        }
      ]
    },

    {
      id: "unit-bioenergetics",
      name: "Bioenergetics",
      topics: [
        {
          id: "topic-bioenergetics-photosynthesis",
          name: "Photosynthesis",
          subTopics: [
            { id: "sub-bioenergetics-photosynthesis-photosynthesis", name: "Photosynthesis" },
            { id: "sub-bioenergetics-photosynthesis-photosynthetic-reaction", name: "Photosynthetic Reaction" },
            { id: "sub-bioenergetics-photosynthesis-rate-of-photosynthesis", name: "Rate of Photosynthesis" },
            { id: "sub-bioenergetics-photosynthesis-interactions-of-limiting-factors", name: "Interactions of Limiting Factors" },
            { id: "sub-bioenergetics-photosynthesis-required-practical-photosynthesis-rate", name: "Required Practical: Photosynthesis Rate" },
            { id: "sub-bioenergetics-photosynthesis-uses-of-glucose-from-photosynthesis", name: "Uses of Glucose from Photosynthesis" }
          ]
        },
        {
          id: "topic-bioenergetics-respiration",
          name: "Respiration",
          subTopics: [
            { id: "sub-bioenergetics-respiration-respiration", name: "Respiration" },
            { id: "sub-bioenergetics-respiration-aerobic-anaerobic-respiration", name: "Aerobic & Anaerobic Respiration" },
            { id: "sub-bioenergetics-respiration-response-to-exercise", name: "Response to Exercise" },
            { id: "sub-bioenergetics-respiration-metabolism", name: "Metabolism" }
          ]
        }
      ]
    },

    {
      id: "unit-homeostasis-response",
      name: "Homeostasis & Response",
      topics: [
        {
          id: "topic-homeostasis-response-the-human-nervous-system",
          name: "The Human Nervous System",
          subTopics: [
            { id: "sub-homeostasis-response-the-human-nervous-system-structure-function", name: "Structure & Function" },
            { id: "sub-homeostasis-response-the-human-nervous-system-the-reflex-arc", name: "The Reflex Arc" },
            { id: "sub-homeostasis-response-the-human-nervous-system-required-practical-reaction-time", name: "Required Practical: Reaction Time" },
            { id: "sub-homeostasis-response-the-human-nervous-system-the-brain", name: "The Brain" },
            { id: "sub-homeostasis-response-the-human-nervous-system-the-eye", name: "The Eye" },
            { id: "sub-homeostasis-response-the-human-nervous-system-control-of-body-temperature", name: "Control of Body Temperature" }
          ]
        },
        {
          id: "topic-homeostasis-response-hormones-maintaining-blood-homeostasis",
          name: "Hormones: Maintaining Blood Homeostasis",
          subTopics: [
            { id: "sub-homeostasis-response-hormones-maintaining-blood-homeostasis-homeostasis", name: "Homeostasis" },
            { id: "sub-homeostasis-response-hormones-maintaining-blood-homeostasis-human-endocrine-system", name: "Human Endocrine System" },
            { id: "sub-homeostasis-response-hormones-maintaining-blood-homeostasis-control-of-blood-glucose-concentration", name: "Control of Blood Glucose Concentration" },
            { id: "sub-homeostasis-response-hormones-maintaining-blood-homeostasis-maintaining-water-nitrogen-balance-in-the-body", name: "Maintaining Water & Nitrogen Balance in the Body" }
          ]
        },
        {
          id: "topic-homeostasis-response-hormones-in-humans-reproduction-metabolism",
          name: "Hormones in Humans: Reproduction & Metabolism",
          subTopics: [
            { id: "sub-homeostasis-response-hormones-in-humans-reproduction-metabolism-hormones-in-human-reproduction", name: "Hormones in Human Reproduction" },
            { id: "sub-homeostasis-response-hormones-in-humans-reproduction-metabolism-contraception", name: "Contraception" },
            { id: "sub-homeostasis-response-hormones-in-humans-reproduction-metabolism-the-uses-of-hormones-to-treat-infertility", name: "The Uses of Hormones to Treat Infertility" },
            { id: "sub-homeostasis-response-hormones-in-humans-reproduction-metabolism-negative-feedback", name: "Negative Feedback" }
          ]
        },
        {
          id: "topic-homeostasis-response-plant-hormones",
          name: "Plant Hormones",
          subTopics: [
            { id: "sub-homeostasis-response-plant-hormones-plant-hormones", name: "Plant Hormones" },
            { id: "sub-homeostasis-response-plant-hormones-required-practical-plant-growth", name: "Required Practical: Plant Growth" },
            { id: "sub-homeostasis-response-plant-hormones-uses-of-plant-hormones", name: "Uses of Plant Hormones" }
          ]
        }
      ]
    },

    {
      id: "unit-inheritance-variation-evolution",
      name: "Inheritance, Variation & Evolution",
      topics: [
        {
          id: "topic-inheritance-variation-evolution-reproduction",
          name: "Reproduction",
          subTopics: [
            { id: "sub-inheritance-variation-evolution-reproduction-sexual-asexual-reproduction", name: "Sexual & Asexual Reproduction" },
            { id: "sub-inheritance-variation-evolution-reproduction-meiosis", name: "Meiosis" },
            { id: "sub-inheritance-variation-evolution-reproduction-advantages-disadvantages-of-sexual-asexual-reproduction", name: "Advantages & Disadvantages of Sexual & Asexual Reproduction" }
          ]
        },
        {
          id: "topic-inheritance-variation-evolution-dna-the-genome",
          name: "DNA & the Genome",
          subTopics: [
            { id: "sub-inheritance-variation-evolution-dna-the-genome-dna-the-genome", name: "DNA & the Genome" },
            { id: "sub-inheritance-variation-evolution-dna-the-genome-dna-structure", name: "DNA Structure" }
          ]
        },
        {
          id: "topic-inheritance-variation-evolution-genetic-inheritance",
          name: "Genetic Inheritance",
          subTopics: [
            { id: "sub-inheritance-variation-evolution-genetic-inheritance-genetic-inheritance", name: "Genetic Inheritance" },
            { id: "sub-inheritance-variation-evolution-genetic-inheritance-inherited-disorders", name: "Inherited Disorders" },
            { id: "sub-inheritance-variation-evolution-genetic-inheritance-sex-determination", name: "Sex Determination" }
          ]
        },
        {
          id: "topic-inheritance-variation-evolution-variation-evolution",
          name: "Variation & Evolution",
          subTopics: [
            { id: "sub-inheritance-variation-evolution-variation-evolution-variation", name: "Variation" },
            { id: "sub-inheritance-variation-evolution-variation-evolution-evolution", name: "Evolution" },
            { id: "sub-inheritance-variation-evolution-variation-evolution-selective-breeding", name: "Selective Breeding" },
            { id: "sub-inheritance-variation-evolution-variation-evolution-genetic-engineering", name: "Genetic Engineering" },
            { id: "sub-inheritance-variation-evolution-variation-evolution-cloning", name: "Cloning" },
            { id: "sub-inheritance-variation-evolution-variation-evolution-the-development-of-understanding-of-genetics-evolution", name: "The Development of Understanding of Genetics & Evolution" },
            { id: "sub-inheritance-variation-evolution-variation-evolution-theory-of-evolution", name: "Theory of Evolution" },
            { id: "sub-inheritance-variation-evolution-variation-evolution-speciation", name: "Speciation" },
            { id: "sub-inheritance-variation-evolution-variation-evolution-the-understanding-of-genetics", name: "The Understanding of Genetics" }
          ]
        },
        {
          id: "topic-inheritance-variation-evolution-evidence-for-evolution",
          name: "Evidence for Evolution",
          subTopics: [
            { id: "sub-inheritance-variation-evolution-evidence-for-evolution-evidence-for-evolution", name: "Evidence for Evolution" },
            { id: "sub-inheritance-variation-evolution-evidence-for-evolution-fossils", name: "Fossils" },
            { id: "sub-inheritance-variation-evolution-evidence-for-evolution-extinction", name: "Extinction" },
            { id: "sub-inheritance-variation-evolution-evidence-for-evolution-resistant-bacteria", name: "Resistant Bacteria" }
          ]
        },
        {
          id: "topic-inheritance-variation-evolution-classification-of-living-organisms",
          name: "Classification of Living Organisms",
          subTopics: [
            { id: "sub-inheritance-variation-evolution-classification-of-living-organisms-classification-of-living-organisms", name: "Classification of Living Organisms" },
            { id: "sub-inheritance-variation-evolution-classification-of-living-organisms-classification", name: "Classification" }
          ]
        }
      ]
    },

    {
      id: "unit-ecology",
      name: "Ecology",
      topics: [
        {
          id: "topic-ecology-adaptations-interdependence-competition",
          name: "Adaptations, Interdependence & Competition",
          subTopics: [
            { id: "sub-ecology-adaptations-interdependence-competition-adaptations-interdependence-competition", name: "Adaptations, Interdependence & Competition" },
            { id: "sub-ecology-adaptations-interdependence-competition-communities", name: "Communities" },
            { id: "sub-ecology-adaptations-interdependence-competition-abiotic-factors", name: "Abiotic Factors" },
            { id: "sub-ecology-adaptations-interdependence-competition-biotic-factors", name: "Biotic Factors" },
            { id: "sub-ecology-adaptations-interdependence-competition-adaptations", name: "Adaptations" }
          ]
        },
        {
          id: "topic-ecology-organisation-of-an-ecosystem",
          name: "Organisation of an Ecosystem",
          subTopics: [
            { id: "sub-ecology-organisation-of-an-ecosystem-organisation-of-an-ecosystem", name: "Organisation of an Ecosystem" },
            { id: "sub-ecology-organisation-of-an-ecosystem-levels-of-organisation", name: "Levels of Organisation" },
            { id: "sub-ecology-organisation-of-an-ecosystem-required-practical-ecosystems", name: "Required Practical: Ecosystems" }
          ]
        },
        {
          id: "topic-ecology-how-materials-are-cycled",
          name: "How Materials are Cycled",
          subTopics: [
            { id: "sub-ecology-how-materials-are-cycled-how-materials-are-cycled", name: "How Materials are Cycled" },
            { id: "sub-ecology-how-materials-are-cycled-decomposition", name: "Decomposition" },
            { id: "sub-ecology-how-materials-are-cycled-required-practical-decay", name: "Required Practical: Decay" }
          ]
        },
        {
          id: "topic-ecology-impact-of-environmental-change",
          name: "Impact of Environmental Change",
          subTopics: [
            { id: "sub-ecology-impact-of-environmental-change-impact-of-environmental-change", name: "Impact of Environmental Change" },
            { id: "sub-ecology-impact-of-environmental-change-biodiversity-the-effect-of-human-interaction-on-ecosystems", name: "Biodiversity & the Effect of Human Interaction on Ecosystems" },
            { id: "sub-ecology-impact-of-environmental-change-biodiversity", name: "Biodiversity" },
            { id: "sub-ecology-impact-of-environmental-change-waste-management", name: "Waste Management" },
            { id: "sub-ecology-impact-of-environmental-change-land-use", name: "Land Use" },
            { id: "sub-ecology-impact-of-environmental-change-deforestation", name: "Deforestation" },
            { id: "sub-ecology-impact-of-environmental-change-global-warming", name: "Global Warming" },
            { id: "sub-ecology-impact-of-environmental-change-maintaining-biodiversity", name: "Maintaining Biodiversity" }
          ]
        },
        {
          id: "topic-ecology-trophic-levels-in-an-ecosystem",
          name: "Trophic Levels in an Ecosystem",
          subTopics: [
            { id: "sub-ecology-trophic-levels-in-an-ecosystem-trophic-levels-in-an-ecosystem", name: "Trophic Levels in an Ecosystem" },
            { id: "sub-ecology-trophic-levels-in-an-ecosystem-trophic-levels", name: "Trophic Levels" },
            { id: "sub-ecology-trophic-levels-in-an-ecosystem-pyramids-of-biomass", name: "Pyramids of Biomass" },
            { id: "sub-ecology-trophic-levels-in-an-ecosystem-transfer-of-biomass", name: "Transfer of Biomass" }
          ]
        },
        {
          id: "topic-ecology-food-production",
          name: "Food Production",
          subTopics: [
            { id: "sub-ecology-food-production-food-production", name: "Food Production" },
            { id: "sub-ecology-food-production-factors-affecting-food-security", name: "Factors Affecting Food Security" },
            { id: "sub-ecology-food-production-farming-techniques", name: "Farming Techniques" },
            { id: "sub-ecology-food-production-sustainable-fisheries", name: "Sustainable Fisheries" },
            { id: "sub-ecology-food-production-role-of-biotechnology", name: "Role of Biotechnology" }
          ]
        }
      ]
    }
  ],

  papers: [
    {
      id: "paper-1",
      name: "Paper 1",
      assessedNodeIds: [
        "unit-cell-biology", "unit-organisation", "unit-infection-response", "unit-bioenergetics"
      ]
    },
    {
      id: "paper-2",
      name: "Paper 2",
      assessedNodeIds: [
        "unit-homeostasis-response", "unit-inheritance-variation-evolution", "unit-ecology"
      ]
    }
  ]
};
