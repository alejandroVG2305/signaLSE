import { Response, Router } from "express";
import {
  requireAuth,
  verifyFirebaseToken,
} from "../middlewares/auth.middleware";
import { challengeService } from "../services/challenge.service";
import {
  StartChallengeRequestDTO,
  toChallengeConfig,
  toStartChallengeResponseDTO,
} from "../dtos/challengeSession/start-challenge.dto";
import {
  EvaluateTrainingRequestDTO,
  toEvaluateTrainingResponseDTO,
} from "../dtos/challengeSession/evaluate-challenge.dto";

const challengesRouter = Router();

challengesRouter.post(
  "/api/v1/challenges/startSession",
  verifyFirebaseToken,
  requireAuth,
  async (req: StartChallengeRequestDTO, res: Response) => {
    try {
      const result = await challengeService.startChallenge(
        req.uid!,
        toChallengeConfig(req),
      );
      return res
        .status(200)
        .json(
          toStartChallengeResponseDTO(result.question, result.totalQuestions),
        );
    } catch (error: any) {
      res.status(error.statusCode ?? 500).json({ message: error.message });
    }
  },
);

challengesRouter.post(
  "/api/v1/challenges/evaluate",
  verifyFirebaseToken,
  requireAuth,
  async (req: EvaluateTrainingRequestDTO, res: Response) => {
    try {
      const result = await challengeService.submitAnswer(
        req.uid!,
        req.body.answer,
      );
      return res.status(200).json(toEvaluateTrainingResponseDTO(result));
    } catch (error: any) {
      res.status(error.statusCode ?? 500).json({ message: error.message });
    }
  },
);

export default challengesRouter;
