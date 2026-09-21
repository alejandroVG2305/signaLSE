import { AppError } from "../errors/app-error";
import {
  RankingCriterium,
  RankingFilter,
} from "../domain/filters/ranking.filter";
import { User, UserPreferences } from "../domain/user";
import { userRepository } from "../repositories/user.repository";
import { checkFieldExists, checkFieldIsDefined } from "../utils/field-utils";

export const userService = {
  getUserByUID: async (uid: string): Promise<User> => {
    const user = await checkUserExists(uid);
    return user;
  },
  getXpLevelByUID: async (uid: string): Promise<number> => {
    const user = await checkUserExists(uid);
    return user.stats.xp.level;
  },
  resetDailyStats: async (): Promise<number> => {
    return userRepository.resetAllDailyStats();
  },
  updateAvatar: async (uid: string, avatar: string): Promise<void> => {
    checkFieldExists(avatar);
    await checkUserExists(uid);
    const ok = await userRepository.updateAvatarByUID(uid, avatar);
    checkSomethingFailed(ok);
  },
  updateUsername: async (uid: string, username: string): Promise<void> => {
    checkFieldExists(username);
    const user = await checkUserExists(uid);
    const userToCompare = await userRepository.findUserByUsername(username);
    if (userToCompare && userToCompare.profile.uid !== user.profile.uid) {
      throw new AppError("errors.usernameTaken", 409);
    }
    const ok = await userRepository.updateUsernameByUID(uid, username);
    checkSomethingFailed(ok);
  },
  updateProfileName: async (
    uid: string,
    name: string,
    surname: string,
  ): Promise<void> => {
    checkFieldExists(name);
    checkFieldExists(surname);
    await checkUserExists(uid);
    const ok = await userRepository.updateProfileNameByUID(uid, name, surname);
    checkSomethingFailed(ok);
  },
  updatePreferences: async (
    uid: string,
    preferences: UserPreferences,
  ): Promise<void> => {
    checkFieldIsDefined(preferences.pushNotifications);
    checkFieldIsDefined(preferences.soundEffects);
    await checkUserExists(uid);
    const ok = await userRepository.updatePreferencesByUID(uid, preferences);
    checkSomethingFailed(ok);
  },
  /*
   * Returns n most highlighted players in a specific ranking criterium
   */
  getRanking: async (
    criterium: string | undefined,
    n: number,
  ): Promise<User[]> => {
    const filter: RankingFilter = {
      criterium: (criterium as RankingCriterium) || "totalPoints",
      limit: Number.isNaN(n) ? 15 : n,
    };
    return await userRepository.getRanking(filter);
  },
};

const checkSomethingFailed = (ok: boolean): void => {
  if (!ok) throw new Error("errors.somethingFailed");
};

const checkUserExists = async (uid: string): Promise<User> => {
  let user = null;
  try {
    user = await userRepository.findUserByUID(uid);
  } catch (error) {
    throw new Error("errors.errorQuery");
  }
  if (!user) {
    throw new Error("errors.userNotFound");
  }
  return user;
};
