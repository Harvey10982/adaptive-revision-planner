import type { SubjectSpecification } from "../../../../types/SubjectSpecification"

export const specification: SubjectSpecification = {
  units: [
    {
      id: "unit-energy",
      name: "Energy",
      topics: [
        {
          id: "topic-energy-changes-in-a-system",
          name: "Energy Changes in a System",
          subTopics: [
            { id: "subtopic-energy-stores-and-transfers", name: "Energy Stores & Transfers" },
            { id: "subtopic-examples-of-energy-transfer", name: "Examples of Energy Transfer" },
            { id: "subtopic-kinetic-energy", name: "Kinetic Energy" },
            { id: "subtopic-gravitational-potential-energy", name: "Gravitational Potential Energy" },
            { id: "subtopic-elastic-potential-energy", name: "Elastic Potential Energy" },
            { id: "subtopic-ke-gpe-epe", name: "KE, GPE & EPE" },
            { id: "subtopic-thermal-energy", name: "Thermal Energy" },
            {
              id: "subtopic-required-practical-specific-heat-capacity",
              name: "Required Practical: Investigating Specific Heat Capacity"
            }
          ]
        },
        {
          id: "topic-changes-in-energy",
          name: "Changes in Energy",
          subTopics: [
            { id: "subtopic-changes-in-energy-detail", name: "Changes in Energy" },
            { id: "subtopic-power", name: "Power" }
          ]
        },
        {
          id: "topic-conservation-and-dissipation-of-energy",
          name: "Conservation & Dissipation of Energy",
          subTopics: [
            {
              id: "subtopic-conservation-and-dissipation-of-energy-detail",
              name: "Conservation & Dissipation of Energy"
            },
            { id: "subtopic-wasted-energy", name: "Wasted Energy" },
            { id: "subtopic-conduction-of-heat", name: "Conduction of Heat" },
            { id: "subtopic-required-practical-insulation", name: "Required Practical: Investigating Insulation" },
            { id: "subtopic-efficiency", name: "Efficiency" },
            { id: "subtopic-improving-efficiency", name: "Improving Efficiency" }
          ]
        },
        {
          id: "topic-national-and-global-energy-resources",
          name: "National & Global Energy Resources",
          subTopics: [
            { id: "subtopic-energy-resources", name: "Energy Resources" },
            { id: "subtopic-comparing-energy-resources", name: "Comparing Energy Resources" },
            { id: "subtopic-environmental-issues", name: "Environmental Issues" }
          ]
        }
      ]
    },

    {
      id: "unit-electricity",
      name: "Electricity",
      topics: [
        {
          id: "topic-current-potential-difference-and-resistance",
          name: "Current, Potential Difference & Resistance",
          subTopics: [
            { id: "subtopic-circuit-diagrams", name: "Circuit Diagrams" },
            { id: "subtopic-charge-and-current", name: "Charge & Current" },
            { id: "subtopic-current-resistance-and-potential-difference", name: "Current, Resistance & Potential Difference" },
            { id: "subtopic-required-practical-resistance", name: "Required Practical: Investigating Resistance" },
            { id: "subtopic-resistors", name: "Resistors" },
            { id: "subtopic-iv-graphs", name: "I–V Graphs" },
            { id: "subtopic-thermistors", name: "Thermistors" },
            { id: "subtopic-ldrs", name: "LDRs" },
            { id: "subtopic-investigating-resistance-thermistors-ldrs", name: "Investigating Resistance in Thermistors & LDRs" },
            { id: "subtopic-required-practical-iv-characteristics", name: "Required Practical: Investigating I–V Characteristics" }
          ]
        },
        {
          id: "topic-series-and-parallel-circuits",
          name: "Series & Parallel Circuits",
          subTopics: [
            { id: "subtopic-series-and-parallel-circuits-detail", name: "Series & Parallel Circuits" },
            { id: "subtopic-resistors-in-series-and-parallel", name: "Resistors in Series & Parallel" },
            { id: "subtopic-comparing-series-and-parallel-circuits", name: "Comparing Series & Parallel Circuits" }
          ]
        },
        {
          id: "topic-ac-and-dc",
          name: "AC & DC",
          subTopics: [
            { id: "subtopic-ac-and-dc-detail", name: "AC & DC" },
            { id: "subtopic-mains-electricity", name: "Mains Electricity" },
            { id: "subtopic-dangers-of-mains-electricity", name: "Dangers of Mains Electricity" }
          ]
        },
        {
          id: "topic-energy-transfers-electrical",
          name: "Energy Transfers",
          subTopics: [
            { id: "subtopic-energy-transfers", name: "Energy Transfers" },
            { id: "subtopic-electrical-power", name: "Electrical Power" },
            { id: "subtopic-electrical-energy", name: "Electrical Energy" },
            { id: "subtopic-calculating-energy-transfers", name: "Calculating Energy Transfers" },
            { id: "subtopic-power-ratings", name: "Power Ratings" },
            { id: "subtopic-national-grid", name: "The National Grid" },
            { id: "subtopic-use-of-transformers", name: "Use of Transformers" }
          ]
        },
        {
          id: "topic-static-electricity",
          name: "Static Electricity",
          subTopics: [
            { id: "subtopic-electric-charge", name: "Electric Charge" },
            { id: "subtopic-static-electricity-detail", name: "Static Electricity" },
            { id: "subtopic-electric-fields", name: "Electric Fields" },
            { id: "subtopic-fields-and-static", name: "Fields & Static" }
          ]
        }
      ]
    },

    {
      id: "unit-particle-model-of-matter",
      name: "Particle Model of Matter",
      topics: [
        {
          id: "topic-changes-of-state-and-particle-model",
          name: "Changes of State & the Particle Model",
          subTopics: [
            { id: "subtopic-density", name: "Density" },
            { id: "subtopic-solids-liquids-and-gases", name: "Solids, Liquids & Gases" },
            { id: "subtopic-required-practical-determining-density", name: "Required Practical: Determining Density" },
            { id: "subtopic-changes-of-state", name: "Changes of State" }
          ]
        },
        {
          id: "topic-internal-energy-and-energy-transfers",
          name: "Internal Energy & Energy Transfers",
          subTopics: [
            { id: "subtopic-internal-energy", name: "Internal Energy" },
            { id: "subtopic-specific-heat-capacity", name: "Specific Heat Capacity" },
            { id: "subtopic-latent-heat", name: "Latent Heat" },
            { id: "subtopic-specific-latent-heat", name: "Specific Latent Heat" },
            { id: "subtopic-heating-and-cooling-graphs", name: "Heating & Cooling Graphs" },
            {
              id: "subtopic-shc-vs-slh",
              name: "Specific Heat Capacity v Specific Latent Heat"
            }
          ]
        },
        {
          id: "topic-particle-model-and-pressure",
          name: "Particle Model & Pressure",
          subTopics: [
            { id: "subtopic-kinetic-theory", name: "Kinetic Theory" },
            { id: "subtopic-pressure-and-volume", name: "Pressure & Volume" },
            { id: "subtopic-work-on-a-gas", name: "Work on a Gas" }
          ]
        }
      ]
    },

    {
      id: "unit-atomic-structure",
      name: "Atomic Structure",
      topics: [
        {
          id: "topic-atoms-and-isotopes",
          name: "Atoms & Isotopes",
          subTopics: [
            { id: "subtopic-atomic-structure-overview", name: "Atomic Structure" },
            { id: "subtopic-absorption-and-emission-em", name: "The Absorption & Emission of EM Radiation" },
            { id: "subtopic-atomic-and-mass-number", name: "Atomic & Mass Number" },
            { id: "subtopic-isotopes", name: "Isotopes" },
            { id: "subtopic-positive-ions", name: "Positive Ions" },
            { id: "subtopic-plum-pudding-model", name: "The Plum Pudding Model" },
            { id: "subtopic-rutherford-scattering", name: "Rutherford Scattering" },
            { id: "subtopic-bohrs-model", name: "Bohr's Model of the Atom" },
            { id: "subtopic-discovery-proton-neutron", name: "Discovery of the Proton & Neutron" },
            { id: "subtopic-changes-in-atomic-model", name: "Changes in the Atomic Model" }
          ]
        },
        {
          id: "topic-atoms-and-nuclear-radiation",
          name: "Atoms & Nuclear Radiation",
          subTopics: [
            { id: "subtopic-radioactive-decay", name: "Radioactive Decay" },
            { id: "subtopic-types-of-radiation", name: "Types of Radiation" },
            { id: "subtopic-uses-of-radiation", name: "Uses of Radiation" },
            { id: "subtopic-alpha-decay", name: "Alpha Decay" },
            { id: "subtopic-beta-decay", name: "Beta Decay" },
            { id: "subtopic-gamma-decay", name: "Gamma Decay" },
            { id: "subtopic-random-nature-radioactive-decay", name: "Random Nature of Radioactive Decay" },
            { id: "subtopic-half-life", name: "Half-Life" },
            { id: "subtopic-calculating-radioactive-decay", name: "Calculating Radioactive Decay" },
            { id: "subtopic-contamination-and-irradiation", name: "Contamination & Irradiation" },
            { id: "subtopic-hazards-contamination-irradiation", name: "Hazards of Contamination & Irradiation" },
            { id: "subtopic-studies-effects-of-radiation", name: "Studies into the Effects of Radiation" },
            {
              id: "subtopic-hazards-uses-emissions-background",
              name: "Hazards & Uses of Radioactive Emissions & of Background Radiation"
            },
            { id: "subtopic-background-radiation", name: "Background Radiation" },
            { id: "subtopic-half-life-and-risk", name: "Half-Life & Risk" },
            { id: "subtopic-medical-uses-of-radiation", name: "Medical Uses of Radiation" }
          ]
        },
        {
          id: "topic-nuclear-fission-and-fusion",
          name: "Nuclear Fission & Fusion",
          subTopics: [
            { id: "subtopic-nuclear-fission", name: "Nuclear Fission" },
            { id: "subtopic-chain-reactions", name: "Chain Reactions" },
            { id: "subtopic-nuclear-fission-diagrams", name: "Nuclear Fission Diagrams" },
            { id: "subtopic-nuclear-fusion", name: "Nuclear Fusion" }
          ]
        }
      ]
    },

    {
      id: "unit-forces",
      name: "Forces",
      topics: [
        {
          id: "topic-forces-and-their-interactions",
          name: "Forces & their Interactions",
          subTopics: [
            { id: "subtopic-scalars-and-vectors", name: "Scalars & Vectors" },
            { id: "subtopic-contact-and-non-contact-forces", name: "Contact & Non-Contact Forces" },
            { id: "subtopic-forces-as-vectors", name: "Forces as Vectors" },
            { id: "subtopic-weight-mass-and-gravity", name: "Weight, Mass & Gravity" },
            { id: "subtopic-calculating-weight", name: "Calculating Weight" },
            { id: "subtopic-resultant-forces", name: "Resultant Forces" },
            { id: "subtopic-free-body-diagrams", name: "Free Body Diagrams" },
            { id: "subtopic-balanced-and-unbalanced-forces", name: "Balanced & Unbalanced Forces" }
          ]
        },
        {
          id: "topic-work-done-and-energy-transfer",
          name: "Work Done & Energy Transfer",
          subTopics: [
            { id: "subtopic-work-done", name: "Work Done" },
            { id: "subtopic-work-done-and-energy-transfer-detail", name: "Work Done & Energy Transfer" },
            { id: "subtopic-work-done-and-friction", name: "Work Done & Friction" }
          ]
        },
        {
          id: "topic-forces-and-elasticity",
          name: "Forces & Elasticity",
          subTopics: [
            { id: "subtopic-changing-shape", name: "Changing Shape" },
            { id: "subtopic-hookes-law", name: "Hooke's Law" },
            { id: "subtopic-force-extension-graphs", name: "Force–Extension Graphs" },
            { id: "subtopic-work-done-on-a-spring", name: "Work Done on a Spring" },
            { id: "subtopic-required-practical-force-extension", name: "Required Practical: Investigating Force & Extension" }
          ]
        },
        {
          id: "topic-moments-levers-and-gears",
          name: "Moments, Levers & Gears",
          subTopics: [
            { id: "subtopic-moments-in-physics", name: "Moments in Physics" },
            { id: "subtopic-principle-of-moments", name: "The Principle of Moments" },
            { id: "subtopic-levers-and-gears", name: "Levers & Gears" }
          ]
        },
        {
          id: "topic-pressure-and-pressure-differences-in-fluids",
          name: "Pressure & Pressure Differences in Fluids",
          subTopics: [
            { id: "subtopic-pressure", name: "Pressure" },
            { id: "subtopic-atmospheric-pressure", name: "Atmospheric Pressure" },
            { id: "subtopic-pressure-in-a-liquid", name: "Pressure in a Liquid" },
            { id: "subtopic-upthrust", name: "Upthrust" }
          ]
        },
        {
          id: "topic-describing-motion",
          name: "Describing Motion",
          subTopics: [
            { id: "subtopic-distance-and-displacement", name: "Distance & Displacement" },
            { id: "subtopic-speed", name: "Speed" },
            { id: "subtopic-measuring-speed", name: "Measuring Speed" },
            { id: "subtopic-calculating-speed", name: "Calculating Speed" },
            { id: "subtopic-velocity", name: "Velocity" },
            { id: "subtopic-vector-and-scalar-quantities", name: "Vector & Scalar Quantities" },
            { id: "subtopic-circular-motion", name: "Circular Motion" },
            { id: "subtopic-distance-time-graphs", name: "Distance-Time Graphs" },
            { id: "subtopic-instantaneous-speed", name: "Instantaneous Speed" },
            { id: "subtopic-acceleration", name: "Acceleration" },
            { id: "subtopic-velocity-time-graphs", name: "Velocity-Time Graphs" },
            { id: "subtopic-area-under-velocity-time-graphs", name: "Area Under Velocity-Time Graphs" },
            { id: "subtopic-calculating-uniform-acceleration", name: "Calculating Uniform Acceleration" },
            { id: "subtopic-terminal-velocity", name: "Terminal Velocity" },
            { id: "subtopic-representing-terminal-velocity", name: "Representing Terminal Velocity" }
          ]
        },
        {
          id: "topic-newtons-laws-of-motion",
          name: "Newton's Laws of Motion",
          subTopics: [
            { id: "subtopic-newtons-first-law", name: "Newton's First Law" },
            { id: "subtopic-newtons-second-law", name: "Newton's Second Law" },
            { id: "subtopic-required-practical-force-acceleration", name: "Required Practical: Investigating Force & Acceleration" },
            { id: "subtopic-newtons-third-law", name: "Newton's Third Law" },
            { id: "subtopic-inertia", name: "Inertia" }
          ]
        },
        {
          id: "topic-stopping-distances",
          name: "Stopping Distances",
          subTopics: [
            { id: "subtopic-thinking-and-braking-distances", name: "Thinking & Braking Distances" },
            { id: "subtopic-stopping-distance", name: "Stopping Distance" },
            { id: "subtopic-reaction-time", name: "Reaction Time" },
            { id: "subtopic-factors-thinking-distance-reaction-time", name: "Factors Affecting Thinking Distance & Reaction Time" },
            { id: "subtopic-factors-braking-distance", name: "Factors Affecting Braking Distance" },
            { id: "subtopic-estimating-decelerating-forces", name: "Estimating Decelerating Forces" }
          ]
        },
        {
          id: "topic-momentum",
          name: "Momentum",
          subTopics: [
            { id: "subtopic-momentum-detail", name: "Momentum" },
            { id: "subtopic-conservation-of-momentum", name: "Conservation of Momentum" },
            { id: "subtopic-collisions", name: "Collisions" },
            { id: "subtopic-force-and-momentum", name: "Force & Momentum" },
            { id: "subtopic-momentum-and-safety", name: "Momentum & Safety" }
          ]
        }
      ]
    },

    {
      id: "unit-waves",
      name: "Waves",
      topics: [
        {
          id: "topic-waves-in-air-fluids-and-solids",
          name: "Waves in Air, Fluids & Solids",
          subTopics: [
            { id: "subtopic-transverse-and-longitudinal-waves", name: "Transverse & Longitudinal Waves" },
            { id: "subtopic-describing-wave-motion", name: "Describing Wave Motion" },
            { id: "subtopic-wave-equation", name: "The Wave Equation" },
            { id: "subtopic-measuring-speed-of-waves", name: "Measuring the Speed of Waves" },
            { id: "subtopic-transmission-of-sound-waves", name: "Transmission of Sound Waves" },
            { id: "subtopic-required-practical-wave-properties", name: "Required Practical: Measuring Wave Properties" }
          ]
        },
        {
          id: "topic-reflection-absorption-and-transmission",
          name: "Reflection, Absorption & Transmission",
          subTopics: [
            { id: "subtopic-required-practical-reflection-refraction", name: "Required Practical: Investigating Reflection & Refraction" },
            { id: "subtopic-sound-waves", name: "Sound Waves" }
          ]
        },
        {
          id: "topic-exploring-structure-using-waves",
          name: "Exploring Structure Using Waves",
          subTopics: [
            { id: "subtopic-ultrasound", name: "Ultrasound" },
            { id: "subtopic-echo-sounding", name: "Echo Sounding" },
            { id: "subtopic-ultrasound-medical-industrial", name: "Ultrasound in Medical & Industrial Imaging" },
            { id: "subtopic-seismic-waves", name: "Seismic Waves" }
          ]
        },
        {
          id: "topic-electromagnetic-waves",
          name: "Electromagnetic Waves",
          subTopics: [
            { id: "subtopic-electromagnetic-waves-detail", name: "Electromagnetic (EM) Waves" },
            { id: "subtopic-transfer-of-energy-by-em-waves", name: "Transfer of Energy by EM Waves" },
            { id: "subtopic-em-waves-and-matter", name: "EM Waves & Matter" },
            { id: "subtopic-refraction-ray-diagrams", name: "Refraction Ray Diagrams" },
            { id: "subtopic-required-practical-infrared", name: "Required Practical: Investigating Infrared Radiation" },
            { id: "subtopic-em-waves-and-atoms", name: "EM Waves & Atoms" },
            { id: "subtopic-radio-waves", name: "Radio Waves" },
            { id: "subtopic-dangers-high-energy-em-waves", name: "Dangers of High-Energy EM Waves" },
            { id: "subtopic-applications-of-em-waves", name: "Applications of EM Waves" }
          ]
        },
        {
          id: "topic-optics",
          name: "Optics",
          subTopics: [
            { id: "subtopic-convex-and-concave-lenses", name: "Convex & Concave Lenses" },
            { id: "subtopic-convex-and-concave-ray-diagrams", name: "Convex & Concave Ray Diagrams" },
            { id: "subtopic-magnification", name: "Magnification" },
            { id: "subtopic-visible-light-spectrum", name: "Visible Light Spectrum" },
            { id: "subtopic-reflection-from-surfaces", name: "Reflection from Surfaces" },
            { id: "subtopic-colour-and-reflection", name: "Colour & Reflection of Light" }
          ]
        },
        {
          id: "topic-black-body-radiation",
          name: "Black Body Radiation",
          subTopics: [
            { id: "subtopic-black-body-radiation-detail", name: "Black Body Radiation" },
            { id: "subtopic-temperature-balances", name: "Temperature Balances" }
          ]
        }
      ]
    },

    {
      id: "unit-magnetism-and-electromagnetism",
      name: "Magnetism & Electromagnetism",
      topics: [
        {
          id: "topic-permanent-and-induced-magnetism",
          name: "Permanent & Induced Magnetism, Magnetic Forces & Fields",
          subTopics: [
            { id: "subtopic-magnetism", name: "Magnetism" },
            { id: "subtopic-permanent-and-induced-magnets", name: "Permanent & Induced Magnets" },
            { id: "subtopic-magnetic-fields", name: "Magnetic Fields" },
            { id: "subtopic-earths-magnetic-field", name: "The Earth's Magnetic Field" }
          ]
        },
        {
          id: "topic-motor-effect",
          name: "The Motor Effect",
          subTopics: [
            { id: "subtopic-magnetic-fields-in-wires-solenoids", name: "Magnetic Fields in Wires & Solenoids" },
            { id: "subtopic-motor-effect-detail", name: "The Motor Effect" },
            { id: "subtopic-flemings-left-hand-rule", name: "Fleming's Left-Hand Rule" },
            { id: "subtopic-electric-motors", name: "Electric Motors" },
            { id: "subtopic-loudspeakers-headphones", name: "Loudspeakers & Headphones" }
          ]
        },
        {
          id: "topic-induced-potential-transformers-and-national-grid",
          name: "Induced Potential, Transformers & the National Grid",
          subTopics: [
            { id: "subtopic-electromagnetic-induction", name: "Electromagnetic (EM) Induction" },
            { id: "subtopic-applications-generator-effect", name: "Applications of the Generator Effect" },
            { id: "subtopic-graphs-pd-in-coil", name: "Graphs of Potential Difference in the Coil" },
            { id: "subtopic-microphones", name: "Microphones" },
            { id: "subtopic-transformers", name: "Transformers" },
            { id: "subtopic-transformer-equations", name: "Transformer Equations" },
            { id: "subtopic-ac-high-voltage-transmission", name: "AC & High Voltage Transmission" }
          ]
        }
      ]
    },

    {
      id: "unit-space-physics",
      name: "Space Physics",
      topics: [
        {
          id: "topic-solar-system-stability-orbits-and-satellites",
          name: "Solar System, Stability of Orbital Motions & Satellites",
          subTopics: [
            { id: "subtopic-solar-system", name: "The Solar System" },
            { id: "subtopic-star-formation", name: "Star Formation" },
            { id: "subtopic-life-cycle-solar-mass-stars", name: "The Life Cycle of Solar Mass Stars" },
            { id: "subtopic-life-cycle-larger-stars", name: "The Life Cycle of Larger Stars" },
            { id: "subtopic-fusion-in-stars", name: "Fusion in Stars" },
            { id: "subtopic-circular-orbits", name: "Circular Orbits" },
            { id: "subtopic-non-circular-orbits", name: "Non-Circular Orbits" },
            { id: "subtopic-red-shift", name: "Red-shift" },
            { id: "subtopic-galactic-red-shift", name: "Galactic Red-shift" },
            { id: "subtopic-big-bang", name: "The Big Bang" },
            { id: "subtopic-dark-energy-and-dark-matter", name: "Dark Energy & Dark Matter" }
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
        "unit-energy",
        "unit-electricity",
        "unit-particle-model-of-matter",
        "unit-atomic-structure"
      ]
    },
    {
      id: "paper-2",
      name: "Paper 2",
      assessedNodeIds: [
        "unit-forces",
        "unit-waves",
        "unit-magnetism-and-electromagnetism",
        "unit-space-physics"
      ]
    }
  ]
};
