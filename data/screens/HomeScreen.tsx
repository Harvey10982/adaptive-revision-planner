import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";

import { getSubjectColour } from "../core/subjectColours";
import type { RevisionSession } from "../types/revisionSession";

const SCREEN_HEIGHT = Dimensions.get("window").height;

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function timeUntil(startIso: string) {
  const now = new Date().getTime();
  const start = new Date(startIso).getTime();
  const diff = Math.round((start - now) / 60000);

  if (diff <= 0) return "Now";
  if (diff < 60) return `Starts in ${diff} min`;
  const hours = Math.floor(diff / 60);
  return `Starts in ${hours}h ${diff % 60}m`;
}

function StaticDots({ level }: { level: number }) {
  return (
    <View style={styles.dotRow}>
      {Array.from({ length: 5 }).map((_, i) => (
        <View
          key={i}
          style={[
            styles.dot,
            i < level ? styles.dotActive : styles.dotInactive,
          ]}
        />
      ))}
    </View>
  );
}

function SelectableDots({
  level,
  onSelect,
}: {
  level: number;
  onSelect: (val: number) => void;
}) {
  return (
    <View style={styles.dotRow}>
      {Array.from({ length: 5 }).map((_, i) => (
        <TouchableOpacity key={i} onPress={() => onSelect(i + 1)}>
          <View
            style={[
              styles.dot,
              i < level ? styles.dotActive : styles.dotInactive,
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default function HomeScreen() {
  const [sessions, setSessions] = useState<RevisionSession[]>([]);
  const [currentConfidence] = useState(2);
  const [newConfidence, setNewConfidence] = useState<number | null>(null);
  const [sheetVisible, setSheetVisible] = useState(false);

  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  useEffect(() => {
    const now = new Date();

    const start1 = new Date(now.getTime() + 60 * 60000);
    const end1 = new Date(start1.getTime() + 60 * 60000);

    const start2 = new Date(now.getTime() + 3 * 60 * 60000);
    const end2 = new Date(start2.getTime() + 60 * 60000);

    setSessions([
      {
        id: "1",
        courseId: "test",
        subjectSlug: "mathematics",
        unitId: "Number",
        topicId: "Fractions",
        subtopicId: "Multiplying Fractions",
        scheduledStart: start1.toISOString(),
        scheduledEnd: end1.toISOString(),
        durationMinutes: 60,
        status: "PLANNED",
      },
      {
        id: "2",
        courseId: "test",
        subjectSlug: "chemistry",
        unitId: "Bonding",
        topicId: "Ionic Bonding",
        scheduledStart: start2.toISOString(),
        scheduledEnd: end2.toISOString(),
        durationMinutes: 60,
        status: "PLANNED",
      },
    ]);
  }, []);

  const plannedToday = sessions
    .filter((s) => s.status === "PLANNED")
    .sort(
      (a, b) =>
        new Date(a.scheduledStart).getTime() -
        new Date(b.scheduledStart).getTime()
    );

  const primarySession = plannedToday[0];
  const secondarySessions = plannedToday.slice(1);

  function openSheet() {
    setSheetVisible(true);
    setNewConfidence(null);

    Animated.timing(slideAnim, {
      toValue: SCREEN_HEIGHT - 320,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  function closeSheet() {
    Animated.timing(slideAnim, {
      toValue: SCREEN_HEIGHT,
      duration: 250,
      useNativeDriver: false,
    }).start(() => setSheetVisible(false));
  }

  function confirmCompletion() {
    if (!primarySession || newConfidence === null) return;

    setSessions((prev) =>
      prev.map((s) =>
        s.id === primarySession.id
          ? {
              ...s,
              status: "COMPLETED",
              completedAt: new Date().toISOString(),
            }
          : s
      )
    );

    closeSheet();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.greeting}>
          {getGreeting()}, Harvey
        </Text>

        {primarySession && (
          <View style={styles.card}>
            <View
              style={[
                styles.topBand,
                {
                  backgroundColor: getSubjectColour(
                    primarySession.subjectSlug
                  ),
                },
              ]}
            />

            <View style={styles.cardContent}>
              <Text style={styles.subjectLabel}>
                {primarySession.subjectSlug.toUpperCase()}
              </Text>

              <Text style={styles.headline}>
                {primarySession.subtopicId ??
                  primarySession.topicId ??
                  primarySession.unitId}
              </Text>

              <Text style={styles.meta}>
                Unit: {primarySession.unitId}
              </Text>

              {primarySession.topicId && (
                <Text style={styles.meta}>
                  Topic: {primarySession.topicId}
                </Text>
              )}

              <View style={{ marginTop: 20 }}>
                <Text style={styles.timePrimary}>
                  {timeUntil(primarySession.scheduledStart)}
                </Text>
                <Text style={styles.timeSecondary}>
                  {formatTime(primarySession.scheduledStart)} –{" "}
                  {formatTime(primarySession.scheduledEnd)}
                </Text>
              </View>

              <View style={{ marginTop: 24 }}>
                <Text style={styles.confidenceLabel}>
                  Current Confidence
                </Text>
                <StaticDots level={currentConfidence} />
              </View>

              <TouchableOpacity
                style={styles.completeButton}
                onPress={openSheet}
              >
                <Text style={styles.completeButtonText}>
                  Mark Complete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Later Today */}
        {secondarySessions.length > 0 && (
          <View style={{ marginTop: 32 }}>
            <Text style={styles.sectionTitle}>
              Later Today
            </Text>

            {secondarySessions.map((session) => (
              <View key={session.id} style={styles.compactCard}>
                <View
                  style={[
                    styles.compactColour,
                    {
                      backgroundColor:
                        getSubjectColour(session.subjectSlug),
                    },
                  ]}
                />
                <View>
                  <Text style={styles.compactHeadline}>
                    {session.subtopicId ??
                      session.topicId ??
                      session.unitId}
                  </Text>
                  <Text style={styles.compactMeta}>
                    {session.subjectSlug} ·{" "}
                    {formatTime(session.scheduledStart)}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Overlay */}
      {sheetVisible && (
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={closeSheet}
        />
      )}

      {/* Bottom Sheet */}
      <Animated.View
        style={[
          styles.bottomSheet,
          { top: slideAnim },
        ]}
      >
        <Text style={styles.sheetTitle}>
          How confident do you feel now?
        </Text>

        <SelectableDots
          level={newConfidence ?? 0}
          onSelect={setNewConfidence}
        />

        <View style={styles.sheetButtons}>
          <TouchableOpacity
            onPress={closeSheet}
            style={styles.cancelButton}
          >
            <Text style={styles.cancelText}>
              Cancel
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={newConfidence === null}
            onPress={confirmCompletion}
            style={[
              styles.confirmButton,
              newConfidence === null && { opacity: 0.4 },
            ]}
          >
            <Text style={styles.confirmText}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },

  greeting: {
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 24,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },

  topBand: { height: 20 },

  cardContent: { padding: 28 },

  subjectLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#64748b",
  },

  headline: {
    fontSize: 26,
    fontWeight: "800",
    marginTop: 8,
  },

  meta: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
  },

  timePrimary: {
    fontSize: 16,
    fontWeight: "700",
  },

  timeSecondary: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
  },

  confidenceLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },

  dotRow: {
    flexDirection: "row",
    gap: 10,
  },

  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },

  dotActive: { backgroundColor: "#2563eb" },
  dotInactive: { backgroundColor: "#e5e7eb" },

  completeButton: {
    marginTop: 24,
    backgroundColor: "#111827",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  completeButtonText: {
    color: "#ffffff",
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },

  compactCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 14,
  },

  compactColour: {
    width: 6,
    height: 36,
    borderRadius: 3,
  },

  compactHeadline: {
    fontWeight: "600",
  },

  compactMeta: {
    fontSize: 12,
    color: "#64748b",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 320,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },

  sheetTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
  },

  sheetButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },

  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },

  cancelText: {
    color: "#64748b",
    fontWeight: "600",
  },

  confirmButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
  },

  confirmText: {
    color: "#ffffff",
    fontWeight: "700",
  },
});
