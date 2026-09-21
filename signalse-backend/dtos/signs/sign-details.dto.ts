import { Sign } from "../../domain/sign";

interface SignDetailsResponseDTO {
  signId: string;
  term: string;
  category: string;
  complexity: string;
  minLevel: number;
  videoUrl: string;
  meaning: string;
  keySteps: Array<string>;
  supportsAITraining: boolean;
  createdAt: Date;
  canUserAccess: boolean;
}

export const toSignDetailsReponseDTO = (sign: Sign) => {
  return {
    signId: sign.signId,
    term: sign.term,
    category: sign.category,
    complexity: sign.complexity,
    minLevel: sign.minLevel,
    videoUrl: sign.videoUrl,
    meaning: sign.meaning,
    keySteps: sign.keySteps,
    supportsAITraining: sign.supportsAITraining,
  };
};
