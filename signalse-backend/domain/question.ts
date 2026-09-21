export interface Question {
  questionId: string;
  signIds: string[];
  category: string;
  type: QuestionType;
  minLevel: number;
  content: QuestionContent;
}

interface QuestionContent {
  question: string;
  mediaUrl?: string;
  data: IndivChoiceProps | MatchChoiceProps;
}

interface IndivChoiceProps {
  options: SignOption[] | TermOption[];
  correctOptionId: string;
}

interface MatchChoiceProps {
  options: MatchChoiceOptions;
  correctMatches: Record<string, string>;
}

interface SignOption {
  id: string;
  mediaUrl: string;
}

interface TermOption {
  id: string;
  text: string;
}

interface MatchChoiceOptions {
  mediaItems: SignOption[];
  textItems: TermOption[];
}

type QuestionType = "WORD_CHOICE" | "SIGN_CHOICE" | "MATCH_CHOICE";
