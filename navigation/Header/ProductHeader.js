import { Text, View, Pressable, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import tw from "twrnc";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
} from "@expo-google-fonts/poppins";

export function ProductHeader() {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
  });

  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  if (!fontsLoaded) return <AppLoading />;

  return (
    <View
      style={[
        tw`w-full flex-row justify-between items-center`,
        { width: width - 35 },
      ]}
    >
      <Pressable onPress={() => navigation.goBack()}>
        <Entypo name="chevron-left" size={24} color="black" />
      </Pressable>
      <Text style={[tw`text-base`, { fontFamily: "Poppins_500Medium" }]}>
        Detail
      </Text>
      <Entypo name="dots-two-horizontal" size={24} color="black" />
    </View>
  );
}
