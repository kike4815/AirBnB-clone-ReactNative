import React from 'react';
import { SafeAreaView,StatusBar } from 'react-native';
import HomeScreen from './screens/Home'
import Post from './screens/Post'

export default function App() {
  return (
    <>
      <StatusBar barStyle="auto" />
    <SafeAreaView>
      {/* <HomeScreen /> */}
      <Post />
    </SafeAreaView>
    </>
  );
}
