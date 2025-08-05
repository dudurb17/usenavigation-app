import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainTabs from "../tabs/MainTabs";
import About from "../../screens/About";
import { Home } from "../../screens/Home";
import Contact from "../../screens/Contact";

export default function RootStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}
