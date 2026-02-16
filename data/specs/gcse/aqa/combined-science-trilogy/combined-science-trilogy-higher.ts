import type { SubjectSpecification } from "../../../../types/subjectSpecification" 

export const specification: SubjectSpecification = {
  innerSubjects: [
    // =====================================================
    // BIOLOGY
    // =====================================================
    {
      id: "inner-biology",
      name: "Biology",
      units: [
        {
          id: "bio-unit-cell-biology",
          name: "Cell Biology",
          topics: [
            {
              id: "bio-topic-cell-structure",
              name: "Cell Structure",
              subTopics: [
                { id: "bio-sub-eukaryotes-prokaryotes", name: "Eukaryotes & Prokaryotes" },
                { id: "bio-sub-animal-plant-cells", name: "Animal & Plant Cells" },
                { id: "bio-sub-cell-specialisation", name: "Cell Specialisation" },
                { id: "bio-sub-cell-differentiation", name: "Cell Differentiation" },
                { id: "bio-sub-microscopy", name: "Microscopy" },
                { id: "bio-sub-required-practical-microscopy", name: "Required Practical: Microscopy" }
              ]
            },
            {
              id: "bio-topic-cell-division",
              name: "Cell Division",
              subTopics: [
                { id: "bio-sub-chromosomes", name: "Chromosomes" },
                { id: "bio-sub-mitosis-cell-cycle", name: "Mitosis & the Cell Cycle" },
                { id: "bio-sub-stem-cells", name: "Stem Cells" }
              ]
            },
            {
              id: "bio-topic-transport-in-cells",
              name: "Transport in Cells",
              subTopics: [
                { id: "bio-sub-diffusion", name: "Diffusion" },
                { id: "bio-sub-factors-affect-diffusion", name: "Factors that Affect Diffusion" },
                { id: "bio-sub-diffusion-multicellular", name: "Diffusion in Multicellular Organisms" },
                { id: "bio-sub-osmosis", name: "Osmosis" },
                { id: "bio-sub-required-practical-osmosis", name: "Required Practical: Osmosis" },
                { id: "bio-sub-active-transport", name: "Active transport" },
                { id: "bio-sub-transport-summary-applications", name: "Transport Summary & Applications" }
              ]
            }
          ]
        },

        {
          id: "bio-unit-organisation",
          name: "Organisation",
          topics: [
            {
              id: "bio-topic-organisation-digestion",
              name: "Organisation: Digestion",
              subTopics: [
                { id: "bio-sub-principles-of-organisation", name: "Principles of Organisation" },
                { id: "bio-sub-human-digestive-system", name: "The Human Digestive System" },
                { id: "bio-sub-enzymes-metabolism", name: "Enzymes & Metabolism" },
                { id: "bio-sub-required-practical-enzymes", name: "Required Practical: Enzymes" },
                { id: "bio-sub-enzymes-digestion", name: "Enzymes & Digestion" },
                { id: "bio-sub-required-practical-food-tests", name: "Required Practical: Food Tests" }
              ]
            },
            {
              id: "bio-topic-organisation-cardio-respiratory",
              name: "Organisation: The Cardiovascular & Respiratory System",
              subTopics: [
                { id: "bio-sub-lungs", name: "The Lungs" },
                { id: "bio-sub-heart", name: "The Heart" },
                { id: "bio-sub-blood-vessels-blood", name: "Blood Vessels & Blood" }
              ]
            },
            {
              id: "bio-topic-health-disease",
              name: "Health & Disease",
              subTopics: [
                { id: "bio-sub-chd-non-communicable", name: "CHD: A Non-Communicable Disease" },
                { id: "bio-sub-health-issues", name: "Health Issues" },
                { id: "bio-sub-lifestyle-non-communicable", name: "Lifestyle & Non-Communicable Diseases" },
                { id: "bio-sub-data-applications-lifestyle-disease", name: "Data & Applications of Lifestyle Disease" },
                { id: "bio-sub-cancer", name: "Cancer" }
              ]
            },
            {
              id: "bio-topic-plant-tissues-organs-systems",
              name: "Plant Tissues, Organs & Systems",
              subTopics: [
                { id: "bio-sub-plant-tissues", name: "Plant Tissues" },
                { id: "bio-sub-plant-organ-system", name: "Plant Organ System" },
                { id: "bio-sub-transpiration", name: "Transpiration" },
                { id: "bio-sub-translocation", name: "Translocation" }
              ]
            }
          ]
        },

        {
          id: "bio-unit-infection-response",
          name: "Infection & Response",
          topics: [
            {
              id: "bio-topic-communicable-diseases",
              name: "Communicable Diseases",
              subTopics: [
                { id: "bio-sub-communicable-infectious", name: "Communicable (Infectious) Diseases" },
                { id: "bio-sub-viral-diseases", name: "Viral Diseases" },
                { id: "bio-sub-bacterial-diseases", name: "Bacterial Diseases" },
                { id: "bio-sub-fungal-diseases", name: "Fungal Diseases" },
                { id: "bio-sub-protist-diseases", name: "Protist Diseases" }
              ]
            },
            {
              id: "bio-topic-human-defence-systems",
              name: "Human Defence Systems",
              subTopics: [
                { id: "bio-sub-vaccination", name: "Vaccination" },
                { id: "bio-sub-antibiotics-painkillers", name: "Antibiotics & Painkillers" },
                { id: "bio-sub-discovery-development-drugs", name: "Discovery & Development of Drugs" }
              ]
            }
          ]
        },

        {
          id: "bio-unit-bioenergetics",
          name: "Bioenergetics",
          topics: [
            {
              id: "bio-topic-photosynthesis",
              name: "Photosynthesis",
              subTopics: [
                { id: "bio-sub-photosynthetic-reaction", name: "Photosynthetic Reaction" },
                { id: "bio-sub-rate-of-photosynthesis", name: "Rate of Photosynthesis" },
                { id: "bio-sub-interactions-limiting-factors", name: "Interactions of Limiting Factors" },
                { id: "bio-sub-required-practical-photosynthesis-rate", name: "Required Practical: Photosynthesis Rate" },
                { id: "bio-sub-uses-of-glucose-from-photosynthesis", name: "Uses of Glucose from Photosynthesis" }
              ]
            },
            {
              id: "bio-topic-respiration",
              name: "Respiration",
              subTopics: [
                { id: "bio-sub-aerobic-anaerobic-respiration", name: "Aerobic & Anaerobic Respiration" },
                { id: "bio-sub-response-to-exercise", name: "Response to Exercise" },
                { id: "bio-sub-metabolism", name: "Metabolism" }
              ]
            }
          ]
        },

        {
          id: "bio-unit-homeostasis-response",
          name: "Homeostasis & Response",
          topics: [
            {
              id: "bio-topic-human-nervous-system",
              name: "The Human Nervous System",
              subTopics: [
                { id: "bio-sub-structure-function", name: "Structure & Function" },
                { id: "bio-sub-reflex-arc", name: "The Reflex Arc" },
                { id: "bio-sub-required-practical-reaction-time", name: "Required Practical: Reaction Time" }
              ]
            },
            {
              id: "bio-topic-hormones-blood-homeostasis",
              name: "Hormones: Maintaining Blood Homeostasis",
              subTopics: [
                { id: "bio-sub-homeostasis", name: "Homeostasis" },
                { id: "bio-sub-human-endocrine-system", name: "Human Endocrine System" },
                { id: "bio-sub-control-blood-glucose", name: "Control of Blood Glucose Concentration" }
              ]
            },
            {
              id: "bio-topic-hormones-reproduction-metabolism",
              name: "Hormones in Humans: Reproduction & Metabolism",
              subTopics: [
                { id: "bio-sub-hormones-human-reproduction", name: "Hormones in Human Reproduction" },
                { id: "bio-sub-contraception", name: "Contraception" },
                { id: "bio-sub-hormones-treat-infertility", name: "The Uses of Hormones to Treat Infertility" }
              ]
            },
            {
              id: "bio-topic-negative-feedback",
              name: "Negative Feedback",
              subTopics: [
                { id: "bio-sub-negative-feedback", name: "Negative Feedback" }
              ]
            }
          ]
        },

        {
          id: "bio-unit-inheritance-variation-evolution",
          name: "Inheritance, Variation & Evolution",
          topics: [
            {
              id: "bio-topic-reproduction",
              name: "Reproduction",
              subTopics: [
                { id: "bio-sub-sexual-asexual-reproduction", name: "Sexual & Asexual Reproduction" },
                { id: "bio-sub-meiosis", name: "Meiosis" }
              ]
            },
            {
              id: "bio-topic-dna-genome",
              name: "DNA & the Genome",
              subTopics: [
                { id: "bio-sub-dna-genome", name: "DNA & the Genome" }
              ]
            },
            {
              id: "bio-topic-genetic-inheritance",
              name: "Genetic Inheritance",
              subTopics: [
                { id: "bio-sub-genetic-inheritance", name: "Genetic Inheritance" },
                { id: "bio-sub-inherited-disorders", name: "Inherited Disorders" },
                { id: "bio-sub-sex-determination", name: "Sex Determination" }
              ]
            },
            {
              id: "bio-topic-variation-evolution",
              name: "Variation & Evolution",
              subTopics: [
                { id: "bio-sub-variation", name: "Variation" },
                { id: "bio-sub-evolution", name: "Evolution" },
                { id: "bio-sub-selective-breeding", name: "Selective Breeding" },
                { id: "bio-sub-genetic-engineering", name: "Genetic Engineering" },
                { id: "bio-sub-development-understanding-genetics-evolution", name: "The Development of Understanding of Genetics & Evolution" },
                { id: "bio-sub-evidence-for-evolution", name: "Evidence for Evolution" },
                { id: "bio-sub-fossils", name: "Fossils" },
                { id: "bio-sub-extinction", name: "Extinction" },
                { id: "bio-sub-resistant-bacteria", name: "Resistant Bacteria" }
              ]
            },
            {
              id: "bio-topic-classification",
              name: "Classification of Living Organisms",
              subTopics: [
                { id: "bio-sub-classification", name: "Classification" }
              ]
            }
          ]
        },

        {
          id: "bio-unit-ecology",
          name: "Ecology",
          topics: [
            {
              id: "bio-topic-adaptations-interdependence-competition",
              name: "Adaptations, Interdependence & Competition",
              subTopics: [
                { id: "bio-sub-communities", name: "Communities" },
                { id: "bio-sub-abiotic-factors", name: "Abiotic Factors" },
                { id: "bio-sub-biotic-factors", name: "Biotic Factors" },
                { id: "bio-sub-adaptations", name: "Adaptations" },
                { id: "bio-sub-organisation-ecosystem", name: "Organisation of an Ecosystem" },
                { id: "bio-sub-levels-of-organisation", name: "Levels of Organisation" },
                { id: "bio-sub-required-practical-ecosystems", name: "Required Practical: Ecosystems" }
              ]
            },
            {
              id: "bio-topic-material-cycles",
              name: "How Materials are Cycled",
              subTopics: [
                { id: "bio-sub-how-materials-cycled", name: "How Materials are Cycled" }
              ]
            },
            {
              id: "bio-topic-biodiversity-human-impact",
              name: "Biodiversity & the Effect of Human Interaction on Ecosystems",
              subTopics: [
                { id: "bio-sub-biodiversity", name: "Biodiversity" },
                { id: "bio-sub-waste-management", name: "Waste Management" },
                { id: "bio-sub-land-use", name: "Land Use" },
                { id: "bio-sub-deforestation", name: "Deforestation" },
                { id: "bio-sub-global-warming", name: "Global Warming" },
                { id: "bio-sub-maintaining-biodiversity", name: "Maintaining Biodiversity" }
              ]
            }
          ]
        }
      ]
    },

    // =====================================================
    // CHEMISTRY
    // =====================================================
    {
      id: "inner-chemistry",
      name: "Chemistry",
      units: [
        {
          id: "chem-unit-atomic-structure-periodic-table",
          name: "Atomic Structure & the Periodic Table",
          topics: [
            {
              id: "chem-topic-atomic-model",
              name: "Atomic Structure",
              subTopics: [
                { id: "chem-sub-simple-model-atom", name: "Simple Model of the Atom" },
                { id: "chem-sub-history-of-atom", name: "History of the Atom" },
                { id: "chem-sub-structure-of-atom", name: "The Structure of the Atom" },
                { id: "chem-sub-size-mass-atoms", name: "Size & Mass of Atoms" },
                { id: "chem-sub-relative-atomic-mass", name: "Relative Atomic Mass" },
                { id: "chem-sub-electronic-structure", name: "Electronic Structure" }
              ]
            },
            {
              id: "chem-topic-elements-compounds-mixtures",
              name: "Elements, Compounds & Mixtures",
              subTopics: [
                { id: "chem-sub-elements", name: "Elements" },
                { id: "chem-sub-compounds", name: "Compounds" },
                { id: "chem-sub-mixtures", name: "Mixtures" }
              ]
            },
            {
              id: "chem-topic-equations",
              name: "Equations",
              subTopics: [
                { id: "chem-sub-equations", name: "Equations" },
                { id: "chem-sub-half-ionic-equations", name: "Half Equations & Ionic Equations" }
              ]
            },
            {
              id: "chem-topic-periodic-table",
              name: "The Periodic Table",
              subTopics: [
                { id: "chem-sub-periodic-table", name: "The Periodic Table" },
                { id: "chem-sub-arranging-elements", name: "Arranging the Elements" },
                { id: "chem-sub-history-periodic-table", name: "History of the Periodic Table" },
                { id: "chem-sub-metals-non-metals", name: "Metals & Non-Metals" },
                { id: "chem-sub-group-0", name: "Group 0: The Noble Gases" },
                { id: "chem-sub-group-1", name: "Group 1: The Alkali Metals" },
                { id: "chem-sub-group-7", name: "Group 7: The Halogens" }
              ]
            }
          ]
        },

        {
          id: "chem-unit-bonding-structure-properties",
          name: "Bonds, Structure & Properties of Matter",
          topics: [
            {
              id: "chem-topic-bonding",
              name: "Bonding",
              subTopics: [
                { id: "chem-sub-ionic-covalent-metallic-bond", name: "Ionic, Covalent & Metallic Bond" },
                { id: "chem-sub-chemical-bonds", name: "Chemical bonds" },
                { id: "chem-sub-ionic-bonding", name: "Ionic Bonding" },
                { id: "chem-sub-ionic-compounds", name: "Ionic Compounds" },
                { id: "chem-sub-covalent-bonding", name: "Covalent bonding" },
                { id: "chem-sub-metallic-bonding", name: "Metallic Bonding" },
                { id: "chem-sub-bonding-substance-properties", name: "Bonding & Substance Properties" }
              ]
            },
            {
              id: "chem-topic-states-particle-theory",
              name: "States of Matter & Particle Theory",
              subTopics: [
                { id: "chem-sub-states-of-matter", name: "States of Matter" },
                { id: "chem-sub-particle-theory-limitations", name: "Particle Theory & its Limitations" },
                { id: "chem-sub-state-symbols", name: "State Symbols" }
              ]
            },
            {
              id: "chem-topic-properties-materials",
              name: "Properties of Materials",
              subTopics: [
                { id: "chem-sub-properties-ionic-compounds", name: "Properties of Ionic Compounds" },
                { id: "chem-sub-properties-small-molecules", name: "Properties of Small Molecules" },
                { id: "chem-sub-polymers", name: "Polymers" },
                { id: "chem-sub-giant-covalent-structures", name: "Giant Covalent Structures" },
                { id: "chem-sub-properties-metals-alloys", name: "Properties of Metals & Alloys" },
                { id: "chem-sub-metals-conductors", name: "Metals as Conductors" }
              ]
            },
            {
              id: "chem-topic-carbon-structures",
              name: "Structure & Bonding of Carbon",
              subTopics: [
                { id: "chem-sub-diamond-structure", name: "Diamond structure" },
                { id: "chem-sub-graphite-structure", name: "Graphite structure" },
                { id: "chem-sub-graphene-fullerenes", name: "Graphene & fullerenes" }
              ]
            }
          ]
        },

        {
          id: "chem-unit-quantitative-chemistry",
          name: "Quantitative Chemistry",
          topics: [
            {
              id: "chem-topic-measurement-mass-equations",
              name: "Measurement, Mass & Equations",
              subTopics: [
                { id: "chem-sub-conservation-mass-balancing", name: "Conservation of Mass & Balancing Chemical Equations" },
                { id: "chem-sub-relative-formula-mass", name: "Calculate Relative Formula Mass" },
                { id: "chem-sub-mass-changes-gas", name: "Mass Changes when a Reactant or Product is a Gas" }
              ]
            },
            {
              id: "chem-topic-chemical-measurements",
              name: "Chemical Measurements",
              subTopics: [
                { id: "chem-sub-calculating-mass-substances", name: "Calculating Mass of Substances" },
                { id: "chem-sub-mole", name: "The Mole" },
                { id: "chem-sub-amounts-substances-equations", name: "Amounts of Substances in Equations" },
                { id: "chem-sub-using-moles-balance", name: "Using Moles to Balance Equations" },
                { id: "chem-sub-limiting-reactants", name: "Limiting Reactants" },
                { id: "chem-sub-concentrations-solutions", name: "Concentrations of Solutions" }
              ]
            }
          ]
        },

        {
          id: "chem-unit-chemical-changes",
          name: "Chemical Changes",
          topics: [
            {
              id: "chem-topic-reactivity-metals",
              name: "Reactivity of Metals",
              subTopics: [
                { id: "chem-sub-metal-oxides", name: "Metal Oxides" },
                { id: "chem-sub-reactivity-series", name: "The Reactivity Series" },
                { id: "chem-sub-extraction-metals-reduction", name: "Extraction of Metals & Reduction" },
                { id: "chem-sub-oxidation-reduction-electrons", name: "Oxidation & Reduction in Terms of Electrons" }
              ]
            },
            {
              id: "chem-topic-reactions-of-acids",
              name: "Reactions of Acids",
              subTopics: [
                { id: "chem-sub-metal-and-acid", name: "Metal and acid" },
                { id: "chem-sub-metal-acid-redox", name: "Metal & Acid Reactions as Redox Reactions" },
                { id: "chem-sub-neutralisation-salt-production", name: "Neutralisation of Acids and Salt Production" },
                { id: "chem-sub-soluble-salts", name: "Soluble Salts" },
                { id: "chem-sub-required-practical-soluble-salt", name: "Required Practical: Preparation of a Soluble Salt" },
                { id: "chem-sub-ph-scale-neutralisation", name: "The pH Scale & Neutralisation" },
                { id: "chem-sub-strong-weak-acids", name: "Strong & Weak Acids" }
              ]
            },
            {
              id: "chem-topic-electrolysis",
              name: "Electrolysis",
              subTopics: [
                { id: "chem-sub-process-electrolysis", name: "The Process of Electrolysis" },
                { id: "chem-sub-molten-ionic-electrolysis", name: "Electrolysis of Molten Ionic Compounds" },
                { id: "chem-sub-electrolysis-extract-metals", name: "Using Electrolysis to Extract Metals" },
                { id: "chem-sub-aqueous-electrolysis", name: "Electrolysis of Aqueous Solutions" },
                { id: "chem-sub-required-practical-aqueous-electrolysis", name: "Required Practical: Electrolysis of Aqueous Solutions" },
                { id: "chem-sub-half-equations-electrolysis", name: "Half Equations in Electrolysis" }
              ]
            }
          ]
        },

        {
          id: "chem-unit-energy-changes",
          name: "Energy Changes",
          topics: [
            {
              id: "chem-topic-exo-endo",
              name: "Exothermic & Endothermic Reactions",
              subTopics: [
                { id: "chem-sub-energy-transfer-reactions", name: "Energy Transfer in Reactions" },
                { id: "chem-sub-required-practical-temp-changes", name: "Required Practical: Investigating Temperature Changes" },
                { id: "chem-sub-reaction-profiles", name: "Reaction Profiles" },
                { id: "chem-sub-energy-change-reactions", name: "The Energy Change of Reactions" }
              ]
            }
          ]
        },

        {
          id: "chem-unit-rate-extent",
          name: "Chemical Change: Rate & Extent",
          topics: [
            {
              id: "chem-topic-rate-of-reaction",
              name: "Rate of Reaction",
              subTopics: [
                { id: "chem-sub-rate-of-reaction", name: "Rate of Reaction" },
                { id: "chem-sub-calculating-rates", name: "Calculating Rates of Reactions" },
                { id: "chem-sub-reaction-rates-using-moles", name: "Reaction Rates Using Moles" },
                { id: "chem-sub-rate-graphs", name: "Rate Graphs" },
                { id: "chem-sub-calculating-gradients", name: "Calculating Gradients" },
                { id: "chem-sub-factors-affect-rate", name: "Factors that Affect the Rate of Reaction" },
                { id: "chem-sub-required-practical-concentration-rate", name: "Required Practical: Investigating the Effect of Concentration on Rate of Reaction" },
                { id: "chem-sub-collision-theory-activation-energy", name: "Collision Theory & Activation Energy" },
                { id: "chem-sub-catalysts", name: "Catalysts" }
              ]
            },
            {
              id: "chem-topic-reversibility-equilibrium",
              name: "Reversibility & Equilibrium",
              subTopics: [
                { id: "chem-sub-reversible-reactions", name: "Reversible Reactions" },
                { id: "chem-sub-energy-changes-reversible", name: "Energy Changes & Reversible Reactions" },
                { id: "chem-sub-equilibrium", name: "Equilibrium" },
                { id: "chem-sub-effect-changing-conditions", name: "The Effect of Changing Conditions on Equilibrium" },
                { id: "chem-sub-effect-changing-concentration", name: "The Effect of Changing Concentration" },
                { id: "chem-sub-effect-temperature-changes", name: "The Effect of Temperature Changes on Equilibrium" },
                { id: "chem-sub-effect-pressure-changes", name: "The Effect of Pressure Changes on Equilibrium" }
              ]
            }
          ]
        },

        {
          id: "chem-unit-organic-chemistry",
          name: "Organic Chemistry",
          topics: [
            {
              id: "chem-topic-hydrocarbons-fuel-feedstock",
              name: "Hydrocarbons: Fuel & Feedstock",
              subTopics: [
                { id: "chem-sub-crude-oil-hydrocarbons-alkanes", name: "Crude Oil, Hydrocarbons & Alkanes" },
                { id: "chem-sub-fractional-distillation-petrochemicals", name: "Fractional Distillation & Petrochemicals" },
                { id: "chem-sub-properties-hydrocarbons", name: "Properties of Hydrocarbons" },
                { id: "chem-sub-cracking-alkenes", name: "Cracking & Alkenes" }
              ]
            }
          ]
        },

        {
          id: "chem-unit-chemical-analysis",
          name: "Chemical Analysis",
          topics: [
            {
              id: "chem-topic-purity-formulations-chromatography",
              name: "Purity, Formulations & Chromatography",
              subTopics: [
                { id: "chem-sub-pure-substances", name: "Pure Substances" },
                { id: "chem-sub-formulations", name: "Formulations" },
                { id: "chem-sub-chromatography", name: "Chromatography" },
                { id: "chem-sub-required-practical-chromatography", name: "Required Practical: Investigating Chromatography" }
              ]
            },
            {
              id: "chem-topic-identification-common-gases",
              name: "Identification of Common Gases",
              subTopics: [
                { id: "chem-sub-test-hydrogen", name: "Test for Hydrogen" },
                { id: "chem-sub-test-oxygen", name: "Test for Oxygen" },
                { id: "chem-sub-test-carbon-dioxide", name: "Test for Carbon Dioxide" },
                { id: "chem-sub-test-chlorine", name: "Test for Chlorine" }
              ]
            }
          ]
        },

        {
          id: "chem-unit-atmosphere",
          name: "Chemistry of the Atmosphere",
          topics: [
            {
              id: "chem-topic-earth-atmosphere",
              name: "Earth's Atmosphere",
              subTopics: [
                { id: "chem-sub-formation-earth-atmosphere", name: "Formation of Earth's Atmosphere" },
                { id: "chem-sub-gases-in-atmosphere", name: "Gases in the Atmosphere" },
                { id: "chem-sub-earth-early-atmosphere", name: "Earth's Early Atmosphere" },
                { id: "chem-sub-how-oxygen-increased", name: "How Oxygen Increased" },
                { id: "chem-sub-how-carbon-dioxide-decreased", name: "How Carbon Dioxide Decreased" }
              ]
            },
            {
              id: "chem-topic-greenhouse-gases-climate",
              name: "Greenhouse Gases & Climate Change",
              subTopics: [
                { id: "chem-sub-co2-ch4-greenhouse", name: "CO2 & CH4 as Greenhouse Gases" },
                { id: "chem-sub-greenhouse-gases", name: "Greenhouse Gases" },
                { id: "chem-sub-humanity-greenhouse-gases", name: "Humanity & Greenhouse Gases" },
                { id: "chem-sub-global-climate-change", name: "Global Climate Change" },
                { id: "chem-sub-carbon-footprint-reduction", name: "The Carbon Footprint & Its Reduction" }
              ]
            },
            {
              id: "chem-topic-atmospheric-pollutants",
              name: "Atmospheric Pollutants",
              subTopics: [
                { id: "chem-sub-common-atmospheric-pollutants", name: "Common atmospheric pollutants" },
                { id: "chem-sub-pollutants-from-fuels", name: "Atmospheric pollutants from fuels" },
                { id: "chem-sub-properties-effects-pollutants", name: "Properties & effects of atmospheric pollutants" }
              ]
            }
          ]
        },

        {
          id: "chem-unit-using-resources",
          name: "Using Resources",
          topics: [
            {
              id: "chem-topic-potable-water",
              name: "Global Reserves & Potable Water",
              subTopics: [
                { id: "chem-sub-resources-sustainability", name: "Resources & Sustainability" },
                { id: "chem-sub-potable-water", name: "Potable Water" },
                { id: "chem-sub-required-practical-water-analysis-purification", name: "Required Practical: Analysis & Purification of Water Samples" },
                { id: "chem-sub-waste-water-treatment", name: "Waste Water Treatment" }
              ]
            },
            {
              id: "chem-topic-metals-life-cycle",
              name: "Metals & Life Cycle Analysis",
              subTopics: [
                { id: "chem-sub-alternative-methods-extracting-metals", name: "Alternative Methods of Extracting Metals" },
                { id: "chem-sub-life-cycle-analysis-recycling", name: "Life Cycle Analysis & Recycling" },
                { id: "chem-sub-life-cycle-assessment", name: "Life Cycle Assessment" },
                { id: "chem-sub-reducing-use-resources", name: "Reducing Use of Resources" }
              ]
            }
          ]
        }
      ]
    },

    // =====================================================
    // PHYSICS
    // =====================================================
    {
      id: "inner-physics",
      name: "Physics",
      units: [
        {
          id: "phys-unit-energy",
          name: "Energy",
          topics: [
            {
              id: "phys-topic-energy-stores-transfers",
              name: "Energy Stores & Transfers",
              subTopics: [
                { id: "phys-sub-energy-changes-system", name: "Energy Changes in a System" },
                { id: "phys-sub-energy-stores-transfers", name: "Energy Stores & Transfers" },
                { id: "phys-sub-examples-energy-transfer", name: "Examples of Energy Transfer" },
                { id: "phys-sub-kinetic-energy", name: "Kinetic Energy" },
                { id: "phys-sub-gravitational-potential-energy", name: "Gravitational Potential Energy" },
                { id: "phys-sub-elastic-potential-energy", name: "Elastic Potential Energy" },
                { id: "phys-sub-ke-gpe-epe", name: "KE, GPE & EPE" },
                { id: "phys-sub-thermal-energy", name: "Thermal Energy" }
              ]
            },
            {
              id: "phys-topic-heating-efficiency-resources",
              name: "Heating, Efficiency & Resources",
              subTopics: [
                { id: "phys-sub-required-practical-shc", name: "Required Practical: Investigating Specific Heat Capacity" },
                { id: "phys-sub-changes-in-energy", name: "Changes in Energy" },
                { id: "phys-sub-power", name: "Power" },
                { id: "phys-sub-conservation-dissipation", name: "Conservation & Dissipation of Energy" },
                { id: "phys-sub-wasted-energy", name: "Wasted Energy" },
                { id: "phys-sub-conduction-of-heat", name: "Conduction of Heat" },
                { id: "phys-sub-efficiency", name: "Efficiency" },
                { id: "phys-sub-improving-efficiency", name: "Improving Efficiency" },
                { id: "phys-sub-energy-resources", name: "Energy Resources" },
                { id: "phys-sub-comparing-energy-resources", name: "Comparing Energy Resources" },
                { id: "phys-sub-environmental-issues", name: "Environmental Issues" },
                { id: "phys-sub-national-global-energy-resources", name: "National & Global Energy Resources" }
              ]
            }
          ]
        },

        {
          id: "phys-unit-electricity",
          name: "Electricity",
          topics: [
            {
              id: "phys-topic-circuits",
              name: "Current, Potential Difference & Resistance",
              subTopics: [
                { id: "phys-sub-circuit-diagrams", name: "Circuit Diagrams" },
                { id: "phys-sub-charge-current", name: "Charge & Current" },
                { id: "phys-sub-current-resistance-potential-difference", name: "Current, Resistance & Potential Difference" },
                { id: "phys-sub-required-practical-resistance", name: "Required Practical: Investigating Resistance" },
                { id: "phys-sub-resistors", name: "Resistors" },
                { id: "phys-sub-iv-graphs", name: "I–V Graphs" },
                { id: "phys-sub-thermistors", name: "Thermistors" },
                { id: "phys-sub-ldrs", name: "LDRs" },
                { id: "phys-sub-investigating-thermistors-ldrs", name: "Investigating Resistance in Thermistors & LDRs" },
                { id: "phys-sub-required-practical-iv-characteristics", name: "Required Practical: Investigating I–V Characteristics" }
              ]
            },
            {
              id: "phys-topic-series-parallel",
              name: "Series & Parallel Circuits",
              subTopics: [
                { id: "phys-sub-series-parallel-circuits", name: "Series & Parallel Circuits" },
                { id: "phys-sub-resistors-series-parallel", name: "Resistors in Series & Parallel" },
                { id: "phys-sub-comparing-series-parallel", name: "Comparing Series & Parallel Circuits" }
              ]
            },
            {
              id: "phys-topic-ac-dc-mains",
              name: "AC & DC / Mains Electricity",
              subTopics: [
                { id: "phys-sub-ac-dc", name: "AC & DC" },
                { id: "phys-sub-mains-electricity", name: "Mains Electricity" },
                { id: "phys-sub-dangers-mains", name: "Dangers of Mains Electricity" }
              ]
            },
            {
              id: "phys-topic-energy-transfers-grid",
              name: "Energy Transfers & The National Grid",
              subTopics: [
                { id: "phys-sub-energy-transfers", name: "Energy Transfers" },
                { id: "phys-sub-electrical-power", name: "Electrical Power" },
                { id: "phys-sub-electrical-energy", name: "Electrical Energy" },
                { id: "phys-sub-calculating-energy-transfers", name: "Calculating Energy Transfers" },
                { id: "phys-sub-power-ratings", name: "Power Ratings" },
                { id: "phys-sub-national-grid", name: "The National Grid" },
                { id: "phys-sub-use-of-transformers", name: "Use of Transformers" }
              ]
            }
          ]
        },

        {
          id: "phys-unit-particle-model",
          name: "Particle Model of Matter",
          topics: [
            {
              id: "phys-topic-density-states",
              name: "Changes of State & the Particle Model",
              subTopics: [
                { id: "phys-sub-density", name: "Density" },
                { id: "phys-sub-solids-liquids-gases", name: "Solids, Liquids & Gases" },
                { id: "phys-sub-required-practical-density", name: "Required Practical: Determining Density" },
                { id: "phys-sub-changes-of-state", name: "Changes of State" }
              ]
            },
            {
              id: "phys-topic-internal-energy",
              name: "Internal Energy & Energy Transfers",
              subTopics: [
                { id: "phys-sub-internal-energy-energy-transfers", name: "Internal Energy & Energy Transfers" },
                { id: "phys-sub-internal-energy", name: "Internal Energy" },
                { id: "phys-sub-specific-heat-capacity", name: "Specific Heat Capacity" },
                { id: "phys-sub-latent-heat", name: "Latent Heat" },
                { id: "phys-sub-specific-latent-heat", name: "Specific Latent Heat" },
                { id: "phys-sub-heating-cooling-graphs", name: "Heating & Cooling Graphs" },
                { id: "phys-sub-shc-v-slh", name: "Specific Heat Capacity v Specific Latent Heat" }
              ]
            },
            {
              id: "phys-topic-pressure-kinetic-theory",
              name: "Particle Model & Pressure",
              subTopics: [
                { id: "phys-sub-particle-model-pressure", name: "Particle Model & Pressure" },
                { id: "phys-sub-kinetic-theory", name: "Kinetic Theory" }
              ]
            }
          ]
        },

        {
          id: "phys-unit-atomic-structure",
          name: "Atomic Structure",
          topics: [
            {
              id: "phys-topic-atoms-isotopes",
              name: "Atoms & Isotopes",
              subTopics: [
                { id: "phys-sub-atoms-isotopes", name: "Atoms & Isotopes" },
                { id: "phys-sub-atomic-structure", name: "Atomic Structure" },
                { id: "phys-sub-absorption-emission-em", name: "The Absorption & Emission of EM Radiation" },
                { id: "phys-sub-atomic-mass-number", name: "Atomic & Mass Number" },
                { id: "phys-sub-isotopes", name: "Isotopes" },
                { id: "phys-sub-positive-ions", name: "Positive Ions" },
                { id: "phys-sub-plum-pudding", name: "The Plum Pudding Model" },
                { id: "phys-sub-rutherford-scattering", name: "Rutherford Scattering" },
                { id: "phys-sub-bohrs-model", name: "Bohr's Model of the Atom" },
                { id: "phys-sub-discovery-proton-neutron", name: "Discovery of the Proton & Neutron" },
                { id: "phys-sub-changes-atomic-model", name: "Changes in the Atomic Model" }
              ]
            },
            {
              id: "phys-topic-nuclear-radiation",
              name: "Atoms & Nuclear Radiation",
              subTopics: [
                { id: "phys-sub-radioactive-decay", name: "Radioactive Decay" },
                { id: "phys-sub-types-of-radiation", name: "Types of Radiation" },
                { id: "phys-sub-uses-of-radiation", name: "Uses of Radiation" },
                { id: "phys-sub-alpha-decay", name: "Alpha Decay" },
                { id: "phys-sub-beta-decay", name: "Beta Decay" },
                { id: "phys-sub-gamma-decay", name: "Gamma Decay" },
                { id: "phys-sub-random-nature-decay", name: "Random Nature of Radioactive Decay" },
                { id: "phys-sub-half-life", name: "Half-Life" },
                { id: "phys-sub-calculating-radioactive-decay", name: "Calculating Radioactive Decay" },
                { id: "phys-sub-contamination-irradiation", name: "Contamination & Irradiation" },
                { id: "phys-sub-hazards-contamination-irradiation", name: "Hazards of Contamination & Irradiation" },
                { id: "phys-sub-studies-effects-radiation", name: "Studies into the Effects of Radiation" }
              ]
            }
          ]
        },

        {
          id: "phys-unit-forces",
          name: "Forces",
          topics: [
            {
              id: "phys-topic-forces-interactions",
              name: "Forces & their Interactions",
              subTopics: [
                { id: "phys-sub-scalars-vectors", name: "Scalars & Vectors" },
                { id: "phys-sub-contact-non-contact-forces", name: "Contact & Non-Contact Forces" },
                { id: "phys-sub-forces-as-vectors", name: "Forces as Vectors" },
                { id: "phys-sub-weight-mass-gravity", name: "Weight, Mass & Gravity" },
                { id: "phys-sub-calculating-weight", name: "Calculating Weight" },
                { id: "phys-sub-resultant-forces", name: "Resultant Forces" },
                { id: "phys-sub-free-body-diagrams", name: "Free Body Diagrams" },
                { id: "phys-sub-balanced-unbalanced", name: "Balanced & Unbalanced Forces" }
              ]
            },
            {
              id: "phys-topic-work-done",
              name: "Work Done & Energy Transfer",
              subTopics: [
                { id: "phys-sub-work-done", name: "Work Done" },
                { id: "phys-sub-work-done-energy-transfer", name: "Work Done & Energy Transfer" },
                { id: "phys-sub-work-done-friction", name: "Work Done & Friction" }
              ]
            },
            {
              id: "phys-topic-forces-elasticity",
              name: "Forces & Elasticity",
              subTopics: [
                { id: "phys-sub-changing-shape", name: "Changing Shape" },
                { id: "phys-sub-hookes-law", name: "Hooke's Law" },
                { id: "phys-sub-force-extension-graphs", name: "Force–Extension Graphs" },
                { id: "phys-sub-work-done-spring", name: "Work Done on a Spring" },
                { id: "phys-sub-required-practical-force-extension", name: "Required Practical: Investigating Force & Extension" }
              ]
            },
            {
              id: "phys-topic-describing-motion",
              name: "Describing Motion",
              subTopics: [
                { id: "phys-sub-distance-displacement", name: "Distance & Displacement" },
                { id: "phys-sub-speed", name: "Speed" },
                { id: "phys-sub-measuring-speed", name: "Measuring Speed" },
                { id: "phys-sub-calculating-speed", name: "Calculating Speed" },
                { id: "phys-sub-velocity", name: "Velocity" },
                { id: "phys-sub-vector-scalar-quantities", name: "Vector & Scalar Quantities" },
                { id: "phys-sub-circular-motion", name: "Circular Motion" },
                { id: "phys-sub-distance-time-graphs", name: "Distance-Time Graphs" },
                { id: "phys-sub-instantaneous-speed", name: "Instantaneous Speed" },
                { id: "phys-sub-acceleration", name: "Acceleration" },
                { id: "phys-sub-velocity-time-graphs", name: "Velocity-Time Graphs" },
                { id: "phys-sub-area-under-vt-graphs", name: "Area Under Velocity-Time Graphs" },
                { id: "phys-sub-calculating-uniform-acceleration", name: "Calculating Uniform Acceleration" },
                { id: "phys-sub-terminal-velocity", name: "Terminal Velocity" }
              ]
            },
            {
              id: "phys-topic-newtons-laws",
              name: "Newton's Laws of Motion",
              subTopics: [
                { id: "phys-sub-newtons-first-law", name: "Newton's First Law" },
                { id: "phys-sub-newtons-second-law", name: "Newton's Second Law" },
                { id: "phys-sub-required-practical-force-acceleration", name: "Required Practical: Investigating Force & Acceleration" },
                { id: "phys-sub-newtons-third-law", name: "Newton's Third Law" },
                { id: "phys-sub-inertia", name: "Inertia" }
              ]
            },
            {
              id: "phys-topic-stopping-distances",
              name: "Stopping Distances",
              subTopics: [
                { id: "phys-sub-stopping-distances", name: "Stopping Distances" },
                { id: "phys-sub-thinking-braking-distances", name: "Thinking & Braking Distances" },
                { id: "phys-sub-reaction-time", name: "Reaction Time" },
                { id: "phys-sub-factors-thinking-distance-reaction-time", name: "Factors Affecting Thinking Distance & Reaction Time" },
                { id: "phys-sub-factors-braking-distance", name: "Factors Affecting Braking Distance" },
                { id: "phys-sub-estimating-decelerating-forces", name: "Estimating Decelerating Forces" }
              ]
            },
            {
              id: "phys-topic-momentum",
              name: "Momentum",
              subTopics: [
                { id: "phys-sub-momentum", name: "Momentum" },
                { id: "phys-sub-conservation-of-momentum", name: "Conservation of Momentum" },
                { id: "phys-sub-collisions", name: "Collisions" }
              ]
            }
          ]
        },

        {
          id: "phys-unit-waves",
          name: "Waves",
          topics: [
            {
              id: "phys-topic-waves-properties",
              name: "Waves in Air, Fluids & Solids",
              subTopics: [
                { id: "phys-sub-transverse-longitudinal", name: "Transverse & Longitudinal Waves" },
                { id: "phys-sub-describing-wave-motion", name: "Describing Wave Motion" },
                { id: "phys-sub-wave-equation", name: "The Wave Equation" },
                { id: "phys-sub-measuring-speed-waves", name: "Measuring the Speed of Waves" },
                { id: "phys-sub-required-practical-wave-properties", name: "Required Practical: Measuring Wave Properties" }
              ]
            },
            {
              id: "phys-topic-electromagnetic-waves",
              name: "Electromagnetic Waves",
              subTopics: [
                { id: "phys-sub-electromagnetic-em-waves", name: "Electromagnetic (EM) Waves" },
                { id: "phys-sub-transfer-energy-em-waves", name: "Transfer of Energy by EM Waves" },
                { id: "phys-sub-em-waves-matter", name: "EM Waves & Matter" },
                { id: "phys-sub-refraction-ray-diagrams", name: "Refraction Ray Diagrams" },
                { id: "phys-sub-required-practical-infrared", name: "Required Practical: Investigating Infrared Radiation" },
                { id: "phys-sub-em-waves-atoms", name: "EM Waves & Atoms" },
                { id: "phys-sub-radio-waves", name: "Radio Waves" },
                { id: "phys-sub-dangers-high-energy-em", name: "Dangers of High-Energy EM Waves" },
                { id: "phys-sub-applications-em-waves", name: "Applications of EM Waves" }
              ]
            }
          ]
        },

        {
          id: "phys-unit-magnetism-electromagnetism",
          name: "Magnetism & Electromagnetism",
          topics: [
            {
              id: "phys-topic-magnetic-forces-fields",
              name: "Permanent & Induced Magnetism, Magnetic Forces & Fields",
              subTopics: [
                { id: "phys-sub-magnetism", name: "Magnetism" },
                { id: "phys-sub-permanent-induced-magnets", name: "Permanent & Induced Magnets" },
                { id: "phys-sub-magnetic-fields", name: "Magnetic Fields" },
                { id: "phys-sub-earths-magnetic-field", name: "The Earth's Magnetic Field" }
              ]
            },
            {
              id: "phys-topic-motor-effect-motors",
              name: "The Motor Effect",
              subTopics: [
                { id: "phys-sub-motor-effect", name: "The Motor Effect" },
                { id: "phys-sub-magnetic-fields-wires-solenoids", name: "Magnetic Fields in Wires & Solenoids" },
                { id: "phys-sub-flemings-left-hand-rule", name: "Fleming's Left-Hand Rule" },
                { id: "phys-sub-electric-motors", name: "Electric Motors" }
              ]
            }
          ]
        }
      ]
    }
  ],

  papers: [
    // Biology
    {
      id: "bio-paper-1",
      name: "Biology Paper 1",
      assessedNodeIds: [
        "bio-unit-cell-biology",
        "bio-unit-organisation",
        "bio-unit-infection-response",
        "bio-unit-bioenergetics"
      ]
    },
    {
      id: "bio-paper-2",
      name: "Biology Paper 2",
      assessedNodeIds: [
        "bio-unit-homeostasis-response",
        "bio-unit-inheritance-variation-evolution",
        "bio-unit-ecology"
      ]
    },

    // Chemistry
    {
      id: "chem-paper-1",
      name: "Chemistry Paper 1",
      assessedNodeIds: [
        "chem-unit-atomic-structure-periodic-table",
        "chem-unit-bonding-structure-properties",
        "chem-unit-quantitative-chemistry",
        "chem-unit-chemical-changes",
        "chem-unit-energy-changes"
      ]
    },
    {
      id: "chem-paper-2",
      name: "Chemistry Paper 2",
      assessedNodeIds: [
        "chem-unit-rate-extent",
        "chem-unit-organic-chemistry",
        "chem-unit-chemical-analysis",
        "chem-unit-atmosphere",
        "chem-unit-using-resources"
      ]
    },

    // Physics
    {
      id: "phys-paper-1",
      name: "Physics Paper 1",
      assessedNodeIds: [
        "phys-unit-energy",
        "phys-unit-electricity",
        "phys-unit-particle-model",
        "phys-unit-atomic-structure"
      ]
    },
    {
      id: "phys-paper-2",
      name: "Physics Paper 2",
      assessedNodeIds: [
        "phys-unit-forces",
        "phys-unit-waves",
        "phys-unit-magnetism-electromagnetism"
      ]
    }
  ]
};

