import { Response, Router } from "express";
import {
  AuthRequest,
  requireAuth,
  verifyFirebaseToken,
} from "../middlewares/auth.middleware";
import { signService } from "../services/sign.service";
import { toSignsResponseDTO } from "../dtos/signs/signs.dto";
import { toSignDetailsReponseDTO } from "../dtos/signs/sign-details.dto";
import { toSignCategoriesResponseDTO } from "../dtos/signs/sign-categories.dto";
import { toSignProgressResponseDTO } from "../dtos/signs/sign-progress.dto";

const signRouter = Router();

function parseCommaSeparated(value: any): string[] {
  return (value as string)?.split(",").filter(Boolean) ?? [];
}

signRouter.get(
  "/api/v1/getSigns",
  verifyFirebaseToken,
  requireAuth,
  async (req: AuthRequest, res: Response) => {
    try {
      const categories = parseCommaSeparated(req.query.categories);
      const initialLetters = parseCommaSeparated(req.query.initialLetters);
      const signs = await signService.getSigns(
        req.uid!,
        categories,
        initialLetters,
      );
      res.status(200).json(toSignsResponseDTO(signs));
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
);

signRouter.get(
  "/api/v1/getSignCategories",
  verifyFirebaseToken,
  requireAuth,
  async (req: AuthRequest, res: Response) => {
    try {
      res
        .status(200)
        .json(toSignCategoriesResponseDTO(await signService.getCategories()));
    } catch (error: any) {
      res.status(error.statusCode ?? 500).json({ message: error.message });
    }
  },
);

signRouter.get(
  "/api/v1/getRelatedSigns",
  verifyFirebaseToken,
  requireAuth,
  async (req: AuthRequest, res: Response) => {
    try {
      const category = req.query.category as string;
      const signs = await signService.getSignsByCategory(
        req.uid!,
        category,
      );
      res.status(200).json(toSignsResponseDTO(signs));
    } catch (error: any) {
      res.status(error.statusCode ?? 500).json({ message: error.message });
    }
  },
);

signRouter.get(
  "/api/v1/getRemainingSignsToLearn",
  verifyFirebaseToken,
  requireAuth,
  async (req: AuthRequest, res: Response) => {
    try {
      const remaining = await signService.getRemainingSignsToLearn(
        req.uid!,
      );
      res.status(200).json(toSignProgressResponseDTO(remaining));
    } catch (error: any) {
      res.status(error.statusCode ?? 500).json({ message: error.message });
    }
  },
);

signRouter.get(
  "/api/v1/getSignDetails/:signId",
  verifyFirebaseToken,
  requireAuth,
  async (req: AuthRequest, res: Response) => {
    const signId = req.params.signId as string;
    const userUid = req.uid!;
    try {
      res.status(200).json({
        sign: toSignDetailsReponseDTO(
          await signService.getSignDetails(signId, userUid),
        ),
      });
    } catch (error: any) {
      res.status(error.statusCode ?? 500).json({ message: error.message });
    }
  },
);

export default signRouter;
