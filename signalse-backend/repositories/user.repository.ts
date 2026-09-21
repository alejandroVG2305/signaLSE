import { UserModel } from "../models/user.model";
import { User } from "../domain/user";
import {
  RankingCriterium,
  RankingFilter,
} from "../domain/filters/ranking.filter";

const RANKING_SORT_FIELD: Record<RankingCriterium, string> = {
  totalPoints: "stats.totalPoints",
  xpLevel: "stats.xp.level",
  hitsPercentage: "stats.challenges.hitsPercentage",
  streak: "stats.streak.current",
};

export const userRepository = {
  createUser: async (userData: Partial<User>): Promise<User> => {
    // Instantiate mongoose model with received data
    const newUser = new UserModel(userData);
    // Save fisically in DB using the model object
    const savedUser = await newUser.save();
    // Return clean object
    return savedUser.toObject();
  },
  findUserByEmail: async (email: string): Promise<User | null> => {
    // Search a user applying filter.
    const user = await UserModel.findOne({ "profile.email": email }).lean(); // lean to return simple JSON object
    return user as User | null;
  },
  findUserByUID: async (uid: string): Promise<User | null> => {
    const user = await UserModel.findOne({
      "profile.uid": uid,
    }).lean();
    return user as User | null;
  },
  findUserByUsername: async (username: string): Promise<User | null> => {
    const user = await UserModel.findOne({
      "profile.username": username,
    }).lean();
    return user as User | null;
  },
  updateUserByUID: async (userData: Partial<User>): Promise<boolean> => {
    const result = await UserModel.updateOne(
      { "profile.uid": userData.profile?.uid },
      {
        "profile.name": userData.profile?.name,
        "profile.surname": userData.profile?.surname,
        "profile.username": userData.profile?.username,
        "profile.status": userData.profile?.status,
      },
    );
    return result.acknowledged;
  },
  updateTrainingStats: async (
    uuid: string,
    pointsEarned: number,
  ): Promise<boolean> => {
    const result = await UserModel.updateOne(
      { "profile.uid": uuid },
      {
        $inc: {
          "stats.trainings.totalCompleted": 1,
          "stats.totalPoints": pointsEarned,
          "stats.trainingToday": 1,
        },
      },
    );
    return result.acknowledged;
  },
  updateChallengeStats: async (
    uuid: string,
    pointsEarned: number,
    hits: number,
    misses: number,
    hitsPercentage: number,
    missPercentage: number,
  ): Promise<boolean> => {
    const result = await UserModel.updateOne(
      { "profile.uid": uuid },
      {
        $inc: {
          "stats.challenges.totalCompleted": 1,
          "stats.challenges.totalHits": hits,
          "stats.challenges.totalMisses": misses,
          "stats.totalPoints": pointsEarned,
          "stats.challengesToday": 1,
        },
        $set: {
          "stats.challenges.hitsPercentage": hitsPercentage,
          "stats.challenges.missPercentage": missPercentage,
        },
      },
    );
    return result.acknowledged;
  },
  updateStreakStats: async (
    uuid: string,
    newStreak: number,
  ): Promise<boolean> => {
    const result = await UserModel.updateOne(
      { "profile.uid": uuid },
      {
        $set: {
          "stats.streak.current": newStreak,
          "stats.streak.lastChallengeDate": new Date(),
        },
      },
    );
    return result.acknowledged;
  },
  updateXpStats: async (
    uuid: string,
    total: number,
    toNextLvl: number,
    level: number,
    today: number,
  ): Promise<boolean> => {
    const result = await UserModel.updateOne(
      { "profile.uid": uuid },
      {
        $set: {
          "stats.xp.total": total,
          "stats.xp.toNextLvl": toNextLvl,
          "stats.xp.level": level,
          "stats.xp.today": today,
        },
      },
    );
    return result.acknowledged;
  },
  resetAllDailyStats: async (): Promise<number> => {
    const result = await UserModel.updateMany(
      {},
      {
        $set: {
          "stats.challengesToday": 0,
          "stats.trainingToday": 0,
          "stats.signsLearnedToday": 0,
          "stats.xp.today": 0,
          "stats.goalsAwardedToday": [],
          "stats.dailyStatsDate": new Date(),
        },
      },
    );
    return result.modifiedCount;
  },
  addGoalAwardedKey: async (
    uuid: string,
    goalKey: string,
  ): Promise<boolean> => {
    const result = await UserModel.updateOne(
      { "profile.uid": uuid },
      { $addToSet: { "stats.goalsAwardedToday": goalKey } },
    );
    return result.acknowledged;
  },
  updateAvatarByUID: async (uid: string, avatar: string): Promise<boolean> => {
    const result = await UserModel.updateOne(
      { "profile.uid": uid },
      { $set: { "profile.avatar": avatar } },
    );
    return result.acknowledged;
  },
  updateUsernameByUID: async (
    uid: string,
    username: string,
  ): Promise<boolean> => {
    const result = await UserModel.updateOne(
      { "profile.uid": uid },
      { $set: { "profile.username": username } },
    );
    return result.acknowledged;
  },
  updateProfileNameByUID: async (
    uid: string,
    name: string,
    surname: string,
  ): Promise<boolean> => {
    const result = await UserModel.updateOne(
      { "profile.uid": uid },
      { $set: { "profile.name": name, "profile.surname": surname } },
    );
    return result.acknowledged;
  },
  updatePreferencesByUID: async (
    uid: string,
    preferences: { pushNotifications: boolean; soundEffects: boolean },
  ): Promise<boolean> => {
    const result = await UserModel.updateOne(
      { "profile.uid": uid },
      {
        $set: {
          "preferences.pushNotifications": preferences.pushNotifications,
          "preferences.soundEffects": preferences.soundEffects,
        },
      },
    );
    return result.acknowledged;
  },
  incrementSignsLearned: async (
    uid: string,
    count: number,
  ): Promise<boolean> => {
    const result = await UserModel.updateOne(
      { "profile.uid": uid },
      {
        $inc: {
          "stats.totalSignsLearned": count,
          "stats.signsLearnedToday": count,
        },
      },
    );
    return result.acknowledged;
  },
  getRanking: async (filter: RankingFilter): Promise<User[]> => {
    const sortField = RANKING_SORT_FIELD[filter.criterium];
    const users = await UserModel.find()
      .sort({ [sortField]: -1 })
      .limit(filter.limit)
      .lean();
    return users as User[];
  },
};
