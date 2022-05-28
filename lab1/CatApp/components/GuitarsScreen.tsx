import { Tab, TabView } from "@rneui/themed";
import React from "react";
import { StyleSheet, View } from "react-native";
import GuitarItem from "./GuitarItemRow";

export default function GuitarsScreen({}: {}) {
  const [index, setIndex] = React.useState(0);

  var items = [
    [
      {
        id: 1,
        name: "HOFNER SUPER SOLID V2",
        description:
          "His first guitar was a HOFNER SUPER SOLID V2 with a red body and two Diamond Logo 510 pickups and is still in the Knopfler collection.",
        image: require("../assets/images/1.png"),
      },
      {
        id: 2,
        name: "GIBSON LES PAUL SPECIAL DOUBLE CUTAWAY",
        description:
          "After it for a long time (50-70s) Mark played the GIBSON LES PAUL SPECIAL DOUBLE CUTAWAY guitar, which has a cherry-colored mahogany body and two P-90 pickups.",
        image: require("../assets/images/2.jpg"),
      },
      {
        id: 3,
        name: "FENDER STRATOCASTER",
        description:
          "It was not until the late 70s that Mark Knopfler became the owner of the guitar that is associated with him and his playing, being his symbol - the red FENDER STRATOCASTER.",
        image: require("../assets/images/3.jpeg"),
      },
      {
        id: 4,
        name: "GIBSON LES PAUL STANDARD",
        description: "In parallel, Mark plays GIBSON LES PAUL STANDARD.",
        image: require("../assets/images/4.jpg"),
      },
    ],
    [
      {
        id: 1,
        name: "HOFNER SUPER SOLID V2",
        description: "Lorem ipsum dolor sit amet Lorem icpsum dolor sit amet",
        image: "2.png",
      },
      {
        id: 2,
        name: "GIBSON LES PAUL SPECIAL DOUBLE CUTAWAY",
        description:
          "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum  dolor sit amet",
        image: "2.png",
      },
      {
        id: 3,
        name: "FENDER STRATOCASTER",
        description:
          "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum  dolor sit amet",
        image: "2.png",
      },
      {
        id: 4,
        name: "GIBSON LES PAUL STANDARD",
        description:
          "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum  dolor sit amet",
        image: "2.png",
      },
    ],
    [
      {
        id: 1,
        name: "HOFNER SUPER SOLID V2",
        description: "Lorem ipsum dolor sit amet Lorem icpsum dolor sit amet",
        image: "2.png",
      },
      {
        id: 2,
        name: "GIBSON LES PAUL SPECIAL DOUBLE CUTAWAY",
        description:
          "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum  dolor sit amet",
        image: "2.png",
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
          containerStyle={{
            width: "100%",
          }}
          animationType="spring"
        >
          <TabView.Item style={{ width: "100%" }}>
            <View style={{ width: "100%" }}>
              {items[0].map((i) => (
                <GuitarItem item={i} />
              ))}
            </View>
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <View style={{ width: "100%" }}>
              {items[1].map((i) => (
                <GuitarItem item={i} />
              ))}
            </View>
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <View>
              {items[2].map((i) => (
                <GuitarItem item={i} />
              ))}
            </View>
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
