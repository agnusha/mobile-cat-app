import React from "react";
import { Animated, Button, Easing, StyleSheet } from "react-native";
import mainImg from "../assets/images/pushnoi.jpg";
import { Text, View } from "./Themed";

const spinValueHandler = new Animated.Value(0);
const spin = spinValueHandler.interpolate({
  inputRange: [0, 1],
  outputRange: ["0deg", "360deg"],
});

export default function HomeScreen({ path }: { path: string }) {
  const startImageRotateFunction = () => {
    spinValueHandler.setValue(0);
    Animated.timing(spinValueHandler, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Guitar app</Text>
      <Text
        style={styles.baseText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        App provides information about guitar tabs, favourites guitars of people
        and you can rotate Pushnoi 😂
      </Text>

      <View style={styles.marginContainer}></View>

      <View style={styles.imageContainer}>
        <Animated.Image source={mainImg} style={styles.mainImage} />
      </View>

      <View style={styles.marginContainer}>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Button
          onPress={() => {
            startImageRotateFunction();
          }}
          title="Rotate"
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
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },

  imageContainer: {
    alignSelf: "center",
  },

  mainImage: {
    width: 200,
    height: 200,
    transform: [{ rotate: spin }],
  },

  marginContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },

  baseText: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
  },

  headerText: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
