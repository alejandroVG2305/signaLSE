import { View } from "react-native";
import { User } from "../../model/domain/users/user";
import RankingItem from "../ranking-item/RankingItem";
import AnimatedEntry from "../utils/animated-entry/AnimatedEntry";
import { DELAYS, RANKING_LIST_STAGGER } from "../../constants/animation-delays";
import { styles } from "./ranking-list-styles";

interface RankingListProps {
  ranking: User[];
}

export default function RankingList({ ranking }: RankingListProps) {
  return (
    <View style={styles.rankingContainer}>
      {ranking.map((ri, index) => (
        <AnimatedEntry
          key={ri.profile.username}
          delay={DELAYS.rankingList + index * RANKING_LIST_STAGGER}
        >
          <RankingItem
            rankingPlace={index + 1}
            avatar={ri.profile.avatar!}
            challengesCompleted={ri.stats.challenges.totalCompleted}
            totalPoints={ri.stats.totalPoints}
            trainingsCompleted={ri.stats.trainings.totalCompleted}
            hitsPercentage={ri.stats.challenges.hitsPercentage}
            streak={ri.stats.streak.current}
            xpLevel={ri.stats.xp.level}
            name={ri.profile.username!}
          />
        </AnimatedEntry>
      ))}
    </View>
  );
}
