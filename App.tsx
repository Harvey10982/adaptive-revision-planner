import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SetupFlow from "./data/components/setupFlow";
import SpecViewer from "./data/components/specViewer";
import type { SelectedCourse } from "./data/types/courseSelection";

const STORAGE_KEY = "ACTIVE_COURSE_SELECTIONS";

function isSelectedCourse(value: unknown): value is SelectedCourse {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<SelectedCourse>;
  return (
    typeof candidate.id === "string" &&
    typeof candidate.specKey === "string" &&
    typeof candidate.qualification === "string" &&
    typeof candidate.board === "string" &&
    typeof candidate.subjectId === "string" &&
    typeof candidate.subjectName === "string" &&
    Array.isArray(candidate.optionSelections)
  );
}

function migrateSpecKey(specKey: string): SelectedCourse {
  return {
    id: specKey,
    specKey,
    qualification: specKey.startsWith("gcse/") ? "gcse" : "alevel",
    board: "aqa",
    subjectId: specKey.split("/")[2] ?? specKey,
    subjectName: specKey.split("/")[2] ?? specKey,
    tier: (specKey.split("/")[3] as "foundation" | "higher" | undefined) ?? null,
    optionSelections: [],
  };
}

export default function App() {
  const [selectedCourses, setSelectedCourses] = useState<SelectedCourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSelections = async () => {
      let loaded: SelectedCourse[] = [];

      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved) as unknown;
          if (Array.isArray(parsed)) {
            loaded = parsed.filter(isSelectedCourse);
          }
        } catch {
          // Ignore parse errors and continue trying legacy keys.
        }
      }

      if (loaded.length === 0) {
        const legacyList = await AsyncStorage.getItem("ACTIVE_SPEC_KEYS");
        if (legacyList) {
          try {
            const parsedLegacy = JSON.parse(legacyList) as unknown;
            if (Array.isArray(parsedLegacy)) {
              loaded = parsedLegacy
                .filter((item): item is string => typeof item === "string")
                .map(migrateSpecKey);
            }
          } catch {
            // Ignore.
          }
        }
      }

      if (loaded.length === 0) {
        const legacySingle = await AsyncStorage.getItem("ACTIVE_SPEC_KEY");
        if (legacySingle) {
          loaded = [migrateSpecKey(legacySingle)];
        }
      }

      if (loaded.length > 0) {
        setSelectedCourses(loaded);
      }

      setLoading(false);
    };

    loadSelections();
  }, []);

  const handleCoursesSelected = async (courses: SelectedCourse[]) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
    setSelectedCourses(courses);
  };

  const handleReset = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    await AsyncStorage.removeItem("ACTIVE_SPEC_KEYS");
    await AsyncStorage.removeItem("ACTIVE_SPEC_KEY");
    setSelectedCourses([]);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (selectedCourses.length === 0) {
    return <SetupFlow onComplete={handleCoursesSelected} />;
  }

  return <SpecViewer courses={selectedCourses} onReset={handleReset} />;
}
