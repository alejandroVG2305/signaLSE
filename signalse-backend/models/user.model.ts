import { Schema, model } from "mongoose";
import { User } from "../domain/user";

const userSchema = new Schema<User>({
  profile: {
    uid: { type: String, required: true, unique: true },
    name: { type: String, sparse: true },
    surname: { type: String, sparse: true },
    username: { type: String, unique: true, sparse: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, default: "AVATAR_001" },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, required: true },
  },
  preferences: {
    pushNotifications: { type: Boolean, default: true },
    soundEffects: { type: Boolean, default: true },
  },
  stats: {
    totalPoints: { type: Number, default: 0 },
    xp: {
      total: { type: Number, default: 0 },
      level: { type: Number, default: 1 },
      toNextLvl: { type: Number, default: 100 },
      today: { type: Number, default: 0 },
    },
    streak: {
      current: { type: Number, default: 0 },
      lastChallengeDate: { type: Date },
    },
    dailyStatsDate: { type: Date },
    challengesToday: { type: Number, default: 0 },
    trainingToday: { type: Number, default: 0 },
    signsLearnedToday: { type: Number, default: 0 },
    totalSignsLearned: { type: Number, default: 0 },
    challenges: {
      totalCompleted: { type: Number, default: 0 },
      totalHits: { type: Number, default: 0 },
      totalMisses: { type: Number, default: 0 },
      hitsPercentage: { type: Number, default: 0 },
      missPercentage: { type: Number, default: 0 },
    },
    trainings: {
      totalCompleted: { type: Number, default: 0 },
    },
    goalsAwardedToday: { type: [String], default: [] },
  },
});

// Model ready to use in repo
export const UserModel = model<User>("User", userSchema);
