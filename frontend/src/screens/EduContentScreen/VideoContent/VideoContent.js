import React from "react";
import { View, SafeAreaView, Text, FlatList } from "react-native";
import styles from "./videoStyle";

// components
import SearchBarComponent from "../../../components/SearchBar/SearchBar";
import VideoItem from "./VideoItem/VideoItem";
import SearchAndCategories from "../../../components/SearchAndCategories/SearchAndCategories";
import VideoCategoryItem from "./VideoCategoryItem/VideoCategoryItem";

// data
import videoData from "./VideoData";
import VideoCategoryData from "./VideoCategoryData";

const VideoContent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={[{ key: "unique-key" }]}
          renderItem={() => (
            <View>
              <View style={{ zIndex: 100, marginTop: 40 }}>
                <SearchBarComponent />
                <SearchAndCategories currentView={"VideoScreen"} />
              </View>
              <View style={styles.VideoList}>
                <FlatList
                  data={videoData}
                  renderItem={({ item }) => <VideoItem item={item} />}
                  keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
                />
              </View>
              <View style={[styles.VideoCategories, { marginBottom: 110 }]}>
                <Text style={{ fontSize: 18, margin: 12 }}>
                  Search by Categories
                </Text>
                <FlatList
                  style={{ flex: 1 }}
                  data={VideoCategoryData}
                  renderItem={({ item }) => <VideoCategoryItem item={item} />}
                  horizontal
                  keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
                />
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default VideoContent;
