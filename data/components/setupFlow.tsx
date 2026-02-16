import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import { buildSpecKey } from "../core/buildSpecKey";
import { specificationRegistry } from "../core/specRegistry";
import { examBoards } from "../types/examBoards";

import {
  listGcseSubjectsAqa,
  type SubjectMenuItem,
} from "../catalogs/AQA/aqaSubjectIndex.gcse";
import { listALevelSubjectsAqa } from "../catalogs/AQA/aqaSubjectIndex.post16";

import type {
  BoardChoice,
  QualificationChoice,
  SelectedCourse,
  TierChoice,
} from "../types/courseSelection";

interface Props {
  onComplete: (courses: SelectedCourse[]) => void;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
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
    course.specTitle,
  ];

  if (course.tier) parts.push(course.tier);

  return parts.join(" • ");
}

type OptionState = Record<string, string[]>;

export default function SetupFlow({ onComplete }: Props) {
  const [qualification, setQualification] =
    useState<QualificationChoice>("gcse");
  const [board, setBoard] = useState<BoardChoice>("aqa");

  const [subjectId, setSubjectId] = useState<string | null>(null);
  const [tier, setTier] = useState<TierChoice | null>(null);
  const [selectedSpecCode, setSelectedSpecCode] =
    useState<string | null>(null);

  const [optionSelections, setOptionSelections] =
    useState<OptionState>({});

  const [selectedCourses, setSelectedCourses] =
    useState<SelectedCourse[]>([]);

  const subjects = useMemo(() => {
    if (board !== "aqa") return [];
    return qualification === "gcse"
      ? listGcseSubjectsAqa()
      : listALevelSubjectsAqa();
  }, [board, qualification]);

  const selectedSubject = useMemo(
    () => subjects.find((s) => s.id === subjectId) ?? null,
    [subjects, subjectId]
  );

  const requiresTier =
    selectedSubject?.tiering.kind === "TIERED";

  const hasMultipleSpecs =
    !!selectedSubject && selectedSubject.specs.length > 1;

  const requiredOptionGroups =
    selectedSubject?.optionGroups?.filter((g) => g.required) ?? [];

  const subjectSlug = selectedSubject
    ? slugify(selectedSubject.name)
    : null;

  const currentSpecKey = useMemo(() => {
    if (!selectedSubject || !subjectSlug) return null;

    if (requiresTier && !tier) return null;
    if (hasMultipleSpecs && !selectedSpecCode) return null;

    const pathwaySlug =
    hasMultipleSpecs && selectedSpecCode
      ? (() => {
          const spec = selectedSubject.specs.find(
            (s) => s.code === selectedSpecCode
          );
          if (!spec) return null;

          const match = spec.title.match(/\(([^)]+)\)/);
          const label =
            match?.[1]?.trim() ?? spec.title.trim();

          return slugify(label);
        })()
      : null;


    return buildSpecKey(
      qualification,
      board,
      subjectSlug,
      requiresTier ? tier : null,
      pathwaySlug
    );
  }, [
    selectedSubject,
    subjectSlug,
    qualification,
    board,
    requiresTier,
    tier,
    hasMultipleSpecs,
    selectedSpecCode,
  ]);

  const isSupportedSpec =
    !!currentSpecKey &&
    !!specificationRegistry[currentSpecKey];

  const hasRequiredOptions = requiredOptionGroups.every(
    (group) => {
      const selected = optionSelections[group.id] ?? [];
      return selected.length > 0;
    }
  );

  const canAddCourse =
    !!selectedSubject &&
    !!currentSpecKey &&
    hasRequiredOptions &&
    isSupportedSpec;

  const toggleOption = (
    groupId: string,
    optionId: string,
    multiSelect: boolean
  ) => {
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
    if (!selectedSubject || !currentSpecKey) return;

    const selectedSpec =
      selectedSubject.specs.find(
        (s) =>
          !hasMultipleSpecs || s.code === selectedSpecCode
      ) ?? selectedSubject.specs[0];

    const course: SelectedCourse = {
      id: `${currentSpecKey}::${JSON.stringify(
        optionSelections
      )}`,
      specKey: currentSpecKey,
      qualification,
      board,
      subjectId: selectedSubject.id,
      subjectName: selectedSubject.name,
      specTitle: selectedSpec.title,
      tier: requiresTier ? tier : null,
      optionSelections: [],
    };

    setSelectedCourses((prev) => {
      if (prev.some((c) => c.id === course.id)) return prev;
      return [...prev, course];
    });
  };

  const removeCourse = (courseId: string) => {
    setSelectedCourses((prev) =>
      prev.filter((c) => c.id !== courseId)
    );
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
            {(["gcse", "alevel"] as QualificationChoice[]).map(
              (value) => (
                <Pressable
                  key={value}
                  onPress={() => setQualification(value)}
                  style={chipStyle(qualification === value)}
                >
                  <Text>
                    {value === "gcse"
                      ? "GCSE"
                      : "A-Level"}
                  </Text>
                </Pressable>
              )
            )}
          </View>
        </View>

        {/* Exam Board */}
        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 16 }}>Exam board</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {examBoards
              .filter((b) =>
                b.qualifications.includes(qualification)
              )
              .map((boardOption) => (
                <Pressable
                  key={boardOption.id}
                  onPress={() =>
                    setBoard(boardOption.id as BoardChoice)
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
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {subjects.map((subject) => (
              <Pressable
                key={subject.id}
                onPress={() => {
                  setSubjectId(subject.id);
                  setTier(null);
                  setSelectedSpecCode(null);
                  setOptionSelections({});
                }}
                style={chipStyle(subjectId === subject.id)}
              >
                <Text>{subject.name}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Tier */}
        {selectedSubject && requiresTier && (
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 16 }}>Tier</Text>
            <View style={{ flexDirection: "row", gap: 8 }}>
              {(["foundation", "higher"] as TierChoice[]).map(
                (value) => (
                  <Pressable
                    key={value}
                    onPress={() => setTier(value)}
                    style={chipStyle(tier === value)}
                  >
                    <Text>{value}</Text>
                  </Pressable>
                )
              )}
            </View>
          </View>
        )}

        {/* Multi-spec selection (Art, RS, etc.) */}
        {selectedSubject && hasMultipleSpecs && (
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 16 }}>
              Specification
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {selectedSubject.specs.map((spec) => (
                <Pressable
                  key={spec.code}
                  onPress={() =>
                    setSelectedSpecCode(spec.code)
                  }
                  style={chipStyle(
                    selectedSpecCode === spec.code
                  )}
                >
                  <Text>{spec.title}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        )}

        {/* Option Groups */}
        {selectedSubject?.optionGroups?.map((group) => (
          <View key={group.id} style={{ gap: 8 }}>
            <Text style={{ fontSize: 16 }}>
              {group.label}
              {group.required ? " *" : ""}
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {group.options.map((option) => {
                const selectedIds =
                  optionSelections[group.id] ?? [];
                const active =
                  selectedIds.includes(option.id);
                return (
                  <Pressable
                    key={option.id}
                    onPress={() =>
                      toggleOption(
                        group.id,
                        option.id,
                        group.multiSelect
                      )
                    }
                    style={chipStyle(active)}
                  >
                    <Text>{option.label}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        ))}

        {/* Add Button */}
        <Pressable
          disabled={!canAddCourse}
          style={({ pressed }) => [
            styles.primaryButton,
            canAddCourse
              ? styles.activeBlue
              : styles.inactiveGrey,
            pressed && canAddCourse && styles.bluePressed,
          ]}
          onPress={handleAddCourse}
        >
          <Text style={styles.buttonText}>
            Add selected course
          </Text>
        </Pressable>

        {/* Selected Courses */}
        {selectedCourses.map((course) => (
          <View key={course.id} style={styles.card}>
            <Text
              style={{
                fontWeight: "600",
                marginBottom: 4,
              }}
            >
              {formatSelectedCourseLabel(course)}
            </Text>
            <Pressable
              style={({ pressed }) => [
                styles.dangerButton,
                pressed && styles.dangerPressed,
              ]}
              onPress={() =>
                removeCourse(course.id)
              }
            >
              <Text style={styles.buttonText}>
                Remove
              </Text>
            </Pressable>
          </View>
        ))}

        {/* Continue */}
        <Pressable
          disabled={selectedCourses.length === 0}
          style={({ pressed }) => [
            styles.primaryButton,
            selectedCourses.length > 0
              ? styles.activeBlue
              : styles.inactiveGrey,
            pressed &&
              selectedCourses.length > 0 &&
              styles.bluePressed,
          ]}
          onPress={() =>
            onComplete(selectedCourses)
          }
        >
          <Text style={styles.buttonText}>
            Continue
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  activeBlue: { backgroundColor: "#3B82F6" },
  inactiveGrey: { backgroundColor: "#d1d5db" },
  bluePressed: { backgroundColor: "#2563EB" },
  dangerButton: {
    backgroundColor: "#EF4444",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  dangerPressed: { backgroundColor: "#DC2626" },
  buttonText: { color: "#ffffff", fontWeight: "600" },
  card: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 10,
    padding: 12,
    marginTop: 8,
  },
});
