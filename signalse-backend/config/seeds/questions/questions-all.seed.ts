import { QuestionModel } from "../../../models/question.model";
import { questions as questionFamily } from "./question-family.seed";
import { questions as questionTransport } from "./question-transport.seed";
import { questions as questionSports } from "./question-sports.seed";
import { questions as questionInternet } from "./question-internet.seed";
import { questions as questionWork } from "./question-work.seed";
import { questions as questionDates } from "./question-dates.seed";
import { questions as questionClothes } from "./question-clothes.seed";
import { questions as questionColors } from "./question-colors.seed";
import { questions as questionCourtesy } from "./question-courtesy.seed";

const allQuestions = [
  ...questionFamily,
  ...questionTransport,
  ...questionSports,
  ...questionInternet,
  ...questionWork,
  ...questionDates,
  ...questionClothes,
  ...questionColors,
  ...questionCourtesy,
];

export const seedQuestions = async () => {
  await QuestionModel.deleteMany({});
  await QuestionModel.insertMany(allQuestions);
  console.log(`Questions seeded (${allQuestions.length} total)`);
};
