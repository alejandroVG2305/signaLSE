import { useEffect, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import useLoading from "../hooks/useLoading";
import useModal from "../hooks/useModal";
import i18n from "../i18n";
import {
  MatchTermItem,
  MatchVideoItem,
} from "../components/challenge-questions/match-choice-question/MatchChoiceQuestion";
import { challengeService } from "../model/services/challenge.service";
import {
  ChallengeEvaluationResult,
  SanitizedMatchChoiceData,
  SanitizedQuestion,
} from "../model/domain/challenges/challenge-session";
import { StartChallengeSessionRequest } from "../model/challenge-session.model";
import {
  CHALLENGE_CATEGORIES,
  DEFAULT_DIFFICULTY,
  DEFAULT_QUESTION_COUNT,
  DEFAULT_TIME,
} from "../constants/challenge-configuration-params";

const RANDOM_CATEGORY_ID = "aleatorio";

/*
 * Maps textual category to backend category id
 */
const toBackendCategoryId = (id: string): string => {
  const cat = CHALLENGE_CATEGORIES.find((c) => c.id === id);
  return cat ? cat.label : id;
};

/*
 * Maps textual difficulty to questions per session
 */
const difficultyToOptions = (difficulty: string): number => {
  if (difficulty === i18n.t("difficulty.easy")) return 2;
  if (difficulty === i18n.t("difficulty.hard")) return 4;
  return 3;
};

export default function useChallengeSessionViewModel() {
  const { isLoading, withLoading } = useLoading();
  const router = useRouter();
  const modal = useModal();
  const params = useLocalSearchParams<{
    categories?: string;
    difficulty?: string;
    timePerQuestion?: string;
    questionCount?: string;
    questionType?: string;
    soundEffects?: string;
  }>();
  const [isToolbarVisible, setIsToolbarVisible] = useState(true);

  // General question fields
  const isSubmitting = useRef<boolean>(false);
  const [currentQuestion, setCurrentQuestion] =
    useState<SanitizedQuestion | null>(null);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [hits, setHits] = useState<number>(0);
  const [misses, setMisses] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);
  const [lastResult, setLastResult] =
    useState<ChallengeEvaluationResult | null>(null);
  const [timePerQuestion, setTimePerQuestion] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  // Individual question specific fields
  const [individualAnswerCorrect, setIndividualAnswerCorrect] = useState<
    boolean | null
  >(null);
  const [correctIndividualOptionId, setCorrectIndividualOptionId] = useState<
    string | null
  >(null);

  // Match Choice specific fields
  const [matchCorrectAnswer, setMatchCorrectAnswer] = useState<Record<
    string,
    string
  > | null>(null);
  const [matchTimeExpired, setMatchTimeExpired] = useState<boolean>(false);
  const [matchAnswerCorrect, setMatchAnswerCorrect] = useState<boolean | null>(
    null,
  );
  const [matchLeftItems, setMatchLeftItems] = useState<MatchTermItem[]>([]);
  const [matchRightItems, setMatchRightItems] = useState<MatchVideoItem[]>([]);
  const [matchSelectedId, setMatchSelectedId] = useState<string | null>(null);
  const [showMatchHelp, setShowMatchHelp] = useState<boolean>(false);

  // Calls the backend to start a new challenge session with the params from navigation
  const startSession = async () => {
    await withLoading(async () => {
      const categoriesList = params.categories
        ? decodeURIComponent(params.categories).split(",")
        : [RANDOM_CATEGORY_ID];
      const tpq = parseInt(
        decodeURIComponent(params.timePerQuestion ?? DEFAULT_TIME),
      );
      const categories = categoriesList.includes(RANDOM_CATEGORY_ID)
        ? undefined
        : categoriesList.map(toBackendCategoryId);
      const req: StartChallengeSessionRequest = {
        categories,
        questionType: params.questionType
          ? decodeURIComponent(params.questionType)
          : undefined,
        numberOfOptions: difficultyToOptions(
          decodeURIComponent(params.difficulty ?? DEFAULT_DIFFICULTY),
        ),
        timePerQuestion: tpq,
        totalQuestions: parseInt(
          decodeURIComponent(params.questionCount ?? DEFAULT_QUESTION_COUNT),
        ),
      };
      const result = await challengeService.startChallengeSession(req);
      if (!result.ok) {
        modal.showError(result.message);
        return;
      }
      setTimePerQuestion(tpq);
      setTimeRemaining(tpq);
      setCurrentQuestion(result.data.question);
      setTotalQuestions(result.data.totalQuestions);
    });
  };

  // Sends the user's answer to the backend, updates score/state and shows feedback before advancing
  const submitAnswer = async (
    answer: string | Record<string, string>,
    showFeedback = false,
  ) => {
    if (isSubmitting.current) return;
    isSubmitting.current = true;
    try {
      const result = await challengeService.evaluateChallengeAttempt({
        answer,
      });
      if (!result.ok) {
        modal.showError(result.message);
        return;
      }
      const evaluation = result.data;
      setLastResult(evaluation);
      setTotalPoints(evaluation.totalPoints);
      setHits(evaluation.hits);
      setMisses(evaluation.misses);

      if (showFeedback) {
        if (typeof evaluation.correctAnswer === "string") {
          setIndividualAnswerCorrect(evaluation.correct);
          setCorrectIndividualOptionId(evaluation.correctAnswer);
        } else {
          setMatchCorrectAnswer(evaluation.correctAnswer);
          setMatchTimeExpired(evaluation.timeExpired);
          setMatchAnswerCorrect(evaluation.correct);
        }
        await new Promise<void>((resolve) => setTimeout(resolve, 1500));
        setIndividualAnswerCorrect(null);
        setCorrectIndividualOptionId(null);
        setMatchCorrectAnswer(null);
        setMatchTimeExpired(false);
        setMatchAnswerCorrect(null);
      }

      setFinished(evaluation.finished);
      setSelectedOptionId(null);
      if (!evaluation.finished && evaluation.nextQuestion) {
        setTimeRemaining(timePerQuestion);
        setCurrentQuestion(evaluation.nextQuestion);
      }
    } finally {
      isSubmitting.current = false;
    }
  };

  // Selects an option and submits immediately for single-choice questions
  const handleIndividualOptionSelect = (id: string) => {
    if (isSubmitting.current) return;
    setSelectedOptionId(id);
    submitAnswer(id, true);
  };

  // Triggered by the "Check" button; submits the current match arrangement or selected option
  const onCheck = () => {
    if (!currentQuestion) return;
    if (currentQuestion.type === "MATCH_CHOICE") {
      submitAnswer(
        Object.fromEntries(
          matchLeftItems.map((item, i) => [matchRightItems[i].id, item.id]),
        ),
        true,
      );
    } else if (selectedOptionId) {
      submitAnswer(selectedOptionId);
    }
  };

  // Handles tap on a match-choice term: first tap selects it, second on same deselects, second on different swaps the two
  const handleMatchItemPress = (id: string) => {
    if (matchSelectedId === null) {
      setMatchSelectedId(id);
    } else if (matchSelectedId === id) {
      setMatchSelectedId(null);
    } else {
      setMatchLeftItems((prev) => {
        const next = [...prev];
        const a = next.findIndex((item) => item.id === matchSelectedId);
        const b = next.findIndex((item) => item.id === id);
        [next[a], next[b]] = [next[b], next[a]];
        return next;
      });
      setMatchSelectedId(null);
    }
  };

  const onScrollUpdate = (scrollY: number, toolbarHeight: number) => {
    setIsToolbarVisible(scrollY < toolbarHeight);
  };

  // Resets finished state and navigates back to the challenge configuration screen
  const returnToChallengeConfig = () => {
    setFinished(false);
    setTimeout(() => {
      router.replace("/(tabs)/challenges");
    }, 350);
  };

  // Countdown: decrements timeRemaining by 1 every second while the session is active
  useEffect(() => {
    if (timeRemaining <= 0 || finished) return;
    const id = setTimeout(() => setTimeRemaining((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeRemaining, finished]);

  // Auto-submit when the timer hits 0, sending whatever the user has selected (or nothing)
  useEffect(() => {
    if (
      timeRemaining !== 0 ||
      timePerQuestion === 0 ||
      !currentQuestion ||
      finished
    )
      return;
    if (isSubmitting.current) return;
    if (currentQuestion.type === "MATCH_CHOICE") {
      submitAnswer(
        Object.fromEntries(
          matchLeftItems.map((item, i) => [matchRightItems[i].id, item.id]),
        ),
        true,
      );
    } else {
      submitAnswer(selectedOptionId ?? "", true);
    }
  }, [timeRemaining]);

  // Initializes match-choice items when a new MATCH_CHOICE question is loaded
  useEffect(() => {
    if (!currentQuestion || currentQuestion.type !== "MATCH_CHOICE") return;
    const data = currentQuestion.content.data as SanitizedMatchChoiceData;
    setMatchLeftItems(
      data.options.textItems.map((t) => ({ id: t.id, term: t.text })),
    );
    setMatchRightItems(
      data.options.mediaItems.map((m) => ({ id: m.id, mediaUrl: m.mediaUrl })),
    );
    setMatchSelectedId(null);
  }, [currentQuestion]);
  // Starts the session once on mount
  useEffect(() => {
    startSession().catch((err) => {
      modal.showError(err?.message ?? String(err));
    });
  }, []);

  const soundEffects = params.soundEffects !== "false";

  return {
    isLoading,
    modal,
    currentQuestion,
    totalQuestions,
    questionNumber: Math.min(hits + misses + 1, totalQuestions),
    totalPoints,
    hits,
    misses,
    finished,
    lastResult,
    timeRemaining,
    timePerQuestion,
    selectedOptionId,
    individualAnswerCorrect,
    correctIndividualOptionId,
    matchCorrectAnswer,
    matchTimeExpired,
    matchAnswerCorrect,
    onOptionSelect: setSelectedOptionId,
    handleIndividualOptionSelect,
    onCheck,
    returnToChallengeConfig,
    matchLeftItems,
    matchRightItems,
    matchSelectedId,
    handleMatchItemPress,
    isToolbarVisible,
    onScrollUpdate,
    soundEffects,
    showMatchHelp,
    setShowMatchHelp,
  };
}
