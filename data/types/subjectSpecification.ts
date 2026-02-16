export interface SubTopic {
  id: string;
  name: string;
}

export interface Topic {
  id: string;
  name: string;
  subTopics?: SubTopic[];
}

export interface Unit {
  id: string;
  name: string;
  topics: Topic[];
}

export interface InnerSubject {
  id: string;
  name: string;
  units: Unit[];
}

export interface Paper {
  id: string;
  name: string;
  assessedNodeIds: string[];
}

export interface SubjectSpecification {
  units?: Unit[];
  innerSubjects?: InnerSubject[];
  papers?: Paper[];
}
