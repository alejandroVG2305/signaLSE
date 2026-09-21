import { Sign, SignedSign, toSignedSign } from "../domain/sign";
import { AppError } from "../errors/app-error";
import { signRepository } from "../repositories/sign.repository";
import { userService } from "./user.service";

export const signService = {
  getSigns: async (
    uid: string,
    categories?: string[],
    initialLetters?: string[],
  ): Promise<SignedSign[]> => {
    const [signs, userLevel] = await Promise.all([
      signRepository.findSigns({ initialLetters, categories }),
      userService.getXpLevelByUID(uid),
    ]);
    return signs.map((sign) =>
      toSignedSign({ ...sign, canUserAccess: sign.minLevel <= userLevel }),
    );
  },
  getSignsByCategory: async (
    uid: string,
    category: string,
  ): Promise<SignedSign[]> => {
    if (!category) {
      throw new AppError("Category is required", 400);
    }
    const [signs, userLevel] = await Promise.all([
      signRepository.findSigns({ categories: [category] }),
      userService.getXpLevelByUID(uid),
    ]);
    return signs
      .filter((sign) => sign.minLevel <= userLevel)
      .map((sign) => toSignedSign({ ...sign, canUserAccess: true }));
  },
  getCategories: async (): Promise<string[]> =>
    await signRepository.findCategories(),
  getRemainingSignsToLearn: async (uid: string): Promise<number> => {
    const [totalSigns, user] = await Promise.all([
      signRepository.countTotalSigns(),
      userService.getUserByUID(uid),
    ]);
    return Math.max(0, totalSigns - user.stats.totalSignsLearned);
  },
  getSignDetails: async (signId: string, userUid: string): Promise<Sign> => {
    const sign = await signRepository.findSignById(signId);
    if (sign === null) {
      throw new AppError("Sign does not exist.", 404);
    }
    const userXpLevel = await userService.getXpLevelByUID(userUid);
    if (sign.minLevel > userXpLevel) {
      throw new AppError(
        `User is not allowed to access this sign. Required level: ${sign.minLevel}`,
        403,
      );
    }
    return toSignedSign(sign);
  },
};
