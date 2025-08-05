import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainTabs from "../tabs/MainTabs";
import About from "../../screens/About";
import { Home } from "../../screens/Home";
import Contact from "../../screens/Contact";
import Drawer from "../Drawer/Drawer";

export default function RootStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="MainTabs" component={MainTabs} /> */}
      <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}
