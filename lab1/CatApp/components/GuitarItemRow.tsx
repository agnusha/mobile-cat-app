import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Image } from "react-native";
import { GuitarItem } from "../models/GuitarItem";
import { Text, View } from "./Themed";

export default function GuitarItemRow({ item }: { item: GuitarItem }) {
  return (
    <View
      key={item.id}
      style={{
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#808080",
        marginBottom: 2,
        height: 100,
        width: "100%",
      }}
    >
      <View style={[styles.centerElement, { width: 85 }]}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#ececec",
            padding: 7,
            borderRadius: 25,
          }}
        >
          <Image source={item.image} style={styles.image} />
        </View>
      </View>
      <View style={{ flex: 1, alignSelf: "center" }}>
        <Text style={{ fontSize: 15 }}>{item.name}</Text>
        <Text numberOfLines={3} style={{ color: "#8f8f8f" }}>
          {item.description}
        </Text>
      </View>
      <View style={[styles.centerElement]}>
        <FontAwesome.Button
          name="heart"
          size={10}
          backgroundColor="#db7093"
          color="#fff"
          style={{ marginRight: 0, marginLeft: 10 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerElement: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },

  image: {
    width: 30,
    height: 60,
  },
});
