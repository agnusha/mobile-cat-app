import React from "react";
import { StyleSheet } from "react-native";
import GuitarItem from "./GuitarItemRow";

export default function GuitarsScreen({ path }: { path: string }) {
  var items = [
    {
      id: 1,
      name: "Guitar 1",
      description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      name: "Guitar 2",
      description:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum  dolor sit amet",
    },
    {
      id: 3,
      name: "Guitar 3",
      description:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum  dolor sit amet",
    },
  ];
  return (
    <>
      {items.map((i) => (
        <GuitarItem item={i} />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "space-between",
  },

  imageContainer: {
    alignSelf: "center",
  },
});
