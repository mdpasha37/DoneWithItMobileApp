import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  text: {
    // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default styles;
