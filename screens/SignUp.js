import * as React from "react";
import AppLoading from "expo-app-loading";
import tw from "twrnc";
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  Pressable,
} from "react-native";
import {
  useFonts,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
} from "@expo-google-fonts/poppins";

import { FormInput } from "../components/FormInput";
import { TextLink } from "../components/TextLink";

export function SignUpScreen({ navigation }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const halfWidth = Dimensions.get("window").width / 2;

  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <SafeAreaView
      style={[tw`bg-white flex-1`, { paddingTop: StatusBar.currentHeight }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-grow mb-auto justify-end bg-white px-6`}>
          <Text
            style={[
              tw`text-4xl mt-12 mb-8 leading-relaxed`,
              { width: halfWidth, fontFamily: "Poppins_600SemiBold" },
            ]}
          >
            Hello! {"\n"}Signup to {"\n"}get started
          </Text>
          <FormInput
            icon="person-outline"
            placeholder="Full Name"
            onChangeText={(value) => setName(value)}
            value={name}
          />

          <FormInput
            icon="alternate-email"
            placeholder="Email Address"
            onChangeText={(value) => setEmail(value)}
            value={email}
            keyboardType="email-address"
          />
          <FormInput
            icon="lock-outline"
            placeholder="Password"
            onChangeText={(value) => setPassword(value)}
            value={password}
            secureTextEntry
          />
          <View style={tw`flex-row items-center w-full mb-6 flex-wrap`}>
            <Text
              style={[
                tw`text-sm text-zinc-500`,
                { fontFamily: "Poppins_400Regular" },
              ]}
            >
              By signin up, you're agree to our{" "}
            </Text>
            <TextLink
              onPress={() => console.log("Terms & Conditions")}
              label="Terms & Conditions"
            />
            <Text
              style={[
                tw`text-sm text-zinc-500`,
                { fontFamily: "Poppins_400Regular" },
              ]}
            >
              {" "}
              and{" "}
            </Text>
            <TextLink
              onPress={() => console.log("Privacy Policy")}
              label="Privacy Policy"
            />
          </View>
          <Pressable
            onPress={() => console.log("login")}
            style={tw`justify-center items-center bg-purple-600 p-4 w-full rounded-xl mb-6`}
          >
            <Text
              style={[
                tw`text-base text-white`,
                { fontFamily: "Poppins_500Medium" },
              ]}
            >
              Continue
            </Text>
          </Pressable>

          <View style={tw`flex-row text-center justify-center my-6`}>
            <Text
              style={[
                tw`text-sm text-zinc-500`,
                { fontFamily: "Poppins_400Regular" },
              ]}
            >
              Joined us before?{" "}
            </Text>
            <TextLink
              onPress={() => navigation.navigate("Login")}
              label="Login"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
