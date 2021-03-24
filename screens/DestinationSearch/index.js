import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRows from "./SuggestionRows";
import Constants from "expo-constants";

const DestinationSearch = () => {
  const [textInput, setTextInput] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          navigation.navigate("Guests", {
            viewport: details.geometry.viewport,
          });
        }}
        fetchDetails
        style={{
          textInput: styles.textInput,
        }}
        query={{
          key: Constants.manifest.extra.API_KEY,
          language: "es",
          types: "(cities)",
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRows item={item} />}
      />
    </View>
  );
};

export default DestinationSearch;
