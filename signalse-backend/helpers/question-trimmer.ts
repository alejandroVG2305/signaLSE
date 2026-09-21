import { Question } from "../domain/question";
import { shuffle } from "../utils/array-shuffler";

export const questionTrimmer = {
  /**
   * Trims question options to numberOfOptions, keeping the correct answer.
   * MATCH_CHOICE: slices the first N media/text pairs from the single match group.
   * SIGN_CHOICE / WORD_CHOICE: keeps correct option + (N-1) random wrong ones.
   */
  trimQuestion: (question: Question, numberOfOptions: number): Question => {
    if (question.type === "MATCH_CHOICE") {
      return trimMatchChoiceQuestion(question, numberOfOptions);
    } else {
      return trimIndChoiceQuestion(question, numberOfOptions);
    }
  },
};

const trimIndChoiceQuestion = (
  question: Question,
  numberOfOptions: number,
): Question => {
  const data = question.content.data as any;
  const allOptions: any[] = data.options;
  const correctOpt = allOptions.find(
    (o: any) => o.id === data.correctOptionId,
  )!;
  const wrongOpts = shuffle(
    allOptions.filter((o: any) => o.id !== data.correctOptionId),
  );

  return {
    ...question,
    content: {
      ...question.content,
      data: {
        options: shuffle([
          correctOpt,
          ...wrongOpts.slice(0, numberOfOptions - 1),
        ]),
        correctOptionId: data.correctOptionId,
      },
    },
  };
};

const trimMatchChoiceQuestion = (
  question: Question,
  numberOfOptions: number,
): Question => {
  const data = question.content.data as any;
  const group = Array.isArray(data.options) ? data.options[0] : data.options;
  const trimmedMedia = group.mediaItems.slice(0, numberOfOptions);
  const keptMediaIds = new Set<string>(trimmedMedia.map((m: any) => m.id));

  const trimmedCorrectMatches: Record<string, string> = {};
  for (const mediaId of keptMediaIds) {
    trimmedCorrectMatches[mediaId] = data.correctMatches[mediaId];
  }

  const keptTextIds = new Set<string>(Object.values(trimmedCorrectMatches));
  const trimmedText = group.textItems.filter((t: any) => keptTextIds.has(t.id));

  return {
    ...question,
    content: {
      ...question.content,
      data: {
        options: {
          ...group,
          mediaItems: trimmedMedia,
          textItems: trimmedText,
        },
        correctMatches: trimmedCorrectMatches,
      },
    },
  };
};
