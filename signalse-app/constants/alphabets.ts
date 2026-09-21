import i18n from "../i18n";

const ALPHABETS: Record<string, string[]> = {
  es: "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split(""),
};

export function getCurrentAlphabet(): string[] {
  const currentLocale = i18n.locale.substring(0, 2);
  return ALPHABETS[currentLocale] || ALPHABETS["es"];
}
