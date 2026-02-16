import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { buildSpecKey } from "../core/buildSpecKey";

interface Props {
  onComplete: (specKey: string) => void;
}

export default function SetupFlow({ onComplete }: Props) {
  // Default selections (replace later with real UI controls)
  const [qualification] = useState<string>("gcse");
  const [board] = useState<string>("aqa");
  const [subject] = useState<string>("maths");
  const [tier] = useState<"foundation" | "higher" | null>("foundation");

  const handleContinue = () => {
    const specKey = buildSpecKey(
      qualification,
      board,
      subject,
      tier
    );

    onComplete(specKey);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
      }}
    >
      <Text style={{ fontSize: 18, marginBottom: 16 }}>
        Current Selection
      </Text>

      <Text>Qualification: {qualification.toUpperCase()}</Text>
      <Text>Board: {board.toUpperCase()}</Text>
      <Text>Subject: {subject}</Text>
      <Text>Tier: {tier ?? "N/A"}</Text>

      <View style={{ marginTop: 24 }}>
        <Button title="Continue" onPress={handleContinue} />
      </View>
    </View>
  );
}
