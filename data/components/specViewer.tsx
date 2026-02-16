import React from "react";
import { SafeAreaView, ScrollView, Text, View, Button } from "react-native";
import { resolveSpec } from "../core/specResolver";

interface Props {
  specKeys: string[];
  onReset: () => void;
}

function CourseSection({ specKey }: { specKey: string }) {
  const specification = resolveSpec(specKey);

  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={{ fontSize: 18, marginBottom: 12 }}>Spec Key: {specKey}</Text>

      {specification.units?.map((unit, unitIndex) => (
        <View key={`${specKey}-unit-${unitIndex}`} style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{unit.name}</Text>

          {unit.topics?.map((topic, topicIndex) => (
            <View key={`${specKey}-topic-${unitIndex}-${topicIndex}`} style={{ marginLeft: 12 }}>
              <Text>{topic.name}</Text>

              {topic.subTopics?.map((sub, subIndex) => (
                <Text
                  key={`${specKey}-sub-${unitIndex}-${topicIndex}-${subIndex}`}
                  style={{ marginLeft: 12 }}
                >
                  • {sub.name}
                </Text>
              ))}
            </View>
          ))}
        </View>
      ))}

      {specification.innerSubjects?.map((inner, innerIndex) => (
        <View key={`${specKey}-inner-${innerIndex}`} style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{inner.name}</Text>

          {inner.units.map((unit, unitIndex) => (
            <View key={`${specKey}-inner-unit-${innerIndex}-${unitIndex}`} style={{ marginLeft: 12 }}>
              <Text style={{ fontWeight: "bold" }}>{unit.name}</Text>

              {unit.topics?.map((topic, topicIndex) => (
                <View
                  key={`${specKey}-inner-topic-${innerIndex}-${unitIndex}-${topicIndex}`}
                  style={{ marginLeft: 12 }}
                >
                  <Text>{topic.name}</Text>

                  {topic.subTopics?.map((sub, subIndex) => (
                    <Text
                      key={`${specKey}-inner-sub-${innerIndex}-${unitIndex}-${topicIndex}-${subIndex}`}
                      style={{ marginLeft: 12 }}
                    >
                      • {sub.name}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

export default function SpecViewer({ specKeys, onReset }: Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 8 }}>
        <Button title="Reset and choose courses" onPress={onReset} />
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}>
        <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 16 }}>
          Selected Courses ({specKeys.length})
        </Text>

        {specKeys.map((specKey) => (
          <CourseSection key={specKey} specKey={specKey} />
        ))}
      </ScrollView>

      <View style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 12 }}>
        <Button title="Reset and choose courses" onPress={onReset} />
      </View>
    </SafeAreaView>
  );
}
