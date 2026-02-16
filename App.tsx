import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SetupFlow from "./data/components/setupFlow";
import SpecViewer from "./data/components/specViewer";

const STORAGE_KEY = "ACTIVE_SPEC_KEYS";

export default function App() {
  const [activeSpecKeys, setActiveSpecKeys] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSpecKeys = async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);

      if (saved) {
        try {
          const parsed = JSON.parse(saved) as unknown;
          if (Array.isArray(parsed)) {
            setActiveSpecKeys(parsed.filter((item): item is string => typeof item === "string"));
          }
        } catch {
          // Backward compatibility: if older single key was saved, keep using it.
          setActiveSpecKeys([saved]);
        }
      }

      setLoading(false);
    };

    loadSpecKeys();
  }, []);

  const handleSpecsSelected = async (specKeys: string[]) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(specKeys));
    setActiveSpecKeys(specKeys);
  };

  const handleReset = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    // Remove old key as well for users upgrading from previous versions.
    await AsyncStorage.removeItem("ACTIVE_SPEC_KEY");
    setActiveSpecKeys([]);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (activeSpecKeys.length === 0) {
    return <SetupFlow onComplete={handleSpecsSelected} />;
  }

  return <SpecViewer specKeys={activeSpecKeys} onReset={handleReset} />;
}
