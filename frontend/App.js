import React from "react";
import NavContainer from "./src/navigation/navigationContainer/NavContainer";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavContainer />
    </View>
  );
}
