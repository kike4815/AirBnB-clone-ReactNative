import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DestinationSearchScreen from "../../screens/DestinationSearch";
import HomeTabNavigation from "./HomeTabNavigation";
import GuestScreen from "../../screens/Guests";
import PostScreen from "../../screens/PostScreen";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearchScreen}
          options={{
            title: "Search your destination",
          }}
        />
        <Stack.Screen
          name={"Guests"}
          component={GuestScreen}
          options={{
            title: "How many people?",
          }}
        />
        <Stack.Screen
          name={"Post"}
          component={PostScreen}
          options={{
            title: "Acomodation",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
