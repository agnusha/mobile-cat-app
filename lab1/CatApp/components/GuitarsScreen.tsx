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
        id: 5,
        name: "FENDER STRATOCASTER",
        description:
          'Eric switched to a FENDER STRATOCASTER in 1967, acquiring an instrument dubbed the "Brownie", although the neck was temporarily relocated to a FENDER TELECASTER, but then returned to its place.',
        image: require("../assets/images/3.jpeg"),
      },
      {
        id: 6,
        name: "GIBSON LES PAUL SPECIAL DOUBLE CUTAWAY",
        description:
          'in 1973, he assembled it from four different FENDER STRATOCASTER guitars from the 50s to his new "favorite" - a guitar with the name "Blackie".',
        image: require("../assets/images/6.jpg"),
      },
    ],
    [
      {
        id: 7,
        name: "Black Strat",
        description:
          "David Gilmour had a decent collection of guitars, but the Black Strat, a modified black FENDER STRATOCASTER, held a special place in it.",
        image: require("../assets/images/7.jpg"),
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
