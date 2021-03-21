import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
  },
  innerContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  image: {
    height: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  bedroom: {
    marginTop: 10,
    color: "#5b5b5b",
  },
  description: {
    fontSize: 15,
  },
  prices: {
    fontSize: 15,
    marginTop: 10,
  },
  oldprice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
  },
  price: {
    fontWeight: "bold",
  },
  totalPrice: {
    color: "#5b5b5b",
    textDecorationLine: "underline",
  },
});

export default styles;
