import React from "react";
import { View, StyleSheet } from "react-native";

export default function FlexBox() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center", //align items along the main or primary axis - primary axis is row
        alignItems: "center", //align items along the secondary axis
        // alignContent: "center",
        // flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          //   flexBasis: 100,
          //   flexGrow: 1,
          //   flexShrink: 1,
          width: 100,
          height: 100,
          //   alignSelf : "flex-start",
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          position: "absolute",
          top: 20,
          //   top: 20,
          //   right: 20,
          //   bottom: 20,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});
