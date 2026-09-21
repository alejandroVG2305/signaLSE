import { ReactNode } from "react";
import i18n from "../../i18n";
import FistIcon from "../svg/FistIcon";
import WordsIcon from "../svg/WordsIcon";
import { DictionaryIcon } from "../svg/DictionaryIcon";
import { PuzzleIcon } from "../svg/PuzzleIcon";
import { TrainingIcon } from "../svg/TrainingIcon";
import { QuestionIcon } from "../svg/QuestionIcon";
import { PencilIcon } from "../svg/PencilIcon";
import { CardsIcon } from "../svg/CardsIcon";

export interface Feature {
  link: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export interface ChallengeFeature extends Feature {
  questionType?: string;
}

export const HOME_FEATURES: Array<Feature> = [
  {
    link: "/challenges",
    title: i18n.t("challenges"),
    subtitle: i18n.t("challengesSubtitle"),
    icon: <PuzzleIcon size={32} />,
  },
  {
    link: "/dictionary",
    title: i18n.t("dictionary"),
    subtitle: i18n.t("dictionarySubtitle"),
    icon: <DictionaryIcon size={32} />,
  },
  {
    link: "/training",
    title: i18n.t("aiTraining"),
    subtitle: i18n.t("aiTrainingSubtitle"),
    icon: <TrainingIcon size={32} />,
  },
];

export const TRAINING_FEATURES: Array<Feature> = [
  {
    link: "/trainingSession",
    title: i18n.t("letters"),
    subtitle: i18n.t("lettersSubtitle"),
    icon: <FistIcon size={32} />,
  },
];

export const CHALLENGE_FEATURES: Array<ChallengeFeature> = [
  {
    link: "/challengeSession",
    title: i18n.t("challengeTitles.randomChallenge"),
    subtitle: i18n.t("challengeSubtitles.randomChallenge"),
    icon: <QuestionIcon size={32} />,
  },
  {
    link: "/challengeSession",
    title: i18n.t("challengeTitles.signChoice"),
    subtitle: i18n.t("challengeSubtitles.signChoice"),
    icon: <WordsIcon size={32} />,
    questionType: "SIGN_CHOICE",
  },
  {
    link: "/challengeSession",
    title: i18n.t("challengeTitles.termChoice"),
    subtitle: i18n.t("challengeSubtitles.termChoice"),
    icon: <PencilIcon size={32} />,
    questionType: "WORD_CHOICE",
  },
  {
    link: "/challengeSession",
    title: i18n.t("challengeTitles.signTermMatch"),
    subtitle: i18n.t("challengeSubtitles.signTermMatch"),
    icon: <CardsIcon size={32} />,
    questionType: "MATCH_CHOICE",
  },
];
