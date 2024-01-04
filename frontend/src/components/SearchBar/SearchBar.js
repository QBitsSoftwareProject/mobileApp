import { View } from "react-native";
import React, { Component } from "react";
import styles from "./SearchBarStyles";

// search bar
import SearchBar from "react-native-dynamic-search-bar";
// search bar

const SearchBarComponent = () => {
  return (
    
    <View>
      <SearchBar
        style={styles.searchBar}
        placeholder="Search..."
        onPress={() => alert("onPress")}
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
};

export default SearchBarComponent;
