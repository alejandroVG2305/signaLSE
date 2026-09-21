import { User } from "../../domain/user";
import { toUserDataResponseDTO, UserDataResponseDTO } from "./user-data.dto";

interface RankingResponseDTO {
  users: UserDataResponseDTO[];
}

export const toRankingResponseDTO = (users: User[]): RankingResponseDTO => {
  return {
    users: users.map(toUserDataResponseDTO),
  };
};
