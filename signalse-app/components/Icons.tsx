import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../styles/colors";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

// Navbar Icons
export const HomeMenuIcon = ({ color }: { color: string }) => (
  <Octicons name="home" size={24} color={color} />
);

export const DictionaryMenuIcon = ({ color }: { color: string }) => (
  <MaterialCommunityIcons name="notebook-outline" size={24} color={color} />
);

export const ChallengeMenuIcon = ({ color }: { color: string }) => (
  <FontAwesome6 name="star" size={24} color={color} />
);

export const StarIcon = ({ color, size }: { color: string; size: number }) => (
  <FontAwesome name="star" size={size} color={color} />
);

export const TrainingMenuIcon = ({ color }: { color: string }) => (
  <Ionicons name="camera-outline" size={24} color={color} />
);

export const ProfileMenuIcon = ({ color }: { color: string }) => (
  <Ionicons name="person-outline" size={24} color={color} />
);

export const RankingMenuIcon = ({ color }: { color: string }) => (
  <Ionicons name="trophy-outline" size={24} color={color} />
);

export const BackArrowIcon = () => (
  <Ionicons name="arrow-back-outline" size={24} color="white" />
);

export const ChevronForwardIcon = () => (
  <Ionicons name="chevron-forward-sharp" size={24} color={colors.shadowGray} />
);

interface BulbIconProps {
  on?: boolean;
  color?: string;
}
export const BulbIcon = ({ on = true, color = colors.white }: BulbIconProps) =>
  on ? (
    <MaterialCommunityIcons name="lightbulb-on" size={40} color={color} />
  ) : (
    <MaterialCommunityIcons name="lightbulb-off" size={40} color={color} />
  );

export const CameraSwitchIcon = () => (
  <Ionicons name="camera-reverse" size={36} color="white" />
);

export const SearchIcon = ({ color }: { color: string }) => (
  <Feather name="search" size={18} color={color} />
);

export const GridIcon = ({ color }: { color: string }) => (
  <MaterialCommunityIcons name="view-grid-outline" size={24} color={color} />
);

export const ListIcon = ({ color }: { color: string }) => (
  <MaterialCommunityIcons name="format-list-bulleted" size={24} color={color} />
);

export const PlayIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name="play" size={size} color={color} />
);

export const CloseIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name="close" size={size} color={color} />
);

export const ClockIcon = ({ color, size }: { color: string; size: number }) => (
  <FontAwesome6 name="clock" size={size} color={color} />
);

export const BlockedIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <MaterialIcons name="block" size={size} color={color} />;

export const ScrollTopIcon = ({
  color = colors.white,
  size = 24,
}: {
  color?: string;
  size?: number;
}) => <Ionicons name="arrow-up" size={size} color={color} />;

export const VolumeIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <FontAwesome6 name="volume-high" size={size} color={color} />;

export const InfoIcon = ({ color, size }: { color: string; size: number }) => (
  <MaterialCommunityIcons name="information" size={size} color={color} />
);

export const BellIcon = ({ color, size }: { color: string; size: number }) => (
  <FontAwesome name="bell" size={size} color={color} />
);

export const CheckmarkIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <MaterialCommunityIcons name="check-bold" size={size} color={color} />;

export const CrossIcon = ({ color, size }: { color: string; size: number }) => (
  <MaterialCommunityIcons name="close-thick" size={size} color={color} />
);

export const ClearFilterIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => (
  <MaterialCommunityIcons
    name="filter-remove-outline"
    size={size}
    color={color}
  />
);
