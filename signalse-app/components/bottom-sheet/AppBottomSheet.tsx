import { ReactNode, useRef, useEffect, useCallback } from "react";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { styles } from "./app-bottom-sheet-styles";

interface AppButtonSheetProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  snapPoints?: string[];
}

export default function AppBottomSheet({
  children,
  onClose,
  isOpen,
  snapPoints = ["10%", "25%", "30%", "35%", "50%"],
}: AppButtonSheetProps) {
  const sheetRef = useRef<BottomSheet>(null);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior="close"
      />
    ),
    [],
  );

  useEffect(() => {
    if (isOpen) {
      sheetRef.current?.snapToIndex(snapPoints.length - 1);
    } else {
      sheetRef.current?.close();
    }
  }, [isOpen]);

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={onClose}
      index={-1}
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.bottomSheet}
      handleIndicatorStyle={styles.indicatorStyle}
    >
      <BottomSheetView style={styles.container}>{children}</BottomSheetView>
    </BottomSheet>
  );
}
