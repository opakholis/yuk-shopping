import * as React from "react";
import tw from "twrnc";
import AppLoading from "expo-app-loading";
import {
  useWindowDimensions,
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  Pressable,
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

export function SignupScreen({ navigation }) {
  const auth = useAuth();

  const [name, setName] = React.useState("");
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
            onPress={() => auth.signupWithEmail(email, password)}
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
