import { Image, Pressable, TextInput, View } from "react-native";
import React, { Component, useState } from "react";
import styles from "./SearchBarStyles";

// seach icon
import search_icon from "../../assets/images/icons/searchBar/search_icon.png"
// seach icon

// library search bar
// import SearchBar from "react-native-dynamic-search-bar";
// library search bar

const SearchBarComponent = ({ keyword }) => {

  return (
    <View style={styles.searchBar}>
      <TextInput placeholder="Search..." style={{ width: "90%" }} onChangeText={(text) => {
        keyword(text);
      }} />
      <Pressable>
        <Image source={search_icon} />
      </Pressable>
    </View>
  );

};

export default SearchBarComponent;
