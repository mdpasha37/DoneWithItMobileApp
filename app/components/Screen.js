import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView } from "react-native";

const Screen = ({ children, style }) => (
  <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: "dodgerblue",
    flex: 1,
  },
});

export default Screen;
