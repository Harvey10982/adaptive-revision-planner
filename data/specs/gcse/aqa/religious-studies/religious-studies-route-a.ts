import type { SubjectSpecification } from "../../../../types/subjectSpecification"

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
            { id: "subtopic-nature-of-god-christianity", name: "The Nature of God" },
            { id: "subtopic-trinity", name: "The Trinity" },
          ],
        },
        {
          id: "topic-christianity-key-beliefs-creation",
          name: "Christianity Key Beliefs: Creation",
          subTopics: [
            { id: "subtopic-christian-beliefs-creation-of-world", name: "Christian Beliefs about the Creation of the World" },
          ],
        },
        {
          id: "topic-christianity-key-beliefs-salvation",
          name: "Christianity Key Beliefs: Salvation",
          subTopics: [
            { id: "subtopic-christian-beliefs-afterlife", name: "Christian Beliefs about the Afterlife" },
            { id: "subtopic-resurrection-of-jesus-and-salvation", name: "Resurrection of Jesus & Salvation" },
            { id: "subtopic-role-of-jesus-in-salvation", name: "Christian Beliefs on the Role of Jesus in Salvation" },
            { id: "subtopic-salvation-in-christianity", name: "Salvation in Christianity" },
          ],
        },
        {
          id: "topic-christianity-key-practices-worship-and-festivals",
          name: "Christianity Key Practices: Worship & Festivals",
          subTopics: [
            { id: "subtopic-christian-worship-and-prayer", name: "Christian Worship & Prayer" },
            { id: "subtopic-sacraments", name: "The Sacraments" },
            { id: "subtopic-christian-festivals-and-pilgrimage", name: "Christianity - Festivals & Pilgrimage" },
          ],
        },
        {
          id: "topic-christianity-key-practices-role-of-church",
          name: "Christianity Key Practices: The Role of the Church",
          subTopics: [
            { id: "subtopic-local-church-and-community", name: "Christian Church & the Local Community" },
            { id: "subtopic-worldwide-church", name: "The Worldwide Church" },
          ],
        },
      ],
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
            { id: "subtopic-sunni-shia-differences", name: "Difference Between Sunnii & Shi'a Core Beliefs" },
          ],
        },
        {
          id: "topic-islam-key-beliefs-nature-of-allah",
          name: "Islam Key Beliefs: The Nature of Allah",
          subTopics: [
            { id: "subtopic-tawhid", name: "Tawhid" },
            { id: "subtopic-nature-of-allah", name: "The Nature of Allah" },
            { id: "subtopic-angels-in-islam", name: "Angels in Islam" },
            { id: "subtopic-predestination", name: "Muslim Belief in Predestination" },
            { id: "subtopic-akhirah", name: "Akhirah" },
          ],
        },
        {
          id: "topic-islam-key-beliefs-authority",
          name: "Islam Key Beliefs: Authority",
          subTopics: [
            { id: "subtopic-risalah", name: "Risalah" },
            { id: "subtopic-the-quran", name: "The Qur'an" },
            { id: "subtopic-holy-books", name: "Holy Books in Islam" },
            { id: "subtopic-imamate", name: "The Imamate in Shi'a Islam" },
          ],
        },
        {
          id: "topic-islam-key-practices-worship",
          name: "Islam Key Practices: Worship",
          subTopics: [
            { id: "subtopic-worship-sunni-shia", name: "Worship in Sunni & Shi'a Islam" },
            { id: "subtopic-shahadah", name: "Shahadah" },
            { id: "subtopic-salah-significance", name: "Salah & its Significance" },
            { id: "subtopic-salah-in-islam", name: "Salah in Islam" },
          ],
        },
        {
          id: "topic-islam-key-practices-duties-and-festivals",
          name: "Islam Key Practices: Duties & Festivals",
          subTopics: [
            { id: "subtopic-sawm", name: "Sawm" },
            { id: "subtopic-zakah", name: "Zakah" },
            { id: "subtopic-hajj", name: "Hajj" },
            { id: "subtopic-jihad", name: "Jihad" },
            { id: "subtopic-id-ul-adha-and-id-ul-fitr", name: "Id-ul-Adha & Id-ul-Fitr" },
            { id: "subtopic-ashura", name: "Ashura" },
          ],
        },
      ],
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
            { id: "subtopic-human-destiny", name: "Dhamma: Human Destiny" },
          ],
        },
        {
          id: "topic-buddhism-key-beliefs-authority",
          name: "Buddhism Key Beliefs: Authority",
          subTopics: [
            { id: "subtopic-the-buddha", name: "The Buddha" },
            { id: "subtopic-ascetic-life-enlightenment", name: "Buddha's Ascetic Life & Enlightenment" },
            { id: "subtopic-four-noble-truths", name: "The Four Noble Truths" },
          ],
        },
        {
          id: "topic-buddhist-key-practices-worship-and-festivals",
          name: "Buddhist Key Practices: Worship & Festivals",
          subTopics: [
            { id: "subtopic-places-of-worship", name: "Buddhism: Places of Worship" },
            { id: "subtopic-methods-of-worship", name: "Buddhism: Methods of Worship" },
            { id: "subtopic-death-and-mourning", name: "Buddhism: Rituals of Death & Mourning" },
            { id: "subtopic-buddhist-festivals", name: "Buddhist Festivals" },
          ],
        },
        {
          id: "topic-buddhist-key-practices-ethics",
          name: "Buddhist Key Practices: Ethics",
          subTopics: [
            { id: "subtopic-buddhism-and-ethics", name: "Buddhism & Ethics" },
            { id: "subtopic-five-precepts-six-perfections", name: "Buddhism: The Five Moral Precepts & Six Perfections" },
          ],
        },
      ],
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
            { id: "subtopic-nature-of-god-judaism", name: "The Nature of God" },
            { id: "subtopic-shekhinah", name: "The Divine Presence (Shekhinah)" },
          ],
        },
        {
          id: "topic-judaism-key-beliefs-life-after-death",
          name: "Judaism Key Beliefs: Life After Death",
          subTopics: [
            { id: "subtopic-judaism-afterlife", name: "Judaism & Beliefs About the Afterlife" },
          ],
        },
        {
          id: "topic-judaism-key-beliefs-messiah",
          name: "Judaism Key Beliefs: The Messiah",
          subTopics: [
            { id: "subtopic-messiah-nature-and-role", name: "The Nature & Role of the Messiah" },
          ],
        },
        {
          id: "topic-covenant-and-mitzvot",
          name: "The Covenant & the Mitzvot",
          subTopics: [
            { id: "subtopic-promised-land-abraham", name: "The Promised Land & the Covenant with Abraham" },
            { id: "subtopic-covenant-at-sinai", name: "The Covenant at Sinai" },
            { id: "subtopic-the-mitzvot", name: "The Mitzvot" },
            { id: "subtopic-mitzvot-sanctity-of-life", name: "The Mitzvot & Sanctity of Life" },
            { id: "subtopic-mitzvot-free-will", name: "The Mitzvot & Free Will" },
          ],
        },
        {
          id: "topic-judaism-key-practices-worship",
          name: "Judaism Key Practices: Worship",
          subTopics: [
            { id: "subtopic-synagogue", name: "The Synagogue" },
            { id: "subtopic-services-at-synagogue", name: "Services at the Synagogue" },
            { id: "subtopic-worship-home-and-synagogue", name: "Worship in the Home & Synagogue" },
            { id: "subtopic-tenakh-and-talmud", name: "The Tenakh & the Talmud" },
          ],
        },
        {
          id: "topic-judaism-key-practices-family-life",
          name: "Judaism Key Practices: Family Life",
          subTopics: [
            { id: "subtopic-birth-ceremonies", name: "Judaism: Birth Ceremonies" },
            { id: "subtopic-marriage-ceremonies", name: "Judaism: Marriage Ceremonies" },
            { id: "subtopic-mourning-rituals", name: "Judaism: Mourning Rituals" },
            { id: "subtopic-dietary-laws", name: "Judaism: Dietary Laws" },
          ],
        },
        {
          id: "topic-judaism-key-practices-festivals",
          name: "Judaism Key Practices: Festivals",
          subTopics: [
            { id: "subtopic-rosh-hashanah", name: "Judaism: Rosh Hashanah" },
            { id: "subtopic-yom-kippur", name: "Judaism: Yom Kippur" },
            { id: "subtopic-pesach", name: "Judaism: Pesach" },
          ],
        },
      ],
    },

    {
      id: "unit-hinduism",
      name: "Hinduism",
      topics: [
        {
          id: "topic-hinduism-key-beliefs-nature-of-god",
          name: "Hinduism Key Beliefs: Nature of God",
          subTopics: [
            { id: "subtopic-brahman", name: "Brahman" },
            { id: "subtopic-three-features-of-the-divine", name: "What are the Three Features of the Divine?" },
            { id: "subtopic-how-divine-present", name: "How Does the Divine Present" },
            { id: "subtopic-matter", name: "Matter" },
            { id: "subtopic-cycle-of-four-ages", name: "The Cycle of the Four Ages" },
          ],
        },
        {
          id: "topic-hinduism-key-beliefs-nature-of-human-life",
          name: "Hinduism Key Beliefs: Nature of Human Life",
          subTopics: [
            { id: "subtopic-atman", name: "What is the Concept of Atman?" },
            { id: "subtopic-cycle-of-birth-and-death", name: "The Cycle of Birth & Death" },
            { id: "subtopic-personal-virtues", name: "Personal Virtues" },
            { id: "subtopic-four-aims-of-human-life", name: "The Four Aims of Human Life" },
          ],
        },
        {
          id: "topic-hinduism-key-practices-worship",
          name: "Hinduism Key Practices: Worship",
          subTopics: [
            { id: "subtopic-hindu-places-of-worship", name: "Hindu Places of Worship" },
            { id: "subtopic-forms-of-worship", name: "Different Forms of Worship in Hinduism" },
            { id: "subtopic-focus-of-worship", name: "The Focus of Worship" },
            { id: "subtopic-hindu-festivals", name: "Hindu Festivals" },
          ],
        },
        {
          id: "topic-hinduism-key-practices-lifestyle",
          name: "Hinduism Key Practices: Lifestyle",
          subTopics: [
            { id: "subtopic-four-paths-yoga", name: "What are the Four Paths Towards Yoga?" },
            { id: "subtopic-pilgrimage", name: "Pilgrimage in Hinduism" },
            { id: "subtopic-environment-and-charities", name: "Environment & Charities in Hinduism" },
          ],
        },
      ],
    },

    {
      id: "unit-sikhism",
      name: "Sikhism",
      topics: [
        {
          id: "topic-sikhism-key-beliefs-nature-of-god",
          name: "Sikhism Key Beliefs: Nature of God",
          subTopics: [
            { id: "subtopic-introduction-to-sikhism", name: "Sikhism" },
            { id: "subtopic-nature-of-god-sikhism", name: "The Nature of God in Sikhism" },
            { id: "subtopic-virtues-of-sikhism", name: "Virtues of Sikhism" },
          ],
        },
        {
          id: "topic-sikhism-key-beliefs-nature-of-human-life",
          name: "Sikhism Key Beliefs: Nature of Human Life",
          subTopics: [
            { id: "subtopic-oneness-of-humanity", name: "The Oneness of Humanity" },
            { id: "subtopic-sewa", name: "Sewa" },
            { id: "subtopic-sangat", name: "The Role & Importance of Sangat" },
          ],
        },
        {
          id: "topic-sikhism-key-practices-worship-and-service",
          name: "Sikhism Key Practices: Worship & Service",
          subTopics: [
            { id: "subtopic-features-of-the-gurdwara", name: "Features of the Gurdwara" },
            { id: "subtopic-sikhism-and-worship", name: "Sikhism & Worship" },
          ],
        },
        {
          id: "topic-sikhism-key-practices-festival-and-lifestyle",
          name: "Sikhism Key Practices: Festival & Lifestyle",
          subTopics: [
            { id: "subtopic-sikh-festivals", name: "Sikh Festivals" },
            { id: "subtopic-sikh-pilgrimage", name: "Sikh Pilgrimage" },
            { id: "subtopic-birth-and-naming", name: "Sikh Birth & Naming Ceremonies" },
            { id: "subtopic-amrit-sanskar", name: "Sikh Initiation Ceremony: Amrit Sanskar" },
          ],
        },
      ],
    },

    {
      id: "unit-catholic-christianity",
      name: "Catholic Christianity",
      topics: [
        {
          id: "topic-catholic-key-beliefs-nature-of-god",
          name: "Catholic Christianity Key Beliefs: The Nature of God",
          subTopics: [
            { id: "subtopic-introduction-to-catholic-christianity", name: "Introduction to Catholic Christianity" },
            { id: "subtopic-catholic-trinity", name: "The Trinity" },
            { id: "subtopic-catholic-creation", name: "Creation" },
            { id: "subtopic-incarnation", name: "Incarnation" },
            { id: "subtopic-redemption", name: "Redemption" },
          ],
        },
        {
          id: "topic-catholic-key-beliefs-life-after-death",
          name: "Catholic Christianity Key Beliefs: Life After Death",
          subTopics: [
            { id: "subtopic-catholic-beliefs-life-after-death", name: "Beliefs About Life After Death" },
          ],
        },
        {
          id: "topic-catholic-key-beliefs-sacraments",
          name: "Catholic Christianity Key Beliefs: Sacraments",
          subTopics: [
            { id: "subtopic-nature-of-sacraments", name: "The Nature of the Sacraments" },
            { id: "subtopic-baptism", name: "Baptism" },
            { id: "subtopic-confirmation", name: "Confirmation" },
            { id: "subtopic-reconciliation", name: "Reconciliation" },
            { id: "subtopic-anointing-of-the-sick", name: "Anointing of the Sick" },
            { id: "subtopic-matrimony", name: "Matrimony" },
            { id: "subtopic-holy-orders", name: "Holy Orders" },
            { id: "subtopic-eucharist", name: "Eucharist" },
          ],
        },
        {
          id: "topic-catholic-key-practices-worship-and-prayer",
          name: "Catholic Christianity Key Practices: Worship & Prayer",
          subTopics: [
            { id: "subtopic-catholic-prayer", name: "Catholic Christianity & Prayer" },
            { id: "subtopic-popular-piety", name: "Forms of Popular Piety" },
            { id: "subtopic-catholic-pilgrimage", name: "Catholic Christianity & Pilgrimage" },
            { id: "subtopic-catholic-funerals", name: "Catholic Christianity & Funerals" },
          ],
        },
        {
          id: "topic-catholic-key-practices-work-of-the-church",
          name: "Catholic Christianity Key Practices: The Work of the Church",
          subTopics: [
            { id: "subtopic-catholic-social-teaching-and-work", name: "Catholic Social Teaching & Work" },
            { id: "subtopic-catholic-mission-and-evangelism", name: "Catholic Mission & Evangelism" },
          ],
        },
      ],
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
            { id: "subtopic-contraception-and-family-planning", name: "Religious Beliefs about Contraception & Family Planning" },
          ],
        },
        {
          id: "topic-religion-and-marriage",
          name: "Religion & Marriage",
          subTopics: [
            { id: "subtopic-nature-and-purpose-of-marriage", name: "What is the Nature & Purpose of Marriage" },
          ],
        },
        {
          id: "topic-religion-and-divorce",
          name: "Religion & Divorce",
          subTopics: [
            { id: "subtopic-divorce-and-remarriage", name: "Religious Views on Divorce & Remarriage" },
          ],
        },
        {
          id: "topic-religion-and-nature-of-families",
          name: "Religion & the Nature of Families",
          subTopics: [
            { id: "subtopic-nature-of-families", name: "The Nature of Families" },
            { id: "subtopic-purpose-of-families", name: "The Purpose of Families" },
            { id: "subtopic-contemporary-family-issues", name: "Contemporary Family Issues" },
          ],
        },
        {
          id: "topic-religion-and-roles-of-men-and-women",
          name: "Religion & the Roles of Men & Women",
          subTopics: [
            { id: "subtopic-roles-of-men-and-women", name: "The Roles of Men & Women" },
          ],
        },
      ],
    },

    {
      id: "unit-religion-and-life",
      name: "Religion & Life",
      topics: [
        {
          id: "topic-origins-of-the-universe",
          name: "Origins of the Universe",
          subTopics: [
            { id: "subtopic-big-bang", name: "What is the Big Bang?" },
            { id: "subtopic-evolution", name: "The Theory of Evolution" },
            { id: "subtopic-religious-teachings-origins-of-life", name: "Religious Teachings About the Origins of Life" },
            { id: "subtopic-different-interpretations-origins", name: "Different Interpretations Regarding the Origins of Life" },
          ],
        },
        {
          id: "topic-value-of-the-world",
          name: "Value of the World",
          subTopics: [
            { id: "subtopic-duty-to-protect-planet", name: "Religious Teachings & the Duty to Protect the Planet" },
            { id: "subtopic-environmental-issues", name: "Environmental Issues & Religious Teachings" },
          ],
        },
        {
          id: "topic-use-and-abuse-of-animals",
          name: "The Use & Abuse of Animals",
          subTopics: [
            { id: "subtopic-teachings-related-to-animals", name: "Religious Teachings Related to Animals" },
          ],
        },
        {
          id: "topic-sanctity-and-quality-of-life",
          name: "Sanctity & Quality of Life",
          subTopics: [
            { id: "subtopic-sanctity-and-quality-of-life", name: "Sanctity & Quality of Life" },
            { id: "subtopic-abortion", name: "Religion & Abortion" },
            { id: "subtopic-euthanasia", name: "Religion & Euthanasia" },
          ],
        },
        {
          id: "topic-death-and-afterlife",
          name: "Death & the Afterlife",
          subTopics: [
            { id: "subtopic-death-and-afterlife", name: "Death & the Afterlife" },
          ],
        },
      ],
    },

    {
      id: "unit-existence-of-god-and-revelation",
      name: "The Existence of God & Revelation",
      topics: [
        {
          id: "topic-arguments-for-existence-of-god",
          name: "Arguments for the Existence of God",
          subTopics: [
            { id: "subtopic-design-argument", name: "The Design Argument" },
            { id: "subtopic-first-cause-argument", name: "The First Cause Argument" },
            { id: "subtopic-argument-from-miracles", name: "The Argument from Miracles" },
          ],
        },
        {
          id: "topic-arguments-against-existence-of-god",
          name: "Arguments Against the Existence of God",
          subTopics: [
            { id: "subtopic-arguments-against-existence-of-god-detail", name: "Arguments Against the Existence of God" },
          ],
        },
        {
          id: "topic-nature-of-the-divine",
          name: "The Nature of the Divine",
          subTopics: [
            { id: "subtopic-nature-of-the-divine-detail", name: "The Nature of the Divine" },
            { id: "subtopic-different-ideas-about-divine", name: "Different Ideas About the Divine" },
          ],
        },
        {
          id: "topic-revelation-and-enlightenment",
          name: "Revelation & Enlightenment",
          subTopics: [
            { id: "subtopic-special-revelation-and-enlightenment", name: "Special Revelation & Enlightenment" },
            { id: "subtopic-general-revelation", name: "General Revelation" },
            { id: "subtopic-value-of-revelation-and-enlightenment", name: "The Value of Revelation & Enlightenment" },
            { id: "subtopic-value-of-revelation", name: "The Value of Revelation" },
          ],
        },
      ],
    },

    {
      id: "unit-peace-and-conflict",
      name: "Peace & Conflict",
      topics: [
        {
          id: "topic-peace-and-justice",
          name: "Peace & Justice",
          subTopics: [
            { id: "subtopic-religion-peace-and-justice", name: "Religion, Peace & Justice" },
          ],
        },
        {
          id: "topic-forgiveness-and-reconciliation",
          name: "Forgiveness & Reconciliation",
          subTopics: [
            { id: "subtopic-forgiveness-and-reconciliation", name: "Forgiveness & Reconciliation" },
          ],
        },
        {
          id: "topic-religion-and-violence",
          name: "Religion & Violence",
          subTopics: [
            { id: "subtopic-religion-and-violence", name: "Religion & Violence" },
          ],
        },
        {
          id: "topic-attitudes-to-terrorism",
          name: "Religion & Attitudes to Terrorism",
          subTopics: [
            { id: "subtopic-terrorism", name: "Terrorism" },
            { id: "subtopic-religion-and-terrorism", name: "Religion and Terrorism" },
          ],
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
            { id: "subtopic-religion-cause-of-war-and-violence", name: "Religion as a Cause of War & Violence" },
          ],
        },
        {
          id: "topic-religion-and-peace",
          name: "Religion & Peace",
          subTopics: [
            { id: "subtopic-pacifism", name: "What is Pacifism?" },
            { id: "subtopic-peacemaking", name: "Religion & Peacemaking" },
            { id: "subtopic-helping-victims-of-war", name: "Helping Victims of War" },
          ],
        },
      ],
    },

    {
      id: "unit-crime-and-punishment",
      name: "Crime & Punishment",
      topics: [
        {
          id: "topic-religion-and-crime",
          name: "Religion & Crime",
          subTopics: [
            { id: "subtopic-crime-and-punishment", name: "Crime & Punishment" },
            { id: "subtopic-reasons-for-crime", name: "Reasons for Crime" },
            { id: "subtopic-lawbreakers-and-types-of-crime", name: "Attitudes to Lawbreakers & Types of Crime" },
          ],
        },
        {
          id: "topic-religion-and-punishment",
          name: "Religion & Punishment",
          subTopics: [
            { id: "subtopic-aims-of-punishment", name: "Aims of Punishment" },
          ],
        },
        {
          id: "topic-religion-and-suffering",
          name: "Religion & Suffering",
          subTopics: [
            { id: "subtopic-attitudes-to-suffering", name: "Religious Attitudes to Suffering and Causing Suffering to Others" },
          ],
        },
        {
          id: "topic-treatment-of-criminals",
          name: "Religion & the Treatment of Criminals",
          subTopics: [
            { id: "subtopic-treatment-of-criminals", name: "Religious Attitudes to the Treatment of Criminals" },
            { id: "subtopic-attitudes-to-forgiveness", name: "Religious Attitudes to Forgiveness" },
          ],
        },
        {
          id: "topic-death-penalty",
          name: "Religion & the Death Penalty",
          subTopics: [
            { id: "subtopic-attitudes-to-death-penalty", name: "Religious Attitudes Towards the Death Penalty" },
          ],
        },
      ],
    },

    {
      id: "unit-human-rights-and-social-justice",
      name: "Human Rights & Social Justice",
      topics: [
        {
          id: "topic-human-rights-and-social-justice",
          name: "Human Rights & Social Justice",
          subTopics: [
            { id: "subtopic-human-rights-and-social-justice-detail", name: "Human Rights & Social Justice" },
          ],
        },
        {
          id: "topic-prejudice-and-discrimination",
          name: "Prejudice & Discrimination",
          subTopics: [
            { id: "subtopic-sexuality-and-disability", name: "Prejudice & Discrimination: Sexuality & Disability" },
            { id: "subtopic-race", name: "Prejudice & Discrimination: Race" },
          ],
        },
        {
          id: "topic-religious-freedom",
          name: "Religious Freedom",
          subTopics: [
            { id: "subtopic-freedom-of-religion", name: "Freedom of Religion" },
            { id: "subtopic-status-of-women", name: "The Status of Women in Religion" },
          ],
        },
        {
          id: "topic-wealth-and-poverty",
          name: "Wealth & Poverty",
          subTopics: [
            { id: "subtopic-attitudes-towards-wealth", name: "Religious Attitudes Towards Wealth" },
            { id: "subtopic-exploitation-of-poor", name: "Exploitation of the Poor" },
            { id: "subtopic-poverty-and-charity", name: "Poverty & Charity" },
          ],
        },
      ],
    },

    {
      id: "unit-st-marks-gospel-life-of-jesus",
      name: "St Mark's Gospel: The Life of Jesus",
      topics: [
        {
          id: "topic-early-ministry",
          name: "The Early Ministry of Jesus",
          subTopics: [
            { id: "subtopic-titles-of-jesus", name: "St Mark's Gospel & the Titles of Jesus" },
            { id: "subtopic-johns-preparation", name: "John's Preparation for Jesus' Ministry" },
            { id: "subtopic-jesus-baptism-preparation", name: "Jesus' Baptism & Preparation" },
            { id: "subtopic-paralysed-man", name: "The Paralysed Man" },
            { id: "subtopic-jairus-daughter", name: "Jairus' Daughter" },
            { id: "subtopic-rejection-at-nazareth", name: "The Rejection at Nazareth" },
            { id: "subtopic-feeding-five-thousand", name: "The Feeding of the Five Thousand" },
          ],
        },
        {
          id: "topic-later-ministry",
          name: "The Later Ministry of Jesus",
          subTopics: [
            { id: "subtopic-caesarea-philippi", name: "The Conversation at Caesarea Philippi" },
            { id: "subtopic-transfiguration", name: "The Transfiguration of Jesus" },
            { id: "subtopic-passion-prediction", name: "Jesus' Passion Prediction" },
            { id: "subtopic-request-james-and-john", name: "The Request of James & John" },
            { id: "subtopic-bartimaeus", name: "Bartimaeus" },
            { id: "subtopic-entry-into-jerusalem", name: "The Entry into Jerusalem" },
          ],
        },
        {
          id: "topic-final-days-in-jerusalem",
          name: "The Final Days in Jerusalem",
          subTopics: [
            { id: "subtopic-last-supper", name: "The Last Supper" },
            { id: "subtopic-gethsemane", name: "Jesus in Gethsemane" },
            { id: "subtopic-trial", name: "The Trial before the Jewish Authorities & Pilate" },
            { id: "subtopic-crucifixion-burial", name: "The Crucifixion & Burial of Jesus" },
            { id: "subtopic-empty-tomb", name: "The Empty Tomb" },
          ],
        },
      ],
    },

    {
      id: "unit-st-marks-gospel-truths",
      name: "St Mark's Gospel as a Source of Religious, Moral & Spiritual Truths",
      topics: [
        {
          id: "topic-kingdom-of-god",
          name: "The Kingdom of God",
          subTopics: [
            { id: "subtopic-parable-sower", name: "Parable of the Sower" },
            { id: "subtopic-parable-growing-seed", name: "Parable of the Growing Seed" },
            { id: "subtopic-parable-mustard-seed", name: "Parable of the Mustard Seed" },
            { id: "subtopic-jesus-and-children", name: "Jesus & the Children" },
            { id: "subtopic-rich-man", name: "The Rich Man" },
            { id: "subtopic-most-important-commandments", name: "The Most Important Commandments" },
          ],
        },
        {
          id: "topic-relationships-with-the-marginalised",
          name: "Jesus' Relationships with People Disregarded by Society",
          subTopics: [
            { id: "subtopic-man-with-leprosy", name: "The Man with Leprosy" },
            { id: "subtopic-call-of-levi", name: "The Call of Levi" },
            { id: "subtopic-greek-womans-daughter", name: "The Greek Woman's Daughter" },
            { id: "subtopic-boy-with-epilepsy", name: "The Boy with Epilepsy" },
            { id: "subtopic-widow-at-treasury", name: "The Widow at the Treasury" },
            { id: "subtopic-anointing-at-bethany", name: "The Anointing at Bethany" },
          ],
        },
        {
          id: "topic-faith-and-discipleship",
          name: "Faith & Discipleship",
          subTopics: [
            { id: "subtopic-call-first-disciples", name: "The Call of the First Disciples" },
            { id: "subtopic-woman-haemorrhage", name: "The Woman with the Haemorrhage" },
            { id: "subtopic-mission-of-twelve", name: "The Mission of Twelve" },
            { id: "subtopic-cost-reward-discipleship", name: "The Cost & Reward of Discipleship" },
            { id: "subtopic-peters-denials", name: "Peter's Denials" },
            { id: "subtopic-commission-ascension", name: "The Commission & Ascension" },
          ],
        },
      ],
    },
  ],

  papers: [
    {
      id: "paper-1",
      name: "Paper 1 (Study of religions)",
      assessedNodeIds: [
        "unit-christianity",
        "unit-islam",
        "unit-buddhism",
        "unit-judaism",
        "unit-hinduism",
        "unit-sikhism",
        "unit-catholic-christianity",
        "unit-st-marks-gospel-life-of-jesus",
        "unit-st-marks-gospel-truths"
      ],
    },
    {
      id: "paper-2",
      name: "Paper 2 (Thematic studies)",
      assessedNodeIds: [
        "unit-relationships-and-families",
        "unit-religion-and-life",
        "unit-existence-of-god-and-revelation",
        "unit-peace-and-conflict",
        "unit-crime-and-punishment",
        "unit-human-rights-and-social-justice"
      ],
    },
  ],
};
