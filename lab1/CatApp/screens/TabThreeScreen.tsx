import { StyleSheet } from "react-native";
import GuitarsScreen from "../components/GuitarsScreen";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabThreeScreen({
  navigation,
}: RootTabScreenProps<"TabThree">) {
  return (
    <View style={styles.container}>
      <GuitarsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
