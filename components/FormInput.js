import { View, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "twrnc";

export function FormInput(props) {
  return (
    <View style={tw`flex-row items-center w-full mb-6`}>
      <MaterialIcons name={props.icon} size={20} style={tw`text-zinc-500`} />
      <TextInput
        {...props}
        style={[
          tw`flex-grow border-b-2 border-zinc-100 ml-4 py-2`,
          { fontFamily: "Poppins_400Regular" },
        ]}
      />
    </View>
  );
}
