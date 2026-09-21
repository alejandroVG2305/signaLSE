import { ImageSourcePropType } from "react-native";
import i18n from "../../../i18n";

export type SignsByLetter = Record<
  string,
  { accessible: SignPreview[]; locked: SignPreview[] }
>;

export interface SignPreview {
  signId: string;
  videoUrl: string;
  thumbnailUrl: string;
  term: string;
  category: string;
  complexity: string;
  minLevel: number;
  canUserAccess: boolean;
}

export interface SignDetails extends SignPreview {
  meaning: string;
  keySteps: Array<string>;
  supportsAITraining: boolean;
  createdAt?: Date;
}

export interface SignUIBadge {
  label: string;
  variant: "primary" | "secondary";
}

export interface SignUI {
  signId: string;
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  category: string;
  badges?: SignUIBadge[];
  canUserAccess: boolean;
}

export function toSignUI(s: SignPreview) {
  const levelBadge = {
    label: `${i18n.t("lv")} ${s.minLevel}`,
    variant: "secondary" as const,
  };
  return {
    signId: s.signId,
    videoUrl: s.videoUrl,
    thumbnailUrl: s.thumbnailUrl,
    title: s.term,
    category: s.category,
    badges: s.canUserAccess
      ? [{ label: s.complexity, variant: "primary" as const }, levelBadge]
      : [levelBadge],
    canUserAccess: s.canUserAccess,
  };
}

export function getSignUIBadges(s: SignDetails) {
  return [
    { label: s.category, variant: "primary" as const },
    {
      label: s.complexity,
      variant: "secondary" as const,
    },
    {
      label: `${i18n.t("lv")} ${s.minLevel}`,
      variant: "secondary" as const,
    },
  ];
}
