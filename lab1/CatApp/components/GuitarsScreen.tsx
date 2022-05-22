import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import mainImg from "../assets/images/pushnoi.jpg";
import { Text, View } from "./Themed";

export default function GuitarsScreen({ path }: { path: string }) {
  return (
    <>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
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
        <View style={{ flexGrow: 1, flexShrink: 1, alignSelf: "center" }}>
          <Text style={{ fontSize: 15 }}>Promotions</Text>
          <Text numberOfLines={1} style={{ color: "#8f8f8f" }}>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet
          </Text>
        </View>
        <View style={[styles.centerElement, { width: 40 }]}>
          <Text
            style={{
              backgroundColor: "#ee4d2d",
              color: "#fff",
              borderRadius: 8,
              paddingVertical: 3,
              paddingHorizontal: 5,
              fontSize: 10,
            }}
          >
            240
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
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
            <MaterialCommunityIcons
              name="wunderlist"
              size={28}
              color="#26aa99"
            />
          </View>
        </View>
        <View style={{ flexGrow: 1, flexShrink: 1, alignSelf: "center" }}>
          <Text style={{ fontSize: 15 }}>Social Updates</Text>
          <Text numberOfLines={1} style={{ color: "#8f8f8f" }}>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet
          </Text>
        </View>
        <View style={[styles.centerElement, { width: 40 }]}>
          <Text
            style={{
              backgroundColor: "#ee4d2d",
              color: "#fff",
              borderRadius: 5,
              paddingVertical: 3,
              paddingHorizontal: 5,
              fontSize: 10,
            }}
          >
            99
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
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
            <SimpleLineIcons name="handbag" size={28} color="#ef5b3d" />
          </View>
        </View>
        <View style={{ flexGrow: 1, flexShrink: 1, alignSelf: "center" }}>
          <Text style={{ fontSize: 15 }}>MyEcommerce Updates</Text>
          <Text numberOfLines={1} style={{ color: "#8f8f8f" }}>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet
          </Text>
        </View>
        <View style={[styles.centerElement, { width: 40 }]}>
          <Text
            style={{
              backgroundColor: "#ee4d2d",
              color: "#fff",
              borderRadius: 5,
              paddingVertical: 3,
              paddingHorizontal: 5,
              fontSize: 10,
            }}
          >
            7
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  centerElement: { justifyContent: "center", alignItems: "center" },
  container: {
    flex: 1,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "space-between",
  },

  imageContainer: {
    alignSelf: "center",
  },

  marginContainer: {
    alignItems: "center",
    marginHorizontal: 50,
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
