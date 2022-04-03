import { Text, View, Pressable, useWindowDimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import tw from "twrnc";
import AppLoading from "expo-app-loading";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

export function CustomHeader() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  const navigation = useNavigation();
  const { name } = useRoute();
  const { width } = useWindowDimensions();

  if (!fontsLoaded) return <AppLoading />;

  return (
    <View
      style={[
        tw`w-full flex-row justify-between items-center`,
        { width: width - 30 },
      ]}
    >
      <Pressable
        onPress={() => navigation.goBack()}
        style={tw`bg-zinc-50 p-1.5 rounded-lg`}
      >
        <Entypo name="chevron-left" size={24} style={tw`text-zinc-800`} />
      </Pressable>
      <Text style={[tw`text-base`, { fontFamily: "Poppins_500Medium" }]}>
        {name}
      </Text>
      <Entypo
        name="dots-two-horizontal"
        size={24}
        style={tw`text-zinc-800 bg-zinc-50 p-1.5 rounded-lg`}
      />
    </View>
  );
}
