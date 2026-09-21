import { UserPreferences } from "../../domain/user";
import { AuthRequest } from "../../middlewares/auth.middleware";

export interface UpdatePreferencesRequestDTO extends AuthRequest {
  body: {
    pushNotifications: boolean;
    soundEffects: boolean;
  };
}

export const toUserPreferences = (
  dto: UpdatePreferencesRequestDTO,
): UserPreferences => {
  return {
    pushNotifications: dto.body.pushNotifications,
    soundEffects: dto.body.soundEffects,
  };
};
