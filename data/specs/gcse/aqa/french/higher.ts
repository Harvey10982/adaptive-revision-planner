import { SubjectSpecification } from "@/types/SubjectSpecification";

export const specification: SubjectSpecification = {
  units: [
    {
      id: "unit-theme-1",
      name: "Theme 1: People and lifestyle",
      topics: [
        {
          id: "topic-theme-1-1-identity-and-relationships-with-others",
          name: "Identity and relationships with others",
          subTopics: [
            { id: "topic-theme-1-1-identity-and-relationships-with-others-all", name: "All content within this topic (see specification)" }
          ]
        },
        {
          id: "topic-theme-1-2-healthy-living-and-lifestyle",
          name: "Healthy living and lifestyle",
          subTopics: [
            { id: "topic-theme-1-2-healthy-living-and-lifestyle-all", name: "All content within this topic (see specification)" }
          ]
        },
        {
          id: "topic-theme-1-3-education-and-work",
          name: "Education and work",
          subTopics: [
            { id: "topic-theme-1-3-education-and-work-all", name: "All content within this topic (see specification)" }
          ]
        }
      ]
    },

    {
      id: "unit-theme-2",
      name: "Theme 2: Popular culture",
      topics: [
        {
          id: "topic-theme-2-1-free-time-activities",
          name: "Free-time activities",
          subTopics: [
            { id: "topic-theme-2-1-free-time-activities-all", name: "All content within this topic (see specification)" }
          ]
        },
        {
          id: "topic-theme-2-2-customs-festivals-and-celebrations",
          name: "Customs, festivals and celebrations",
          subTopics: [
            { id: "topic-theme-2-2-customs-festivals-and-celebrations-all", name: "All content within this topic (see specification)" }
          ]
        },
        {
          id: "topic-theme-2-3-celebrity-culture",
          name: "Celebrity culture",
          subTopics: [
            { id: "topic-theme-2-3-celebrity-culture-all", name: "All content within this topic (see specification)" }
          ]
        }
      ]
    },

    {
      id: "unit-theme-3",
      name: "Theme 3: Communication and the world around us",
      topics: [
        {
          id: "topic-theme-3-1-travel-and-tourism-including-places-of-interest",
          name: "Travel and tourism, including places of interest",
          subTopics: [
            { id: "topic-theme-3-1-travel-and-tourism-including-places-of-interest-all", name: "All content within this topic (see specification)" }
          ]
        },
        {
          id: "topic-theme-3-2-media-and-technology",
          name: "Media and technology",
          subTopics: [
            { id: "topic-theme-3-2-media-and-technology-all", name: "All content within this topic (see specification)" }
          ]
        },
        {
          id: "topic-theme-3-3-the-environment-and-where-people-live",
          name: "The environment and where people live",
          subTopics: [
            { id: "topic-theme-3-3-the-environment-and-where-people-live-all", name: "All content within this topic (see specification)" }
          ]
        }
      ]
    },

    {
      id: "unit-grammar",
      name: "Grammar",
      topics: [
        {
          id: "topic-grammar",
          name: "Prescribed grammar (see specification)",
          subTopics: [
            { id: "sub-grammar-requirements", name: "Grammar requirements by tier and language (see specification)" }
          ]
        }
      ]
    },

    {
      id: "unit-vocabulary",
      name: "Vocabulary",
      topics: [
        {
          id: "topic-vocabulary",
          name: "Prescribed vocabulary list (see specification)",
          subTopics: [
            { id: "sub-vocabulary-list", name: "Vocabulary list by tier and language (see specification)" }
          ]
        }
      ]
    },

    {
      id: "unit-sound-symbol-correspondences",
      name: "Sound-symbol correspondences",
      topics: [
        {
          id: "topic-sscs",
          name: "Sound-symbol correspondences (see specification appendix)",
          subTopics: [
            { id: "sub-sscs", name: "Prescribed SSCs (see specification appendix)" }
          ]
        }
      ]
    }
  ],

  papers: [
    {
      id: "paper-1-listening",
      name: "Paper 1: Listening",
      assessedNodeIds: [
        "unit-theme-1", "unit-theme-2", "unit-theme-3", "unit-grammar", "unit-vocabulary", "unit-sound-symbol-correspondences"
      ]
    },
    {
      id: "paper-2-speaking",
      name: "Paper 2: Speaking",
      assessedNodeIds: [
        "unit-theme-1", "unit-theme-2", "unit-theme-3", "unit-grammar", "unit-vocabulary", "unit-sound-symbol-correspondences"
      ]
    },
    {
      id: "paper-3-reading",
      name: "Paper 3: Reading",
      assessedNodeIds: [
        "unit-theme-1", "unit-theme-2", "unit-theme-3", "unit-grammar", "unit-vocabulary", "unit-sound-symbol-correspondences"
      ]
    },
    {
      id: "paper-4-writing",
      name: "Paper 4: Writing",
      assessedNodeIds: [
        "unit-theme-1", "unit-theme-2", "unit-theme-3", "unit-grammar", "unit-vocabulary", "unit-sound-symbol-correspondences"
      ]
    }
  ]
};
