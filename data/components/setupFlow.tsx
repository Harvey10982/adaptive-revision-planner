import React, { useMemo, useState } from "react";
import { View, Text, Button, Pressable, ScrollView } from "react-native";
import { buildSpecKey } from "../core/buildSpecKey";
import { specificationRegistry } from "../core/specRegistry";

interface Props {
  onComplete: (specKey: string) => void;
}

type Tier = "foundation" | "higher";

type SubjectOption = {
  subject: string;
  tiers: Tier[];
  baseKey: string;
};

function toLabel(subjectSlug: string): string {
  return subjectSlug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function buildSubjectOptions(): SubjectOption[] {
  const map = new Map<string, SubjectOption>();

  Object.keys(specificationRegistry)
    .filter((key) => key.startsWith("gcse/aqa/"))
    .forEach((key) => {
      const segments = key.split("/");
      const subject = segments[2];
      const maybeTier = segments[3];
      const subjectKey = `gcse/aqa/${subject}`;

      const existing = map.get(subject);
      const tiers: Tier[] = existing?.tiers ? [...existing.tiers] : [];

      if (maybeTier === "foundation" || maybeTier === "higher") {
        if (!tiers.includes(maybeTier)) {
          tiers.push(maybeTier);
        }
      }

      map.set(subject, {
        subject,
        tiers,
        baseKey: subjectKey,
      });
    });

  return [...map.values()].sort((a, b) => a.subject.localeCompare(b.subject));
}

const subjectOptions = buildSubjectOptions();

export default function SetupFlow({ onComplete }: Props) {
  const qualification = "gcse";
  const board = "aqa";

  const [subject, setSubject] = useState<string | null>(null);
  const [tier, setTier] = useState<Tier | null>(null);

  const selectedSubject = useMemo(
    () => subjectOptions.find((option) => option.subject === subject) ?? null,
    [subject]
  );

  const requiresTier = !!selectedSubject && selectedSubject.tiers.length > 0;
  const canContinue = !!selectedSubject && (!requiresTier || !!tier);

  const handleSelectSubject = (nextSubject: string) => {
    const nextOption = subjectOptions.find((option) => option.subject === nextSubject);

    setSubject(nextSubject);

    if (!nextOption || nextOption.tiers.length === 0) {
      setTier(null);
      return;
    }

    if (tier && nextOption.tiers.includes(tier)) {
      return;
    }

    setTier(nextOption.tiers[0]);
  };

  const handleContinue = () => {
    if (!selectedSubject) {
      return;
    }

    const specKey = buildSpecKey(qualification, board, selectedSubject.subject, tier);
    onComplete(specKey);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 24, gap: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Select your course</Text>

      <View>
        <Text style={{ marginBottom: 8, fontSize: 16 }}>Qualification: GCSE</Text>
        <Text style={{ marginBottom: 12, fontSize: 16 }}>Board: AQA</Text>
      </View>

      <View>
        <Text style={{ marginBottom: 8, fontSize: 16 }}>Subject</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          {subjectOptions.map((option) => {
            const isActive = option.subject === subject;
            return (
              <Pressable
                key={option.baseKey}
                onPress={() => handleSelectSubject(option.subject)}
                style={{
                  borderWidth: 1,
                  borderColor: isActive ? "#1d4ed8" : "#cbd5e1",
                  backgroundColor: isActive ? "#dbeafe" : "#ffffff",
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  borderRadius: 8,
                }}
              >
                <Text>{toLabel(option.subject)}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {requiresTier && (
        <View>
          <Text style={{ marginBottom: 8, fontSize: 16 }}>Tier</Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            {selectedSubject?.tiers.map((availableTier) => {
              const isActive = tier === availableTier;
              return (
                <Pressable
                  key={availableTier}
                  onPress={() => setTier(availableTier)}
                  style={{
                    borderWidth: 1,
                    borderColor: isActive ? "#1d4ed8" : "#cbd5e1",
                    backgroundColor: isActive ? "#dbeafe" : "#ffffff",
                    paddingVertical: 8,
                    paddingHorizontal: 12,
                    borderRadius: 8,
                  }}
                >
                  <Text>{availableTier}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      )}

      <View style={{ marginTop: 8 }}>
        <Text style={{ marginBottom: 12 }}>
          Current selection: {subject ? toLabel(subject) : "None"}
          {tier ? ` (${tier})` : ""}
        </Text>
        <Button title="Continue" onPress={handleContinue} disabled={!canContinue} />
      </View>
    </ScrollView>
  );
}
