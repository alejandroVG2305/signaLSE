import { View } from "react-native";
import { constants } from "../../constants/constants";
import { SignCard } from "./sign-card/SignCard";
import { SignUI } from "../../model/domain/signs/sign";
import { Link } from "expo-router";

interface SignGridProps {
  signs: SignUI[];
}

export default function SignGrid({ signs }: SignGridProps) {
  const COLUMNS = 2;
  const GRID_GAP = 10;
  const CONTAINER_MARGIN = 30;
  const itemWidth = Math.floor(
    (constants.windowWidth - CONTAINER_MARGIN - GRID_GAP * (COLUMNS - 1)) /
      COLUMNS,
  );

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: GRID_GAP }}>
      {signs.map((sign) => (
        <Link key={sign.signId} asChild href={`/sign-detail/${sign.signId}`}>
          <SignCard {...sign} width={itemWidth} />
        </Link>
      ))}
    </View>
  );
}
