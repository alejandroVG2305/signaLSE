import { SignModel } from "../../../models/sign.model";
import { isQuestionTerm } from "../../../utils/letter-normalizer";
import { signs as signColors } from "./sign-colors.seed";
import { signs as signTransport } from "./sign-transport.seed";
import { signs as signSports } from "./sign-sports.seed";
import { signs as signInternet } from "./sign-internet.seed";
import { signs as signWork } from "./sign-work.seed";
import { signs as signDates } from "./sign-dates.seed";
import { signs as signClothes } from "./sign-clothes.seed";
import { signs as signFamily } from "./sign-family.seed";
import { signs as signCourtesy } from "./sign-courtesy.seed";

const allSigns = [
  ...signColors,
  ...signTransport,
  ...signSports,
  ...signInternet,
  ...signWork,
  ...signDates,
  ...signClothes,
  ...signFamily,
  ...signCourtesy,
].map((sign) => ({
  ...sign,
  supportsAITraining: !/ñ/i.test(sign.term) && !isQuestionTerm(sign.term),
}));

export const seedSigns = async () => {
  await SignModel.deleteMany({});
  await SignModel.insertMany(allSigns);
  console.log("Signs seeded");
};
