import { toSignedThumbnailUrl, toSignedVideoUrl } from "../utils/signed-video-url";

export interface Sign {
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
  canUserAccess?: boolean;
}

export interface SignedSign extends Sign {
  thumbnailUrl: string;
}

export const toSignedSign = (sign: Sign): SignedSign => ({
  ...sign,
  videoUrl: toSignedVideoUrl(sign.videoUrl),
  thumbnailUrl: toSignedThumbnailUrl(sign.videoUrl),
});
