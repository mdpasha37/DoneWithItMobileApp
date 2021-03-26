import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

const ListingsScreen = (props) => (
  <Screen style={styles.screen}>
    <FlatList
      data={listings}
      keyExtractor={(listing) => listing.id.toString()}
      renderItem={({ item }) => (
        <Card title={item.title} price={"$" + item.price} image={item.image} />
      )}
    />
  </Screen>
);

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    paddingTop: 30,
    backgroundColor: colors.light,
  },
});
export default ListingsScreen;
