import { Text, View, Button, StyleSheet } from "react-native";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

export default function Index() {
  const { signOut } = useAuthenticator();
  console.log("signOut function:", signOut);
  return (
    <View style={styles.signOutButton}>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  signOutButton: {
    alignSelf: "flex-end",
  },
});
