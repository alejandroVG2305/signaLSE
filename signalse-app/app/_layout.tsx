import {
  Slot,
  useRootNavigationState,
  useRouter,
  useSegments,
} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/global-styles";
import { useEffect, useRef } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { AudioProvider } from "../context/AudioContext";
import {
  BackendStatusProvider,
  useBackendStatus,
} from "../context/BackendStatusContext";
import MaintenanceScreen from "../components/maintenance-screen/MaintenanceScreen";

SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const { user, isLoading } = useAuth(); // Needs to be inside of provider
  const { backendDown } = useBackendStatus();
  const router = useRouter();
  const segments = useSegments() as string[];
  const navigationState = useRootNavigationState();
  const splashHidden = useRef(false);

  const [loadedFonts, error] = useFonts({
    Poppins: Poppins_400Regular,
    PoppinsBold: Poppins_700Bold,
    PoppinsItalic: Poppins_400Regular_Italic,
  });

  const protectedGroup = [
    "(tabs)",
    "trainingSession",
    "challengeSession",
    "sign-detail",
    "profile",
  ];

  // Redirect depending on auth state
  useEffect(() => {
    if (isLoading || (!loadedFonts && !error)) return;

    if (!navigationState?.key) return;

    const inProtectedGroup = protectedGroup.includes(segments[0]);
    const inCompleteInfo = segments[1] === "completeInfo";

    if (!user && inProtectedGroup) {
      // No session and router in protected group
      router.replace("/welcome");
    } else if (user && !inProtectedGroup && !inCompleteInfo) {
      // Already session and router not in protected group -> go to app
      router.replace("/(tabs)/");
    }
    // Router already in correct view -> hide splash
    if (!splashHidden.current) {
      splashHidden.current = true;
      SplashScreen.hideAsync();
    }
  }, [user, isLoading, segments, loadedFonts, error]);

  if ((!loadedFonts && !error) || isLoading) {
    return null;
  }

  const inTabsGroup = segments[0] === "(tabs)";
  const edges = inTabsGroup
    ? (["top", "right", "left"] as const)
    : (["top", "right", "left", "bottom"] as const);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView edges={edges} style={globalStyles.flex1Container}>
        <StatusBar style="light" />
        {user && backendDown ? <MaintenanceScreen /> : <Slot></Slot>}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default function Layout() {
  return (
    <AuthProvider>
      <BackendStatusProvider>
        <AudioProvider>
          <RootLayout />
        </AudioProvider>
      </BackendStatusProvider>
    </AuthProvider>
  );
}
