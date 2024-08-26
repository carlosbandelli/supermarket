import { Stack } from "expo-router";
import { Amplify } from "aws-amplify";
import { SafeAreaView } from "react-native";
import { Authenticator } from "@aws-amplify/ui-react-native";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);
export default function RootLayout() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <SafeAreaView>
          <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="TodoList" />
          </Stack>
        </SafeAreaView>
      </Authenticator>
    </Authenticator.Provider>
  );
}
