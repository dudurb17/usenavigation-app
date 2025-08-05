import React, { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import About from "../../screens/About";
import Contact from "../../screens/Contact";
import Login from "../../screens/Login";
import { AuthContext } from "../../contexts/AuthContext";

const DrawerContent = (props: DrawerContentComponentProps) => {
  const { setIsLoggedIn } = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/114515828?v=4&size=64",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Eduardo Robetti Bedin</Text>
        <Text style={styles.email}>eduardo.robettibedin@gmail.com</Text>
      </View>

      <View style={{ flex: 1, paddingTop: 10 }}>
        <DrawerItemList {...props} />
      </View>

      <DrawerItem
        label="Logout"
        icon={({ color, size }) => (
          <Ionicons name="exit-outline" size={size} color={color} />
        )}
        onPress={() => {
          setIsLoggedIn(false);
        }}
      />
    </DrawerContentScrollView>
  );
};

export default function Drawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "tomato",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "#333",
      }}
    >
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="call-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#eee",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
});
