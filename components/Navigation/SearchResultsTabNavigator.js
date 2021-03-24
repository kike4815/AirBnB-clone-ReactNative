import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResults from "../../screens/SearchResults";
import SearchResultsMap from "../../screens/SearchResultsMap";
import { useRoute } from "@react-navigation/native";
import { listPosts } from "../../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  const route = useRoute();
  const { guests, viewport } = route.params;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResults = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              and: {
                maxGuests: {
                  ge: guests,
                },

                latitude: {
                  between: [viewport.southwest.lat, viewport.northeast.lat],
                },
                longitude: {
                  between: [viewport.southwest.lng, viewport.northeast.lng],
                },
              },
            },
          })
        );
        setPosts(postResults.data.listPosts.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#f15454",
        indicatorStyle: {
          backgroundColor: "#f15454",
        },
      }}
    >
      <Tab.Screen name={"List"}>
        {() => <SearchResults posts={posts} />}
      </Tab.Screen>
      <Tab.Screen name={"map"}>
        {() => <SearchResultsMap posts={posts} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
