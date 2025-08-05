import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainTabs from "../tabs/MainTabs";
import About from "../../screens/About";
import { Home } from "../../screens/Home";

export default function RootStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={MainTabs} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
