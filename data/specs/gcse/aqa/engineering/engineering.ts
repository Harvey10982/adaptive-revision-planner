/* eslint-disable @typescript-eslint/consistent-type-assertions */
/**
 * GCSE AQA Engineering (8852) — curriculum structure only.
 *
 * Notes:
 * - This file intentionally contains NO selection/catalog metadata.
 * - If you want a Higher file for consistency, duplicate this file as `higher.ts`.
 * - This qualification includes a written exam and a non-exam assessment (NEA).
 */

export const specification: SubjectSpecification = {
  units: [
    {
      id: "unit-engineering-materials",
      name: "Engineering materials",
      topics: [
        {
          id: "topic-ferrous-metals-and-alloys",
          name: "Ferrous metals and alloys",
          subTopics: [],
        },
        {
          id: "topic-non-ferrous-metals-and-alloys",
          name: "Non-ferrous metals and alloys",
          subTopics: [],
        },
        {
          id: "topic-polymers",
          name: "Polymers",
          subTopics: [
            { id: "subtopic-thermoplastics", name: "Thermoplastics" },
            { id: "subtopic-thermosetting-plastics", name: "Thermosetting plastics" },
            { id: "subtopic-elastomers", name: "Elastomers" },
          ],
        },
        {
          id: "topic-composite-materials",
          name: "Composite materials",
          subTopics: [],
        },
        {
          id: "topic-smart-materials",
          name: "Smart materials",
          subTopics: [],
        },
      ],
    },
    {
      id: "unit-engineering-manufacturing-processes",
      name: "Engineering manufacturing processes",
      topics: [
        {
          id: "topic-additive-manufacturing",
          name: "Additive manufacturing",
          subTopics: [
            { id: "subtopic-fused-deposition", name: "Fused deposition" },
            { id: "subtopic-sintering-metals", name: "Sintering (for metals)" },
            { id: "subtopic-rapid-prototyping-polymers", name: "Rapid prototyping (for polymers)" },
          ],
        },
        {
          id: "topic-material-removal",
          name: "Material removal",
          subTopics: [
            { id: "subtopic-cutting-sawing", name: "Cutting: sawing" },
            { id: "subtopic-cutting-shearing", name: "Cutting: shearing" },
            { id: "subtopic-cutting-laser", name: "Cutting: laser" },
            { id: "subtopic-turning-cylindrical", name: "Turning: cylindrical" },
            { id: "subtopic-turning-tapered", name: "Turning: tapered" },
            { id: "subtopic-turning-boring", name: "Turning: boring" },
            { id: "subtopic-milling-face", name: "Milling: face" },
            { id: "subtopic-milling-slot", name: "Milling: slot" },
            { id: "subtopic-drilling-pillar-drill", name: "Drilling: using a pillar drill" },
            { id: "subtopic-drilling-centre-drilling-lathe", name: "Drilling: centre drilling in the lathe" },
            { id: "subtopic-chemical-etching-pcb", name: "Chemical etching (eg PCB manufacture)" },
          ],
        },
        {
          id: "topic-shaping",
          name: "Shaping",
          subTopics: [
            { id: "subtopic-bending", name: "Bending" },
            { id: "subtopic-folding", name: "Folding" },
            { id: "subtopic-press-forming", name: "Press forming" },
            { id: "subtopic-composite-lay-up", name: "Composite lay up" },
            { id: "subtopic-punching", name: "Punching" },
            { id: "subtopic-stamping", name: "Stamping" },
          ],
        },
        {
          id: "topic-casting-and-moulding",
          name: "Casting and moulding",
          subTopics: [
            { id: "subtopic-pressure-die-casting", name: "Pressure die casting" },
            { id: "subtopic-sand-casting", name: "Sand casting" },
            { id: "subtopic-injection-moulding", name: "Injection moulding" },
          ],
        },
        {
          id: "topic-joining-and-assembly",
          name: "Joining and assembly",
          subTopics: [
            { id: "subtopic-rivets", name: "Rivets" },
            { id: "subtopic-threaded-fastenings", name: "Threaded fastenings" },
            { id: "subtopic-soldering-soft", name: "Soldering (soft)" },
            { id: "subtopic-soldering-hard", name: "Soldering (hard)" },
            { id: "subtopic-brazing", name: "Brazing" },
            { id: "subtopic-welding", name: "Welding" },
          ],
        },
        {
          id: "topic-heat-and-chemical-treatment",
          name: "Heat and chemical treatment",
          subTopics: [
            { id: "subtopic-normalising", name: "Normalising" },
            { id: "subtopic-annealing", name: "Annealing" },
            { id: "subtopic-hardening", name: "Hardening" },
            { id: "subtopic-quenching", name: "Quenching" },
          ],
        },
        {
          id: "topic-surface-finishing",
          name: "Surface finishing",
          subTopics: [
            { id: "subtopic-painting", name: "Painting" },
            { id: "subtopic-dip-coating", name: "Dip coating" },
            { id: "subtopic-electroplating", name: "Electroplating" },
            { id: "subtopic-galvanising", name: "Galvanising" },
            { id: "subtopic-polishing", name: "Polishing" },
          ],
        },
      ],
    },
    {
      id: "unit-systems",
      name: "Systems",
      topics: [
        {
          id: "topic-system-descriptions",
          name: "Systems descriptions",
          subTopics: [
            { id: "subtopic-system-block-diagrams", name: "System block diagrams (input, process, output)" },
            { id: "subtopic-schematic-drawings", name: "Schematic drawings" },
            { id: "subtopic-flow-charts", name: "Flow charts" },
          ],
        },
        {
          id: "topic-mechanical-systems",
          name: "Mechanical systems",
          subTopics: [
            { id: "subtopic-linkages", name: "Linkages" },
            { id: "subtopic-conversion-of-motion", name: "Conversion of motion (rotary to reciprocating; linear to oscillating)" },
            { id: "subtopic-gear-trains", name: "Gear trains (including chains and sprockets)" },
            { id: "subtopic-cams-and-followers", name: "Cams and followers (including uses in engines)" },
            { id: "subtopic-pulleys", name: "Pulleys (reducing effort; transferring power)" },
            { id: "subtopic-bearings", name: "Bearings" },
          ],
        },
        {
          id: "topic-electrical-systems",
          name: "Electrical systems",
          subTopics: [
            { id: "subtopic-power-supplies", name: "Power supplies (mains and batteries)" },
            { id: "subtopic-input-control-devices", name: "Input control devices (eg relays and switches)" },
            { id: "subtopic-output-devices", name: "Output devices (motors, buzzers, bells, lamps, solenoids)" },
            { id: "subtopic-ac-vs-dc", name: "Alternating current (AC) vs direct current (DC)" },
          ],
        },
        {
          id: "topic-electronic-systems",
          name: "Electronic systems",
          subTopics: [
            { id: "subtopic-sensors", name: "Inputs (eg light or temperature sensors)" },
            { id: "subtopic-analogue-digital-signals", name: "Analogue and digital signals" },
            { id: "subtopic-process-devices", name: "Process devices (timers, counters, comparators, logic: AND/OR/NOT)" },
            { id: "subtopic-programmable-devices", name: "Programmable devices (eg microcontrollers/PIC)" },
            { id: "subtopic-interfacing-components", name: "Interfacing components (drivers: transistor, FET)" },
            { id: "subtopic-adc", name: "Analogue-to-digital conversion (ADC)" },
            { id: "subtopic-output-components", name: "Outputs (LEDs, 7-segment displays, buzzers, piezo sounders)" },
            { id: "subtopic-discrete-components", name: "Discrete components (resistors, diodes, capacitors)" },
            { id: "subtopic-simple-programming", name: "Simple programming for monitoring/controlling processes (limited IO)" },
          ],
        },
        {
          id: "topic-structural-systems",
          name: "Structural systems",
          subTopics: [
            { id: "subtopic-loads", name: "Loads (imposed, dynamic/live, static/dead) and load transmission" },
            { id: "subtopic-structures", name: "Space frame and monocoque structures; bending and torsion/buckling" },
          ],
        },
        {
          id: "topic-pneumatic-and-hydraulic-systems",
          name: "Pneumatic and hydraulic systems",
          subTopics: [
            { id: "subtopic-pneumatic-vs-hydraulic", name: "Uses and differences between pneumatic and hydraulic circuits" },
            { id: "subtopic-applications", name: "Applications (eg robotics, process/factory automation, machinery)" },
          ],
        },
      ],
    },
    {
      id: "unit-testing-and-investigation",
      name: "Testing and investigation",
      topics: [
        {
          id: "topic-modelling-and-calculating",
          name: "Modelling and calculating",
          subTopics: [
            { id: "subtopic-cad-modelling", name: "Using calculations, simulations and CAD to model/predict system performance" },
            { id: "subtopic-circuits-and-forces", name: "Design/test electronic circuits; calculate hydraulic/pneumatic forces" },
            { id: "subtopic-core-calculations", name: "Core calculations: area, volume, stiffness, density, Young’s modulus, factors of safety, forces, stress/strain, resistance (series/parallel), current and voltage" },
          ],
        },
        {
          id: "topic-testing-methods",
          name: "Testing",
          subTopics: [
            { id: "subtopic-materials-testing-under-load", name: "Testing/evaluating materials and structures under load (eg tensile/compressive strength)" },
            { id: "subtopic-destructive-non-destructive", name: "Destructive and non-destructive testing (differences and advantages)" },
            { id: "subtopic-testing-control-programs", name: "Testing control programs for programmable devices (modelling/enactment)" },
            { id: "subtopic-modifying-programs", name: "Modifying programs to improve performance (eg motor speed, sensor thresholds)" },
            { id: "subtopic-quality-control", name: "Quality control methods (tolerances and checks during production)" },
          ],
        },
        {
          id: "topic-aerodynamics",
          name: "Aerodynamics",
          subTopics: [
            { id: "subtopic-lift", name: "Lift" },
            { id: "subtopic-drag", name: "Drag" },
            { id: "subtopic-thrust", name: "Thrust" },
          ],
        },
      ],
    },
    {
      id: "unit-impact-of-modern-technologies",
      name: "The impact of modern technologies",
      topics: [
        {
          id: "topic-new-and-emerging-technologies",
          name: "New and emerging technologies",
          subTopics: [
            { id: "subtopic-impact-on-production", name: "Impact on production" },
            { id: "subtopic-impact-on-society", name: "Impact on society" },
            { id: "subtopic-impact-on-environment", name: "Impact on the environment" },
          ],
        },
        {
          id: "topic-impact-of-engineering-industries",
          name: "Impact of engineering industries",
          subTopics: [
            { id: "subtopic-social-and-economic-infrastructure", name: "Positive and negative impacts on social and economic infrastructure" },
          ],
        },
      ],
    },
    {
      id: "unit-practical-engineering-skills",
      name: "Practical engineering skills",
      topics: [
        {
          id: "topic-practical-skills",
          name: "Practical skills",
          subTopics: [
            { id: "subtopic-logical-systematic-problem-solving", name: "Solve problems through a logical, systematic approach" },
            { id: "subtopic-evaluate-existing-solutions", name: "Analyse and evaluate existing solutions to problems" },
            { id: "subtopic-block-diagrams-and-flowcharts", name: "Use block diagrams and flowcharts" },
            { id: "subtopic-engineering-drawings-and-schematics", name: "Produce and work to engineering drawings/schematics (current conventions)" },
            { id: "subtopic-work-to-tolerances", name: "Work to necessary tolerances" },
            { id: "subtopic-check-tolerances", name: "Check tolerances using tools (Vernier calipers, micrometers, depth gauges)" },
            { id: "subtopic-cnc-cam-fit", name: "Use software (CNC/CAM) to ensure parts fit and the solution functions" },
            { id: "subtopic-design-tests", name: "Design tests to assess fitness for purpose and performance of a completed product" },
          ],
        },
      ],
    },
  ],
  papers: [
    {
      id: "written-paper",
      name: "Written exam",
      assessedNodeIds: [
        "unit-engineering-materials",
        "unit-engineering-manufacturing-processes",
        "unit-systems",
        "unit-testing-and-investigation",
        "unit-impact-of-modern-technologies",
        "unit-practical-engineering-skills",
      ],
    },
    {
      id: "nea",
      name: "Non-exam assessment (NEA)",
      assessedNodeIds: [
        "unit-engineering-materials",
        "unit-engineering-manufacturing-processes",
        "unit-systems",
        "unit-testing-and-investigation",
        "unit-impact-of-modern-technologies",
        "unit-practical-engineering-skills",
      ],
    },
  ],
};
