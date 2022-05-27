import { Badge, ListItem, SearchBar } from "@rneui/base";
import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { GroupedTracks } from "../models/TabInterfaces";
import { songsterrSearch } from "../services/songSearchService";

export default function TabTwoScreen() {
  const [tabs, setTabs] = useState<GroupedTracks>();
  const [search, setSearch] = useState("");

  const updateSearch = (textSearch: string) => {
    setSearch(textSearch);
    searchApi();
  };

  const searchApi = async () => {
    const results = await songsterrSearch(search);
    setTabs(results ?? {});
    console.log("Tabs", results);
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
        {tabs && (
          <ScrollView>
            {Object.entries(tabs)?.map(([artist, tabs], i) => (
              <>
                <ListItem
                  key={i}
                  bottomDivider
                  containerStyle={{
                    backgroundColor: "#db7093",
                    paddingVertical: 5,
                  }}
                >
                  <Badge
                    value={i + 1}
                    badgeStyle={{ backgroundColor: "#db7093" }}
                    textStyle={{ color: "#fff" }}
                  />

                  <ListItem.Content>
                    <ListItem.Title
                      style={{ fontWeight: "700", color: "white" }}
                    >
                      {artist}
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem>

                {tabs.map((tab, j) => (
                  <ListItem key={`${i}${j}`} bottomDivider>
                    <Badge
                      value={j + 1}
                      badgeStyle={{
                        backgroundColor: "#fff",
                        borderColor: "#db7093",
                      }}
                      textStyle={{ color: "#db7093" }}
                      containerStyle={{ marginTop: -20 }}
                    />

                    <ListItem.Content>
                      <ListItem.Title>{tab.title}</ListItem.Title>
                      <ListItem.Subtitle>
                        {tab.tracks[tab.defaultTrack].tuningEnriched?.notes}
                      </ListItem.Subtitle>
                      <ListItem.Subtitle>
                        {tab.tracks[tab.defaultTrack].tuningEnriched?.octaves}
                      </ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                ))}
              </>
            ))}
          </ScrollView>
        )}
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
});
