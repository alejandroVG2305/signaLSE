import { User } from "../domain/users/user";
import {
  AuthUserDataResponse,
  AuthUserStatsResponse,
  SignProgressResponse,
  UpdateAvatarRequest,
  UpdatePreferencesRequest,
  UpdateProfileNameRequest,
  UpdateSuccessResponse,
  UpdateUsernameRequest,
} from "../user.model";
import { Result } from "../result";
import { apiClient, toResult } from "./api/api-client";
import { UserStats } from "../domain/users/userStats";

export const userService = {
  getAuthenticatedUserInfo: (): Promise<Result<User>> =>
    toResult(apiClient.get<AuthUserDataResponse>("/getAuthUserData"), (r) => r),

  getAuthenticatedUserStats: (): Promise<Result<UserStats>> =>
    toResult(
      apiClient.get<AuthUserStatsResponse>("/getAuthUserStats"),
      (r) => r,
    ),

  updateAvatar: (
    body: UpdateAvatarRequest,
  ): Promise<Result<UpdateSuccessResponse>> =>
    toResult(
      apiClient.post<UpdateSuccessResponse>("/updateUserAvatar", body),
      (r) => r,
    ),

  updateUsername: (
    body: UpdateUsernameRequest,
  ): Promise<Result<UpdateSuccessResponse>> =>
    toResult(
      apiClient.post<UpdateSuccessResponse>("/updateUsername", body),
      (r) => r,
    ),

  updateProfileName: (
    body: UpdateProfileNameRequest,
  ): Promise<Result<UpdateSuccessResponse>> =>
    toResult(
      apiClient.post<UpdateSuccessResponse>("/updateUserNameSurname", body),
      (r) => r,
    ),

  updatePreferences: (
    body: UpdatePreferencesRequest,
  ): Promise<Result<UpdateSuccessResponse>> =>
    toResult(
      apiClient.post<UpdateSuccessResponse>("/updateUserPreferences", body),
      (r) => r,
    ),

  getSignsToLearn: (): Promise<Result<number>> =>
    toResult(
      apiClient.get<SignProgressResponse>("/getRemainingSignsToLearn"),
      (r) => r.remainingSigns,
    ),
};
