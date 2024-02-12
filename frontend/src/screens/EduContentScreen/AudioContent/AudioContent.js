import { View, SafeAreaView, ScrollView, Text } from "react-native";
import React from "react";

// components
import SearchBarComponent from "../../../components/SearchBar/SearchBar";
import SearchAndCategories from "../../../components/SearchAndCategories/SearchAndCategories";
// components

const AudioContent = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={{ zIndex: 100, marginTop: 40 }}>
          {/* search and categories */}
          <SearchBarComponent />
          <SearchAndCategories currentView={"AudioScreen"} />
          {/* search and categories */}
          {/* audio categories */}
          <View>

          </View>
          {/* audio categories */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AudioContent;
