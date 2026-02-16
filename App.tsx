import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SetupFlow from "./data/components/setupFlow";
import SpecViewer from "./data/components/specViewer";

const STORAGE_KEY = "ACTIVE_SPEC_KEY";

export default function App() {
  const [activeSpecKey, setActiveSpecKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSpecKey = async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) setActiveSpecKey(saved);
      setLoading(false);
    };
    loadSpecKey();
  }, []);

  const handleSpecSelected = async (specKey: string) => {
    await AsyncStorage.setItem(STORAGE_KEY, specKey);
    setActiveSpecKey(specKey);
  };

  const handleReset = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setActiveSpecKey(null);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!activeSpecKey) {
    return <SetupFlow onComplete={handleSpecSelected} />;
  }

  return <SpecViewer specKey={activeSpecKey} onReset={handleReset} />;
}
