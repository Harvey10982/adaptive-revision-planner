import React from "react";
import { SafeAreaView, ScrollView, Text, View, Button } from "react-native";
import { resolveSpecification } from "../core/specResolver";
import type { SelectedCourse } from "../types/courseSelection";

interface Props {
  courses: SelectedCourse[];
  onReset: () => void;
}

function CourseSection({ course }: { course: SelectedCourse }) {
  const specification = resolveSpecification(course.specKey);

  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>{course.subjectName}</Text>
      <Text style={{ marginBottom: 8 }}>
        {course.qualification.toUpperCase()} • {course.board.toUpperCase()}
        {course.tier ? ` • ${course.tier}` : ""}
      </Text>

      {course.optionSelections.map((selection) => (
        <Text key={`${course.id}-${selection.groupId}`} style={{ marginBottom: 4 }}>
          {selection.groupLabel}: {selection.selectedOptionLabels.join(", ")}
        </Text>
      ))}

      {specification ? (
        <>
          {specification.units?.map((unit, unitIndex) => (
            <View key={`${course.id}-unit-${unitIndex}`} style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{unit.name}</Text>

              {unit.topics?.map((topic, topicIndex) => (
                <View key={`${course.id}-topic-${unitIndex}-${topicIndex}`} style={{ marginLeft: 12 }}>
                  <Text>{topic.name}</Text>

                  {topic.subTopics?.map((sub, subIndex) => (
                    <Text
                      key={`${course.id}-sub-${unitIndex}-${topicIndex}-${subIndex}`}
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
            <View key={`${course.id}-inner-${innerIndex}`} style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{inner.name}</Text>

              {inner.units.map((unit, unitIndex) => (
                <View key={`${course.id}-inner-unit-${innerIndex}-${unitIndex}`} style={{ marginLeft: 12 }}>
                  <Text style={{ fontWeight: "bold" }}>{unit.name}</Text>

                  {unit.topics?.map((topic, topicIndex) => (
                    <View
                      key={`${course.id}-inner-topic-${innerIndex}-${unitIndex}-${topicIndex}`}
                      style={{ marginLeft: 12 }}
                    >
                      <Text>{topic.name}</Text>

                      {topic.subTopics?.map((sub, subIndex) => (
                        <Text
                          key={`${course.id}-inner-sub-${innerIndex}-${unitIndex}-${topicIndex}-${subIndex}`}
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
        </>
      ) : (
        <Text style={{ color: "#92400e" }}>
          This course has not been connected to revision content yet.
        </Text>
      )}
    </View>
  );
}

export default function SpecViewer({ courses, onReset }: Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 8 }}>
        <Button title="Reset and choose courses" onPress={onReset} />
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}>
        <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 16 }}>
          Selected Courses ({courses.length})
        </Text>

        {courses.map((course) => (
          <CourseSection key={course.id} course={course} />
        ))}
      </ScrollView>

      <View style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 12 }}>
        <Button title="Reset and choose courses" onPress={onReset} />
      </View>
    </SafeAreaView>
  );
}
