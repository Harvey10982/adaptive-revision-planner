import React, { useMemo, useState } from "react";
import { View, Text, Button, Pressable, ScrollView, SafeAreaView } from "react-native";

import { buildSpecKey } from "../core/buildSpecKey";
import { specificationRegistry } from "../core/specRegistry";
import { examBoards } from "../types/examBoards";

import { listGcseSubjectsAqa, type SubjectMenuItem } from "../catalogs/AQA/aqaSubjectIndex.gcse";
import { listALevelSubjectsAqa } from "../catalogs/AQA/aqaSubjectIndex.post16";

import type {
  BoardChoice,
  CourseOptionSelection,
  QualificationChoice,
  SelectedCourse,
  TierChoice,
} from "../types/courseSelection";

interface Props {
  onComplete: (courses: SelectedCourse[]) => void;
}

const SUBJECT_SLUG_OVERRIDES: Record<string, string> = {
  mathematics: "maths",
  "art-and-design": "art",
};

function normalizeSubjectSlug(slug: string): string {
  return SUBJECT_SLUG_OVERRIDES[slug] ?? slug;
}

function slugifyLabel(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function slugFromSubject(subject: SubjectMenuItem): string {
  const slug = slugifyLabel(subject.name);
  if (!slug) {
    throw new Error("Invalid subject.name in catalog");
  }
  return slug;
}

function chipStyle(isActive: boolean) {
  return {
    borderWidth: 1,
    borderColor: isActive ? "#1d4ed8" : "#cbd5e1",
    backgroundColor: isActive ? "#dbeafe" : "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
  } as const;
}

function formatSelectedCourseLabel(course: SelectedCourse): string {
  const parts = [
    course.qualification.toUpperCase(),
    course.board.toUpperCase(),
    course.subjectName,
  ];
  if (course.tier) {
    parts.push(course.tier);
  }
  return parts.join(" • ");
}

type OptionState = Record<string, string[]>;
type PathwayOption = { slug: string; label: string };

function derivePathwayOptions(subject: SubjectMenuItem): PathwayOption[] {
  if (!subject.specs || subject.specs.length <= 1) {
    return [];
  }

  return subject.specs.map((variant) => {
    const match = variant.title.match(/\(([^)]+)\)/);
    const label = match?.[1]?.trim() || variant.title.trim() || variant.code;
    return {
      slug: slugifyLabel(label),
      label,
    };
  });
}

