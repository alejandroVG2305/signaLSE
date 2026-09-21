import { useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { SignDetails, SignPreview } from "../model/domain/signs/sign";
import { RelatedSignsRequest, SignDetailsRequest } from "../model/sign.model";
import { signService } from "../model/services/signs.service";
import useLoading from "../hooks/useLoading";

export function useSignDetailsViewModel() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [signDetails, setSignDetails] = useState<SignDetails | null>(null);
  const [authorized, setAuthorized] = useState<boolean>(true);
  const [relatedSigns, setRelatedSigns] = useState<SignPreview[]>([]);
  const [isFullscreen, setIsFullScreen] = useState<boolean>(false);
  const { isLoading, withLoading } = useLoading();

  const openFullscreen = useCallback(() => {
    setIsFullScreen(true);
  }, []);

  const closeFullscreen = useCallback(() => {
    setIsFullScreen(false);
  }, []);

  const fetchSignDetails = async (signId: string) => {
    await withLoading(async () => {
      const request: SignDetailsRequest = { signId: signId };
      const result = await signService.getSignDetails(request);
      if (!result.ok) {
        if (result.statusCode === 403) {
          setAuthorized(false);
        }
        return;
      }
      setSignDetails(result.data);
    });
  };

  const fetchRelatedSigns = async (category: string) => {
    const request: RelatedSignsRequest = { category: category };
    const result = await signService.getRelatedSigns(request);
    if (!result.ok) {
      console.error(result.message);
      return;
    }
    const randomSigns = result.data
      .filter((sign) => sign.signId != id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    setRelatedSigns(randomSigns);
  };

  useEffect(() => {
    if (id) fetchSignDetails(id);
  }, [id]);

  useEffect(() => {
    const category = signDetails?.category;
    if (category) {
      fetchRelatedSigns(signDetails?.category!);
    }
  }, [signDetails]);

  const navigateToFreePractice = () => {
    if (!id) return;
    router.push(`/trainingSession?signId=${id}`);
  };

  return {
    signDetails,
    authorized,
    relatedSigns,
    isFullscreen,
    openFullscreen,
    closeFullscreen,
    isLoading,
    navigateToFreePractice,
  };
}
