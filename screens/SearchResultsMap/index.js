import React, { useState, useEffect, useRef } from "react";
import { FlatList, useWindowDimensions, View } from "react-native";
import MapView from "react-native-maps";
import places from "../../assets/data/feed";
import CustomMarker from "../../components/CustomMarker";
import PostCarouselItem from "../../components/PostCarouselItem";

const SearchResultsMap = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const width = useWindowDimensions().width;
  const flatlist = useRef();
  const map = useRef();

  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
  const onViewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPlaceId = viewableItems[0].item;
      setSelectedPlace(selectedPlaceId.id);
    }
  });

  useEffect(() => {
    if (!selectedPlace || !flatlist) {
      return;
    }
    const index = places.findIndex((place) => place.id === selectedPlace);
    flatlist.current.scrollToIndex({ index });

    const selPlace = places[index];
    const region = {
      latitude: selPlace.coordinate.latitude,
      longitude: selPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
  }, [selectedPlace]);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapView
        ref={map}
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
      <View style={{ position: "absolute", bottom: 40 }}>
        <FlatList
          ref={flatlist}
          data={places}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 70}
          snapToAlignment="center"
          decelerationRate="fast"
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
