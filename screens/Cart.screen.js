import { Text, SafeAreaView } from "react-native";
import tw from "twrnc";
import AppLoading from "expo-app-loading";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

export function CartScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <SafeAreaView style={tw`bg-white flex-1 justify-center items-center px-4`}>
      <Text
        style={[
          tw`text-base text-zinc-800`,
          { fontFamily: "Poppins_400Regular" },
        ]}
      >
        Cart is empty, please add some products
      </Text>
    </SafeAreaView>
  );
}