export default function SetupFlow({ onComplete }: Props) {
  const [qualification, setQualification] = useState<QualificationChoice>("gcse");
  const [board, setBoard] = useState<BoardChoice>("aqa");

  const [subjectId, setSubjectId] = useState<string | null>(null);
  const [tier, setTier] = useState<TierChoice | null>(null);
  const [pathway, setPathway] = useState<string | null>(null);

  const [optionSelections, setOptionSelections] = useState<OptionState>({});
  const [selectedCourses, setSelectedCourses] = useState<SelectedCourse[]>([]);

  const subjects = useMemo(() => {
    if (board !== "aqa") {
      return [] as readonly SubjectMenuItem[];
    }
    return qualification === "gcse"
      ? listGcseSubjectsAqa()
      : listALevelSubjectsAqa();
  }, [board, qualification]);

  const selectedSubject = useMemo(
    () => subjects.find((subject) => subject.id === subjectId) ?? null,
    [subjects, subjectId]
  );

  const requiredOptionGroups =
    selectedSubject?.optionGroups?.filter((group) => group.required) ?? [];

  const requiresTier = selectedSubject?.tiering.kind === "TIERED";

  const subjectSlug = selectedSubject
    ? normalizeSubjectSlug(slugFromSubject(selectedSubject))
    : null;

  const pathwayOptions =
    selectedSubject && !requiresTier
      ? derivePathwayOptions(selectedSubject)
      : [];

  const requiresPathway = pathwayOptions.length > 1;

  const currentSpecKey = useMemo(() => {
    if (!selectedSubject || !subjectSlug) {
      return null;
    }

    const selectedTier = requiresTier ? tier : null;
    const selectedPathway = requiresPathway ? pathway : null;

    if (requiresTier && !selectedTier) return null;
    if (requiresPathway && !selectedPathway) return null;

    return buildSpecKey(
      qualification,
      board,
      subjectSlug,
      selectedTier,
      selectedPathway
    );
  }, [
    selectedSubject,
    subjectSlug,
    qualification,
    board,
    requiresTier,
    tier,
    requiresPathway,
    pathway,
  ]);

  const isSupportedSpec =
    !!currentSpecKey && !!specificationRegistry[currentSpecKey];

  const hasRequiredOptions = requiredOptionGroups.every((group) => {
    const selected = optionSelections[group.id] ?? [];
    return selected.length > 0;
  });

  const canAddCourse =
    !!selectedSubject && !!currentSpecKey && hasRequiredOptions;

  const handleQualificationChange = (value: QualificationChoice) => {
    setQualification(value);
    setSubjectId(null);
    setTier(null);
    setPathway(null);
    setOptionSelections({});
  };

  const handleBoardChange = (value: BoardChoice) => {
    setBoard(value);
    setSubjectId(null);
    setTier(null);
    setPathway(null);
    setOptionSelections({});
  };

  const handleSubjectChange = (value: string) => {
    setSubjectId(value);
    setTier(null);
    setPathway(null);
    setOptionSelections({});
  };

  const toggleOption = (groupId: string, optionId: string, multiSelect: boolean) => {
    setOptionSelections((prev) => {
      const existing = prev[groupId] ?? [];
      if (multiSelect) {
        const next = existing.includes(optionId)
          ? existing.filter((id) => id !== optionId)
          : [...existing, optionId];
        return { ...prev, [groupId]: next };
      }
      return { ...prev, [groupId]: [optionId] };
    });
  };

  const handleAddCourse = () => {
    if (!selectedSubject || !currentSpecKey || !canAddCourse) return;

    const course: SelectedCourse = {
      id: `${currentSpecKey}::${JSON.stringify(optionSelections)}`,
      specKey: currentSpecKey,
      qualification,
      board,
      subjectId: selectedSubject.id,
      subjectName: selectedSubject.name,
      tier: requiresTier ? tier : null,
      optionSelections: [],
    };

    setSelectedCourses((previous) => {
      if (previous.some((item) => item.id === course.id)) {
        return previous;
      }
      return [...previous, course];
    });
  };

  const removeCourse = (courseId: string) => {
    setSelectedCourses((previous) =>
      previous.filter((course) => course.id !== courseId)
    );
  };

  const handleComplete = () => {
    onComplete(selectedCourses);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 24,
          paddingBottom: 36,
          gap: 16,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "600" }}>
          Choose your study setup
        </Text>

        {/* Qualification */}
        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 16 }}>Qualification</Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            {(["gcse", "alevel"] as QualificationChoice[]).map((value) => (
              <Pressable
                key={value}
                onPress={() => handleQualificationChange(value)}
                style={chipStyle(qualification === value)}
              >
                <Text>{value === "gcse" ? "GCSE" : "A-Level"}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Exam Board */}
        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 16 }}>Exam board</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {examBoards
              .filter((b) => b.qualifications.includes(qualification))
              .map((boardOption) => (
                <Pressable
                  key={boardOption.id}
                  onPress={() =>
                    handleBoardChange(boardOption.id as BoardChoice)
                  }
                  style={chipStyle(board === boardOption.id)}
                >
                  <Text>{boardOption.name}</Text>
                </Pressable>
              ))}
          </View>
        </View>

        {/* Subject */}
        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 16 }}>Subject</Text>
          {subjects.length === 0 ? (
            <Text style={{ color: "#6b7280" }}>
              No subjects available for this board yet.
            </Text>
          ) : (
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {subjects.map((subject) => (
                <Pressable
                  key={subject.id}
                  onPress={() => handleSubjectChange(subject.id)}
                  style={chipStyle(subjectId === subject.id)}
                >
                  <Text>{subject.name}</Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>

        {/* Add Button */}
        <View style={{ gap: 8 }}>
          <Button
            title="Add selected course"
            onPress={handleAddCourse}
            disabled={!canAddCourse}
          />
          <Text>Selected courses: {selectedCourses.length}</Text>
        </View>

        {/* Selected Courses */}
        <View style={{ gap: 8 }}>
          {selectedCourses.map((course) => (
            <View
              key={course.id}
              style={{
                borderWidth: 1,
                borderColor: "#e2e8f0",
                borderRadius: 10,
                padding: 12,
              }}
            >
              <Text style={{ fontWeight: "600", marginBottom: 4 }}>
                {formatSelectedCourseLabel(course)}
              </Text>

              <Button
                title="Remove"
                onPress={() => removeCourse(course.id)}
              />
            </View>
          ))}
        </View>

        {/* Continue */}
        <View style={{ gap: 8, paddingTop: 12 }}>
          <Button
            title="Continue"
            onPress={handleComplete}
            disabled={selectedCourses.length === 0}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
