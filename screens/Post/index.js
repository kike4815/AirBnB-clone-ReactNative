import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Post = ({ post }) => {
  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate("Post", { postId: post.id });
  };
  return (
    <Pressable style={styles.container} onPress={goToPostPage}>
      <Image style={styles.image} source={{ uri: post.image }} />
      <Text style={styles.bedroom}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}{" "}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldprice}>${post.oldPrice}</Text>
        <Text style={styles.price}> ${post.newPrice}</Text>/ night
      </Text>
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </Pressable>
  );
};

export default Post;
