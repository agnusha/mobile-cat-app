import { StyleSheet, Button } from "react-native";
import { Text, View } from "../components/Themed";
import { songsterrSearch } from "../services/songSearchService";
import React, { useState } from "react";
import { IsongsterrTabs } from "../models/TabInterfaces";
import { SearchBar } from "@rneui/base";

export default function TabTwoScreen() {
  const [tabs, setTabs] = useState<IsongsterrTabs>();
  const [search, setSearch] = useState("");

  const updateSearch = (textSearch: string) => {
    setSearch(textSearch);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        platform="default"
        containerStyle={{ backgroundColor: "none", width: "100%" }}
        lightTheme
        onChangeText={updateSearch}
        placeholder="Type query here..."
        placeholderTextColor="#888"
        round
        showCancel
        value={search}
      />

      <View style={styles.containerContent}>
        <Text style={styles.title}>Tabs portal</Text>

        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        {tabs?.map((tab) => (
          <Text>{tab.artist}</Text>
        ))}

        <Button
          onPress={async () => {
            const results = await songsterrSearch("Alice");
            setTabs(results ?? []);
            console.log("Tabs", results);
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
  },

  containerContent: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
