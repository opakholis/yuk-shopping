import { Pressable, Image, Text } from "react-native";
import tw from "twrnc";

export function Button({ label, img, onPress, primary = false }) {
  return (
    <Pressable
      onPress={onPress}
      style={tw`flex-row justify-center items-center w-full rounded-xl p-4 mb-6 ${
        primary ? "bg-purple-600" : "bg-zinc-100"
      }`}
    >
      {img && (
        <Image source={img} style={tw`h-5 w-5 mr-5`} resizeMode="contain" />
      )}
      <Text
        style={[
          tw`text-base ${primary ? "text-white" : "text-zinc-800"}`,
          { fontFamily: "Poppins_500Medium" },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}
