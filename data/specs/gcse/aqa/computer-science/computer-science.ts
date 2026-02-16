import type { SubjectSpecification } from "../../../../types/SubjectSpecification"

export const specification: SubjectSpecification = {
  units: [
    {
      id: "unit-fundamentals-of-algorithms",
      name: "Fundamentals of Algorithms",
      topics: [
        {
          id: "topic-representing-algorithms",
          name: "Representing Algorithms",
          subTopics: [
            { id: "subtopic-algorithms-decomposition-and-abstraction", name: "Algorithms, Decomposition & Abstraction" },
            { id: "subtopic-systematic-approach-to-problem-solving", name: "Systematic Approach to Problem Solving" },
            { id: "subtopic-algorithm-inputs-processes-and-outputs", name: "Algorithm Inputs, Processes & Outputs" },
            { id: "subtopic-tracing-algorithms", name: "Tracing Algorithms" }
          ]
        },
        {
          id: "topic-efficiency-of-algorithms",
          name: "Efficiency of Algorithms",
          subTopics: [
            { id: "subtopic-algorithm-efficiency", name: "Algorithm Efficiency" }
          ]
        },
        {
          id: "topic-searching-algorithms",
          name: "Searching Algorithms",
          subTopics: [
            { id: "subtopic-linear-search", name: "Linear Search" },
            { id: "subtopic-binary-search", name: "Binary Search" },
            { id: "subtopic-comparing-linear-and-binary-search", name: "Comparing Linear Search & Binary Search Algorithms" }
          ]
        },
        {
          id: "topic-sorting-algorithms",
          name: "Sorting Algorithms",
          subTopics: [
            { id: "subtopic-merge-sort", name: "Merge Sort" },
            { id: "subtopic-bubble-sort", name: "Bubble Sort" },
            { id: "subtopic-comparing-merge-and-bubble-sort", name: "Comparing Merge Sort & Bubble Sort Algorithms" }
          ]
        }
      ]
    },

    {
      id: "unit-programming",
      name: "Programming",
      topics: [
        {
          id: "topic-data-types",
          name: "Data Types",
          subTopics: [
            { id: "subtopic-data-types-and-casting", name: "Data Types & Casting" }
          ]
        },
        {
          id: "topic-programming-concepts",
          name: "Programming Concepts",
          subTopics: [
            { id: "subtopic-inputs-and-outputs", name: "Inputs & Outputs" },
            { id: "subtopic-variables-constants-and-assignments", name: "Variables, Constants & Assignments" },
            { id: "subtopic-basic-programming-concepts", name: "Basic Programming Concepts" },
            { id: "subtopic-iteration", name: "Iteration" },
            { id: "subtopic-introduction-to-subroutines", name: "Introduction to Subroutines" },
            { id: "subtopic-arithmetic-relational-and-boolean-operations", name: "Arithmetic, Relational & Boolean Operations" }
          ]
        },
        {
          id: "topic-data-structures",
          name: "Data Structures",
          subTopics: [
            { id: "subtopic-arrays", name: "Arrays" },
            { id: "subtopic-records", name: "Records" }
          ]
        },
        {
          id: "topic-string-manipulation",
          name: "String Manipulation",
          subTopics: [
            { id: "subtopic-string-manipulation-detail", name: "String Manipulation" }
          ]
        },
        {
          id: "topic-random-number-generation",
          name: "Random Number Generation",
          subTopics: [
            { id: "subtopic-random-number-generation-detail", name: "Random Number Generation" }
          ]
        },
        {
          id: "topic-structured-programming",
          name: "Structured Programming",
          subTopics: [
            { id: "subtopic-using-subroutines", name: "Using Subroutines" }
          ]
        },
        {
          id: "topic-robust-and-secure-programming",
          name: "Robust & Secure Programming",
          subTopics: [
            { id: "subtopic-data-validation", name: "Data Validation" },
            { id: "subtopic-authentication-routines", name: "Authentication Routines" }
          ]
        },
        {
          id: "topic-testing-algorithms",
          name: "Testing Algorithms",
          subTopics: [
            { id: "subtopic-types-of-errors", name: "Types of Errors" }
          ]
        }
      ]
    },

    {
      id: "unit-fundamentals-of-data-representation",
      name: "Fundamentals of Data Representation",
      topics: [
        {
          id: "topic-number-bases",
          name: "Number Bases",
          subTopics: [
            { id: "subtopic-bit-patterns", name: "Bit Patterns" },
            { id: "subtopic-converting-between-number-bases", name: "Converting Between Number Bases" },
            { id: "subtopic-converting-decimal-and-binary", name: "Converting Between Decimal & Binary" },
            { id: "subtopic-converting-decimal-and-hexadecimal", name: "Converting Between Decimal & Hexadecimal" },
            { id: "subtopic-converting-binary-and-hexadecimal", name: "Converting Between Binary & Hexadecimal" }
          ]
        },
        {
          id: "topic-units-of-information",
          name: "Units of Information",
          subTopics: [
            { id: "subtopic-units-of-data", name: "Units of Data" }
          ]
        },
        {
          id: "topic-binary-addition",
          name: "Binary Addition",
          subTopics: []
        },
        {
          id: "topic-binary-shifts",
          name: "Binary Shifts",
          subTopics: []
        },
        {
          id: "topic-representing-characters",
          name: "Representing Characters",
          subTopics: []
        },
        {
          id: "topic-representing-images",
          name: "Representing Images",
          subTopics: []
        },
        {
          id: "topic-representing-sound",
          name: "Representing Sound",
          subTopics: []
        },
        {
          id: "topic-compression",
          name: "Compression",
          subTopics: [
            { id: "subtopic-huffman-coding", name: "Compression - Huffman Coding" },
            { id: "subtopic-run-length-encoding", name: "Compression - Run Length Encoding" }
          ]
        }
      ]
    },

    {
      id: "unit-computer-systems",
      name: "Computer Systems",
      topics: [
        {
          id: "topic-hardware-and-software",
          name: "Hardware & Software",
          subTopics: [
            { id: "subtopic-hardware-and-software-detail", name: "Hardware & Software" },
            { id: "subtopic-software", name: "Software" }
          ]
        },
        {
          id: "topic-operating-systems",
          name: "The Purpose & Functionality of Operating Systems",
          subTopics: []
        },
        {
          id: "topic-utility-software",
          name: "The Purpose & Functionality of Utility Software",
          subTopics: []
        }
      ]
    },

    {
      id: "unit-boolean-logic",
      name: "Boolean Logic",
      topics: [
        {
          id: "topic-boolean-logic",
          name: "Boolean Logic",
          subTopics: [
            { id: "subtopic-boolean-logic-diagrams", name: "Boolean Logic Diagrams" },
            { id: "subtopic-combining-boolean-operators", name: "Combining Boolean Operators" },
            { id: "subtopic-truth-tables", name: "Truth Tables" }
          ]
        }
      ]
    },

    {
      id: "unit-programming-languages-and-translators",
      name: "Programming Languages & Translators",
      topics: [
        {
          id: "topic-programming-languages-and-translators",
          name: "Programming Languages & Translators",
          subTopics: [
            { id: "subtopic-levels-of-programming-languages", name: "Levels of Programming Languages" },
            { id: "subtopic-translators", name: "Translators" }
          ]
        }
      ]
    },

    {
      id: "unit-systems-architecture",
      name: "Systems Architecture",
      topics: [
        {
          id: "topic-cpu-architecture-performance-and-embedded-systems",
          name: "CPU Architecture, Performance & Embedded Systems",
          subTopics: [
            { id: "subtopic-cpu-components-and-their-function", name: "CPU Components & Their Function" },
            { id: "subtopic-characteristics-of-the-cpu", name: "Characteristics of the CPU" },
            { id: "subtopic-fetch-execute-cycle", name: "Fetch-Execute Cycle" },
            { id: "subtopic-embedded-systems", name: "Embedded Systems" }
          ]
        }
      ]
    },

    {
      id: "unit-memory-and-storage",
      name: "Memory & Storage",
      topics: [
        {
          id: "topic-memory",
          name: "Memory",
          subTopics: [
            { id: "subtopic-different-types-of-memory", name: "Different Types of Memory" },
            { id: "subtopic-ram-and-rom", name: "RAM & ROM" }
          ]
        },
        {
          id: "topic-secondary-storage",
          name: "Secondary Storage",
          subTopics: [
            { id: "subtopic-need-for-secondary-storage", name: "The Need for Secondary Storage" },
            { id: "subtopic-common-types-of-storage", name: "Common Types of Storage" },
            { id: "subtopic-cloud-storage", name: "Cloud Storage" }
          ]
        }
      ]
    },

    {
      id: "unit-fundamentals-of-computer-networks",
      name: "Fundamentals of Computer Networks",
      topics: [
        {
          id: "topic-types-of-network",
          name: "Types of Network",
          subTopics: []
        },
        {
          id: "topic-wired-and-wireless-networks",
          name: "Wired & Wireless Networks",
          subTopics: []
        },
        {
          id: "topic-lan-topologies",
          name: "LAN Topologies",
          subTopics: []
        },
        {
          id: "topic-network-protocols",
          name: "Network Protocols",
          subTopics: []
        },
        {
          id: "topic-network-security",
          name: "Network Security",
          subTopics: []
        },
        {
          id: "topic-concept-of-layers",
          name: "The Concept of Layers",
          subTopics: []
        }
      ]
    },

    {
      id: "unit-cyber-security",
      name: "Cyber Security",
      topics: [
        {
          id: "topic-fundamentals-of-cyber-security",
          name: "Fundamentals of Cyber Security",
          subTopics: [
            { id: "subtopic-cyber-security-and-threats", name: "Cyber Security & Threats" },
            { id: "subtopic-methods-of-preventing-threats", name: "Methods of Preventing Cyber Security Threats" }
          ]
        }
      ]
    },

    {
      id: "unit-relational-databases-and-sql",
      name: "Relational Databases & Structured Query Language",
      topics: [
        {
          id: "topic-relational-databases",
          name: "Relational Databases",
          subTopics: []
        },
        {
          id: "topic-sql",
          name: "Structured Query Language (SQL)",
          subTopics: []
        }
      ]
    },

    {
      id: "unit-ethical-legal-and-environmental-impacts",
      name: "Ethical, Legal & Environmental Impacts of Digital Technology",
      topics: [
        {
          id: "topic-ethical-legal-and-environmental-impacts",
          name: "Ethical, Legal & Environmental Impacts",
          subTopics: [
            { id: "subtopic-impacts-on-wider-society", name: "Impacts of Digital Technology on Wider Society" },
            { id: "subtopic-legislation-in-computer-science", name: "Legislation in Computer Science" }
          ]
        }
      ]
    }
  ],

  papers: [
    {
      id: "paper-1",
      name: "Paper 1: Computational thinking and programming skills",
      assessedNodeIds: [
        "unit-fundamentals-of-algorithms",
        "unit-programming"
      ]
    },
    {
      id: "paper-2",
      name: "Paper 2: Computing concepts",
      assessedNodeIds: [
        "unit-fundamentals-of-data-representation",
        "unit-computer-systems",
        "unit-boolean-logic",
        "unit-programming-languages-and-translators",
        "unit-systems-architecture",
        "unit-memory-and-storage",
        "unit-fundamentals-of-computer-networks",
        "unit-cyber-security",
        "unit-relational-databases-and-sql",
        "unit-ethical-legal-and-environmental-impacts"
      ]
    }
  ]
};
