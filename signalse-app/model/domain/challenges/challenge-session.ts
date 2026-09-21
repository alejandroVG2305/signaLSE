export interface SanitizedTermOption {
  id: string;
  text: string;
}

export interface SanitizedSignOption {
  id: string;
  mediaUrl: string;
}

export interface SanitizedMatchChoiceData {
  options: {
    mediaItems: SanitizedSignOption[];
    textItems: SanitizedTermOption[];
  };
}

export interface SanitizedIndivChoiceData {
  options: SanitizedTermOption[] | SanitizedSignOption[];
}

export interface SanitizedQuestion {
  questionId: string;
  type: string;
  content: {
    question: string;
    mediaUrl?: string;
    data: SanitizedMatchChoiceData | SanitizedIndivChoiceData;
  };
}

export interface ChallengeSessionData {
  question: SanitizedQuestion;
  totalQuestions: number;
}

export interface ChallengeEvaluationResult {
  correct: boolean;
  pointsEarned: number;
  totalPoints: number;
  correctAnswer: string | Record<string, string>;
  timeExpired: boolean;
  finished: boolean;
  hits: number;
  misses: number;
  nextQuestion?: SanitizedQuestion;
}
