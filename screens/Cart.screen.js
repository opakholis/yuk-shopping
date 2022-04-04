import { SafeAreaView } from "react-native";
import tw from "twrnc";

import { Text } from "../components/Text";

export function CartScreen() {
  return (
    <SafeAreaView style={tw`bg-white flex-1 justify-center items-center px-4`}>
      <Text label="Cart is empty, please add some products" style='text-base text-zinc-800'/>
    </SafeAreaView>
  );
}
