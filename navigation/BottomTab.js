import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens/Home.screen";
import { CartScreen } from "../screens/Cart.screen";
import { ProfileScreen } from "../screens/Profile.screen";

import * as Icon from "../components/icons";

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return <Icon.HomeIcon color={color} size={size} />;
          } else if (route.name === "Cart") {
            return <Icon.CartIcon color={color} size={size} />;
          } else if (route.name === "Profile") {
            return <Icon.ProfileIcon color={color} size={size} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
