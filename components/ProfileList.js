import { Pressable, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import tw from "twrnc";

export function ProfileList({ icon, title, onPress }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Pressable
      onPress={onPress}
      style={tw`flex-row justify-start items-center py-2 mb-2`}
    >
      <Feather
        name={icon}
        size={20}
        style={tw`bg-zinc-50 p-2 rounded-lg mr-4`}
      />
      <Text
        style={[
          tw`flex-grow text-sm text-zinc-800`,
          { fontFamily: "Poppins_400Regular" },
        ]}
      >
        {title}
      </Text>
      <Feather
        name="chevron-right"
        size={20}
        style={tw`bg-zinc-50 p-2 rounded-lg`}
      />
    </Pressable>
  );
}
