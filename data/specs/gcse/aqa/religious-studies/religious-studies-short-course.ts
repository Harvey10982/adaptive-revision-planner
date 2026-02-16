import type { SubjectSpecification } from "../../../../types/SubjectSpecification"

export const specification: SubjectSpecification = {
  units: [
    {
      id: "unit-christianity",
      name: "Christianity",
      topics: [
        {
          id: "topic-christianity-key-beliefs-nature-of-god",
          name: "Christianity Key Beliefs: The Nature of God",
          subTopics: [
            { id: "subtopic-introduction-to-christianity", name: "Introduction to Christianity" },
            { id: "subtopic-nature-of-god", name: "The Nature of God" },
            { id: "subtopic-trinity", name: "The Trinity" }
          ]
        },
        {
          id: "topic-christianity-key-beliefs-creation",
          name: "Christianity Key Beliefs: Creation",
          subTopics: [
            { id: "subtopic-creation-of-the-world", name: "Christian Beliefs about the Creation of the World" }
          ]
        },
        {
          id: "topic-christianity-key-beliefs-salvation",
          name: "Christianity Key Beliefs: Salvation",
          subTopics: [
            { id: "subtopic-afterlife", name: "Christian Beliefs about the Afterlife" },
            { id: "subtopic-resurrection-and-salvation", name: "The Resurrection of Jesus & Salvation" },
            { id: "subtopic-role-of-jesus-in-salvation", name: "Christian Beliefs on the Role of Jesus in Salvation" },
            { id: "subtopic-salvation-in-christianity", name: "Salvation in Christianity" }
          ]
        }
      ]
    },

    {
      id: "unit-islam",
      name: "Islam",
      topics: [
        {
          id: "topic-islam-key-beliefs-faith",
          name: "Islam Key Beliefs: Faith",
          subTopics: [
            { id: "subtopic-diversity-in-islam", name: "Diversity in Islam" },
            { id: "subtopic-sunni-shia-differences", name: "Difference Between Sunnii & Shi'a Core Beliefs" }
          ]
        },
        {
          id: "topic-islam-key-beliefs-nature-of-allah",
          name: "Islam Key Beliefs: The Nature of Allah",
          subTopics: [
            { id: "subtopic-tawhid", name: "Tawhid" },
            { id: "subtopic-nature-of-allah", name: "The Nature of Allah" },
            { id: "subtopic-angels", name: "Angels in Islam" },
            { id: "subtopic-predestination", name: "Muslim Belief in Predestination" },
            { id: "subtopic-akhirah", name: "Akhirah" }
          ]
        },
        {
          id: "topic-islam-key-beliefs-authority",
          name: "Islam Key Beliefs: Authority",
          subTopics: [
            { id: "subtopic-risalah", name: "Risalah" },
            { id: "subtopic-quran", name: "The Qur'an" },
            { id: "subtopic-holy-books", name: "Holy Books in Islam" },
            { id: "subtopic-imamate", name: "The Imamate in Shi'a Islam" }
          ]
        }
      ]
    },

    {
      id: "unit-buddhism",
      name: "Buddhism",
      topics: [
        {
          id: "topic-buddhism-key-beliefs-faith",
          name: "Buddhism Key Beliefs: Faith",
          subTopics: [
            { id: "subtopic-dhamma-dharma", name: "Buddhism: The Concept of Dhamma (Dharma)" },
            { id: "subtopic-three-marks", name: "Dhamma: The Three Marks of Existence" },
            { id: "subtopic-human-personality", name: "Dhamma: The Human Personality" },
            { id: "subtopic-human-destiny", name: "Dhamma: Human Destiny" }
          ]
        },
        {
          id: "topic-buddhism-key-beliefs-authority",
          name: "Buddhism Key Beliefs: Authority",
          subTopics: [
            { id: "subtopic-the-buddha", name: "The Buddha" },
            { id: "subtopic-ascetic-life-enlightenment", name: "Buddha's Ascetic Life & Enlightenment" },
            { id: "subtopic-four-noble-truths", name: "The Four Noble Truths" }
          ]
        }
      ]
    },

    {
      id: "unit-judaism",
      name: "Judaism",
      topics: [
        {
          id: "topic-judaism-key-beliefs-nature-of-god",
          name: "Judaism Key Beliefs: The Nature of God",
          subTopics: [
            { id: "subtopic-introduction-to-judaism", name: "Introduction to Judaism" },
            { id: "subtopic-nature-of-god", name: "The Nature of God" },
            { id: "subtopic-shekhinah", name: "The Divine Presence (Shekhinah)" }
          ]
        },
        {
          id: "topic-judaism-key-beliefs-life-after-death",
          name: "Judaism Key Beliefs: Life After Death",
          subTopics: [
            { id: "subtopic-afterlife", name: "Judaism & Beliefs About the Afterlife" }
          ]
        },
        {
          id: "topic-judaism-key-beliefs-messiah",
          name: "Judaism Key Beliefs: The Messiah",
          subTopics: [
            { id: "subtopic-messiah-role", name: "The Nature & Role of the Messiah" }
          ]
        },
        {
          id: "topic-covenant-and-mitzvot",
          name: "The Covenant & the Mitzvot",
          subTopics: [
            { id: "subtopic-promised-land-abraham", name: "The Promised Land & the Covenant with Abraham" },
            { id: "subtopic-covenant-at-sinai", name: "The Covenant at Sinai" },
            { id: "subtopic-mitzvot", name: "The Mitzvot" },
            { id: "subtopic-mitzvot-sanctity-of-life", name: "The Mitzvot & Sanctity of Life" },
            { id: "subtopic-mitzvot-free-will", name: "The Mitzvot & Free Will" }
          ]
        }
      ]
    },

    {
      id: "unit-relationships-and-families",
      name: "Relationships & Families",
      topics: [
        {
          id: "topic-religion-and-human-sexuality",
          name: "Religion & Human Sexuality",
          subTopics: [
            { id: "subtopic-human-sexuality", name: "Human Sexuality" },
            { id: "subtopic-contraception-family-planning", name: "Religious Beliefs about Contraception & Family Planning" }
          ]
        },
        {
          id: "topic-religion-and-marriage",
          name: "Religion & Marriage",
          subTopics: [
            { id: "subtopic-nature-purpose-marriage", name: "What is the Nature & Purpose of Marriage" }
          ]
        },
        {
          id: "topic-religion-and-divorce",
          name: "Religion & Divorce",
          subTopics: [
            { id: "subtopic-divorce-remarriage", name: "Religious Views on Divorce & Remarriage" }
          ]
        },
        {
          id: "topic-religion-and-nature-of-families",
          name: "Religion & the Nature of Families",
          subTopics: [
            { id: "subtopic-nature-of-families", name: "The Nature of Families" },
            { id: "subtopic-purpose-of-families", name: "The Purpose of Families" },
            { id: "subtopic-contemporary-family-issues", name: "Contemporary Family Issues" }
          ]
        },
        {
          id: "topic-religion-and-roles-of-men-and-women",
          name: "Religion & the Roles of Men & Women",
          subTopics: [
            { id: "subtopic-roles-men-women", name: "The Roles of Men & Women" }
          ]
        }
      ]
    },

    {
      id: "unit-religion-peace-and-conflict",
      name: "Religion, Peace and Conflict",
      topics: [
        {
          id: "topic-peace-and-justice",
          name: "Peace & Justice",
          subTopics: [
            { id: "subtopic-religion-peace-justice", name: "Religion, Peace & Justice" }
          ]
        },
        {
          id: "topic-forgiveness-and-reconciliation",
          name: "Forgiveness & Reconciliation",
          subTopics: [
            { id: "subtopic-forgiveness-reconciliation", name: "Forgiveness & Reconciliation" }
          ]
        },
        {
          id: "topic-religion-and-violence",
          name: "Religion & Violence",
          subTopics: [
            { id: "subtopic-religion-violence", name: "Religion & Violence" }
          ]
        },
        {
          id: "topic-attitudes-to-terrorism",
          name: "Religion & Attitudes to Terrorism",
          subTopics: [
            { id: "subtopic-terrorism", name: "Terrorism" },
            { id: "subtopic-religion-and-terrorism", name: "Religion and Terrorism" }
          ]
        },
        {
          id: "topic-religion-and-war",
          name: "Religion & War",
          subTopics: [
            { id: "subtopic-reasons-for-war", name: "Reasons for War" },
            { id: "subtopic-religious-attitudes-to-war", name: "Religious Attitudes to War" },
            { id: "subtopic-nuclear-war", name: "Nuclear War" },
            { id: "subtopic-just-war-theory", name: "The Just War Theory" },
            { id: "subtopic-holy-war", name: "What is Holy War?" },
            { id: "subtopic-religion-cause-war-violence", name: "Religion as a Cause of War & Violence" }
          ]
        },
        {
          id: "topic-religion-and-peace",
          name: "Religion & Peace",
          subTopics: [
            { id: "subtopic-pacifism", name: "What is Pacifism?" },
            { id: "subtopic-peacemaking", name: "Religion & Peacemaking" },
            { id: "subtopic-helping-victims", name: "Helping Victims of War" }
          ]
        }
      ]
    }
  ],

  papers: [
    {
      id: "short-course-paper",
      name: "Short course paper",
      assessedNodeIds: [
        "unit-christianity",
        "unit-islam",
        "unit-buddhism",
        "unit-judaism",
        "unit-relationships-and-families",
        "unit-religion-peace-and-conflict"
      ]
    }
  ]
};
