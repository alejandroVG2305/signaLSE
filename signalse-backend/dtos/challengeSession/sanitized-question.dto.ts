export interface SanitizedQuestionDTO {
  questionId: string;
  type: string;
  content: {
    question: string;
    mediaUrl?: string;
    data: unknown;
  };
}
