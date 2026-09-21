import { AuthRequest } from "../../middlewares/auth.middleware";

export interface UpdateUsernameRequestDTO extends AuthRequest {
  body: {
    username: string;
  };
}
