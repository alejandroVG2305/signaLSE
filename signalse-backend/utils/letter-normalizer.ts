export const letterNormalizer = {
  normalize: (str: string): string =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
};

export const QUESTION_TERM_REGEX = /^\u00bf.*\?$/;

export const isQuestionTerm = (term: string): boolean =>
  QUESTION_TERM_REGEX.test(term.trim());
