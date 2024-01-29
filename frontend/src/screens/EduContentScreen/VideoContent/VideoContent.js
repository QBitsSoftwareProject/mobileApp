import { View, SafeAreaView, ScrollView, Text } from "react-native";
import React from "react";

// components
import SearchBarComponent from "../../../components/SearchBar/SearchBar";
import SearchAndCategories from "../../../components/SearchAndCategories/SearchAndCategories";
// components

const VideoContent = () => {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <View style={{ zIndex: 100, marginTop: 40 }}>
            {/* search and categories */}
            <SearchBarComponent />
            <SearchAndCategories currentView={"VideoScreen"} />
            {/* search and categories */}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default VideoContent;
