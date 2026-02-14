/* eslint-disable @typescript-eslint/consistent-type-assertions */
/**
 * GCSE AQA Psychology (8182) — curriculum structure only.
 *
 * Notes:
 * - This file intentionally contains NO selection/catalog metadata.
 * - If you want a Higher file for consistency, duplicate this file as `higher.ts`.
 */

export const specification: SubjectSpecification = {
  units: [
    {
      id: "unit-cognition-and-behaviour",
      name: "Cognition and behaviour",
      topics: [
        {
          id: "topic-memory",
          name: "Memory",
          subTopics: [],
        },
        {
          id: "topic-perception",
          name: "Perception",
          subTopics: [],
        },
        {
          id: "topic-development",
          name: "Development",
          subTopics: [],
        },
        {
          id: "topic-research-methods",
          name: "Research methods",
          subTopics: [
            { id: "subtopic-testable-hypotheses", name: "Testable hypotheses (null vs alternative)" },
            { id: "subtopic-variables", name: "Variables (independent, dependent, extraneous)" },
            { id: "subtopic-sampling-methods", name: "Sampling methods (random, opportunity, systematic, stratified) and evaluation" },
            { id: "subtopic-research-methods-overview", name: "Research methods (experiments; interviews; questionnaires; case studies; observations) and evaluation" },
            { id: "subtopic-correlation", name: "Correlation (association; scatter diagrams; strengths and weaknesses)" },
            { id: "subtopic-standardised-procedures", name: "Research procedures (standardisation, randomisation, counterbalancing, control of extraneous variables)" },
            { id: "subtopic-planning-reliability-validity", name: "Planning research with reliability and validity in mind" },
            { id: "subtopic-ethics", name: "Ethical considerations (BPS-style issues and how to deal with them)" },
            { id: "subtopic-data-quant-vs-qual", name: "Data handling: quantitative vs qualitative data" },
            { id: "subtopic-data-primary-vs-secondary", name: "Data handling: primary vs secondary data" },
            { id: "subtopic-computation-basics", name: "Computation basics (standard form; ratios; fractions; percentages; significant figures; arithmetic means)" },
            { id: "subtopic-descriptive-statistics", name: "Descriptive statistics (mean, median, mode, range)" },
            { id: "subtopic-data-presentation", name: "Presenting/interpreting data (frequency tables/diagrams; bar charts; histograms; scatter diagrams)" },
            { id: "subtopic-normal-distributions", name: "Normal distributions (key characteristics)" },
          ],
        },
      ],
    },
    {
      id: "unit-social-context-and-behaviour",
      name: "Social context and behaviour",
      topics: [
        {
          id: "topic-social-influence",
          name: "Social influence",
          subTopics: [
            { id: "subtopic-conformity", name: "Conformity (social and dispositional factors; Asch’s study)" },
            { id: "subtopic-obedience", name: "Obedience (Agency theory; authority/culture/proximity; authoritarian personality; Milgram)" },
            { id: "subtopic-prosocial-bystander", name: "Prosocial behaviour (bystander behaviour; social/dispositional factors; Piliavin’s subway study)" },
            { id: "subtopic-crowd-collective-behaviour", name: "Crowd and collective behaviour (social loafing, deindividuation, culture; dispositional factors)" },
          ],
        },
        {
          id: "topic-language-thought-and-communication",
          name: "Language, thought and communication",
          subTopics: [
            { id: "subtopic-language-thought-relationship", name: "Language and thought (Piaget: language depends on thought; Sapir-Whorf: thought depends on language)" },
            { id: "subtopic-human-vs-animal-communication", name: "Human vs animal communication (functions; Von Frisch’s bee study; properties of human communication)" },
            { id: "subtopic-non-verbal-communication", name: "Non-verbal communication (eye contact; body language; personal space and differences)" },
            { id: "subtopic-explanations-non-verbal", name: "Explanations of non-verbal behaviour (Darwin; innate evidence; learned evidence incl Yuki emoticons)" },
          ],
        },
        {
          id: "topic-brain-and-neuropsychology",
          name: "Brain and neuropsychology",
          subTopics: [
            { id: "subtopic-nervous-system", name: "Nervous system (central vs peripheral; autonomic; fight-or-flight; James–Lange)" },
            { id: "subtopic-neurons-and-synapses", name: "Neurons and synaptic transmission (neuron types; neurotransmitters; excitation/inhibition; Hebb)" },
            { id: "subtopic-brain-structures", name: "Brain structures (lobes, cerebellum) and basic functions; localisation of function" },
            { id: "subtopic-penfield", name: "Penfield’s study of the interpretive cortex" },
            { id: "subtopic-scanning-techniques", name: "Scanning techniques (CT, PET, fMRI) and what they show" },
            { id: "subtopic-tulving-gold-memory", name: "Tulving’s ‘gold’ memory study" },
            { id: "subtopic-neurological-damage", name: "Neurological damage (eg stroke/injury) and effects on abilities/behaviour" },
          ],
        },
        {
          id: "topic-psychological-problems",
          name: "Psychological problems",
          subTopics: [
            { id: "subtopic-mental-health-introduction", name: "Mental health (incidence over time; characteristics; cultural variation; stigma; modern living)" },
            { id: "subtopic-effects-on-individuals-society", name: "Effects of significant mental health problems on individuals and society" },
            { id: "subtopic-clinical-depression", name: "Clinical depression (unipolar vs bipolar vs sadness; ICD-style diagnosis features)" },
            { id: "subtopic-depression-theories", name: "Theories of depression (biological: neurotransmitters; psychological: schemas/attributions)" },
            { id: "subtopic-depression-interventions", name: "Interventions for depression (antidepressants; CBT; Wiles’ CBT effectiveness study)" },
            { id: "subtopic-addiction", name: "Addiction (dependence vs misuse; ICD-style diagnosis features)" },
            { id: "subtopic-addiction-theories", name: "Theories of addiction (biological: genetic vulnerability; psychological: peer influence; Kaij twin study example)" },
            { id: "subtopic-addiction-interventions", name: "Interventions for addiction (aversion therapy; self-management programmes; 12-step groups)" },
          ],
        },
      ],
    },
  ],
  papers: [
    {
      id: "paper-1",
      name: "Paper 1 (Cognition and behaviour)",
      assessedNodeIds: ["unit-cognition-and-behaviour"],
    },
    {
      id: "paper-2",
      name: "Paper 2 (Social context and behaviour)",
      assessedNodeIds: ["unit-social-context-and-behaviour"],
    },
  ],
};
