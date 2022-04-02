import { Text, StatusBar, SafeAreaView, Pressable, View } from "react-native";
import tw from "twrnc";

import { useAuth } from "../lib/auth";

export function ProfileScreen() {
  const auth = useAuth();

  console.log(auth);
  return (
    <SafeAreaView
      style={[
        tw`bg-white flex-1 px-4`,
        { paddingTop: StatusBar.currentHeight },
      ]}
    >
      <Text>Profile</Text>
      <Pressable onPress={() => auth.signout()}>
          <Text>Sign out</Text>
      </Pressable>
    </SafeAreaView>
  );
}
