export type Result<T> =
  | { ok: true; data: T }
  | { ok: false; statusCode: number; message: string };
