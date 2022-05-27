import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { GuitarItem } from "../models/GuitarItem";
import { Text, View } from "./Themed";

export default function GuitarItemRow({ item }: { item: GuitarItem }) {
  return (
    <TouchableOpacity
      key={item.id}
      style={{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#808080",
        marginBottom: 2,
        height: 80,
        width: "100%",
      }}
      onPress={() => {}}
    >
      <View style={[styles.centerElement, { width: 75 }]}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#ececec",
            padding: 7,
            borderRadius: 25,
          }}
        >
          <AntDesign name="tago" size={28} color="#e89b17" />
        </View>
      </View>
      <View style={{ flex: 1, alignSelf: "center" }}>
        <Text style={{ fontSize: 15 }}>{item.name}</Text>
        <Text numberOfLines={2} style={{ color: "#8f8f8f" }}>
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  centerElement: { justifyContent: "center", alignItems: "center" },
});
