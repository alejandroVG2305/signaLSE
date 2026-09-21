import { User } from "../domain/users/user";
import { RankingResponse } from "../ranking.model";
import { Result } from "../result";
import { apiClient, toResult } from "./api/api-client";

export const statsService = {
  fetchRanking: (
    criterium: string,
    count: number = 15,
  ): Promise<Result<User[]>> =>
    toResult(
      apiClient.get<RankingResponse>(
        `/getRanking?criterium=${criterium}&count=${count}`,
        false,
      ),
      (r) => r.users,
    ),
};
