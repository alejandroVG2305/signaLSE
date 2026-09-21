import { AuthRequest } from "../../middlewares/auth.middleware";

export interface UpdateProfileNameRequestDTO extends AuthRequest {
  body: {
    name: string;
    surname: string;
  };
}
