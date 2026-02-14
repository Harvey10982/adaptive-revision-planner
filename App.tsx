import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import type { Confidence } from "./types/planner";
import { generateInitialPlan } from "./engine/scheduler";

export default function App() {
  const testConfidence: Confidence = 3;

  console.log(
    "Scheduler loaded:",
    typeof generateInitialPlan === "function"
  );

  return (
    <View style={styles.container}>
      <Text>Planner setup confirmed (confidence = {testConfidence})</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
