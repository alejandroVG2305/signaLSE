import { SanitizedQuestion } from "../domain/challenge-session";
import { Question } from "../domain/question";
import { toSignedVideoUrl } from "../utils/signed-video-url";

const signMediaUrl = (mediaUrl?: string): string | undefined =>
  mediaUrl ? toSignedVideoUrl(mediaUrl) : mediaUrl;

/** Signs mediaUrl on each WORD_CHOICE/SIGN_CHOICE option (array of TermOption | SignOption). */
const signIndivChoiceOptions = (options: any[]): any[] =>
  options.map((option) =>
    option.mediaUrl ? { ...option, mediaUrl: signMediaUrl(option.mediaUrl) } : option,
  );

/** Signs mediaUrl on each item of a MATCH_CHOICE group's mediaItems (already unwrapped by questionTrimmer). */
const signMatchChoiceGroup = (group: any): any => ({
  ...group,
  mediaItems: Array.isArray(group.mediaItems)
    ? group.mediaItems.map((item: any) => ({
        ...item,
        mediaUrl: signMediaUrl(item.mediaUrl),
      }))
    : group.mediaItems,
});

export const questionSanitizer = {
  /** Strips correct answer fields before sending to client. */
  sanitizeQuestion: (question: Question): SanitizedQuestion => {
    const data = question.content.data as any;

    let sanitizedData: any;
    if (question.type === "MATCH_CHOICE") {
      const { correctMatches: _cm, ...rest } = data;
      sanitizedData = { ...rest, options: signMatchChoiceGroup(rest.options) };
    } else {
      const { correctOptionId: _id, ...rest } = data;
      sanitizedData = { ...rest, options: signIndivChoiceOptions(rest.options) };
    }

    return {
      questionId: question.questionId,
      type: question.type,
      content: {
        question: question.content.question,
        mediaUrl: signMediaUrl(question.content.mediaUrl),
        data: sanitizedData,
      },
    };
  },
};
