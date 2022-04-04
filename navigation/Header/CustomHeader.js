import { View, Pressable, useWindowDimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import tw from "twrnc";

import { Text } from "../../components/Text";

export function CustomHeader() {
  const navigation = useNavigation();
  const { name } = useRoute();
  const { width } = useWindowDimensions();

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
      <Text style="text-base text-zinc-800" label={name} fontWeight="medium" />
      <Entypo
        name="dots-two-horizontal"
        size={24}
        style={tw`text-zinc-800 bg-zinc-50 p-1.5 rounded-lg`}
      />
    </View>
  );
}
