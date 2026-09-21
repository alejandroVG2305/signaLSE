import {
  Modal,
  Platform,
  StatusBar,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import {
  VideoView,
  useVideoPlayer,
  VideoPlayer as ExpoVideoPlayer,
} from "expo-video";
import { CloseIcon, PlayIcon } from "../Icons";
import { colors } from "../../styles/colors";
import { constants } from "../../constants/constants";
import { styles } from "./sign-video-styles";
import Overlay from "../overlay/Overlay";
import i18n from "../../i18n";

interface SignVideoProps {
  videoUrl: string;
  style?: StyleProp<ViewStyle>;
  horizontalInset?: number;
  loop?: boolean;
  isFullscreen?: boolean;
  contentFit?: "cover" | "contain" | "fill";
  onOpenFullscreen?: () => void;
  onCloseFullscreen?: () => void;
}
export default function SignVideo({
  videoUrl,
  style,
  horizontalInset = 32,
  loop = false,
  isFullscreen = false,
  contentFit = "cover",
  onOpenFullscreen,
  onCloseFullscreen,
}: SignVideoProps) {
  const playerSize = constants.windowWidth - horizontalInset;

  const player: ExpoVideoPlayer = useVideoPlayer(videoUrl, (player) => {
    if (loop) {
      player.loop = true;
      player.play();
    } else {
      player.loop = false;
      player.muted = false;
      player.pause();
    }
  });

  const handleOpen = (): void => {
    onOpenFullscreen?.();
    player.play();
  };

  const handleClose = () => {
    onCloseFullscreen?.();
    player.pause();
    player.currentTime = 0;
  };

  return (
    <>
      <View
        style={[
          styles.container,
          { width: playerSize, height: playerSize },
          style,
        ]}
      >
        <VideoView
          style={styles.video}
          player={player}
          contentFit={contentFit}
          nativeControls={false}
          accessibilityElementsHidden={true}
          importantForAccessibility="no-hide-descendants"
          surfaceType={Platform.OS === "android" ? "textureView" : undefined}
        />
        {!loop && (
          <>
            <Overlay />
            <TouchableOpacity
              style={styles.playOverlay}
              onPress={handleOpen}
              activeOpacity={0.8}
              accessibilityRole="button"
              accessibilityLabel={i18n.t("playVideo")}
            >
              <View style={styles.playButton}>
                <PlayIcon size={32} color={colors.white} />
              </View>
            </TouchableOpacity>
          </>
        )}
      </View>
      {!loop && (
        <Modal
          visible={isFullscreen}
          animationType="fade"
          supportedOrientations={["portrait", "landscape"]}
          onRequestClose={handleClose}
        >
          <StatusBar hidden />
          <View style={styles.fullscreenContainer}>
            <VideoView
              style={styles.fullscreenContainer}
              player={player}
              contentFit="contain"
              nativeControls
              fullscreenOptions={{ enable: false }}
            />
            <TouchableOpacity
              onPress={handleClose}
              style={styles.closeButton}
              accessibilityRole="button"
              accessibilityLabel={i18n.t("close")}
            >
              <CloseIcon size={28} color={colors.white} />
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </>
  );
}
