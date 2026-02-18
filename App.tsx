import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SetupFlow from "./data/components/SetupFlow";
import HomeScreen from "./data/screens/HomeScreen";

import type { SelectedCourse } from "./data/types/courseSelection";

const STORAGE_KEY = "ACTIVE_COURSES";

// 🔧 DEV TOOL — set to true to wipe saved courses on next launch
const DEV_RESET = true;

export default function App() {
  const [activeCourses, setActiveCourses] = useState<SelectedCourse[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialise = async () => {
      try {
        // Optional development wipe
        if (DEV_RESET) {
          await AsyncStorage.removeItem(STORAGE_KEY);
        }

        const saved = await AsyncStorage.getItem(STORAGE_KEY);

        if (saved) {
          const parsed: SelectedCourse[] = JSON.parse(saved);
          setActiveCourses(parsed);
        } else {
          setActiveCourses([]);
        }
      } catch (err) {
        console.error("Failed to initialise app:", err);
        setActiveCourses([]);
      } finally {
        setLoading(false);
      }
    };

    initialise();
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
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setActiveCourses([]);
    } catch (err) {
      console.error("Failed to reset courses:", err);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  // No saved courses → show setup
  if (!activeCourses || activeCourses.length === 0) {
    return <SetupFlow onComplete={handleSetupComplete} />;
  }

  // Saved courses exist → show home
  return (
    <HomeScreen
      courses={activeCourses}
      onReset={handleReset}
    />
  );
}
