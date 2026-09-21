import { useRef, useEffect } from "react";
import { View } from "react-native";
import useChallengeSessionViewModel from "../viewmodels/useChallengeSessionViewModel";
import { globalStyles } from "../styles/global-styles";
import AppLoadingSpinner from "../components/app-loading-spinner/AppLoadingSpinner";
import ChallengeToolbar from "../components/challenge-toolbar/ChallengeToolbar";
import AppTitle from "../components/app-title/AppTitle";
import { styles } from "../styles/challenge-session-styles";
import MatchChoiceQuestion from "../components/challenge-questions/match-choice-question/MatchChoiceQuestion";
import TermChoiceQuestion from "../components/challenge-questions/term-choice-question/TermChoiceQuestion";
import SignChoiceQuestion from "../components/challenge-questions/sign-choice-question/SignChoiceQuestion";
import KeyboardScrollWrapper from "../components/utils/keyboard-scroll-wrapper/KeyboardScrollWrapper";
import {
  SanitizedIndivChoiceData,
  SanitizedSignOption,
  SanitizedTermOption,
} from "../model/domain/challenges/challenge-session";
import FinishedSessionDialog from "../components/dialog/finished-session-dialog/FinishedSessionDialog";
import MatchChoiceHelpDialog from "../components/dialog/match-choice-help-dialog/MatchChoiceHelpDialog";
import i18n from "../i18n";
import { colors } from "../styles/colors";
import AppButton from "../components/buttons/app_button/AppButon";
import { AppText } from "../components/AppText";
import AppDialog from "../components/dialog/app-dialog/AppDialog";
import { useAppAudio } from "../context/AudioContext";

export default function ChallengeSession() {
  const vm = useChallengeSessionViewModel();
  const toolbarHeightRef = useRef(0);
  const { playSound } = useAppAudio();
  const soundCorrect = require("../assets/sounds/correct.mp3");
  const soundIncorrect = require("../assets/sounds/incorrect.mp3");
  const prevCorrect = useRef(false);
  const prevIncorrect = useRef(false);

  useEffect(() => {
    const isCorrect = vm.individualAnswerCorrect === true || vm.matchAnswerCorrect === true;
    const isIncorrect = vm.individualAnswerCorrect === false || vm.matchAnswerCorrect === false;
    if (vm.soundEffects) {
      if (isCorrect && !prevCorrect.current) playSound(soundCorrect);
      if (isIncorrect && !prevIncorrect.current) playSound(soundIncorrect);
    }
    prevCorrect.current = isCorrect;
    prevIncorrect.current = isIncorrect;
  }, [vm.individualAnswerCorrect, vm.matchAnswerCorrect]);

  const renderQuestion = () => {
    if (!vm.currentQuestion) return null;
    const { type, content } = vm.currentQuestion;

    if (type === "WORD_CHOICE") {
      const data = content.data as SanitizedIndivChoiceData;
      const options = (data.options as SanitizedTermOption[]).map((o) => ({
        id: o.id,
        term: o.text,
      }));
      return (
        <TermChoiceQuestion
          mediaUrl={content.mediaUrl ?? ""}
          options={options}
          selectedId={vm.selectedOptionId}
          correctOptionId={vm.correctIndividualOptionId}
          onOptionPress={vm.handleIndividualOptionSelect}
          isAnswered={vm.individualAnswerCorrect !== null}
          isCorrect={vm.individualAnswerCorrect ?? false}
        />
      );
    }

    if (type === "SIGN_CHOICE") {
      const data = content.data as SanitizedIndivChoiceData;
      const options = (data.options as SanitizedSignOption[]).map((o) => ({
        id: o.id,
        mediaUrl: o.mediaUrl,
      }));
      return (
        <SignChoiceQuestion
          options={options}
          selectedId={vm.selectedOptionId}
          correctOptionId={vm.correctIndividualOptionId}
          onOptionPress={vm.handleIndividualOptionSelect}
          isAnswered={vm.individualAnswerCorrect !== null}
          isCorrect={vm.individualAnswerCorrect ?? false}
        />
      );
    }

    if (type === "MATCH_CHOICE") {
      return (
        <MatchChoiceQuestion
          leftItems={vm.matchLeftItems}
          rightItems={vm.matchRightItems}
          selectedId={vm.matchSelectedId}
          matchCorrectAnswer={vm.matchCorrectAnswer}
          matchTimeExpired={vm.matchTimeExpired}
          onItemPress={vm.handleMatchItemPress}
          onCheck={vm.onCheck}
          onShowHelp={() => vm.setShowMatchHelp(true)}
          showTimer={!vm.isToolbarVisible}
          timeRemaining={vm.timeRemaining}
        />
      );
    }

    return null;
  };

  return (
    <View style={globalStyles.flex1Container}>
      <AppLoadingSpinner isLoading={vm.isLoading} />
      <KeyboardScrollWrapper
        onScroll={(e) =>
          vm.onScrollUpdate(
            e.nativeEvent.contentOffset.y,
            toolbarHeightRef.current,
          )
        }
      >
        <View style={globalStyles.mainContainer}>
          <View
            onLayout={(e) => {
              toolbarHeightRef.current = e.nativeEvent.layout.height;
            }}
          >
            <ChallengeToolbar
              onClose={vm.returnToChallengeConfig}
              questionNumber={vm.questionNumber}
              totalQuestions={vm.totalQuestions}
              timeRemaining={vm.timeRemaining}
              timePerQuestion={vm.timePerQuestion}
            />
          </View>
          <AppTitle
            style={styles.questionTitle}
            accessibilityRole="header"
          >
            {vm.currentQuestion?.content.question ?? ""}
          </AppTitle>
          {renderQuestion()}
        </View>
      </KeyboardScrollWrapper>
      <AppDialog visible={vm.modal.showModal && !!vm.modal.error}>
        <AppText
          style={globalStyles.modalText}
          accessibilityRole="alert"
          accessibilityLiveRegion="assertive"
        >{vm.modal.error}</AppText>
        <AppButton
          text={i18n.t("close")}
          onPress={vm.modal.closeModal}
          backgroundColor={colors.lightMainBlue}
          textColor={colors.white}
          width={125}
          height={45}
          fontSize={16}
        />
      </AppDialog>
      <FinishedSessionDialog
        subtitle={i18n.t("allChallengesCompleted")}
        points={vm.totalPoints}
        onReturn={vm.returnToChallengeConfig}
        visible={vm.finished}
      />
      <MatchChoiceHelpDialog
        visible={vm.showMatchHelp}
        onClose={() => vm.setShowMatchHelp(false)}
      />
    </View>
  );
}
