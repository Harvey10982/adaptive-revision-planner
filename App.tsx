import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SetupFlow from "./data/components/setupFlow";
import SpecViewer from "./data/components/specViewer";

import type { SelectedCourse } from "./data/types/courseSelection";

const STORAGE_KEY = "ACTIVE_COURSES";

export default function App() {
  const [activeCourses, setActiveCourses] = useState<SelectedCourse[] | null>(null);
  const [loading, setLoading] = useState(true);

  // Load saved courses on startup
  useEffect(() => {
    const load = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed: SelectedCourse[] = JSON.parse(saved);
          setActiveCourses(parsed);
        } else {
          setActiveCourses([]);
        }
      } catch (err) {
        console.error("Failed to load saved courses:", err);
        setActiveCourses([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const handleSetupComplete = async (courses: SelectedCourse[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
      setActiveCourses(courses);
    } catch (err) {
      console.error("Failed to save courses:", err);
    }
  };

  const handleReset = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setActiveCourses([]);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  // If no courses selected → show setup flow
  if (!activeCourses || activeCourses.length === 0) {
    return <SetupFlow onComplete={handleSetupComplete} />;
  }

  // Otherwise → show revision viewer
  return (
    <SpecViewer
      courses={activeCourses}
      onReset={handleReset}
    />
  );
}
