import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen } from "../../screens/Login";
import { SignUpScreen } from "../../screens/SignUp";

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

// export function HomeNavigator() {
//   console.log("HomeNavigator");
// }

// export function ProfileNavigator() {
//   console.log("HomeNavigator");
// }
