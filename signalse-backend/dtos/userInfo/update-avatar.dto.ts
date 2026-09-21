import { AuthRequest } from "../../middlewares/auth.middleware";

export interface UpdateAvatarRequestDTO extends AuthRequest {
  body: {
    avatar: string;
  };
}
