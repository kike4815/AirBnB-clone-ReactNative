import React from 'react';
import 'react-native-gesture-handler'
import { StatusBar } from 'react-native';
import Router from './components/Navigation/Router'

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
}
