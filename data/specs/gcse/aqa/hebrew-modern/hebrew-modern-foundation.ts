import type { SubjectSpecification } from "../../../../types/SubjectSpecification"

export const specification: SubjectSpecification = {
  units: [
    {
      id: "unit-theme-1",
      name: "Theme 1: Identity and culture",
      topics: [
        {
          id: "topic-theme-1-1-me-my-family-and-friends",
          name: "Me, my family and friends",
          subTopics: [
            { id: "sub-relationships-with-family-and-friends", name: "Relationships with family and friends" },
            { id: "sub-marriage-partnership", name: "Marriage/partnership" }
          ]
        },
        {
          id: "topic-theme-1-2-technology-in-everyday-life",
          name: "Technology in everyday life",
          subTopics: [
            { id: "sub-social-media", name: "Social media" },
            { id: "sub-mobile-technology", name: "Mobile technology" }
          ]
        },
        {
          id: "topic-theme-1-3-free-time-activities",
          name: "Free-time activities",
          subTopics: [
            { id: "sub-music", name: "Music" },
            { id: "sub-cinema-and-tv", name: "Cinema and TV" },
            { id: "sub-food-and-eating-out", name: "Food and eating out" },
            { id: "sub-sport", name: "Sport" }
          ]
        },
        {
          id: "topic-theme-1-4-customs-and-festivals-in-hebrew-modern-speaking-countries-communities",
          name: "Customs and festivals in Hebrew (Modern)-speaking countries/communities",
          subTopics: [
            { id: "topic-theme-1-4-customs-and-festivals-in-hebrew-modern-speaking-countries-communities-all", name: "All content within this topic (see specification)" }
          ]
        }
      ]
    },

    {
      id: "unit-theme-2",
      name: "Theme 2: Local, national, international and global areas of interest",
      topics: [
        {
          id: "topic-theme-2-1-home-town-neighbourhood-and-region",
          name: "Home, town, neighbourhood and region",
          subTopics: [
            { id: "topic-theme-2-1-home-town-neighbourhood-and-region-all", name: "All content within this topic (see specification)" }
          ]
        },
        {
          id: "topic-theme-2-2-social-issues",
          name: "Social issues",
          subTopics: [
            { id: "sub-charity-voluntary-work", name: "Charity/voluntary work" },
            { id: "sub-healthy-unhealthy-living", name: "Healthy/unhealthy living" }
          ]
        },
        {
          id: "topic-theme-2-3-global-issues",
          name: "Global issues",
          subTopics: [
            { id: "sub-the-environment", name: "The environment" },
            { id: "sub-poverty-homelessness", name: "Poverty/homelessness" }
          ]
        },
        {
          id: "topic-theme-2-4-travel-and-tourism",
          name: "Travel and tourism",
          subTopics: [
            { id: "topic-theme-2-4-travel-and-tourism-all", name: "All content within this topic (see specification)" }
          ]
        }
      ]
    },

    {
      id: "unit-theme-3",
      name: "Theme 3: Current and future study and employment",
      topics: [
        {
          id: "topic-theme-3-1-my-studies",
          name: "My studies",
          subTopics: [
            { id: "topic-theme-3-1-my-studies-all", name: "All content within this topic (see specification)" }
          ]
        },
        {
          id: "topic-theme-3-2-life-at-school-college",
          name: "Life at school/college",
          subTopics: [
            { id: "topic-theme-3-2-life-at-school-college-all", name: "All content within this topic (see specification)" }
          ]
        },
        {
          id: "topic-theme-3-3-education-post-16",
          name: "Education post-16",
          subTopics: [
            { id: "topic-theme-3-3-education-post-16-all", name: "All content within this topic (see specification)" }
          ]
        },
        {
          id: "topic-theme-3-4-jobs-career-choices-and-ambitions",
          name: "Jobs, career choices and ambitions",
          subTopics: [
            { id: "topic-theme-3-4-jobs-career-choices-and-ambitions-all", name: "All content within this topic (see specification)" }
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
    }
  ],

  papers: [
    {
      id: "paper-1-listening",
      name: "Paper 1: Listening",
      assessedNodeIds: [
        "unit-theme-1", "unit-theme-2", "unit-theme-3", "unit-grammar", "unit-vocabulary"
      ]
    },
    {
      id: "paper-2-speaking",
      name: "Paper 2: Speaking",
      assessedNodeIds: [
        "unit-theme-1", "unit-theme-2", "unit-theme-3", "unit-grammar", "unit-vocabulary"
      ]
    },
    {
      id: "paper-3-reading",
      name: "Paper 3: Reading",
      assessedNodeIds: [
        "unit-theme-1", "unit-theme-2", "unit-theme-3", "unit-grammar", "unit-vocabulary"
      ]
    },
    {
      id: "paper-4-writing",
      name: "Paper 4: Writing",
      assessedNodeIds: [
        "unit-theme-1", "unit-theme-2", "unit-theme-3", "unit-grammar", "unit-vocabulary"
      ]
    }
  ]
};
