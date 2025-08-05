import * as React from "react";
import MyStack from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function App() {
  return (
    <SafeAreaProvider>
      <MyStack />
    </SafeAreaProvider>
  );
}
