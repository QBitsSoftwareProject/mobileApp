import React from "react";
import NavContainer from "./src/navigation/navigationContainer/NavContainer";
import { StatusBar, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "./src/components/CustomStatusBar/CustomStatusBar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="black" height={500} />
      <NavContainer />
    </View>
  );
}
