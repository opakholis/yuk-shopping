import { Image, SafeAreaView, View } from "react-native";
import tw from "twrnc";

import { ProfileList } from "../components/ProfileList";
import { Button } from "../components/Button";
import { Text } from "../components/Text";

import { useAuth } from "../lib/auth";

export function ProfileScreen() {
  const auth = useAuth();

  return (
    <SafeAreaView style={tw`bg-white flex-1 px-4`}>
      <View style={tw`justify-center items-center my-4`}>
        <View
          style={tw`w-20 h-20 rounded-3xl shadow-2xl shadow-black shadow-color-opacity-50 mb-4`}
        >
          <Image
            source={require(`../assets/images/profile.jpg`)}
            style={tw`w-20 h-20 rounded-3xl`}
            resizeMode="contain"
          />
        </View>
        <Text
          label={auth.user.name || auth.user.email}
          style="text-base text-zinc-800 mb-4"
        />
      </View>
      <ProfileList icon="user" title="Personal Data" />
      <ProfileList icon="archive" title="Transactions" />
      <ProfileList icon="heart" title="Wishlist" />
      <Button label="Sign Out" onPress={() => auth.signout()} />
    </SafeAreaView>
  );
}
