import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";

const Post = (props) => {
  const { post } = props;

  return (
    <ScrollView>
      <View style={styles.container}>
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
        <Text style={styles.description}>{post.description}</Text>
      </View>
    </ScrollView>
  );
};

export default Post;
