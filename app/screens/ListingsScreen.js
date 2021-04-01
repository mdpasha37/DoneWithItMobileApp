import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import listingsApi from "../api/listings";
import ActivityIndicator from "../components/ActivityIndicator";

import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import UseApi from "../hooks/UseApi";

// const listings = [
//   {
//     id: 1,
//     title: "Red jacket for sale",
//     price: 100,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 1000,
//     image: require("../assets/couch.jpg"),
//   },
// ];

function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = UseApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <React.Fragment>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <React.Fragment>
            <AppText>Couldn't retrieve the results</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </React.Fragment>
        )}
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              price={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      </Screen>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
