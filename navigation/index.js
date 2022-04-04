import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAuth } from "../lib/auth";

import { LoginScreen } from "../screens/Login.screen";
import { SignupScreen } from "../screens/Signup.screen";
import { DetailProduct } from "../screens/Product.screen";

import { BottomTabNavigator } from "./BottomTab";
import { CustomHeader } from "./Header/CustomHeader";

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  const auth = useAuth();

  return (
    <Stack.Navigator>
      {!auth.user ? (
        <Stack.Screen
          name="Authentication"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="MainApp"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailProduct}
            options={({ route }) => ({
              headerShadowVisible: false,
              headerBackVisible: false,
              headerTitle: () => <CustomHeader />,
            })}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={SignupScreen} />
    </Stack.Navigator>
  );
}
