import { ViewProps, Modal, View, ViewStyle, ScrollView } from "react-native";
import { styles } from "./app-dialog-styles";

export interface AppDialogProps extends ViewProps {
  visible: boolean;
  contentStyle?: ViewStyle;
  scrollable?: boolean;
  onRequestClose?: () => void;
}

export default function AppDialog({
  children,
  style,
  visible,
  contentStyle,
  scrollable = false,
  onRequestClose,
  ...props
}: AppDialogProps) {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onRequestClose ?? (() => {})}
    >
      <View {...props} style={[styles.dialog, style]}>
        <View style={[styles.modalContent, contentStyle]}>
          {scrollable ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              {children}
            </ScrollView>
          ) : (
            children
          )}
        </View>
      </View>
    </Modal>
  );
}
