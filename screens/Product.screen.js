import * as React from "react";
import tw from "twrnc";
import { View, Image, SafeAreaView, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Button } from "../components/Button";
import { Text } from "../components/Text";

export function DetailProduct({ navigation }) {
  const route = useRoute();
  const vHeight = Dimensions.get("window").height;

  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      if (!route.params?.id) {
        console.warn("No product id provided");
        return navigation.goBack();
      }

      await fetch(`https://fakestoreapi.com/products/${route.params.id}`)
        .then((response) => response.json())
        .then((json) => setProduct(json));
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

  if (!product.id) return <Loader />;

  return (
    <SafeAreaView style={tw`bg-white flex-1 px-4`}>
      <Image
        source={{ uri: image }}
        style={[tw`w-full bg-white rounded-xl mt-4`, { height: vHeight * 0.3 }]}
        resizeMode="contain"
      />
      <Text
        numberOfLines={2}
        style="text-base text-zinc-800 w-3/4 my-4"
        label={title}
      />
      <Text style="text-lg mb-4" label={`$${price}`} fontWeight="bold" />
      <Text style="text-base mb-2" label="Description" fontWeight="medium" />
      <Text
        numberOfLines={4}
        style="text-sm mb-4 leading-loose text-zinc-500"
        label={description}
      />
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
