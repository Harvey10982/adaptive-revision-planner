import AsyncStorage from "@react-native-async-storage/async-storage";
import type { RevisionSession } from "../types/revisionSession";

const STORAGE_KEY = "REVISION_SESSIONS_V1";

export async function loadRevisionSessions(): Promise<RevisionSession[]> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as RevisionSession[];
  } catch {
    return [];
  }
}

export async function saveRevisionSessions(
  sessions: RevisionSession[]
): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
}

export async function addRevisionSession(
  session: RevisionSession
): Promise<void> {
  const existing = await loadRevisionSessions();
  const updated = [...existing, session];
  await saveRevisionSessions(updated);
}

export async function removeRevisionSession(
  sessionId: string
): Promise<void> {
  const existing = await loadRevisionSessions();
  const updated = existing.filter((s) => s.id !== sessionId);
  await saveRevisionSessions(updated);
}

export async function updateRevisionSession(
  session: RevisionSession
): Promise<void> {
  const existing = await loadRevisionSessions();
  const updated = existing.map((s) =>
    s.id === session.id ? session : s
  );
  await saveRevisionSessions(updated);
}
