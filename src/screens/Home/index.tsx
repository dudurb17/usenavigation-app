import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../navigation/types/RoutesParams";

export function Home() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <Button
        title="About"
        onPress={() => {
          navigation.navigate("About", { name: "Eduardo" });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
