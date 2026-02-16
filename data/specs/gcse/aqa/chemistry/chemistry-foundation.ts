import type { SubjectSpecification } from "../../../../types/SubjectSpecification"

export const specification: SubjectSpecification = {
  units: [
    {
      id: "unit-atomic-structure-and-periodic-table",
      name: "Atomic Structure & the Periodic Table",
      topics: [
        {
          id: "topic-simple-model-of-the-atom",
          name: "Simple Model of the Atom",
          subTopics: [
            { id: "subtopic-elements", name: "Elements" },
            { id: "subtopic-compounds", name: "Compounds" },
            { id: "subtopic-equations", name: "Equations" },
            { id: "subtopic-half-equations-and-ionic-equations", name: "Half Equations & Ionic Equations" },
            { id: "subtopic-mixtures", name: "Mixtures" },
            { id: "subtopic-history-of-the-atom", name: "History of the Atom" },
            { id: "subtopic-structure-of-the-atom", name: "The Structure of the Atom" },
            { id: "subtopic-size-and-mass-of-atoms", name: "Size & Mass of Atoms" },
            { id: "subtopic-relative-atomic-mass", name: "Relative Atomic Mass" },
            { id: "subtopic-electronic-structure", name: "Electronic Structure" }
          ]
        },
        {
          id: "topic-the-periodic-table",
          name: "The Periodic Table",
          subTopics: [
            { id: "subtopic-arranging-the-elements", name: "Arranging the Elements" },
            { id: "subtopic-history-of-the-periodic-table", name: "History of the Periodic Table" },
            { id: "subtopic-metals-and-non-metals", name: "Metals & Non-Metals" },
            { id: "subtopic-group-0-noble-gases", name: "Group 0: The Noble Gases" },
            { id: "subtopic-group-1-alkali-metals", name: "Group 1: The Alkali Metals" },
            { id: "subtopic-group-7-halogens", name: "Group 7: The Halogens" }
          ]
        },
        {
          id: "topic-properties-of-transition-metals",
          name: "Properties of Transition Metals",
          subTopics: [
            { id: "subtopic-typical-properties-of-transition-metals", name: "Typical Properties of Transition Metals" },
            { id: "subtopic-transition-metals-vs-alkali-metals", name: "Transition Metals vs. Alkali Metals" }
          ]
        }
      ]
    },

    {
      id: "unit-bonds-structure-and-properties-of-matter",
      name: "Bonds, Structure & Properties of Matter",
      topics: [
        {
          id: "topic-ionic-covalent-and-metallic-bond",
          name: "Ionic, Covalent & Metallic Bond",
          subTopics: [
            { id: "subtopic-chemical-bonds", name: "Chemical Bonds" },
            { id: "subtopic-ionic-bonding", name: "Ionic Bonding" },
            { id: "subtopic-ionic-compounds", name: "Ionic Compounds" },
            { id: "subtopic-covalent-bonding", name: "Covalent Bonding" },
            { id: "subtopic-metallic-bonding", name: "Metallic Bonding" }
          ]
        },
        {
          id: "topic-bonding-and-substance-properties",
          name: "Bonding & Substance Properties",
          subTopics: [
            { id: "subtopic-states-of-matter", name: "States of Matter" },
            { id: "subtopic-particle-theory", name: "Particle Theory & its Limitations" },
            { id: "subtopic-state-symbols", name: "State Symbols" },
            { id: "subtopic-properties-of-ionic-compounds", name: "Properties of Ionic Compounds" },
            { id: "subtopic-properties-of-small-molecules", name: "Properties of Small Molecules" },
            { id: "subtopic-polymers", name: "Polymers" },
            { id: "subtopic-giant-covalent-structures", name: "Giant Covalent Structures" },
            { id: "subtopic-properties-of-metals-and-alloys", name: "Properties of Metals & Alloys" },
            { id: "subtopic-metals-as-conductors", name: "Metals as Conductors" }
          ]
        },
        {
          id: "topic-structure-and-bonding-of-carbon",
          name: "Structure & Bonding of Carbon",
          subTopics: [
            { id: "subtopic-diamond-structure", name: "Diamond Structure" },
            { id: "subtopic-graphite-structure", name: "Graphite Structure" },
            { id: "subtopic-graphene-and-fullerenes", name: "Graphene & Fullerenes" }
          ]
        },
        {
          id: "topic-bulk-and-surface-properties",
          name: "Bulk & Surface Properties",
          subTopics: [
            { id: "subtopic-sizes-of-particles-and-properties", name: "Sizes of Particles & their Properties" },
            { id: "subtopic-nanoparticles", name: "Nanoparticles" }
          ]
        }
      ]
    },

    {
      id: "unit-quantitative-chemistry",
      name: "Quantitative Chemistry",
      topics: [
        {
          id: "topic-measurement-mass-and-equations",
          name: "Measurement, Mass & Equations",
          subTopics: [
            { id: "subtopic-conservation-of-mass-and-balanced-equations", name: "Conservation of Mass & Balanced Chemical Equations" },
            { id: "subtopic-calculate-relative-formula-mass", name: "Calculate Relative Formula Mass" },
            { id: "subtopic-mass-changes-gas", name: "Mass Changes when a Reactant or Product is a Gas" },
            { id: "subtopic-chemical-measurements", name: "Chemical Measurements" },
            { id: "subtopic-calculating-mass-of-substances", name: "Calculating Mass of Substances" }
          ]
        },
        {
          id: "topic-yield-and-atom-economy",
          name: "Yield & Atom Economy",
          subTopics: [
            { id: "subtopic-percentage-yield", name: "Percentage Yield" },
            { id: "subtopic-theoretical-masses", name: "Theoretical Masses of Products" },
            { id: "subtopic-calculating-atom-economy", name: "Calculating Atom Economy" },
            { id: "subtopic-choosing-reaction-pathway", name: "Choosing a Reaction Pathway" }
          ]
        },
        {
          id: "topic-concentration-of-solutions",
          name: "Concentration of Solutions",
          subTopics: [
            { id: "subtopic-concentration-of-solutions-detail", name: "Concentration of Solutions" },
            { id: "subtopic-using-concentrations-mol-dm3", name: "Using Concentrations in mol/dm3" }
          ]
        },
        {
          id: "topic-amount-of-substance-and-gas-volume",
          name: "Amount of Substance & Gas Volume",
          subTopics: [
            { id: "subtopic-amount-and-gas-volumes", name: "Amount of Substance in Relation to Volumes of Gases" }
          ]
        }
      ]
    },

    {
      id: "unit-chemical-changes",
      name: "Chemical Changes",
      topics: [
        {
          id: "topic-reactivity-of-metals",
          name: "Reactivity of Metals",
          subTopics: [
            { id: "subtopic-metal-oxides", name: "Metal Oxides" },
            { id: "subtopic-reactivity-series", name: "The Reactivity Series" },
            { id: "subtopic-extraction-and-reduction", name: "Extraction of Metals & Reduction" },
            { id: "subtopic-oxidation-and-reduction-electrons", name: "Oxidation & Reduction in Terms of Electrons" }
          ]
        },
        {
          id: "topic-reactions-of-acids",
          name: "Reactions of Acids",
          subTopics: [
            { id: "subtopic-metal-and-acid", name: "Metal and Acid" },
            { id: "subtopic-neutralisation-and-salts", name: "Neutralisation of Acids and Salt Production" },
            { id: "subtopic-soluble-salts", name: "Soluble Salts" },
            { id: "subtopic-ph-scale", name: "The pH Scale & Neutralisation" },
            { id: "subtopic-strong-and-weak-acids", name: "Strong & Weak Acids" }
          ]
        },
        {
          id: "topic-electrolysis",
          name: "Electrolysis",
          subTopics: [
            { id: "subtopic-process-of-electrolysis", name: "The Process of Electrolysis" },
            { id: "subtopic-electrolysis-of-molten-compounds", name: "Electrolysis of Molten Ionic Compounds" },
            { id: "subtopic-electrolysis-of-aqueous-solutions", name: "Electrolysis of Aqueous Solutions" },
            { id: "subtopic-half-equations-electrolysis", name: "Half Equations in Electrolysis" }
          ]
        }
      ]
    },

    {
      id: "unit-energy-changes",
      name: "Energy Changes",
      topics: [
        {
          id: "topic-exothermic-and-endothermic-reactions",
          name: "Exothermic & Endothermic Reactions",
          subTopics: [
            { id: "subtopic-energy-transfer", name: "Energy Transfer in Reactions" },
            { id: "subtopic-reaction-profiles", name: "Reaction Profiles" },
            { id: "subtopic-energy-change-of-reactions", name: "The Energy Change of Reactions" }
          ]
        },
        {
          id: "topic-chemical-cells-and-fuel-cells",
          name: "Chemical Cells & Fuel Cells",
          subTopics: [
            { id: "subtopic-cells-and-batteries", name: "Cells & Batteries" },
            { id: "subtopic-fuel-cells", name: "Fuel Cells" }
          ]
        }
      ]
    },

    {
      id: "unit-rate-and-extent-of-chemical-change",
      name: "Chemical Change: Rate & Extent",
      topics: [
        {
          id: "topic-rate-of-reaction",
          name: "Rate of Reaction",
          subTopics: [
            { id: "subtopic-calculating-rates", name: "Calculating Rates of Reactions" },
            { id: "subtopic-rate-graphs", name: "Rate Graphs" },
            { id: "subtopic-factors-affecting-rate", name: "Factors that Affect the Rate of Reaction" },
            { id: "subtopic-collision-theory", name: "Collision Theory & Activation Energy" },
            { id: "subtopic-catalysts", name: "Catalysts" }
          ]
        },
        {
          id: "topic-reversibility-and-equilibrium",
          name: "Reversibility & Equilibrium",
          subTopics: [
            { id: "subtopic-reversible-reactions", name: "Reversible Reactions" },
            { id: "subtopic-equilibrium", name: "Equilibrium" },
            { id: "subtopic-effect-of-changing-conditions", name: "The Effect of Changing Conditions on Equilibrium" }
          ]
        }
      ]
    },

    {
      id: "unit-organic-chemistry",
      name: "Organic Chemistry",
      topics: [
        {
          id: "topic-hydrocarbons-fuel-and-feedstock",
          name: "Hydrocarbons: Fuel & Feedstock",
          subTopics: [
            { id: "subtopic-crude-oil-and-alkanes", name: "Crude Oil, Hydrocarbons & Alkanes" },
            { id: "subtopic-fractional-distillation", name: "Fractional Distillation & Petrochemicals" },
            { id: "subtopic-cracking-and-alkenes", name: "Cracking & Alkenes" }
          ]
        },
        {
          id: "topic-reactions-of-alkenes-and-alcohols",
          name: "Reactions of Alkenes & Alcohols",
          subTopics: [
            { id: "subtopic-addition-reactions", name: "Addition Reactions of Alkenes" },
            { id: "subtopic-alcohols", name: "Alcohols" }
          ]
        },
        {
          id: "topic-synthetic-and-natural-polymers",
          name: "Synthetic & Natural Polymers",
          subTopics: [
            { id: "subtopic-addition-polymerisation", name: "Addition Polymerisation" },
            { id: "subtopic-condensation-polymerisation", name: "Condensation Polymerisation" }
          ]
        }
      ]
    },

    {
      id: "unit-chemical-analysis",
      name: "Chemical Analysis",
      topics: [
        {
          id: "topic-purity-formulations-and-chromatography",
          name: "Purity, Formulations & Chromatography",
          subTopics: [
            { id: "subtopic-pure-substances", name: "Pure Substances" },
            { id: "subtopic-chromatography", name: "Chromatography" }
          ]
        },
        {
          id: "topic-identification-of-common-gases",
          name: "Identification of Common Gases",
          subTopics: [
            { id: "subtopic-test-for-hydrogen", name: "Test for Hydrogen" },
            { id: "subtopic-test-for-oxygen", name: "Test for Oxygen" },
            { id: "subtopic-test-for-carbon-dioxide", name: "Test for Carbon Dioxide" }
          ]
        }
      ]
    },

    {
      id: "unit-chemistry-of-the-atmosphere",
      name: "Chemistry of the Atmosphere",
      topics: [
        {
          id: "topic-formation-of-earths-atmosphere",
          name: "Formation of Earth's Atmosphere",
          subTopics: [
            { id: "subtopic-gases-in-the-atmosphere", name: "Gases in the Atmosphere" },
            { id: "subtopic-global-climate-change", name: "Global Climate Change" }
          ]
        }
      ]
    },

    {
      id: "unit-using-resources",
      name: "Using Resources",
      topics: [
        {
          id: "topic-global-reserves-and-potable-water",
          name: "Global Reserves & Potable Water",
          subTopics: [
            { id: "subtopic-potable-water", name: "Potable Water" },
            { id: "subtopic-waste-water-treatment", name: "Waste Water Treatment" }
          ]
        },
        {
          id: "topic-haber-process-and-npk-fertilisers",
          name: "Haber Process & NPK Fertilisers",
          subTopics: [
            { id: "subtopic-haber-process", name: "The Haber Process" },
            { id: "subtopic-choosing-reaction-conditions", name: "Choosing Reaction Conditions" }
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
        "unit-atomic-structure-and-periodic-table",
        "unit-bonds-structure-and-properties-of-matter",
        "unit-quantitative-chemistry",
        "unit-chemical-changes",
        "unit-energy-changes"
      ]
    },
    {
      id: "paper-2",
      name: "Paper 2",
      assessedNodeIds: [
        "unit-rate-and-extent-of-chemical-change",
        "unit-organic-chemistry",
        "unit-chemical-analysis",
        "unit-chemistry-of-the-atmosphere",
        "unit-using-resources"
      ]
    }
  ]
};
