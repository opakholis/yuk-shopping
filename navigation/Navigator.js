import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigator } from "./Stacks";

export function Navigator() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
