import { SignedSign } from "../../domain/sign";

export interface SignsResponseDTO {
  signs: SignResponseDTO[];
}

interface SignResponseDTO {
  signId: string;
  term: string;
  category: string;
  complexity: string;
  minLevel: number;
  videoUrl: string;
  thumbnailUrl: string;
  canUserAccess?: boolean;
}

export const toSignsResponseDTO = (signs: SignedSign[]): SignsResponseDTO => {
  return {
    signs: signs.map((s) => ({
      signId: s.signId,
      term: s.term,
      category: s.category,
      complexity: s.complexity,
      minLevel: s.minLevel,
      videoUrl: s.videoUrl,
      thumbnailUrl: s.thumbnailUrl,
      canUserAccess: s.canUserAccess,
    })),
  };
};
