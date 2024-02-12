import { View, SafeAreaView, ScrollView, Text, FlatList } from "react-native";
import React from "react";
import styles from "./audioStyle";

// components
import SearchBarComponent from "../../../components/SearchBar/SearchBar";
import SearchAndCategories from "../../../components/SearchAndCategories/SearchAndCategories";
import AudioCategoryItem from "../AudioContent/AudioCategories/AudioCategoryItem";
import AudioItem from "../../../components/AudioList/AudioItem";
// components

// category data
import AudioCategories from "./AudioCategories/AudioCategories";
import AudioData from "./AudioData";
// category data

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
          <View style={styles.AudioCategoryContainer}>
            <FlatList
              data={AudioCategories}
              renderItem={({ item }) => {
                return <AudioCategoryItem item={item} />;
              }}
              horizontal
            />
          </View>
          {/* audio categories */}
          {/* audio items */}
          <View style={styles.AudioItemContainer}>
            <FlatList
              data={AudioData}
              renderItem={({ item }) => {
                return <AudioItem item={item} />;
              }}
            />
          </View>
          {/* audio items */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AudioContent;
