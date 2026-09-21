import cron from "node-cron";
import { userService } from "../services/user.service";

export function scheduleDailyStatsReset(): void {
  cron.schedule(
    "0 9 * * *",
    async () => {
      try {
        const count = await userService.resetDailyStats();
        console.log(
          `[DailyStatsJob] Reset complete - ${count} user(s) updated.`,
        );
      } catch (error) {
        console.error("[DailyStatsJob] Error during daily stats reset:", error);
      }
    },
    { timezone: "Europe/Madrid" },
  );
  console.log(
    "[DailyStatsJob] Scheduled daily stats reset at 09:00 Europe/Madrid.",
  );
}
