import { Pressable, Image, Text } from "react-native";
import tw from "twrnc";

export function Button({ label, logo, onPress, primary = false }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        pressed && tw`opacity-80`,
        tw.style(
          "flex-row justify-center items-center w-full rounded-xl p-4 mb-6",
          primary ? "bg-purple-600" : "bg-zinc-100"
        ),
      ]}
    >
      {logo && (
        <Image source={logo} style={tw`h-5 w-5 mr-5`} resizeMode="contain" />
      )}
      <Text
        style={[
          tw.style("text-base", primary ? "text-white" : "text-zinc-800"),
          { fontFamily: "Poppins_500Medium" },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}
