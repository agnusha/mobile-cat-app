import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Button, Image, StyleSheet } from "react-native";
import catImg from "../assets/images/cat-food-hearts-icon 1.png";
import { Text, View } from "./Themed";

export default function EditScreenInfo({ path }: { path: string }) {
  const [satiety, setSatiety] = React.useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
        <Text
          style={styles.baseText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Satiety: <b>{satiety}</b>
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={catImg} style={styles.catImage} />
      </View>

      <View style={styles.marginContainer}>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Button
          onPress={() => setSatiety(satiety + 1)}
          title="Feed"
          color="purple"
          accessibilityLabel="Feed the pet"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  imageContainer: {
    alignSelf: "center",
  },

  catImage: {
    width: 200,
    height: 200,
  },

  marginContainer: {
    marginHorizontal: 50,
  },

  rightContainer: {
    alignSelf: "flex-end",
    marginTop: 10,
  },

  baseText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
