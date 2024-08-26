import { Stack } from "expo-router";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
