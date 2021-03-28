// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import {
  NavigationContainer,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createBottomNavigator,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Screen from "./app/components/Screen";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import RegisterScreen from "./app/screens/RegisterScreen";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const FeedNavigator = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>

    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  </Screen>
);

function TweetDetails({ route }) {
  return (
    <Screen>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Tweet Details Screen {route.params.id}</Text>
      </View>
    </Screen>
  );
}
function AccountNavigator() {
  return (
    <Screen>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Account </Text>
      </View>
    </Screen>
  );
}

const Stack = createStackNavigator();
const StacktNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
      }}
      // options={({ route }) => ({
      //   title: route.params.id,
      // })}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "#000",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="TweetDetails"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="add-circle-sharp" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
