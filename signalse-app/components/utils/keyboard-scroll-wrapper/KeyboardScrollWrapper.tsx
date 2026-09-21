import { KeyboardAvoidingView, NativeScrollEvent, NativeSyntheticEvent, Platform, ScrollView, StyleProp, ViewStyle } from "react-native";

interface KeyboardScrollWrapperProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    scrollRef?: React.RefObject<ScrollView | null>;
    onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

export default function KeyboardScrollWrapper({
    children,
    style,
    contentContainerStyle,
    scrollRef,
    onScroll,
}: KeyboardScrollWrapperProps) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={[{ flex: 1 }, style]}
        >
            <ScrollView
                ref={scrollRef}
                contentContainerStyle={contentContainerStyle}
                keyboardShouldPersistTaps='handled'
                showsVerticalScrollIndicator={false}
                keyboardDismissMode='interactive'
                horizontal={false}
                overScrollMode='never'
                bounces={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
            >
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}