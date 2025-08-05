import { Home } from "../../screens/Home";
import About from "../../screens/About";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function MainTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}
