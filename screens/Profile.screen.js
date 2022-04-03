import { Text, Image, SafeAreaView, View  } from "react-native";
import tw from "twrnc";
import AppLoading from "expo-app-loading";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

import { ProfileList } from "../components/ProfileList";

import { useAuth } from "../lib/auth";
import { Button } from "../components/Button";

export function ProfileScreen() {
  const auth = useAuth();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

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
          style={[
            tw`text-base text-zinc-800 mb-4`,
            { fontFamily: "Poppins_400Regular" },
          ]}
        >
          {auth.user.name || auth.user.email}
        </Text>
      </View>
      <ProfileList icon="user" title="Personal Data" />
      <ProfileList icon="archive" title="Transactions" />
      <ProfileList icon="heart" title="Wishlist" />
      <Button label="Sign Out" onPress={() => auth.signout()} />
    </SafeAreaView>
  );
}
