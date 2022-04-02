import * as React from "react";
import AppLoading from "expo-app-loading";
import tw from "twrnc";
import {
  useWindowDimensions,
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import { useAuth } from "../lib/auth";

import { FormInput } from "../components/FormInput";
import { TextLink } from "../components/TextLink";

export function LoginScreen() {
  const auth = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { width } = useWindowDimensions();
  const { navigate } = useNavigation();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
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
              { width: width / 2, fontFamily: "Poppins_600SemiBold" },
            ]}
          >
            Hello Again! {"\n"}Welcome back
          </Text>
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
          <TextLink
            onPress={() => console.log("Forgot Password")}
            label="Forgot Password?"
            style="mb-6 text-right"
          />
          <Pressable
            onPress={() => {
              auth.signinWithEmail(email, password);
            }}
            style={tw`justify-center items-center bg-purple-600 p-4 w-full rounded-xl mb-6`}
          >
            <Text
              style={[
                tw`text-white text-base`,
                { fontFamily: "Poppins_500Medium" },
              ]}
            >
              Login
            </Text>
          </Pressable>
          <Text
            style={[
              tw`text-sm text-zinc-500 text-center uppercase mb-6`,
              { fontFamily: "Poppins_400Regular" },
            ]}
          >
            Or
          </Text>
          <Pressable
            style={tw`flex-row justify-center items-center w-full bg-zinc-100 rounded-xl p-4 mb-6`}
          >
            <Image
              source={require("../assets/images/google.png")}
              style={tw`h-5 w-5 mr-5`}
              resizeMode="contain"
            />
            <Text
              style={[tw`text-zinc-800`, { fontFamily: "Poppins_400Regular" }]}
            >
              Login with Google
            </Text>
          </Pressable>
          <View style={tw`flex-row text-center justify-center my-6`}>
            <Text
              style={[
                tw`text-sm text-zinc-500`,
                { fontFamily: "Poppins_400Regular" },
              ]}
            >
              Dont't have an account?{" "}
            </Text>
            <TextLink onPress={() => navigate("Register")} label="Register" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
