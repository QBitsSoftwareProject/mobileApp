import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
// search bar
import SearchBar from "react-native-dynamic-search-bar";
// search bar

const EduContent = () => {
  return (
    <SafeAreaView>
      <SearchBar
        placeholder="Search..."
        onPress={() => alert("onPress")}
        onChangeText={(text) => console.log(text)}
      />
    </SafeAreaView>
  );
};

export default EduContent;
