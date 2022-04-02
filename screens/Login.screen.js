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
} from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import { useAuth } from "../lib/auth";

import { FormInput } from "../components/FormInput";
import { TextLink } from "../components/TextLink";
import { Button } from "../components/Button";

export function LoginScreen({ navigation }) {
  const auth = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { width } = useWindowDimensions();

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
          <Button
            onPress={() => {
              auth.signinWithEmail(email, password);
            }}
            label="Login"
            primary
          />
          <Text
            style={[
              tw`text-sm text-zinc-500 text-center uppercase mb-6`,
              { fontFamily: "Poppins_400Regular" },
            ]}
          >
            Or
          </Text>
          <Button
            onPress={() => console.warn("Under Construction")}
            img={require("../assets/images/google.png")}
            label="Login with Google"
          />
          <View style={tw`flex-row text-center justify-center my-6`}>
            <Text
              style={[
                tw`text-sm text-zinc-500`,
                { fontFamily: "Poppins_400Regular" },
              ]}
            >
              Dont't have an account?{" "}
            </Text>
            <TextLink onPress={() => navigation.navigate("Register")} label="Register" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
