import * as React from "react";
import tw from "twrnc";
import AppLoading from "expo-app-loading";
import {
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import { useAuth } from "../lib/auth";
import { Button } from "../components/Button";

export function DetailProduct() {
  const { user } = useAuth();
  const route = useRoute();
  const vHeight = Dimensions.get("window").height;

  const [product, setProduct] = React.useState([]);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  // useFocusEffect(
  //   React.useCallback(() => {
  //     setProduct(route.params.product);
  //   }, [])
  // );

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
      } catch (err) {
        console.error(err);
      }
    };
    return fetchData();
  }, []);

  const {
    title,
    description,
    price,
    // rating: {count, rate},
    image,
  } = product;

  if (!fontsLoaded) return <AppLoading />;
  if (!product.id) return <Loader />;

  return (
    <SafeAreaView
      style={[
        tw`bg-white flex-1 px-4`,
        { paddingTop: StatusBar.currentHeight },
      ]}
    >
      <Image
        source={{ uri: image }}
        style={[tw`w-full bg-white rounded-xl mt-4`, { height: vHeight * 0.3 }]}
        resizeMode="contain"
      />
      <Text
        numberOfLines={2}
        style={[
          tw`text-base text-zinc-800 w-3/4 my-4`,
          { fontFamily: "Poppins_600SemiBold" },
        ]}
      >
        {title}
      </Text>
      <Text style={[tw`text-lg mb-4`, { fontFamily: "Poppins_600SemiBold" }]}>
        ${price}
      </Text>
      <Text style={[tw`text-base mb-2`, { fontFamily: "Poppins_500Medium" }]}>
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
      <View style={tw`absolute bottom-0 w-full left-4`}>
        <Button
          onPress={() => console.warn("todo")}
          label="Add to cart"
          primary
        />
      </View>
    </SafeAreaView>
  );
}

function Loader(props) {
  return (
    <View style={tw`p-4`}>
      <View style={tw`bg-zinc-300/20 h-62 w-full rounded-xl mb-4`} />
      <View style={tw`bg-zinc-300/20 h-6 w-full rounded-xl mb-4`} />
      <View style={tw`bg-zinc-300/20 h-6 w-3/4 rounded-xl`} />
    </View>
  );
}
