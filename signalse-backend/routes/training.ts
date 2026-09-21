import { Response, Router } from "express";
import {
  AuthRequest,
  requireAuth,
  verifyFirebaseToken,
} from "../middlewares/auth.middleware";
import { trainingService } from "../services/training.service";
import { toSpellTrainingSignResponseDTO } from "../dtos/trainingSession/start-training.dto";
import {
  EvaluateRequestDTO,
  toEvaluateResponseDTO,
} from "../dtos/trainingSession/evaluate-training.dto";
import { verifyPredictionToken } from "../middlewares/verify-prediction.middleware";
import {
  AttemptEvaluation,
  SpellTrainingSign,
} from "../domain/spell-training-session";

const trainingRouter = Router();

function sendWordsResponse(res: Response, words: SpellTrainingSign[]) {
  res.status(200).json({ words: words.map(toSpellTrainingSignResponseDTO) });
}

function sendEvaluateResponse(
  res: Response,
  uid: string,
  category: string,
  evaluateFn: (uid: string, category: string) => AttemptEvaluation,
) {
  const result = toEvaluateResponseDTO(evaluateFn(uid, category));
  return res.status(200).json({ result });
}

trainingRouter.post(
  "/api/v1/training/startSpellingSession",
  verifyFirebaseToken,
  requireAuth,
  async (req: AuthRequest, res: Response) => {
    try {
      const words = await trainingService.startTrainingSession(req.uid!);
      sendWordsResponse(res, words);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
);

trainingRouter.post(
  "/api/v1/training/evaluate",
  verifyFirebaseToken,
  requireAuth,
  verifyPredictionToken,
  async (req: EvaluateRequestDTO, res: Response) => {
    try {
      return sendEvaluateResponse(
        res,
        req.uid!,
        req.prediction!.category,
        trainingService.evaluateAttempt.bind(trainingService),
      );
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
);

trainingRouter.post(
  "/api/v1/training/startFreeSpellingSession",
  verifyFirebaseToken,
  requireAuth,
  async (req: AuthRequest, res: Response) => {
    try {
      const { signId } = req.body as { signId: string };
      if (!signId) {
        return res.status(400).json({ message: "signId is required" });
      }
      const words = await trainingService.startFreeTrainingSession(
        req.uid!,
        signId,
      );
      sendWordsResponse(res, words);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
);

trainingRouter.post(
  "/api/v1/training/evaluateFree",
  verifyFirebaseToken,
  requireAuth,
  verifyPredictionToken,
  async (req: EvaluateRequestDTO, res: Response) => {
    try {
      return sendEvaluateResponse(
        res,
        req.uid!,
        req.prediction!.category,
        trainingService.evaluateFreeAttempt.bind(trainingService),
      );
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
);

export default trainingRouter;
