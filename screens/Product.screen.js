import * as React from "react";
import tw from "twrnc";
import AppLoading from "expo-app-loading";
import { Text, View, Image, StatusBar, SafeAreaView, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
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

export function DetailProduct() {
  const route = useRoute();
  const [product, setProduct] = React.useState([]);

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

  React.useEffect(() => {
    const fetchData = async () => {
      if (!route.params?.id) {
        console.warn("No product id provided");
        return;
      }

      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${route.params.id}`
        );
        const json = await response.json();
        setProduct(json);
        console.log(json);
      } catch (err) {
        console.error(err);
      }
    };
    return fetchData();
  }, []);

  const { title, description, price, image } = product;

  if (!fontsLoaded) return <AppLoading />;

  return (
    <SafeAreaView
      style={[
        tw`bg-white flex-1 px-4`,
        { paddingTop: StatusBar.currentHeight },
      ]}
    >
      <Image
        source={{ uri: image }}
        style={tw`w-full h-[40%] bg-white rounded-xl shadow-xl shadow-black shadow-color-opacity-50 mt-4`}
        resizeMode="contain"
      />
      <Text style={[tw`text-base mb-4`, { fontFamily: "Poppins_600SemiBold" }]}>
        Description
      </Text>
      <Text
        numberOfLines={4}
        style={[
          tw`text-sm mb-4 leading-loose text-zinc-500`,
          { fontFamily: "Poppins_400Regular" },
        ]}
      >
        {description}
      </Text>

    </SafeAreaView>
  );
}
