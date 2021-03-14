import React from 'react';
import { SafeAreaView,StatusBar } from 'react-native';
import HomeScreen from './screens/Home'
import Post from './screens/Post'
import feed from './assets/data/feed'
import SearchResults from './screens/SearchResults'


export default function App() {
  return (
    <>
      <StatusBar barStyle="auto" />
    <SafeAreaView>
      {/* <HomeScreen /> */}
      {/* <Post post={post1}/> */}
      <SearchResults />
    </SafeAreaView>
    </>
  );
}
