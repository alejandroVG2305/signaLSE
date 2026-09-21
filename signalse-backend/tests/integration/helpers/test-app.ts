import express, { Application } from "express";
import authRouter from "../../../routes/auth";
import userRouter from "../../../routes/users";
import goalRouter from "../../../routes/goals";
import trainingRouter from "../../../routes/training";
import signRouter from "../../../routes/signs";
import challengesRouter from "../../../routes/challenges";

export function createTestApp(): Application {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use("/", authRouter);
  app.use("/", userRouter);
  app.use("/", goalRouter);
  app.use("/", trainingRouter);
  app.use("/", signRouter);
  app.use("/", challengesRouter);
  return app;
}
