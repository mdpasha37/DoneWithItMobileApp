import React, { useContext } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

const AccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/mosh.jpg")}
        ></ListItem>
      </View>
      <View style={{ backgroundColor: colors.white, marginBottom: 30 }}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={() => <ListItemSeparator />}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                ></Icon>
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            ></ListItem>
          )}
        ></FlatList>
      </View>
      <View style={{ backgroundColor: colors.white }}>
        <ListItem
          title="Log out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d"></Icon>}
          onPress={() => logOut()}
        ></ListItem>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
