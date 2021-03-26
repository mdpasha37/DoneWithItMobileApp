import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = (props) => (
  <View style={styles.container}>
    <View style={styles.closeIcon}>
      <MaterialCommunityIcons name="close" color="white" size={35} />
    </View>
    <View style={styles.deleteIcon}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        color="white"
        size={35}
      />
    </View>
    <Image
      resizeMode="contain"
      style={styles.image}
      source={require("../assets/chair.jpg")}
    ></Image>
  </View>
);

const styles = StyleSheet.create({
  closeIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
