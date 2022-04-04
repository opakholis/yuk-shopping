import * as React from "react";
import tw from "twrnc";
import {
  useWindowDimensions,
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text as TextNative,
} from "react-native";

import { useAuth } from "../lib/auth";

import { FormInput } from "../components/FormInput";
import { TextLink } from "../components/TextLink";
import { Button } from "../components/Button";
import { Text } from "../components/Text";

export function LoginScreen({ navigation }) {
  const auth = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { width } = useWindowDimensions();

  return (
    <SafeAreaView
      style={[tw`bg-white flex-1`, { paddingTop: StatusBar.currentHeight }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-grow mb-auto justify-end bg-white px-6`}>
          <TextNative
            style={[
              tw`text-4xl mt-12 mb-8 leading-relaxed`,
              { width: width / 2, fontFamily: "Poppins_600SemiBold" },
            ]}
          >
            Hello Again! {"\n"}Welcome back
          </TextNative>
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
            style="text-sm text-zinc-500 text-center uppercase mb-6"
            label="or"
          />
          <Button
            onPress={() => console.warn("Under Construction")}
            logo={require("../assets/images/google.png")}
            label="Login with Google"
          />
          <View style={tw`flex-row text-center justify-center my-6`}>
            <Text
              style="text-sm text-zinc-500"
              label="Dont't have an account? "
            />
            <TextLink
              onPress={() => navigation.navigate("Register")}
              label="Register"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
