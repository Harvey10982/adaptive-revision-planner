import type { SubjectSpecification } from "../../../../types/SubjectSpecification"

export const specification: SubjectSpecification = {
  units: [

    // =====================================================
    // 1. NUMBER
    // =====================================================
    {
      id: "unit-number",
      name: "Number",
      topics: [
        {
          id: "topic-number-operations",
          name: "Number Operations",
          subTopics: [
            { id: "sub-mathematical-symbols", name: "Mathematical Symbols" },
            { id: "sub-order-of-operations", name: "Order of Operations (BIDMAS/BODMAS)" },
            { id: "sub-irrational-numbers", name: "Irrational Numbers" },
            { id: "sub-negative-numbers", name: "Negative Numbers" },
            { id: "sub-money-calculations", name: "Money Calculations" },
            { id: "sub-addition-subtraction", name: "Addition & Subtraction" },
            { id: "sub-multiplication-division", name: "Multiplication & Division" },
            { id: "sub-related-calculations", name: "Related Calculations" },
            { id: "sub-systematic-lists", name: "Systematic Lists" },
            { id: "sub-product-rule-counting", name: "Product Rule for Counting" }
          ]
        },
        {
          id: "topic-prime-factors-hcf-lcm",
          name: "Prime Factors, HCF & LCM",
          subTopics: [
            { id: "sub-types-of-numbers", name: "Types of Numbers" },
            { id: "sub-prime-factor-decomposition", name: "Prime Factor Decomposition" },
            { id: "sub-uses-prime-factor-decomposition", name: "Uses of Prime Factor Decomposition" },
            { id: "sub-hcf-lcm", name: "HCF & LCM" }
          ]
        },
        {
          id: "topic-powers-roots-standard-form",
          name: "Powers, Roots & Standard Form",
          subTopics: [
            { id: "sub-powers-roots", name: "Powers & Roots" },
            { id: "sub-laws-of-indices", name: "Laws of Indices" },
            { id: "sub-converting-standard-form", name: "Converting to & from Standard Form" },
            { id: "sub-operations-standard-form", name: "Operations with Standard Form" }
          ]
        },
        {
          id: "topic-fractions-percentages",
          name: "Fractions & Percentages",
          subTopics: [
            { id: "sub-basic-fractions", name: "Basic Fractions" },
            { id: "sub-mixed-improper", name: "Mixed Numbers & Improper Fractions" },
            { id: "sub-adding-subtracting-fractions", name: "Adding & Subtracting Fractions" },
            { id: "sub-multiplying-dividing-fractions", name: "Multiplying & Dividing Fractions" },
            { id: "sub-basic-percentages", name: "Basic Percentages" },
            { id: "sub-percentage-increase-decrease", name: "Percentage Increases & Decreases" },
            { id: "sub-reverse-percentages", name: "Reverse Percentages" }
          ]
        },
        {
          id: "topic-interest-growth-decay",
          name: "Simple & Compound Interest, Growth & Decay",
          subTopics: [
            { id: "sub-simple-interest", name: "Simple Interest" },
            { id: "sub-compound-interest", name: "Compound Interest" },
            { id: "sub-depreciation", name: "Depreciation" },
            { id: "sub-exponential-growth-decay", name: "Exponential Growth & Decay" }
          ]
        },
        {
          id: "topic-fdp-recurring",
          name: "Fractions, Decimals & Percentages",
          subTopics: [
            { id: "sub-converting-fdp", name: "Converting Fractions, Decimals & Percentages" },
            { id: "sub-recurring-decimals", name: "Recurring Decimals" },
            { id: "sub-ordering-fdp", name: "Ordering Fractions, Decimals & Percentages" }
          ]
        },
        {
          id: "topic-rounding-bounds-surds",
          name: "Rounding, Estimation, Bounds & Surds",
          subTopics: [
            { id: "sub-rounding-estimation", name: "Rounding & Estimation" },
            { id: "sub-upper-lower-bounds", name: "Upper & Lower Bounds" },
            { id: "sub-simplifying-surds", name: "Simplifying Surds" },
            { id: "sub-rationalising-denominators", name: "Rationalising Denominators" }
          ]
        },
        {
          id: "topic-using-calculator",
          name: "Using a Calculator",
          subTopics: [
            { id: "sub-using-calculator", name: "Using a Calculator" }
          ]
        }
      ]
    },

    // =====================================================
    // 2. ALGEBRA
    // =====================================================
    {
      id: "unit-algebra",
      name: "Algebra",
      topics: [
        {
          id: "topic-algebra-basics",
          name: "Algebra Foundations",
          subTopics: [
            { id: "sub-algebraic-notation", name: "Algebraic Notation" },
            { id: "sub-algebraic-vocabulary", name: "Algebraic Vocabulary" },
            { id: "sub-substitution", name: "Substitution" },
            { id: "sub-collecting-like-terms", name: "Collecting Like Terms" },
            { id: "sub-algebraic-roots-indices", name: "Algebraic Roots & Indices" }
          ]
        },
        {
          id: "topic-expanding-factorising",
          name: "Expanding, Factorising & Completing the Square",
          subTopics: [
            { id: "sub-expanding-single", name: "Expanding & Simplifying Single Brackets" },
            { id: "sub-expanding-double", name: "Expanding Double Brackets" },
            { id: "sub-expanding-triple", name: "Expanding Triple Brackets" },
            { id: "sub-factorising-out", name: "Factorising Out Terms" },
            { id: "sub-factorising-grouping", name: "Factorising by Grouping" },
            { id: "sub-factorising-simple-quadratics", name: "Factorising Simple Quadratics" },
            { id: "sub-factorising-harder-quadratics", name: "Factorising Harder Quadratics" },
            { id: "sub-difference-two-squares", name: "Difference of Two Squares" },
            { id: "sub-deciding-factorisation-method", name: "Deciding the Factorisation Method" },
            { id: "sub-completing-the-square", name: "Completing the Square" }
          ]
        },
        {
          id: "topic-algebraic-fractions",
          name: "Algebraic Fractions",
          subTopics: [
            { id: "sub-simplifying-algebraic-fractions", name: "Simplifying Algebraic Fractions" },
            { id: "sub-adding-subtracting-algebraic-fractions", name: "Adding & Subtracting Algebraic Fractions" },
            { id: "sub-multiplying-dividing-algebraic-fractions", name: "Multiplying & Dividing Algebraic Fractions" },
            { id: "sub-solving-equations-algebraic-fractions", name: "Solving Equations with Algebraic Fractions" }
          ]
        },
        {
          id: "topic-equations",
          name: "Equations & Inequalities",
          subTopics: [
            { id: "sub-solving-linear-equations", name: "Solving Linear Equations" },
            { id: "sub-quadratic-factorising", name: "Solving Quadratics by Factorising" },
            { id: "sub-quadratic-formula", name: "The Quadratic Formula" },
            { id: "sub-deciding-quadratic-method", name: "Deciding the Quadratic Method" },
            { id: "sub-linear-simultaneous", name: "Linear Simultaneous Equations" },
            { id: "sub-quadratic-simultaneous", name: "Quadratic Simultaneous Equations" },
            { id: "sub-iteration", name: "Iteration" },
            { id: "sub-solving-linear-inequalities", name: "Solving Linear Inequalities" },
            { id: "sub-solving-quadratic-inequalities", name: "Solving Quadratic Inequalities" },
            { id: "sub-graphing-inequalities", name: "Graphing Inequalities" },
            { id: "sub-regions-inequalities", name: "Representing Inequalities as Regions" },
            { id: "sub-finding-inequalities-regions", name: "Finding Inequalities from Regions" }
          ]
        },
        {
          id: "topic-functions-graphs",
          name: "Functions & Graphs",
          subTopics: [
            { id: "sub-composite-functions", name: "Composite Functions" },
            { id: "sub-inverse-functions", name: "Inverse Functions" },
            { id: "sub-equation-of-circle", name: "Equation of a Circle" },
            { id: "sub-equation-of-tangent", name: "Equation of a Tangent" },
            { id: "sub-trigonometric-graphs", name: "Trigonometric Graphs" },
            { id: "sub-solving-trig-equations", name: "Solving Trig Equations" },
            { id: "sub-estimating-gradients", name: "Finding Gradients of Tangents" },
            { id: "sub-finding-areas-under-graphs", name: "Finding Areas under Graphs" },
            { id: "sub-transformations-graphs", name: "Transformations of Graphs" }
          ]
        }
      ]
    },

    // =====================================================
    // 3. RATIO, PROPORTION & RATES OF CHANGE
    // =====================================================
    {
      id: "unit-ratio-proportion",
      name: "Ratio, Proportion & Rates of Change",
      topics: [
        {
          id: "topic-ratio",
          name: "Ratios & Proportion",
          subTopics: [
            { id: "sub-introduction-ratios", name: "Introduction to Ratios" },
            { id: "sub-sharing-ratio", name: "Sharing in a Ratio" },
            { id: "sub-working-with-proportion", name: "Working with Proportion" },
            { id: "sub-problem-solving-ratios", name: "Problem Solving with Ratios" },
            { id: "sub-multiple-ratios", name: "Multiple Ratios" },
            { id: "sub-direct-proportion", name: "Direct Proportion" },
            { id: "sub-inverse-proportion", name: "Inverse Proportion" }
          ]
        }
      ]
    },

    // =====================================================
    // 4. GEOMETRY & MEASURES
    // =====================================================
    {
      id: "unit-geometry-measures",
      name: "Geometry & Measures",
      topics: [
        {
          id: "topic-circle-theorems",
          name: "Circle Theorems",
          subTopics: [
            { id: "sub-angles-centre-circumference", name: "Angles at Centre & Circumference" },
            { id: "sub-angle-semicircle", name: "Angle in a Semicircle" },
            { id: "sub-theorems-chords-tangents", name: "Theorems with Chords & Tangents" },
            { id: "sub-cyclic-quadrilaterals", name: "Angles in Cyclic Quadrilaterals" },
            { id: "sub-same-segment", name: "Angles in the Same Segment" },
            { id: "sub-alternate-segment", name: "The Alternate Segment Theorem" },
            { id: "sub-circle-theorem-proofs", name: "Circle Theorem Proofs" }
          ]
        },
        {
          id: "topic-trigonometry",
          name: "Pythagoras & Trigonometry",
          subTopics: [
            { id: "sub-pythagoras-theorem", name: "Pythagoras Theorem" },
            { id: "sub-sohcahtoa", name: "SOHCAHTOA" },
            { id: "sub-sine-rule", name: "The Sine Rule" },
            { id: "sub-cosine-rule", name: "The Cosine Rule" },
            { id: "sub-area-triangle", name: "Area of a Triangle" },
            { id: "sub-deciding-trig-rule", name: "Deciding the Trigonometric Rule" },
            { id: "sub-3d-pythagoras-trig", name: "3D Pythagoras & Trigonometry" }
          ]
        }
      ]
    },

    // =====================================================
    // 5. PROBABILITY
    // =====================================================
    {
      id: "unit-probability",
      name: "Probability",
      topics: [
        {
          id: "topic-combined-conditional",
          name: "Combined & Conditional Probability",
          subTopics: [
            { id: "sub-combined-probabilities", name: "Combined Probabilities" },
            { id: "sub-conditional-probability", name: "Conditional Probability" },
            { id: "sub-combined-conditional-probabilities", name: "Combined Conditional Probabilities" }
          ]
        }
      ]
    },

    // =====================================================
    // 6. STATISTICS
    // =====================================================
    {
      id: "unit-statistics",
      name: "Statistics",
      topics: [
        {
          id: "topic-histograms",
          name: "Histograms",
          subTopics: [
            { id: "sub-frequency-density", name: "Frequency Density" },
            { id: "sub-drawing-histograms", name: "Drawing Histograms" },
            { id: "sub-interpreting-histograms", name: "Interpreting Histograms" }
          ]
        },
        {
          id: "topic-cumulative-frequency",
          name: "Cumulative Frequency & Box Plots",
          subTopics: [
            { id: "sub-cumulative-frequency", name: "Cumulative Frequency" },
            { id: "sub-drawing-cf-diagrams", name: "Drawing Cumulative Frequency Diagrams" },
            { id: "sub-interpreting-cf-diagrams", name: "Interpreting Cumulative Frequency Diagrams" },
            { id: "sub-box-plots", name: "Box Plots" }
          ]
        }
      ]
    }

  ],

  papers: [
    {
      id: "paper-1",
      name: "Paper 1 (Non-Calculator)",
      assessedNodeIds: [
        "unit-number",
        "unit-algebra",
        "unit-ratio-proportion",
        "unit-geometry-measures",
        "unit-probability",
        "unit-statistics"
      ]
    },
    {
      id: "paper-2",
      name: "Paper 2 (Calculator)",
      assessedNodeIds: [
        "unit-number",
        "unit-algebra",
        "unit-ratio-proportion",
        "unit-geometry-measures",
        "unit-probability",
        "unit-statistics"
      ]
    },
    {
      id: "paper-3",
      name: "Paper 3 (Calculator)",
      assessedNodeIds: [
        "unit-number",
        "unit-algebra",
        "unit-ratio-proportion",
        "unit-geometry-measures",
        "unit-probability",
        "unit-statistics"
      ]
    }
  ]
};
