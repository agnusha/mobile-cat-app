import { ListItem, SearchBar, Badge } from "@rneui/base";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { IsongsterrTabs } from "../models/TabInterfaces";
import { songsterrSearch } from "../services/songSearchService";
import { useEffect } from "react";

export default function TabTwoScreen() {
  const [tabs, setTabs] = useState<IsongsterrTabs>();
  const [search, setSearch] = useState("");

  const updateSearch = (textSearch: string) => {
    setSearch(textSearch);
    searchApi();
  };

  const searchApi = async () => {
    const results = await songsterrSearch(search);
    setTabs(results ?? []);
    console.log("Tabs", results);
  };

  useEffect(() => {
    searchApi("Alice");
  }, []);

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
        <Text style={styles.title}>Tabs</Text>

        <ScrollView>
          {tabs?.map((tab, i) => (
            <ListItem key={i} bottomDivider>
              <Badge
                value={i + 1}
                badgeStyle={{ backgroundColor: "#db7093" }}
                textStyle={{ color: "#fff" }}
                containerStyle={{ marginTop: -20 }}
              />

              <ListItem.Content>
                <ListItem.Title>{tab.artist}</ListItem.Title>
                <ListItem.Subtitle>{tab.defaultTrack}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
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
