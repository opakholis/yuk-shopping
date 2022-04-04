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

export function SignupScreen({ navigation }) {
  const auth = useAuth();

  const [name, setName] = React.useState("");
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
            Hello! {"\n"}Signup to {"\n"}get started
          </TextNative>
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
              style="text-sm text-zinc-500"
              label="By signin up, you're agree to our "
            />
            <TextLink
              onPress={() => console.log("Terms & Conditions")}
              label="Terms & Conditions"
            />
            <Text style="text-sm text-zinc-500" label=" and " />
            <TextLink
              onPress={() => console.log("Privacy Policy")}
              label="Privacy Policy"
            />
          </View>
          <Button
            onPress={() => auth.signupWithEmail(email, password, name)}
            label="Continue"
            primary
          />

          <View style={tw`flex-row text-center justify-center my-6`}>
            <Text
              style="text-sm text-zinc-500"
              label="Joined us before? "
            />
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
