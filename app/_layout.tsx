import tw from "@/lib/tailwind";
import { PrimaryColor } from "@/utils/utils";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <Stack
        screenOptions={{
          statusBarAnimation: "fade",
          statusBarStyle: "light",
          statusBarBackgroundColor: PrimaryColor,
          // animation: "slide_from_right",
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="home/index" />
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="auth/register" />
        <Stack.Screen name="terms_and_conditions" />
        <Stack.Screen name="privacy_policy" />
      </Stack>
    </SafeAreaView>
  );
}
