import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Post = ({ post }) => {
  const width = useWindowDimensions().width;

  navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate("Post", { postId: post.id });
  };

  return (
    <Pressable
      style={[styles.container, { width: width - 60 }]}
      onPress={goToPostPage}
    >
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{ uri: post.image }} />
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text style={styles.bedroom}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}{" "}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.price}> ${post.newPrice}</Text>/ night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Post;
