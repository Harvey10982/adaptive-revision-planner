import type { SubjectSpecification } from "../../../../types/subjectSpecification"

export const specification: SubjectSpecification = {
  units: [
    {
      id: "unit-life-in-modern-britain",
      name: "Life in modern Britain",
      topics: [
        {
          id: "topic-values-and-principles",
          name: "What are the values and principles that underpin British society?",
          subTopics: [],
        },
        {
          id: "topic-identity",
          name: "What do we mean by identity?",
          subTopics: [],
        },
        {
          id: "topic-international-organisations",
          name: "What is the UK's role in key international organisations?",
          subTopics: [],
        },
        {
          id: "topic-contributing-to-the-world",
          name: "How does the UK contribute to the wider world?",
          subTopics: [],
        },
        {
          id: "topic-voice-heard-worldwide",
          name: "How does the UK make its voice heard around the world?",
          subTopics: [],
        },
      ],
    },
    {
      id: "unit-rights-and-responsibilities",
      name: "Rights and responsibilities",
      topics: [
        {
          id: "topic-human-rights",
          name: "What are human rights and where do they come from?",
          subTopics: [],
        },
        {
          id: "topic-protecting-rights",
          name: "How are rights protected and what happens when they are breached?",
          subTopics: [],
        },
        {
          id: "topic-law-and-justice",
          name: "What is the role of law and the justice system in a democratic society?",
          subTopics: [],
        },
        {
          id: "topic-balancing-rights",
          name: "How do we balance rights, freedoms and responsibilities?",
          subTopics: [],
        },
        {
          id: "topic-resolving-disputes",
          name: "How can citizens work with others to resolve conflict and bring about change?",
          subTopics: [],
        },
      ],
    },
    {
      id: "unit-politics-and-participation",
      name: "Politics and participation",
      topics: [
        {
          id: "topic-democracy-and-government",
          name: "What is democracy and how is the UK governed?",
          subTopics: [],
        },
        {
          id: "topic-parliament-and-government",
          name: "How do Parliament and government work, and how are they held to account?",
          subTopics: [],
        },
        {
          id: "topic-elections-and-voting",
          name: "How do elections work and how can citizens participate through voting?",
          subTopics: [],
        },
        {
          id: "topic-citizenship-action",
          name: "How can citizens participate in politics and influence decision making?",
          subTopics: [],
        },
        {
          id: "topic-media-and-pressure-groups",
          name: "What roles do the media and pressure groups play in a democracy?",
          subTopics: [],
        },
      ],
    },
    {
      id: "unit-active-citizenship",
      name: "Active citizenship",
      topics: [
        {
          id: "topic-active-citizenship-what-and-why",
          name: "What is active citizenship and why does it matter?",
          subTopics: [],
        },
        {
          id: "topic-identifying-an-issue",
          name: "Identifying an issue, researching it and planning an action",
          subTopics: [],
        },
        {
          id: "topic-taking-action",
          name: "Taking informed action to influence or improve society",
          subTopics: [],
        },
        {
          id: "topic-reflection-and-evaluation",
          name: "Reflecting on and evaluating the impact of action",
          subTopics: [],
        },
      ],
    },
  ],
  papers: [
    {
      id: "paper-1",
      name: "Paper 1",
      assessedNodeIds: ["unit-life-in-modern-britain", "unit-rights-and-responsibilities"],
    },
    {
      id: "paper-2",
      name: "Paper 2",
      assessedNodeIds: ["unit-politics-and-participation", "unit-active-citizenship"],
    },
  ],
};
