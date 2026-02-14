full_content = """import { SubjectSpecification } from "@/types/SubjectSpecification";

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
            { id: "sub-mathematical-operations", name: "Mathematical Operations" },
            { id: "sub-order-of-operations", name: "Order of Operations (BIDMAS/BODMAS)" },
            { id: "sub-place-value", name: "Place Value" },
            { id: "sub-negative-numbers", name: "Negative Numbers" },
            { id: "sub-money-calculations", name: "Money Calculations" },
            { id: "sub-addition-subtraction", name: "Addition & Subtraction" },
            { id: "sub-multiplication-division", name: "Multiplication & Division" },
            { id: "sub-related-calculations", name: "Related Calculations" },
            { id: "sub-counting-principles", name: "Counting Principles" }
          ]
        },
        {
          id: "topic-types-number",
          name: "Types of Number, Prime Factors, HCF & LCM",
          subTopics: [
            { id: "sub-types-of-number", name: "Types of Number" },
            { id: "sub-multiples-factors-primes", name: "Multiples, Factors & Primes" },
            { id: "sub-squares-cubes-roots", name: "Squares, Cubes & Roots" },
            { id: "sub-reciprocals", name: "Reciprocals" },
            { id: "sub-prime-factor-decomposition", name: "Prime Factor Decomposition" },
            { id: "sub-hcf-lcm", name: "HCF & LCM" }
          ]
        },
        {
          id: "topic-powers-standard-form",
          name: "Powers, Roots & Standard Form",
          subTopics: [
            { id: "sub-powers-roots", name: "Powers & Roots" },
            { id: "sub-laws-of-indices", name: "Laws of Indices" },
            { id: "sub-converting-standard-form", name: "Converting to & from Standard Form" },
            { id: "sub-operations-standard-form", name: "Operations with Standard Form" }
          ]
        },
        {
          id: "topic-fractions",
          name: "Fractions",
          subTopics: [
            { id: "sub-introduction-fractions", name: "Introduction to Fractions" },
            { id: "sub-fractions-of-amounts", name: "Fractions of Amounts" },
            { id: "sub-equivalent-simplified-fractions", name: "Equivalent & Simplified Fractions" },
            { id: "sub-mixed-improper", name: "Mixed Numbers & Improper Fractions" },
            { id: "sub-adding-subtracting-fractions", name: "Adding & Subtracting Fractions" },
            { id: "sub-multiplying-dividing-fractions", name: "Multiplying & Dividing Fractions" }
          ]
        },
        {
          id: "topic-percentages",
          name: "Percentages",
          subTopics: [
            { id: "sub-introduction-percentages", name: "Introduction to Percentages" },
            { id: "sub-percentages-of-amounts", name: "Percentages of Amounts" },
            { id: "sub-percentage-increase-decrease", name: "Percentage Increases & Decreases" },
            { id: "sub-percentage-change", name: "Percentage Change" },
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
          id: "topic-fdp",
          name: "Fractions, Decimals & Percentages",
          subTopics: [
            { id: "sub-converting-fdp", name: "Converting Fractions, Decimals & Percentages" },
            { id: "sub-ordering-fdp", name: "Ordering Fractions, Decimals & Percentages" }
          ]
        },
        {
          id: "topic-rounding-error",
          name: "Rounding, Estimation & Error Intervals",
          subTopics: [
            { id: "sub-rounding-place-value", name: "Rounding to a Given Place Value" },
            { id: "sub-rounding-significant-figures", name: "Rounding to Significant Figures" },
            { id: "sub-estimation", name: "Estimation" },
            { id: "sub-error-intervals", name: "Error Intervals" }
          ]
        },
        {
          id: "topic-exact-calculator",
          name: "Exact Values & Using a Calculator",
          subTopics: [
            { id: "sub-exact-values", name: "Exact Values" },
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
          name: "Introduction to Algebra",
          subTopics: [
            { id: "sub-algebraic-notation", name: "Algebraic Notation" },
            { id: "sub-algebraic-vocabulary", name: "Algebraic Vocabulary" },
            { id: "sub-substitution", name: "Substitution" },
            { id: "sub-collecting-like-terms", name: "Collecting Like Terms" }
          ]
        },
        {
          id: "topic-indices-expanding-factorising",
          name: "Indices, Expanding & Factorising",
          subTopics: [
            { id: "sub-algebraic-roots-indices", name: "Algebraic Roots & Indices" },
            { id: "sub-expanding-single-brackets", name: "Expanding & Simplifying Single Brackets" },
            { id: "sub-expanding-double-brackets", name: "Expanding Double Brackets" },
            { id: "sub-factorising-out-terms", name: "Factorising Out Terms" },
            { id: "sub-factorising-quadratics", name: "Factorising Quadratics" },
            { id: "sub-difference-two-squares", name: "Difference of Two Squares" }
          ]
        },
        {
          id: "topic-equations",
          name: "Equations",
          subTopics: [
            { id: "sub-rearranging-formulas", name: "Rearranging Formulas" },
            { id: "sub-solving-linear-equations", name: "Solving Linear Equations" },
            { id: "sub-equations-brackets-fractions", name: "Equations with Brackets & Fractions" },
            { id: "sub-equations-both-sides", name: "Equations with Unknowns on Both Sides" },
            { id: "sub-solving-quadratics", name: "Solving Quadratic Equations" },
            { id: "sub-simultaneous-equations", name: "Simultaneous Equations" },
            { id: "sub-forming-equations-words", name: "Forming Equations from Words" },
            { id: "sub-forming-equations-shapes", name: "Forming Equations from Shapes" }
          ]
        },
        {
          id: "topic-functions-graphs",
          name: "Functions & Graphs",
          subTopics: [
            { id: "sub-introduction-functions", name: "Introduction to Functions" },
            { id: "sub-coordinates", name: "Coordinates" },
            { id: "sub-midpoint", name: "Midpoint of a Line" },
            { id: "sub-gradient", name: "Gradient of a Line" },
            { id: "sub-linear-graphs", name: "Linear Graphs" },
            { id: "sub-equations-straight-lines", name: "Equations of Straight Lines (y = mx + c)" },
            { id: "sub-parallel-lines", name: "Parallel Lines" },
            { id: "sub-quadratic-graphs", name: "Quadratic Graphs" },
            { id: "sub-drawing-graphs-tables", name: "Drawing Graphs from Tables" },
            { id: "sub-real-life-graphs", name: "Real-Life Graphs" },
            { id: "sub-distance-time-graphs", name: "Distance-Time Graphs" },
            { id: "sub-speed-time-graphs", name: "Speed-Time Graphs" },
            { id: "sub-conversion-graphs", name: "Conversion Graphs" },
            { id: "sub-rates-of-change-graphs", name: "Rates of Change of Graphs" }
          ]
        },
        {
          id: "topic-inequalities-sequences",
          name: "Solving Inequalities & Sequences",
          subTopics: [
            { id: "sub-interpreting-inequalities", name: "Interpreting Inequalities" },
            { id: "sub-number-line-inequalities", name: "Representing Inequalities on a Number Line" },
            { id: "sub-solving-linear-inequalities", name: "Solving Linear Inequalities" },
            { id: "sub-introduction-sequences", name: "Introduction to Sequences" },
            { id: "sub-continuing-sequences", name: "Continuing Sequences" },
            { id: "sub-types-of-sequences", name: "Types of Sequences" },
            { id: "sub-nth-term-linear", name: "nth Terms of Linear Sequences" }
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
          id: "topic-ratios",
          name: "Ratios & Proportion",
          subTopics: [
            { id: "sub-introduction-ratios", name: "Introduction to Ratios" },
            { id: "sub-equivalent-simplified-ratios", name: "Equivalent & Simplified Ratios" },
            { id: "sub-sharing-in-ratio", name: "Sharing in a Ratio" },
            { id: "sub-ratio-problem-solving", name: "Ratio Problem Solving" },
            { id: "sub-ratios-with-fdp", name: "Ratios with Fractions, Decimals & Percentages" },
            { id: "sub-multiple-ratios", name: "Multiple Ratios" },
            { id: "sub-direct-inverse-proportion", name: "Direct & Inverse Proportion" }
          ]
        },
        {
          id: "topic-units-exchange",
          name: "Units & Exchange",
          subTopics: [
            { id: "sub-time", name: "Time" },
            { id: "sub-converting-units", name: "Converting between Units" },
            { id: "sub-squared-cubic-units", name: "Squared & Cubic Units" },
            { id: "sub-compound-measures", name: "Compound Measures" },
            { id: "sub-speed-density-pressure", name: "Speed, Density & Pressure" },
            { id: "sub-exchange-rates", name: "Exchange Rates" },
            { id: "sub-best-buys", name: "Best Buys" }
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
          id: "topic-geometry-core",
          name: "Core Geometry",
          subTopics: [
            { id: "sub-introduction-lines-angles", name: "Introduction to Lines & Angles" },
            { id: "sub-rotational-symmetry", name: "Rotational Symmetry" },
            { id: "sub-lines-of-symmetry", name: "Lines of Symmetry" },
            { id: "sub-planes-of-symmetry", name: "Planes of Symmetry" },
            { id: "sub-angles-around-points", name: "Angles around Points & Lines" },
            { id: "sub-angles-in-triangles", name: "Angles in Triangles" },
            { id: "sub-angles-in-quadrilaterals", name: "Angles in Quadrilaterals" },
            { id: "sub-angles-in-polygons", name: "Angles in Polygons" },
            { id: "sub-angles-in-parallel-lines", name: "Angles in Parallel Lines" }
          ]
        },
        {
          id: "topic-advanced-geometry",
          name: "Advanced Geometry",
          subTopics: [
            { id: "sub-properties-polygons", name: "Properties of Polygons" },
            { id: "sub-properties-3d-shapes", name: "Properties of 3D Shapes" },
            { id: "sub-nets-of-solids", name: "Nets of Solids" },
            { id: "sub-plans-elevations", name: "Plans & Elevations" },
            { id: "sub-bearings", name: "Bearings" },
            { id: "sub-scale", name: "Scale" },
            { id: "sub-constructing-triangles", name: "Constructing Triangles" },
            { id: "sub-constructions", name: "Constructions" },
            { id: "sub-loci", name: "Loci" },
            { id: "sub-perimeter", name: "Perimeter" },
            { id: "sub-area", name: "Area" },
            { id: "sub-adding-subtracting-areas", name: "Adding & Subtracting Areas" },
            { id: "sub-problem-solving-areas", name: "Problem Solving with Areas" },
            { id: "sub-properties-circles", name: "Properties of Circles" },
            { id: "sub-area-circumference-circles", name: "Area & Circumference of Circles" },
            { id: "sub-arc-length-sector-area", name: "Arc Lengths & Sector Areas" },
            { id: "sub-volume", name: "Volume" },
            { id: "sub-problem-solving-volumes", name: "Problem Solving with Volumes" },
            { id: "sub-surface-area", name: "Surface Area" },
            { id: "sub-congruence", name: "Congruence" },
            { id: "sub-congruent-triangles", name: "Congruent Triangles" },
            { id: "sub-similarity", name: "Similarity" },
            { id: "sub-similar-lengths", name: "Similar Lengths" },
            { id: "sub-geometrical-proof", name: "Geometrical Proof" },
            { id: "sub-pythagoras", name: "Pythagoras Theorem" },
            { id: "sub-trig-lengths", name: "Trigonometry to Find Lengths" },
            { id: "sub-trig-angles", name: "Trigonometry to Find Angles" },
            { id: "sub-angles-elevation-depression", name: "Angles of Elevation & Depression" },
            { id: "sub-exact-trig-values", name: "Exact Trig Values" },
            { id: "sub-introduction-column-vectors", name: "Introduction to Column Vectors" },
            { id: "sub-representing-vectors-diagrams", name: "Representing Vectors as Diagrams" },
            { id: "sub-finding-vector-paths", name: "Finding Vector Paths" },
            { id: "sub-translations", name: "Translations" },
            { id: "sub-reflections", name: "Reflections" },
            { id: "sub-rotations", name: "Rotations" },
            { id: "sub-enlargements", name: "Enlargements" }
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
          id: "topic-probability-core",
          name: "Probability",
          subTopics: [
            { id: "sub-basic-probability", name: "Basic Probability" },
            { id: "sub-sample-space-diagrams", name: "Sample Space Diagrams" },
            { id: "sub-relative-expected-frequency", name: "Relative & Expected Frequency" },
            { id: "sub-simple-probability-diagrams", name: "Simple Probability Diagrams" },
            { id: "sub-two-way-tables", name: "Two-Way Tables" },
            { id: "sub-frequency-trees", name: "Frequency Trees" },
            { id: "sub-set-notation-venn", name: "Set Notation & Venn Diagrams" },
            { id: "sub-probabilities-from-venn", name: "Probabilities from Venn Diagrams" },
            { id: "sub-probability-tree-diagrams", name: "Probability Tree Diagrams" },
            { id: "sub-combined-probability", name: "Combined Probability" }
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
          id: "topic-averages-data",
          name: "Averages, Ranges & Data",
          subTopics: [
            { id: "sub-mean-median-mode", name: "Mean, Median & Mode" },
            { id: "sub-calculations-with-mean", name: "Calculations with the Mean" },
            { id: "sub-averages-from-tables", name: "Averages from Tables" },
            { id: "sub-averages-from-grouped-data", name: "Averages from Grouped Data" },
            { id: "sub-range", name: "Range" },
            { id: "sub-comparing-data-sets", name: "Comparing Data Sets" },
            { id: "sub-population-sampling", name: "Population & Sampling" }
          ]
        },
        {
          id: "topic-statistical-diagrams",
          name: "Statistical Diagrams",
          subTopics: [
            { id: "sub-tally-charts", name: "Tally Charts & Frequency Tables" },
            { id: "sub-bar-charts", name: "Bar Charts & Pictograms" },
            { id: "sub-pie-charts", name: "Pie Charts" },
            { id: "sub-time-series", name: "Time Series Graphs" },
            { id: "sub-reading-stat-diagrams", name: "Reading & Interpreting Statistical Diagrams" },
            { id: "sub-comparing-stat-diagrams", name: "Comparing Statistical Diagrams" }
          ]
        },
        {
          id: "topic-scatter",
          name: "Scatter Graphs & Correlation",
          subTopics: [
            { id: "sub-scatter-graphs", name: "Scatter Graphs & Correlation" },
            { id: "sub-lines-best-fit", name: "Lines of Best Fit" }
          ]
        }
      ]
    }

  ],

  // =====================================================
  // PAPERS
  // =====================================================
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
"""

file_path = "/mnt/data/aqa_gcse_maths_foundation_FULL.ts"

with open(file_path, "w", encoding="utf-8") as f:
    f.write(full_content)

file_path
