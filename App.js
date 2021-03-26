import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Switch } from "react-native";

import * as ImagePicker from "expo-image-picker";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import {
  Shadows,
  PaddingsAndMargins,
  TextStyling,
} from "./playground/Stylings";
import AppButton from "./app/components/AppButton";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import ListItem from "./app/components/ListItem";
import Icon from "./app/components/Icon";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];
export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };
  useEffect(() => {
    requestPermission();
  }, []);
  console.log("Console React native app");
  return <Screen></Screen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

// <TextInput
//         clearButtonMode="always"
//         keyboardType="numeric"
//         maxLength={10}
//         onChangeText={(text) => setFirstName(text)}
//         placeholder="First Name"
//         style={{
//           top: 20,
//           width: "80%",
//           borderBottomColor: "#ccc",
//           borderBottomWidth: 1,
//         }}
//       ></TextInput>
// <AppTextInput placeholder="Username" icon="email" />
// <Switch value={isNew} onValueChange={(item) => setIsNew(item)} />
// <AppPicker
// selectedItem={category}
// onSelectItem={(item) => setCategory(item)}
// icon="apps"
// placeholder="Category"
// items={categories}
// ></AppPicker>
// <AppTextInput icon="email" placeholder="Email" />
