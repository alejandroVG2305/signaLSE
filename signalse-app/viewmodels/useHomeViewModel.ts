import { useEffect, useState } from "react";
import i18n from "../i18n";
import { UserStats } from "../model/domain/users/userStats";
import { userService } from "../model/services/user.service";
import { goalService } from "../model/services/goal.service";
import { DailyGoal } from "../model/domain/goals/daily-goal";
import useLoading from "../hooks/useLoading";

export function useHomeViewModel() {
  const [date, setDate] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [stats, setStats] = useState<UserStats | null>(null);
  const [dailyGoals, setDailyGoals] = useState<DailyGoal[]>([]);
  const { isLoading, withLoading } = useLoading();

  const extractToday = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };
    const formattedDay = new Intl.DateTimeFormat(i18n.locale, options)
      .format(today)
      .toUpperCase();

    setDate(formattedDay);
  };

  useEffect(() => {
    extractToday();
    getAuthenticatedUserInfo();
  }, []);

  const getAuthenticatedUserInfo = async () => {
    await withLoading(async () => {
      const userResult = await userService.getAuthenticatedUserInfo();
      if (userResult.ok) {
        setName(userResult.data.profile.name!!);
        setStats(userResult.data.stats);
      }

      const goalsResult = await goalService.getAuthUserDailyGoals();
      if (goalsResult.ok) {
        setDailyGoals(goalsResult.data);
      }
    });
  };

  return { date, name, stats, dailyGoals, isLoading };
}
