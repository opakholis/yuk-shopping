import { Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

import { Text } from "./Text";

export function ProductItem({ item }) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Detail", { id: item.id });
  };

  return (
    <Pressable
      onPress={onPress}
      style={[
        tw`bg-white shadow-xl shadow-color-opacity-40 shadow-black rounded-xl p-4`,
      ]}
    >
      <Image
        source={{ uri: item.image }}
        style={tw`w-28 h-38 mx-auto mb-2`}
        resizeMode="contain"
      />
      <Text
        numberOfLines={1}
        style="text-zinc-800 text-sm mb-2"
        fontWeight="bold"
        label={item.title}
      />
      <Text style="text-zinc-500 text-sm" label={`$${item.price}`} />
    </Pressable>
  );
}
