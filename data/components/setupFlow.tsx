import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
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

function slugFromSubject(subject: SubjectMenuItem): string {
  const parts = subject.id.split("__");
  return parts[parts.length - 1];
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
  const parts = [course.qualification.toUpperCase(), course.board.toUpperCase(), course.subjectName];
  if (course.tier) {
    parts.push(course.tier);
  }
  return parts.join(" • ");
}

export default function SetupFlow({ onComplete }: Props) {
  const [qualification, setQualification] = useState<QualificationChoice>("gcse");
  const [board, setBoard] = useState<BoardChoice>("aqa");

  const [subjectId, setSubjectId] = useState<string | null>(null);
  const [tier, setTier] = useState<TierChoice | null>(null);
  const [optionSelections, setOptionSelections] = useState<Record<string, string[]>>({});
  const [selectedCourses, setSelectedCourses] = useState<SelectedCourse[]>([]);

  const subjects = useMemo(() => {
    if (board !== "aqa") {
      return [] as readonly SubjectMenuItem[];
    }

    if (qualification === "gcse") {
      return listGcseSubjectsAqa();
    }

    return listALevelSubjectsAqa();
  }, [board, qualification]);

  const selectedSubject = useMemo(
    () => subjects.find((subject) => subject.id === subjectId) ?? null,
    [subjects, subjectId]
  );

  const requiredOptionGroups = selectedSubject?.optionGroups?.filter((group) => group.required) ?? [];
  const subjectSlug = selectedSubject ? slugFromSubject(selectedSubject) : null;
  const requiresTier = selectedSubject?.tiering.kind === "TIERED";

  const currentSpecKey = selectedSubject
    ? buildSpecKey(qualification, board, subjectSlug ?? "", requiresTier ? tier : null)
    : null;

  const isSupportedSpec = !!currentSpecKey && !!specificationRegistry[currentSpecKey];

  const hasRequiredOptions = requiredOptionGroups.every((group) => {
    const values = optionSelections[group.id] ?? [];
    return values.length > 0;
  });

  const canAddCourse = !!selectedSubject && (!requiresTier || !!tier) && hasRequiredOptions && isSupportedSpec;

  const handleQualificationChange = (value: QualificationChoice) => {
    setQualification(value);
    setSubjectId(null);
    setTier(null);
    setOptionSelections({});
  };

  const handleBoardChange = (value: BoardChoice) => {
    setBoard(value);
    setSubjectId(null);
    setTier(null);
    setOptionSelections({});
  };

  const handleSubjectSelect = (nextSubjectId: string) => {
    const next = subjects.find((subject) => subject.id === nextSubjectId);

    setSubjectId(nextSubjectId);
    setOptionSelections({});

    if (next?.tiering.kind === "TIERED") {
      const tiers = next.tiering.tiers;
      const fallbackTier = tiers.includes("FOUNDATION") ? "foundation" : "higher";
      setTier(fallbackTier);
      return;
    }

    setTier(null);
  };

  const toggleOption = (groupId: string, optionId: string, multiSelect: boolean) => {
    setOptionSelections((previous) => {
      const current = previous[groupId] ?? [];

      if (!multiSelect) {
        return { ...previous, [groupId]: [optionId] };
      }

      if (current.includes(optionId)) {
        return { ...previous, [groupId]: current.filter((value) => value !== optionId) };
      }

      return { ...previous, [groupId]: [...current, optionId] };
    });
  };

  const buildCourseOptionSelections = (): CourseOptionSelection[] => {
    if (!selectedSubject?.optionGroups) {
      return [];
    }

    return selectedSubject.optionGroups
      .map((group) => {
        const selectedIds = optionSelections[group.id] ?? [];
        const selectedLabels = group.options
          .filter((option) => selectedIds.includes(option.id))
          .map((option) => option.label);

        return {
          groupId: group.id,
          groupLabel: group.label,
          selectedOptionIds: selectedIds,
          selectedOptionLabels: selectedLabels,
        };
      })
      .filter((entry) => entry.selectedOptionIds.length > 0);
  };

  const handleAddCourse = () => {
    if (!selectedSubject || !currentSpecKey || !canAddCourse) {
      return;
    }

    const course: SelectedCourse = {
      id: `${currentSpecKey}::${JSON.stringify(optionSelections)}`,
      specKey: currentSpecKey,
      qualification,
      board,
      subjectId: selectedSubject.id,
      subjectName: selectedSubject.name,
      tier,
      optionSelections: buildCourseOptionSelections(),
    };

    setSelectedCourses((previous) => {
      if (previous.some((item) => item.id === course.id)) {
        return previous;
      }
      return [...previous, course];
    });
  };

  const removeCourse = (courseId: string) => {
    setSelectedCourses((previous) => previous.filter((course) => course.id !== courseId));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 24, paddingBottom: 36, gap: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>Choose your study setup</Text>

        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 16 }}>Qualification</Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            {(["gcse", "alevel"] as QualificationChoice[]).map((value) => (
              <Pressable key={value} style={chipStyle(qualification === value)} onPress={() => handleQualificationChange(value)}>
                <Text>{value === "gcse" ? "GCSE" : "A Level"}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 16 }}>Exam board</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {examBoards.map((item) => (
              <Pressable key={item.id} style={chipStyle(board === item.id)} onPress={() => handleBoardChange(item.id)}>
                <Text>{item.name}</Text>
              </Pressable>
            ))}
          </View>
          {board !== "aqa" && (
            <Text style={{ color: "#92400e" }}>
              {board.toUpperCase()} setup is shown for planning, but course content is not connected yet.
            </Text>
          )}
        </View>

        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 16 }}>Subject</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {subjects.map((subject) => (
              <Pressable
                key={subject.id}
                style={chipStyle(subject.id === subjectId)}
                onPress={() => handleSubjectSelect(subject.id)}
              >
                <Text>{subject.name}</Text>
              </Pressable>
            ))}
          </View>
          {subjects.length === 0 && <Text>No subjects available for this board yet.</Text>}
        </View>

        {requiresTier && (
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 16 }}>Tier</Text>
            <View style={{ flexDirection: "row", gap: 8 }}>
              {(["foundation", "higher"] as TierChoice[]).map((value) => (
                <Pressable key={value} style={chipStyle(tier === value)} onPress={() => setTier(value)}>
                  <Text>{value}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        )}

        {selectedSubject?.optionGroups?.map((group) => (
          <View key={group.id} style={{ gap: 8 }}>
            <Text style={{ fontSize: 16 }}>
              {group.label}
              {group.required ? " *" : ""}
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {group.options.map((option) => {
                const selected = (optionSelections[group.id] ?? []).includes(option.id);
                return (
                  <Pressable
                    key={option.id}
                    style={chipStyle(selected)}
                    onPress={() => toggleOption(group.id, option.id, group.multiSelect)}
                  >
                    <Text>{option.label}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        ))}

        {!isSupportedSpec && selectedSubject && (
          <Text style={{ color: "#991b1b" }}>
            This subject can be selected, but this spec is not wired into the revision viewer yet.
          </Text>
        )}

        <View style={{ gap: 8 }}>
          <Button title="Add selected course" onPress={handleAddCourse} disabled={!canAddCourse} />
          <Text>Selected courses: {selectedCourses.length}</Text>
        </View>

        <View style={{ gap: 8 }}>
          {selectedCourses.map((course) => (
            <View
              key={course.id}
              style={{ borderWidth: 1, borderColor: "#cbd5e1", borderRadius: 8, padding: 10, gap: 8 }}
            >
              <Text>{formatSelectedCourseLabel(course)}</Text>
              {course.optionSelections.map((selection) => (
                <Text key={selection.groupId}>
                  {selection.groupLabel}: {selection.selectedOptionLabels.join(", ")}
                </Text>
              ))}
              <Button title="Remove" onPress={() => removeCourse(course.id)} />
            </View>
          ))}
        </View>

        <Button title="Continue" onPress={() => onComplete(selectedCourses)} disabled={selectedCourses.length === 0} />
      </ScrollView>
    </SafeAreaView>
  );
}
