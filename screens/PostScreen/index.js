import React, { useState, useEffect } from "react";
import { View } from "react-native";
import DetailedPost from "../../components/DetailedPost";
import { useRoute } from "@react-navigation/native";
import { listPosts } from "../../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

const PostScreen = (props) => {
  const route = useRoute();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResults = await API.graphql(graphqlOperation(listPosts));
        setPosts(postResults.data.listPosts.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const post = posts.find((place) => place.id === route.params.postId);

  return (
    <View style={{ backgroundColor: "white" }}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;
