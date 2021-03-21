import React, { useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import places from "../../assets/data/feed";
import CustomMarker from "../../components/CustomMarker";

const SearchResultsMap = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {places.map((place) => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            key={place.id}
            isSelected={place.id === selectedPlace}
            onPress={() => setSelectedPlace(place.id)}
          />
        ))}
      </MapView>
    </View>
  );
};

export default SearchResultsMap;
