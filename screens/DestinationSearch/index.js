import React, { useState } from "react";
import { View, TextInput } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRows from './SuggestionRows'

const DestinationSearch = () => {
  const [textInput, setTextInput] = useState("");

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where are you going?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            navigation.navigate('Guests')
          }}
          fetchDetails
          style={{
              textInput: styles.textInput
          }}
          query={{
            key: "AIzaSyCpGBMzkD7xUGwiACBdAct8LsptuDiK4MQ",
            language: "es",
            types:'(cities)'
          }}
          suppressDefaultStyles
          renderRow={(item) => <SuggestionRows item={item}/>}
        />
    </View>
  );
};

export default DestinationSearch;
