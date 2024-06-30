import React from "react";
import NavContainer from "./src/navigation/navigationContainer/NavContainer";
import { StatusBar, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <NavContainer />
    </SafeAreaView>
  );
}
