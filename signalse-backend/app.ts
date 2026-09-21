import express, { Application } from "express";
import connectDB from "./config/db";
import authRouter from "./routes/auth";
import userRouter from "./routes/users";
import goalRouter from "./routes/goals";
import { seedGoals } from "./config/seeds/goal.seed";
import { seedUsers } from "./config/seeds/user.seed";
import { seedSigns } from "./config/seeds/signs/signs-all.seed";
import { seedQuestions } from "./config/seeds/questions/questions-all.seed";
import trainingRouter from "./routes/training";
import signRouter from "./routes/signs";
import { scheduleDailyStatsReset } from "./jobs/daily-stats.job";
import challengesRouter from "./routes/challenges";

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Configure JSON API
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", authRouter);
app.use("/", userRouter);
app.use("/", goalRouter);
app.use("/", trainingRouter);
app.use("/", signRouter);
app.use("/", challengesRouter);

// DB connection
connectDB().then(async () => {
  await seedUsers();
  await seedGoals();
  await seedSigns();
  await seedQuestions();
  // Crons
  scheduleDailyStatsReset();

  // Launch app
  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });
});

export default app;
