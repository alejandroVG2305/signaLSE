import { TouchableOpacity, View } from "react-native";
import { CheckmarkIcon, ClockIcon, CrossIcon, InfoIcon } from "../../Icons";
import SignVideo from "../../sign-video/SignVideo";
import { AppText } from "../../AppText";
import AppButton from "../../buttons/app_button/AppButon";
import { styles } from "./match-choice-question";
import i18n from "../../../i18n";
import { colors } from "../../../styles/colors";

export interface MatchTermItem {
  id: string;
  term: string;
}

export interface MatchVideoItem {
  id: string;
  mediaUrl: string;
}

interface Props {
  leftItems: MatchTermItem[];
  rightItems: MatchVideoItem[];
  selectedId: string | null;
  matchCorrectAnswer: Record<string, string> | null;
  matchTimeExpired: boolean;
  onItemPress: (id: string) => void;
  onCheck: () => void;
  onShowHelp: () => void;
  showTimer?: boolean;
  timeRemaining?: number;
}

export default function MatchChoiceQuestion({
  leftItems,
  rightItems,
  selectedId,
  matchCorrectAnswer,
  matchTimeExpired,
  onItemPress,
  onCheck,
  onShowHelp,
  showTimer,
  timeRemaining,
}: Props) {
  const isAnswered = matchCorrectAnswer !== null;

  return (
    <View>
      <View style={styles.helpButtonRow}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={onShowHelp}
          accessibilityRole="button"
          accessibilityLabel={i18n.t("howToPlayQ")}
        >
          <InfoIcon size={36} color={colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {rightItems.map((rightItem, index) => {
          const leftItem = leftItems[index];
          const isCorrectPair =
            isAnswered &&
            !matchTimeExpired &&
            (matchCorrectAnswer![leftItem.id] === rightItem.id ||
              matchCorrectAnswer![rightItem.id] === leftItem.id);
          return (
            <View key={rightItem.id} style={styles.row}>
              <TouchableOpacity
                activeOpacity={0.85}
                style={[
                  styles.termCard,
                  !isAnswered &&
                    leftItem.id === selectedId &&
                    styles.termCardSelected,
                  isAnswered &&
                    (isCorrectPair
                      ? styles.termCardCorrect
                      : styles.termCardWrong),
                ]}
                onPress={() => onItemPress(leftItem.id)}
                disabled={isAnswered}
                accessibilityRole="button"
                accessibilityState={{
                  selected: !isAnswered && leftItem.id === selectedId,
                  disabled: isAnswered,
                }}
                accessibilityLabel={
                  isAnswered
                    ? `${leftItem.term}. ${
                        isCorrectPair
                          ? i18n.t("correctOption")
                          : i18n.t("incorrectOption")
                      }`
                    : leftItem.term
                }
              >
                <AppText
                  style={[
                    styles.termText,
                    isAnswered &&
                      (isCorrectPair
                        ? styles.termTextCorrect
                        : styles.termTextWrong),
                  ]}
                >
                  {leftItem.term}
                </AppText>
              </TouchableOpacity>
              <View style={styles.videoWrapper}>
                <SignVideo
                  videoUrl={rightItem.mediaUrl}
                  loop
                  style={[
                    styles.video,
                    isAnswered &&
                      (isCorrectPair ? styles.videoCorrect : styles.videoWrong),
                  ]}
                />
                {isAnswered && (
                  <View
                    style={[
                      styles.resultBadge,
                      isCorrectPair
                        ? styles.resultBadgeCorrect
                        : styles.resultBadgeWrong,
                    ]}
                    accessible={false}
                    accessibilityElementsHidden={true}
                    importantForAccessibility="no-hide-descendants"
                  >
                    {isCorrectPair ? (
                      <CheckmarkIcon size={16} color={colors.darkMainBlue} />
                    ) : (
                      <CrossIcon size={16} color={colors.darkMainBlue} />
                    )}
                  </View>
                )}
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.buttonRow}>
        {showTimer && (
          <View
            style={styles.timerCompact}
            accessible={true}
            accessibilityLabel={`${timeRemaining} ${i18n.t("seconds")}`}
          >
            <ClockIcon size={16} color={colors.white} />
            <AppText>{`${timeRemaining} s`}</AppText>
          </View>
        )}
        <AppButton
          text={i18n.t("check")}
          onPress={onCheck}
          disabled={isAnswered}
          fontSize={22}
          width={200}
        />
      </View>
    </View>
  );
}
