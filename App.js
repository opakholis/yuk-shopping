import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./lib/auth";
import { RootNavigator } from "./navigation";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
