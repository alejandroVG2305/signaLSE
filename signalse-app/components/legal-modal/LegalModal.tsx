import { View, ScrollView, Pressable, Text } from "react-native";
import { CloseIcon } from "../Icons";
import AppButton from "../buttons/app_button/AppButon";
import AppDialog from "../dialog/app-dialog/AppDialog";
import { colors } from "../../styles/colors";
import { styles } from "./legal-modal-styles";
import i18n from "../../i18n";

type LegalType = "terms" | "privacy";

interface LegalModalProps {
  visible: boolean;
  type: LegalType | null;
  onClose: () => void;
}

const SECTIONS = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"];

export default function LegalModal({
  visible,
  type,
  onClose,
}: LegalModalProps) {
  if (!type) return null;

  const prefix =
    type === "terms" ? "termsOfServiceScreen" : "privacyPolicyScreen";
  const t = (key: string) => i18n.t(`${prefix}.${key}`);
  const title =
    type === "terms" ? i18n.t("termsOfService") : i18n.t("privatePolicy");

  return (
    <AppDialog visible={visible} onRequestClose={onClose} contentStyle={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title} accessibilityRole="header">{title}</Text>
        <Pressable
          onPress={onClose}
          accessibilityRole="button"
          accessibilityLabel={i18n.t("close")}
        >
          <CloseIcon color={colors.darkMainBlue} size={22} />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.lastUpdated}>{t("lastUpdated")}</Text>
        {SECTIONS.map((s) => (
          <View key={s}>
            <Text style={styles.sectionTitle}>{t(`${s}.title`)}</Text>
            <Text style={styles.body}>{t(`${s}.body`)}</Text>
          </View>
        ))}
      </ScrollView>

      <AppButton
        style={styles.button}
        text={i18n.t("close")}
        onPress={onClose}
        backgroundColor={colors.darkMainBlue}
        textColor={colors.white}
        fontSize={16}
      />
    </AppDialog>
  );
}
