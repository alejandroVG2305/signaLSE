import { useEffect, useState } from "react";
import { StatsItemData } from "../model/domain/users/userStats";
import { userService } from "../model/services/user.service";
import useLoading from "../hooks/useLoading";
import i18n from "../i18n";
import { formatCompactNumber } from "../utils/format-number";
import {
  DEFAULT_DIFFICULTY,
  DEFAULT_QUESTION_COUNT,
  DEFAULT_TIME,
} from "../constants/challenge-configuration-params";
import { CHALLENGE_FEATURES } from "../components/feature-menu/Features";
import { challengeService } from "../model/services/challenge.service";
import { ChallengeConfig } from "../model/domain/challenges/challenge-config";

export const useChallengesViewModel = () => {
  const [statItems, setStatItems] = useState<StatsItemData[]>([]);
  const RANDOM_CATEGORY_ID = "aleatorio";
  const [selectedCategories, setSelectedCategories] = useState<
    Set<string> | undefined
  >(new Set([RANDOM_CATEGORY_ID]));
  const { isLoading, withLoading } = useLoading();

  const [configOpen, setConfigOpen] = useState(false);
  const [difficulty, setDifficulty] = useState<string | undefined>(
    DEFAULT_DIFFICULTY,
  );
  const [timePerQuestion, setTimePerQuestion] = useState<string | undefined>(
    DEFAULT_TIME,
  );
  const [questionCount, setQuestionCount] = useState<string | undefined>(
    DEFAULT_QUESTION_COUNT,
  );
  const [soundsActive, setSoundsActive] = useState<boolean>(true);

  const toggleSoundsActive = () => setSoundsActive(!soundsActive);
  const toggleConfig = () => setConfigOpen((prev) => !prev);
  const saveConfig = () => {
    saveUserChallengeConfig();
    setConfigOpen(false);
  };

  const selectCategory = (id: string) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        if (next.size === 1) return next;
        next.delete(id);
        return next;
      }
      if (id === RANDOM_CATEGORY_ID) {
        return new Set([RANDOM_CATEGORY_ID]);
      }
      next.delete(RANDOM_CATEGORY_ID);
      next.add(id);
      return next;
    });

    saveUserChallengeConfig();
  };
  const isCategorySelected = (id: string): boolean =>
    selectedCategories!.has(id);

  const fetchStats = async () => {
    await withLoading(async () => {
      const statsResult = await userService.getAuthenticatedUserStats();
      if (statsResult.ok) {
        const stats = statsResult.data;
        setStatItems([
          {
            data: stats.challenges.totalCompleted.toString(),
            subtitle: i18n.t("completed"),
          },
          {
            data: formatCompactNumber(stats.xp.total),
            subtitle: i18n.t("xpEarned"),
          },
          {
            data: `${stats.challenges.hitsPercentage.toString()} %`,
            subtitle: i18n.t("accuracy"),
          },
        ]);
      }
    });
  };

  const fetchUserChallengeConfig = async () => {
    withLoading(async () => {
      const config = await challengeService.retrieveUserChallengeConfig();
      setDifficulty(config?.difficulty ?? DEFAULT_DIFFICULTY);
      setTimePerQuestion(config?.timePerQuestion ?? DEFAULT_TIME);
      setQuestionCount(config?.questionCount ?? DEFAULT_QUESTION_COUNT);
      setSelectedCategories(
        config?.selectedCategories ?? new Set([RANDOM_CATEGORY_ID]),
      );
      const result = await userService.getAuthenticatedUserInfo();
      if (result.ok) {
        setSoundsActive(result.data.preferences.soundEffects);
      }
    });
  };

  const saveUserChallengeConfig = async () => {
    const config: ChallengeConfig = {
      difficulty: difficulty!,
      timePerQuestion: timePerQuestion!,
      questionCount: questionCount!,
      selectedCategories: selectedCategories!,
    };
    await challengeService.saveUserChallengeConfig(config);
  };

  const challengeFeatures = CHALLENGE_FEATURES.map((feature) => {
    const cats = Array.from(selectedCategories ?? [RANDOM_CATEGORY_ID]).join(
      ",",
    );
    const baseParams = `categories=${encodeURIComponent(cats)}&difficulty=${encodeURIComponent(difficulty ?? DEFAULT_DIFFICULTY)}&timePerQuestion=${encodeURIComponent(timePerQuestion ?? DEFAULT_TIME)}&questionCount=${encodeURIComponent(questionCount ?? DEFAULT_QUESTION_COUNT)}&soundEffects=${soundsActive}`;
    const questionTypeParam = feature.questionType
      ? `&questionType=${encodeURIComponent(feature.questionType)}`
      : "";
    return {
      ...feature,
      link: `${feature.link}?${baseParams}${questionTypeParam}`,
    };
  });

  useEffect(() => {
    fetchStats();
    fetchUserChallengeConfig();
  }, []);

  return {
    statItems,
    isLoading,
    selectedCategories,
    selectCategory,
    isCategorySelected,
    configOpen,
    toggleConfig,
    saveConfig,
    difficulty,
    setDifficulty,
    timePerQuestion,
    setTimePerQuestion,
    questionCount,
    setQuestionCount,
    soundsActive,
    toggleSoundsActive,
    saveUserChallengeConfig,
    challengeFeatures,
  };
};
