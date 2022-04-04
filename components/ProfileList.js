import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import tw from "twrnc";

import { Text } from "./Text";

export function ProfileList({ icon, title, onPress }) {
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
      <Text label={title} style="text-sm text-zinc-800 flex-grow" />
      <Feather
        name="chevron-right"
        size={20}
        style={tw`bg-zinc-50 p-2 rounded-lg`}
      />
    </Pressable>
  );
}
