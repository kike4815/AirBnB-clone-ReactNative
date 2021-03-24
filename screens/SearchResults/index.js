import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import Post from "../Post";
import { listPosts } from "../../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

const Search = (props) => {
  const { guests } = props;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResults = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              maxGuests: {
                ge: guests,
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
    <View>
      <FlatList data={posts} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
};

export default Search;
