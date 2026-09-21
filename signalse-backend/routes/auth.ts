import { Router, Response } from "express";
import {
  verifyFirebaseToken,
  AuthRequest,
  requireAuth,
} from "../middlewares/auth.middleware";
import { authService } from "../services/auth.service";

const authRouter = Router();

// Registers user in database
authRouter.post(
  "/api/v1/register",
  verifyFirebaseToken,
  requireAuth,
  async (req: AuthRequest, res: Response) => {
    try {
      const userData = {
        ...req.body,
        uid: req.uid,
      };

      const newUser = await authService.registerUser(userData);
      res.status(201).json({
        message: "Registration successfully completed.",
        user: newUser,
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
);

// Checks login fields are available in terms of database
authRouter.post(
  "/api/v1/login",
  verifyFirebaseToken,
  requireAuth,
  async (req: AuthRequest, res: Response) => {
    try {
      const userData = {
        ...req.body,
        uid: req.uid,
      };
      const user = await authService.validateLogin(userData);
      res.status(200).json({
        message: "Login successfully completed",
        user: user,
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
);

// Completes user info in case of ghost user
authRouter.post(
  "/api/v1/completeUserInfo",
  verifyFirebaseToken,
  requireAuth,
  async (req: AuthRequest, res: Response) => {
    try {
      const userData = {
        ...req.body,
        uid: req.uid,
      };
      const success = await authService.completeUserInfo(userData);
      res.status(200).json({
        message: "User info completion successfully processed",
        success: success,
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
);

export default authRouter;
