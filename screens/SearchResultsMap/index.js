import React, { useState, useEffect, useRef } from "react";
import { FlatList, useWindowDimensions, View } from "react-native";
import MapView from "react-native-maps";
import CustomMarker from "../../components/CustomMarker";
import PostCarouselItem from "../../components/PostCarouselItem";

const SearchResultsMap = (props) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const { posts } = props;

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
    const index = posts.findIndex((place) => place.id === selectedPlace);
    flatlist.current.scrollToIndex({ index });

    const selPlace = posts[index];
    const region = {
      latitude: selPlace.latitude,
      longitude: selPlace.longitude,
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
        {posts.map((place, index) => (
          <CustomMarker
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
            price={place.newPrice}
            key={index}
            isSelected={place.id === selectedPlace}
            onPress={() => setSelectedPlace(place.id)}
          />
        ))}
      </MapView>
      <View style={{ position: "absolute", bottom: 40 }}>
        <FlatList
          ref={flatlist}
          data={posts}
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
