export const getNestedValue = <T>(
  obj: Record<string, any>,
  path: string,
): T => {
  return path.split(".").reduce((acc, key) => acc?.[key], obj) as T;
};
