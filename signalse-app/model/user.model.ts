import { User } from "./domain/users/user";
import { UserPreferences } from "./domain/users/userPreferences";
import { UserStats } from "./domain/users/userStats";

export interface AuthUserDataResponse {
  profile: User["profile"];
  preferences: User["preferences"];
  stats: User["stats"];
}

export interface AuthUserStatsResponse {
  signsLearnedToday: UserStats["signsLearnedToday"];
  totalSignsLearned: UserStats["totalSignsLearned"];
  totalPoints: UserStats["totalPoints"];
  xp: UserStats["xp"];
  streak: UserStats["streak"];
  dailyStatsDate: UserStats["dailyStatsDate"];
  challengesToday: UserStats["challengesToday"];
  trainingToday: UserStats["trainingToday"];
  challenges: UserStats["challenges"];
  trainings: UserStats["trainings"];
}

export interface AuthUserXpResponse {
  xpLevel: number;
}

export interface SignProgressResponse {
  remainingSigns: number;
}

// Update requests
export interface UpdateAvatarRequest {
  avatar: string;
}

export interface UpdateUsernameRequest {
  username: string;
}

export interface UpdateProfileNameRequest {
  name: string;
  surname: string;
}

export interface UpdatePreferencesRequest {
  pushNotifications: UserPreferences["pushNotifications"];
  soundEffects: UserPreferences["soundEffects"];
}

// Update response (shared by all update endpoints)
export interface UpdateSuccessResponse {
  success: boolean;
  message: string;
}
