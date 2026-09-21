import { View } from "react-native";
import SignListItem from "./sign-list-item/SignListItem";
import { SignUI } from "../../model/domain/signs/sign";
import { Link } from "expo-router";

interface SignListProps {
  signs: SignUI[];
}

export default function SignList({ signs }: SignListProps) {
  return (
    <View style={{ gap: 10 }}>
      {signs.map((sign) => (
        <Link key={sign.signId} href={`/sign-detail/${sign.signId}`} asChild>
          <SignListItem
            thumbnailUrl={sign.thumbnailUrl}
            title={sign.title}
            subtitle={sign.category}
            badges={sign.badges}
            canUserAccess={sign.canUserAccess}
          />
        </Link>
      ))}
    </View>
  );
}
