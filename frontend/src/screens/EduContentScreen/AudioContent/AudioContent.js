import { View, Text, ScrollView } from "react-native";
import React from "react";

// components
import SearchBarComponent from "../../../components/SearchBar/SearchBar";
import SearchAndCategories from "../../../components/SearchAndCategories/SearchAndCategories";
// components

const AudioContent = () => {
  return (
    <ScrollView>
      <View style={{ zIndex: 100 }}>
        {/* search and categories */}
        <SearchBarComponent />
        <SearchAndCategories
          changeView={changeView}
          currentView={currentView}
        />
        {/* search and categories */}
      </View>
    </ScrollView>
  );
};

export default AudioContent;
