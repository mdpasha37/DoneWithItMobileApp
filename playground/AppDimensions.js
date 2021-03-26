import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function AppDimensions() {
  // console.log("React native dimensions", Dimensions.get("screen"));
  // console.log("React community hooks", useDimensions());
  // console.log("React community hooks", useDeviceOrientation());
  const { landscape } = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.contianer}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: "orange",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
