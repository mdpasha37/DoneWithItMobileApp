import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
} from "react-native";

const AppButton = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        onPress={() => console.log("Button Tapped")}
      ></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default AppButton;
