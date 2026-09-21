import { Image, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global-styles";
import TrainingToolbar from "../components/training-toolbar/TrainingToolbar";
import useTrainingSessionViewModel from "../viewmodels/useTrainingSessionViewModel";
import { AppText } from "../components/AppText";
import i18n from "../i18n";
import AppButton from "../components/buttons/app_button/AppButon";
import { styles } from "../styles/training-session-view-styles";
import { CameraView } from "expo-camera";
import { AppPetCircleIndicator } from "../components/app-pet/AppPet";
import TrainingFooter from "../components/training-footer/TrainingFooter";
import { CameraSwitchIcon, StarIcon } from "../components/Icons";
import AppDialog from "../components/dialog/app-dialog/AppDialog";
import { colors } from "../styles/colors";
import AppLoadingSpinner from "../components/app-loading-spinner/AppLoadingSpinner";
import { LETTER_CLUE_IMAGES } from "../constants/letter-clue-images";
import { useEffect, useRef } from "react";
import { letterNormalizer } from "../utils/letter-normalizer";
import FinishedSessionDialog from "../components/dialog/finished-session-dialog/FinishedSessionDialog";
import { useAppAudio } from "../context/AudioContext";

export default function TrainingSession() {
  const viewModel = useTrainingSessionViewModel();
  const cameraRef = useRef<CameraView>(null);
  const isTakingPicture = useRef(false);
  const isMounted = useRef(true);

  const prevCorrect = useRef(false);
  const { playSound } = useAppAudio();
  const soundCorrect = require("../assets/sounds/correct.mp3");

  useEffect(() => {
    if (viewModel.soundEffects && viewModel.correct && !prevCorrect.current) {
      playSound(soundCorrect);
    }
    prevCorrect.current = viewModel.correct;
  }, [viewModel.correct]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleTakePicture = async () => {
    if (!cameraRef.current || isTakingPicture.current) return;
    isTakingPicture.current = true;
    try {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.75,
        base64: true,
        skipProcessing: true,
        shutterSound: false,
      });
      if (isMounted.current && photo) {
        viewModel.onPhotoTaken(photo);
      }
    } finally {
      isTakingPicture.current = false;
    }
  };

  useEffect(() => {
    if (viewModel.permission?.granted) {
      const interval = setInterval(() => {
        if (!viewModel.finished) {
          // Correct dialog on => no image is sent for evaluation
          handleTakePicture();
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, [viewModel.permission, viewModel.finished]);

  if (!viewModel.permission) {
    // Camera permissions still Loading
    return <View />;
  }

  if (!viewModel.permission.granted) {
    // Camera permissions not yet granted
    return (
      <View style={styles.permissionContainer}>
        <AppPetCircleIndicator
          style={styles.permissionPetIcon}
          accessible={false}
          accessibilityElementsHidden={true}
          importantForAccessibility="no-hide-descendants"
        />
        <AppText style={styles.permissionText}>
          {i18n.t("needCameraPermissions")}
        </AppText>
        <AppButton
          text={i18n.t("grantPermission")}
          onPress={viewModel.handleRequestPermission}
        ></AppButton>
      </View>
    );
  }

  return (
    <View style={globalStyles.flex1Container}>
      <AppLoadingSpinner isLoading={viewModel.isLoading} />
      <TrainingToolbar viewModel={viewModel} />
      <View style={styles.cameraContainer}>
        <CameraView
          style={styles.camera}
          facing={viewModel.facing}
          ref={cameraRef}
          animateShutter={false}
          accessibilityElementsHidden={true}
          importantForAccessibility="no-hide-descendants"
        />
        {viewModel.showClue && (
          <View
            style={styles.letterClueContainer}
            accessibilityElementsHidden={true}
            importantForAccessibility="no-hide-descendants"
          >
            <Image
              style={styles.letterClueImage}
              source={
                LETTER_CLUE_IMAGES[
                  letterNormalizer.normalize(
                    viewModel.getCurrentLetter().toUpperCase(),
                  )
                ]
              }
              resizeMode="contain"
            />
          </View>
        )}
        <TouchableOpacity
          style={styles.cameraSwitchButton}
          onPress={viewModel.switchCamera}
          accessibilityRole="button"
          accessibilityLabel={i18n.t("switchCamera")}
        >
          <CameraSwitchIcon />
        </TouchableOpacity>
        {!viewModel.isFreeMode && (
          <View
            style={styles.pointsContainer}
            accessible={true}
            accessibilityLabel={`${viewModel.points} ${i18n.t("points")}`}
          >
            <StarIcon size={32} color={colors.white} />
            <AppText style={styles.points}>{viewModel.points}</AppText>
          </View>
        )}
        {!!viewModel.wordsToSpell?.length && (
          <View
            style={styles.wordCounterContainer}
            accessible={true}
            accessibilityLabel={i18n.t("wordXOfY", {
              current: viewModel.currentWordIndex + 1,
              total: viewModel.wordsToSpell.length,
            })}
          >
            <AppText style={styles.wordCounter}>
              {viewModel.currentWordIndex + 1}/{viewModel.wordsToSpell.length}
            </AppText>
          </View>
        )}
      </View>
      <TrainingFooter viewModel={viewModel} />
      <AppDialog visible={viewModel.modal.showModal && !!viewModel.modal.error}>
        <AppText
          style={globalStyles.modalText}
          accessibilityRole="alert"
          accessibilityLiveRegion="assertive"
        >
          {viewModel.modal.error}
        </AppText>
        <AppButton
          text={i18n.t("close")}
          onPress={viewModel.modal.closeModal}
          backgroundColor={colors.lightMainBlue}
          textColor={colors.white}
          width={125}
          height={45}
          fontSize={16}
        />
      </AppDialog>
      <FinishedSessionDialog
        subtitle={i18n.t("allSpellingsCompleted")}
        points={viewModel.points}
        onReturn={viewModel.returnToBack}
        visible={viewModel.finished}
      />
    </View>
  );
}
