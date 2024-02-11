import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import styles from "./videoStyle";

// components
import SearchBarComponent from "../../../components/SearchBar/SearchBar";
import VideoItem from "./VideoItem/VideoItem";
import SearchAndCategories from "../../../components/SearchAndCategories/SearchAndCategories";
import VideoCategoryItem from "./VideoCategoryItem/VideoCategoryItem";
// components

// data
import videoData from "./VideoData";
import VideoCategoryData from "./VideoCategoryData";
// data

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
          {/* video list */}
          <View style={styles.VideoList}>
            <FlatList
              data={videoData}
              renderItem={({ item }) => {
                return <VideoItem item={item} />;
              }}
            />
          </View>
          {/* video list */}
          {/* video categories */}
          <View style={styles.VideoCategories}>
            <FlatList
              style={{ backgroundColor: "blue", flex: 1 }}
              data={VideoCategoryData}
              renderItem={({ item }) => {
                return <VideoCategoryItem item={item} />;
              }}
              horizontal={false}
            />
          </View>
          {/* video categories */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default VideoContent;
