export interface ChallengeConfig {
  selectedCategories: Set<string>;
  difficulty: string;
  timePerQuestion: string;
  questionCount: string;
}

export type SerializedChallengeConfig = Omit<ChallengeConfig, "selectedCategories"> & {
  selectedCategories: string[];
};
