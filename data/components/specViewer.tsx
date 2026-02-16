import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { resolveSpec } from "../core/specResolver";

interface Props {
  specKey: string;
  onReset: () => void;
}

export default function SpecViewer({ specKey, onReset }: Props) {
  const specification = resolveSpec(specKey);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 12, paddingBottom: 8 }}>
        <Button title="Reset and choose another course" onPress={onReset} />
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}>
        <Text style={{ fontSize: 18, marginBottom: 12 }}>
          Spec Key: {specKey}
        </Text>

        {/* Normal subjects (units root) */}
        {specification.units?.map((unit, unitIndex) => (
          <View key={unitIndex} style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {unit.name}
            </Text>

            {unit.topics?.map((topic, topicIndex) => (
              <View key={topicIndex} style={{ marginLeft: 12 }}>
                <Text>{topic.name}</Text>

                {topic.subTopics?.map((sub, subIndex) => (
                  <Text key={subIndex} style={{ marginLeft: 12 }}>
                    • {sub.name}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        ))}

        {/* Combined discipline subjects */}
        {specification.innerSubjects?.map((inner, innerIndex) => (
          <View key={innerIndex} style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {inner.name}
            </Text>

            {inner.units.map((unit, unitIndex) => (
              <View key={unitIndex} style={{ marginLeft: 12 }}>
                <Text style={{ fontWeight: "bold" }}>
                  {unit.name}
                </Text>

                {unit.topics?.map((topic, topicIndex) => (
                  <View key={topicIndex} style={{ marginLeft: 12 }}>
                    <Text>{topic.name}</Text>

                    {topic.subTopics?.map((sub, subIndex) => (
                      <Text key={subIndex} style={{ marginLeft: 12 }}>
                        • {sub.name}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
