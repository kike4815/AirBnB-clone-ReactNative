import React from 'react';
import { SafeAreaView,StatusBar } from 'react-native';
import HomeScreen from './screens/Home'
import Post from './screens/Post'
import feed from './assets/data/feed'
import SearchResults from './screens/SearchResults'
import DestinationSearch from './screens/DestinationSearch'
import Guest from './screens/Guests'

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      {/* <HomeScreen /> */}
      {/* <Post post={post1}/> */}
      {/* <SearchResults /> */}
      {/* <DestinationSearch /> */}
      <Guest />
    </SafeAreaView>
    </>
  );
}
