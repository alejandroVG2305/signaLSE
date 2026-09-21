import i18n from "../i18n";

export const formatDate = (date: Date | string): string => {
  const d = new Date(date);
  if (isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat(i18n.locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
};
