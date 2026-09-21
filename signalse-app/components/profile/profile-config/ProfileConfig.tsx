import { Image, View } from "react-native";
import { AVATAR_MAP } from "../../../constants/avatar-map";
import { styles } from "./profile-config-styles";
import AppTitle from "../../app-title/AppTitle";
import { AppText } from "../../AppText";
import i18n from "../../../i18n";
import { formatDate } from "../../../utils/date-utils";
import SectionTitle from "../../section-title/SectionTitle";
import AvatarGrid from "../avatar-grid/AvatarGrid";
import PersonalDataGrid from "../../personal-data-grid/PersonalDataGrid";
import { BellIcon, VolumeIcon } from "../../Icons";
import { colors } from "../../../styles/colors";
import AppToggle from "../../app-toggle/AppToggle";
import AppButton from "../../buttons/app_button/AppButon";

interface ProfileConfigProps {
  name: string;
  surname: string;
  username: string;
  avatar: string;
  soundEffects: boolean;
  pushNotifications: boolean;
  memberSinceDate: Date | string;
  onNameChange: (s: string) => void;
  onSurnameChange: (s: string) => void;
  onUsernameChange: (s: string) => void;
  onAvatarChange: (s: string) => void;
  onPushNotificationsChange: () => void;
  onSoundEffectsChange: () => void;
  onSaveChanges: () => void;
}

export default function ProfileConfig({
  name,
  onNameChange,
  surname,
  onSurnameChange,
  username,
  onUsernameChange,
  avatar,
  onAvatarChange,
  memberSinceDate,
  onSoundEffectsChange,
  soundEffects,
  pushNotifications,
  onPushNotificationsChange,
  onSaveChanges,
}: ProfileConfigProps) {
  return (
    <View>
      <View style={styles.profileHeaderContainer}>
        <View style={styles.avatarView}>
          <Image
            source={AVATAR_MAP[avatar]}
            style={styles.avatar}
            resizeMode="contain"
            accessible={false}
            accessibilityElementsHidden={true}
            importantForAccessibility="no-hide-descendants"
          />
        </View>
        <AppTitle style={styles.nameText} accessibilityRole="header">{`${name} ${surname}`}</AppTitle>
        <AppText>{`${i18n.t("memberSince")} ${formatDate(memberSinceDate)}`}</AppText>
      </View>
      <View style={styles.section}>
        <SectionTitle>{i18n.t("chooseYourAvatar").toUpperCase()}</SectionTitle>
        <AvatarGrid selectedAvatar={avatar} onSelect={onAvatarChange} />
      </View>
      <View style={styles.section}>
        <SectionTitle>{i18n.t("personalInfo").toUpperCase()}</SectionTitle>
        <PersonalDataGrid
          name={name}
          surname={surname}
          username={username}
          onNameChange={onNameChange}
          onSurnameChange={onSurnameChange}
          onUsernameChange={onUsernameChange}
        />
      </View>
      <View style={styles.section}>
        <SectionTitle>{i18n.t("preferences").toUpperCase()}</SectionTitle>
        <View style={styles.preferenceItem}>
          <View
            style={styles.preferenceLabelledIcon}
            accessible={true}
            accessibilityLabel={i18n.t("sounds")}
          >
            <VolumeIcon size={24} color={colors.intenseSkyBlue} />
            <AppText>{i18n.t("sounds")}</AppText>
          </View>
          <AppToggle
            value={soundEffects}
            onValueChange={onSoundEffectsChange}
            accessibilityLabel={i18n.t("sounds")}
          />
        </View>
      </View>
      <AppButton
        style={styles.button}
        text={i18n.t("saveChanges")}
        fontSize={20}
        onPress={onSaveChanges}
      />
    </View>
  );
}
