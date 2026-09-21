import { UserPreferences } from "./userPreferences";
import { UserProfile } from "./userProfile";
import { UserStats } from "./userStats";

export interface User {
  profile: UserProfile;
  preferences: UserPreferences;
  stats: UserStats;
}
