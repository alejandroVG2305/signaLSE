import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "./auth.middleware";

export interface PredictionPayload {
  category: string;
  score: number;
}

export interface PredictionRequest extends AuthRequest {
  prediction?: PredictionPayload;
}

export function verifyPredictionToken(
  req: PredictionRequest,
  res: Response,
  next: NextFunction,
): void {
  const { predictionToken } = req.body;

  if (!predictionToken) {
    res.status(400).json({ error: "Missing prediction token" });
    return;
  }

  const secret = process.env.PREDICTION_JWT_SECRET;
  if (!secret) {
    console.error("Prediction JWT secret is not set");
    res.status(500).json({ error: "Internal server error" });
    return;
  }

  try {
    const decoded = jwt.verify(predictionToken, secret) as {
      prediction: PredictionPayload[];
    };

    const best = decoded.prediction?.[0];

    if (!best) {
      res.status(400).json({ error: "error.emptyPrediction" });
      return;
    }

    req.prediction = best;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid prediction token" });
  }
}
