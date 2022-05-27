import { Tab, Text, TabView } from "@rneui/themed";
import React from "react";
import { StyleSheet, View } from "react-native";
import GuitarItem from "./GuitarItemRow";

export default function GuitarsScreen({ path }: { path: string }) {
  const [index, setIndex] = React.useState(0);

  var items = [
    [
      {
        id: 1,
        name: "HOFNER SUPER SOLID V2",
        description: "Lorem ipsum dolor sit amet Lorem icpsum dolor sit amet",
      },
      {
        id: 2,
        name: "GIBSON LES PAUL SPECIAL DOUBLE CUTAWAY",
        description:
          "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum  dolor sit amet",
      },
      {
        id: 3,
        name: "FENDER STRATOCASTER",
        description:
          "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum  dolor sit amet",
      },
      {
        id: 4,
        name: "GIBSON LES PAUL STANDARD",
        description:
          "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum  dolor sit amet",
      },
    ],
    [
      {
        id: 1,
        name: "HOFNER SUPER SOLID V2",
        description: "Lorem ipsum dolor sit amet Lorem icpsum dolor sit amet",
      },
      {
        id: 2,
        name: "GIBSON LES PAUL SPECIAL DOUBLE CUTAWAY",
        description:
          "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum  dolor sit amet",
      },
      {
        id: 3,
        name: "FENDER STRATOCASTER",
        description:
          "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum  dolor sit amet",
      },
      {
        id: 4,
        name: "GIBSON LES PAUL STANDARD",
        description:
          "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum  dolor sit amet",
      },
    ],
    [
      {
        id: 1,
        name: "HOFNER SUPER SOLID V2",
        description: "Lorem ipsum dolor sit amet Lorem icpsum dolor sit amet",
      },
      {
        id: 2,
        name: "GIBSON LES PAUL SPECIAL DOUBLE CUTAWAY",
        description:
          "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum  dolor sit amet",
      },
      {
        id: 3,
        name: "FENDER STRATOCASTER",
        description:
          "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum  dolor sit amet",
      },
      {
        id: 4,
        name: "GIBSON LES PAUL STANDARD",
        description:
          "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum  dolor sit amet",
      },
    ],
  ];
  return (
    <>
      <>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: "white",
            height: 3,
          }}
          variant="primary"
        >
          <Tab.Item
            title="Mark Knopfler"
            titleStyle={{ fontSize: 12 }}
            icon={{
              name: "volume-medium-outline",
              type: "ionicon",
              color: "white",
            }}
          />
          <Tab.Item
            title="Eric Clapton"
            titleStyle={{ fontSize: 12 }}
            icon={{
              name: "volume-medium-outline",
              type: "ionicon",
              color: "white",
            }}
          />
          <Tab.Item
            title="David Gilmour"
            titleStyle={{ fontSize: 12 }}
            icon={{
              name: "volume-medium-outline",
              type: "ionicon",
              color: "white",
            }}
          />
        </Tab>

        <TabView
          value={index}
          onChange={setIndex}
          tabItemContainerStyle={{
            width: "100%",
          }}
          containerStyle={{
            width: "100%",
          }}
          animationType="spring"
        >
          <TabView.Item style={{ width: "100%" }}>
            <View>
              <Text>
                {items[0].map((i) => (
                  <GuitarItem item={i} />
                ))}
              </Text>
            </View>
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <Text>
              {items[1].map((i) => (
                <GuitarItem item={i} />
              ))}
            </Text>
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <Text>
              {items[2].map((i) => (
                <GuitarItem item={i} />
              ))}
            </Text>
          </TabView.Item>
        </TabView>
      </>
    </>
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
});
