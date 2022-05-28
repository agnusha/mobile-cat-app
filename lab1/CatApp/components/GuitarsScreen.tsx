import { Dialog } from "@rneui/base";
import { Avatar, Tab, TabView } from "@rneui/themed";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Guitars } from "../constants/Guitars";
import GuitarItemRow from "./GuitarItemRow";

export default function GuitarsScreen() {
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const items = Guitars;

  const toggleDialog = () => {
    setVisible(!visible);
  };

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
                <GuitarItemRow item={i} />
              ))}
            </View>
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <View style={{ width: "100%" }}>
              {items[1].map((i) => (
                <GuitarItemRow item={i} />
              ))}
            </View>
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <View>
              {items[2].map((i) => (
                <GuitarItemRow item={i} />
              ))}
            </View>
          </TabView.Item>
        </TabView>
      </>

      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="You find a toad" />
        <Avatar
          rounded
          source={{
            uri: "https://ru.meming.world/images/ru/thumb/e/e8/%D0%9F%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA_%D0%96%D0%B0%D0%B1%D0%B0_%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD.jpeg/300px-%D0%9F%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA_%D0%96%D0%B0%D0%B1%D0%B0_%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD.jpeg",
          }}
        />
        <Dialog.Actions>
          <Dialog.Button title="CANCEL" onPress={toggleDialog} />
        </Dialog.Actions>
      </Dialog>
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
