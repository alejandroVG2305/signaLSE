import { Request, Response, Router } from "express";
import {
  AuthRequest,
  requireAuth,
  verifyFirebaseToken,
} from "../middlewares/auth.middleware";
import { userService } from "../services/user.service";
import { toUserDataResponseDTO } from "../dtos/userInfo/user-data.dto";
import { toUserStatsResponseDTO } from "../dtos/userInfo/user-stats.dto";
import { UpdateAvatarRequestDTO } from "../dtos/userInfo/update-avatar.dto";
import { toUpdateSuccessResponseDTO } from "../dtos/userInfo/update-success-response.dto";
import { UpdateUsernameRequestDTO } from "../dtos/userInfo/update-username.dto";
import { UpdateProfileNameRequestDTO } from "../dtos/userInfo/update-profile-name.dto";
import {
  toUserPreferences,
  UpdatePreferencesRequestDTO,
} from "../dtos/userInfo/update-preferences.dto";
import { toRankingResponseDTO } from "../dtos/userInfo/ranking.dto";

const userRouter = Router();

// Gets data from auth user
userRouter.get(
  "/api/v1/getAuthUserData",
  verifyFirebaseToken,
  requireAuth,
  async (req: AuthRequest, res: Response) => {
    try {
      const user = await userService.getUserByUID(req.uid!);
      res.status(200).json(toUserDataResponseDTO(user));
    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
);

// Gets stats from authenticated user
userRouter.get(
  "/api/v1/getAuthUserStats",
  verifyFirebaseToken,
  requireAuth,
  async (req: AuthRequest, res: Response) => {
    try {
      const user = await userService.getUserByUID(req.uid!);
      res.status(200).json(toUserStatsResponseDTO(user));
    } catch (error: any) {
      res.status(error.statusCode ?? 500).json({ message: error.message });
    }
  },
);

// Updates avatar of authenticated user
userRouter.post(
  "/api/v1/updateUserAvatar",
  verifyFirebaseToken,
  requireAuth,
  async (req: UpdateAvatarRequestDTO, res: Response) => {
    try {
      await userService.updateAvatar(req.uid!, req.body.avatar);
      res.status(200).json(toUpdateSuccessResponseDTO("Avatar updated"));
    } catch (error: any) {
      res.status(error.statusCode ?? 500).json({ message: error.message });
    }
  },
);

// Updates username of authenticated user
userRouter.post(
  "/api/v1/updateUsername",
  verifyFirebaseToken,
  requireAuth,
  async (req: UpdateUsernameRequestDTO, res: Response) => {
    try {
      await userService.updateUsername(req.uid!, req.body.username);
      res.status(200).json(toUpdateSuccessResponseDTO("Username updated"));
    } catch (error: any) {
      res.status(error.statusCode ?? 500).json({ message: error.message });
    }
  },
);

// Updates name and surname of authenticated user
userRouter.post(
  "/api/v1/updateUserNameSurname",
  verifyFirebaseToken,
  requireAuth,
  async (req: UpdateProfileNameRequestDTO, res: Response) => {
    try {
      await userService.updateProfileName(
        req.uid!,
        req.body.name,
        req.body.surname,
      );
      res
        .status(200)
        .json(toUpdateSuccessResponseDTO("User profile name updated"));
    } catch (error: any) {
      res.status(error.statusCode ?? 500).json({ message: error.message });
    }
  },
);

// Updates preferences of authenticated user
userRouter.post(
  "/api/v1/updateUserPreferences",
  verifyFirebaseToken,
  requireAuth,
  async (req: UpdatePreferencesRequestDTO, res: Response) => {
    try {
      await userService.updatePreferences(
        req.uid!,
        toUserPreferences(req),
      );
      res
        .status(200)
        .json(toUpdateSuccessResponseDTO("User preferences updated"));
    } catch (error: any) {
      res.status(error.statusCode ?? 500).json({ message: error.message });
    }
  },
);

// Returns user ranking by a specific criterium
userRouter.get("/api/v1/getRanking", async (req: Request, res: Response) => {
  try {
    const criterium = req.query.criterium as string | undefined;
    const count = parseInt(req.query.count as string, 10);
    const ranking = await userService.getRanking(criterium, count);
    res.status(200).json(toRankingResponseDTO(ranking));
  } catch (error: any) {
    res.status(error.statusCode ?? 500).json({ message: error.message });
  }
});

export default userRouter;
