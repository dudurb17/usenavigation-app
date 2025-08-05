import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../contexts/AuthContext";
import RootStack from "./stacks/RootStack";
import AuthStack from "./stacks/AuthStack";

export default function MyStack() {
  const Stack = createNativeStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLoggedIn ? (
            <Stack.Screen
              name="Root"
              component={RootStack}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="Auth"
              component={AuthStack}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
