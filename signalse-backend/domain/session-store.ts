export interface SessionStore<T> {
  sessions: Map<string, T>;
  timeouts: Map<string, NodeJS.Timeout>;
}
