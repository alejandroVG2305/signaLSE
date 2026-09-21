import { useEffect, useState } from "react";
import { User } from "../model/domain/users/user";
import { statsService } from "../model/services/stats.service";
import useLoading from "../hooks/useLoading";
import { RankingCriterium } from "../constants/ranking-params";

export default function useRankingViewModel() {
  const DEFAULT_SELECTED_CRITERIUM: RankingCriterium = "totalPoints";
  const [ranking, setRanking] = useState<User[]>([]);
  const [selectedCriterium, setSelectedCriterium] = useState<RankingCriterium>(
    DEFAULT_SELECTED_CRITERIUM,
  );
  const { isLoading, withLoading } = useLoading();
  const [showFab, setShowFab] = useState(false);
  const [showRankingInfo, setShowRankingInfo] = useState(false);

  const fetchRanking = async (): Promise<void> => {
    await withLoading(async () => {
      const result = await statsService.fetchRanking(selectedCriterium);
      if (result.ok) {
        setRanking(result.data);
      }
    });
  };

  useEffect(() => {
    fetchRanking();
  }, [selectedCriterium]);

  return {
    ranking,
    selectedCriterium,
    setSelectedCriterium,
    isLoading,
    showFab,
    setShowFab,
    showRankingInfo,
    setShowRankingInfo,
  };
}
