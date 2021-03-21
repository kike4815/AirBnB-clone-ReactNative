import React from "react";
import { View, Text } from "react-native";
import { Marker } from "react-native-maps";

const CustomMarker = (props) => {
  const { coordinate, price, isSelected, onPress } = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? "red" : "black",
          padding: 5,
          borderRadius: 20,
        }}
      >
        <Text style={{ color: isSelected ? "black" : "white" }}>{price} €</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
