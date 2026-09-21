import { Pressable, View } from "react-native";
import { globalStyles } from "../../styles/global-styles";
import { styles } from "./training-toolbar-styles";
import { BulbIcon } from "../Icons";
import TrainingWord from "../training-word/TrainingWord";
import useTrainingSessionViewModel from "../../viewmodels/useTrainingSessionViewModel";
import BackButton from "../buttons/back-button/BackButton";
import i18n from "../../i18n";

interface TrainingToolbarProps {
  viewModel: ReturnType<typeof useTrainingSessionViewModel>;
}

export default function TrainingToolbar({ viewModel }: TrainingToolbarProps) {
  return (
    <View style={[globalStyles.toolbarContainer, styles.container]}>
      <BackButton onPress={viewModel.navigateBack} />
      <TrainingWord
        word={viewModel.getCurrentTerm()}
        currentLetterIndex={viewModel.currentLetterIndex}
      />
      <Pressable
        onPress={viewModel.toggleShowClue}
        accessibilityRole="button"
        accessibilityLabel={
          viewModel.showClue ? i18n.t("hideClue") : i18n.t("showClue")
        }
        accessibilityState={{ selected: viewModel.showClue }}
      >
        <BulbIcon on={viewModel.showClue} />
      </Pressable>
    </View>
  );
}
