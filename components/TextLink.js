import { Pressable, Text } from "react-native";
import tw from "twrnc";

export function TextLink({ onPress, label, style, ...props }) {
  return (
    <Pressable onPress={onPress} {...props}>
      <Text
        style={[
          tw`text-sm text-purple-600 ${style}`,
          { fontFamily: "Poppins_400Regular" },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}
