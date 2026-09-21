export function formatCompactNumber(value: number): string {
  if (value >= 1_000_000) {
    const formatted = value / 1_000_000;
    return `${parseFloat(formatted.toFixed(1))}M`;
  }
  if (value >= 1_000) {
    const formatted = value / 1_000;
    return `${parseFloat(formatted.toFixed(1))}k`;
  }
  return Math.round(value).toString();
}
