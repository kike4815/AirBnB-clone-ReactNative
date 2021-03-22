import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import Router from "./components/Navigation/Router";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
Amplify.configure(config);

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
}
export default withAuthenticator(App);
