import { CameraType, useCameraPermissions } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Linking } from "react-native";
import { Word } from "../model/domain/training/Word";
import { trainingService } from "../model/services/training.service";
import { SignPredictionRequest } from "../model/signPrediction.model";
import useModal from "../hooks/useModal";
import useLoading from "../hooks/useLoading";
import i18n from "../i18n";
import { SignSpellingEvaluationRequest } from "../model/training.model";
import { SignSpellingEvaluationResult } from "../model/domain/training/SignSpellingEvaluationResult";
import { useLocalSearchParams, useRouter } from "expo-router";
import { userService } from "../model/services/user.service";

export default function useTrainingSessionViewModel() {
  const { signId } = useLocalSearchParams<{ signId?: string }>();
  const isFreeMode = !!signId;
  const router = useRouter();

  const [showClue, setShowClue] = useState<boolean>(true);
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>("front");

  // Word states
  const [wordsToSpell, setWordsToSpell] = useState<Array<Word>>();
  const [points, setPoints] = useState<number>(0);
  const [lastEarnedPoints, setLastEarnedPoints] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean>(false);
  const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);
  const [soundEffects, setSoundEffects] = useState<boolean>(true);
  const isEvaluating = useRef<boolean>(false);

  const { isLoading, withLoading } = useLoading();
  const modal = useModal();

  const handleRequestPermission = async () => {
    if (!permission?.canAskAgain) {
      await Linking.openSettings();
    } else {
      await requestPermission();
    }
  };

  const toggleShowClue = () => {
    setShowClue(!showClue);
  };

  const switchCamera = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const startTrainingSession = async () => {
    const result = isFreeMode
      ? await withLoading(() =>
          trainingService.startFreeSpellingSession({ signId: signId! }),
        )
      : await withLoading(() =>
          trainingService.startSpellingTrainingSesssion(),
        );
    if (!result.ok) {
      modal.setError(i18n.t("errors.couldNotLoadTerms"));
      return;
    }
    setWordsToSpell(result.data);
  };

  const getCurrentTerm = (): string => {
    return wordsToSpell?.[currentWordIndex]?.term ?? "";
  };

  const getCurrentLetter = (): string => {
    return getCurrentTerm().at(currentLetterIndex)?.toUpperCase() ?? "";
  };

  /**
   * Sends prediction request to Sign Prediction
   */
  const onPhotoTaken = async (photo: { uri: string; base64?: string }) => {
    if (!photo.base64 || isEvaluating.current) return;
    isEvaluating.current = true;
    try {
      const request: SignPredictionRequest = { imageBase64: photo.base64 };
      const predictionToken: string =
        await trainingService.predictSign(request);
      const evaluationRequest: SignSpellingEvaluationRequest = {
        predictionToken,
      };
      const evaluationResult = isFreeMode
        ? await trainingService.evaluateFreeSignSpelling(evaluationRequest)
        : await trainingService.evaluateSignSpelling(evaluationRequest);
      if (evaluationResult.ok) {
        updateSessionState(evaluationResult.data);
      }
    } catch (e) {
      console.debug(e);
    } finally {
      isEvaluating.current = false;
    }
  };

  const updateSessionState = (
    evaluationResult: SignSpellingEvaluationResult,
  ) => {
    setCurrentLetterIndex(evaluationResult.currentLetterIndex);
    setCurrentWordIndex(evaluationResult.currentWordIndex);
    const oldPoints = points;
    const currentPoints = evaluationResult.points;
    setPoints(currentPoints);
    setLastEarnedPoints(currentPoints - oldPoints);
    setCorrect(evaluationResult.correct);
    setFinished(evaluationResult.finished);
  };

  // Connect to WebSocket, disconnect when dismounting
  useEffect(() => {
    trainingService.connectWS();
    return () => trainingService.disconnectWS();
  }, []);

  useEffect(() => {
    startTrainingSession();
    userService.getAuthenticatedUserInfo().then((result) => {
      if (result.ok) setSoundEffects(result.data.preferences.soundEffects);
    });
  }, []);

  const backHref: any = isFreeMode
    ? `/sign-detail/${signId}`
    : "/(tabs)/training";

  const navigateBack = () => router.replace(backHref);

  const returnToBack = () => {
    setFinished(false);
    setTimeout(() => router.replace(backHref), 350);
  };

  return {
    isLoading,
    permission,
    facing,
    handleRequestPermission,
    toggleShowClue,
    showClue,
    switchCamera,
    wordsToSpell,
    currentWordIndex,
    currentLetterIndex,
    correct,
    points,
    lastEarnedPoints,
    finished,
    getCurrentTerm,
    getCurrentLetter,
    modal,
    onPhotoTaken,
    navigateBack,
    returnToBack,
    isFreeMode,
    soundEffects,
  };
}
