import cloudinary from "../config/cloudinary";
import { BASE_VIDEO_URL } from "../config/seeds/constants";

const toPublicId = (videoUrl: string): string =>
  videoUrl.replace(BASE_VIDEO_URL, "").replace(/\.mp4$/, "");

export const toSignedVideoUrl = (videoUrl: string): string =>
  cloudinary.url(toPublicId(videoUrl), {
    resource_type: "video",
    type: "authenticated",
    sign_url: true,
    secure: true,
    format: "mp4",
  });

export const toSignedThumbnailUrl = (videoUrl: string): string =>
  cloudinary.url(toPublicId(videoUrl), {
    resource_type: "video",
    type: "authenticated",
    sign_url: true,
    secure: true,
    format: "jpg",
    transformation: [{ start_offset: "0" }],
  });
