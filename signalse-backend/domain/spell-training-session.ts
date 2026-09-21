export interface SpellTrainingSession {
  userId: string;
  words: SpellTrainingSign[];
  currentWordIndex: number;
  currentLetterIndex: number;
  points: number;
}

export interface SpellTrainingSign {
  signId: string;
  term: string;
}

export interface AttemptEvaluation {
  correct: boolean;
  currentWordIndex: number;
  currentLetterIndex: number;
  points: number;
  finished: boolean;
}
