import { StyleSheet } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabThreeScreen({
  navigation,
}: RootTabScreenProps<"TabThree">) {
  return (
    <View style={styles.container}>
      <EditScreenInfo path="/screens/TabThreeScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
});
