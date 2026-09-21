import { Router, Response } from "express";
import {
  AuthRequest,
  requireAuth,
  verifyFirebaseToken,
} from "../middlewares/auth.middleware";
import { goalService } from "../services/goal.service";
import { toUserGoalsResponseDTO } from "../dtos/userInfo/user-goals.dto";

const goalRouter = Router();

// Gets daily goals from authenticated user
goalRouter.get(
  "/api/v1/getAuthUserDailyGoals",
  verifyFirebaseToken,
  requireAuth,
  async (req: AuthRequest, res: Response) => {
    try {
      const goals = await goalService.getDailyGoals(req.uid!);
      res.status(200).json({ goals: goals.map(toUserGoalsResponseDTO) });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
);

export default goalRouter;
