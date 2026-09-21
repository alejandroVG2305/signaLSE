import { SessionStore } from "../domain/session-store";

export const getFromStore = <T>(
  userId: string,
  store: SessionStore<T>,
  errorMessage: string = "No active session",
): T => {
  const session = store.sessions.get(userId);
  if (!session) throw new Error(errorMessage);
  return session;
};

export const clearFromStore = <T>(
  userId: string,
  store: SessionStore<T>,
): void => {
  const timeout = store.timeouts.get(userId);
  if (timeout) clearTimeout(timeout);
  store.sessions.delete(userId);
  store.timeouts.delete(userId);
};
