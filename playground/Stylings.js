import React from "react";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

import AppText from "../app/components/AppText";

export function Borders(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "tomato",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          borderWidth: 5,
          borderColor: "tomato",
          borderRadius: 50,
          //   borderTopWidth: 20,
          //   borderTopLeftRadius: 50,
        }}
      ></View>
    </View>
  );
}

export function Shadows() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          //for ios
          shadowColor: "grey",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          //android
          elevation: 30,
        }}
      ></View>
    </View>
  );
}

export function PaddingsAndMargins() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "dodgerblue",
          //padding is the space inside the component
          //   padding: 20,
          //this applies to left and right padding
          paddingHorizontal: 20,
          //   paddingLeft: 30,
          paddingVertical: 20,
        }}
      >
        <View style={{ backgroundColor: "gold", width: 50, height: 50 }}></View>
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          //Margin is the space outside the component
          margin: 20,
        }}
      ></View>
    </View>
  );
}

export function TextStyling() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppText
        style={{
          fontSize: 30,
          //ios
          //   fontFamily: "Courier",
          //android
          fontFamily: "Roboto",
          fontStyle: "italic",
          fontWeight: "800",
          color: "tomato",
          //lowercase, uppercase, first letter is capitalize
          textTransform: "capitalize",
          textAlign: "justify",
          lineHeight: 30,

          //   textDecorationLine: "line-through",
        }}
      >
        I love React Native!. This is my first React Native app!. Here's some
        more text and some more.
        <Entypo name="mail" size={24} color="dodgerblue" />
      </AppText>
    </View>
  );
}
