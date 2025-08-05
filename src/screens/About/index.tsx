import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types/RoutesParams";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function About() {
  const { name }: { name: string } = (useRoute().params as {
    name: string;
  }) ?? {
    name: "Eduardo",
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: name,
    });
  }, [navigation, name]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{name}</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Contact")}
        style={{ marginTop: 20 }}
      >
        <Text>Contact</Text>
      </TouchableOpacity>
    </View>
  );
}
