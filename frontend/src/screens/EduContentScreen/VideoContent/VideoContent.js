import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, FlatList, ActivityIndicator } from "react-native";
import axios from "axios";
import styles from "./videoStyle";

// components
import SearchBarComponent from "../../../components/SearchBar/SearchBar";
import VideoItem from "./VideoItem/VideoItem";
import SearchAndCategories from "../../../components/SearchAndCategories/SearchAndCategories";
import VideoCategoryItem from "./VideoCategoryItem/VideoCategoryItem";

// data
import VideoCategoryData from "./VideoCategoryData";
import { getVideos, getVideosBySearch } from "../../../services/educationalServices/educationalServices";


const VideoContent = () => {

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [keyword, setKeyWord] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {

        let response;
        if (keyword == "") {
          response = await getVideos();
        } else {
          response = await getVideosBySearch(keyword);
        }

        if (response) {
          setVideos(response.data);
        } else {
          setVideos([]);
        }

      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, [keyword]);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 25 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={[{ key: "unique-key" }]}
          renderItem={() => (
            <View>
              <View style={{ zIndex: 100, marginTop: 40 }}>
                <SearchBarComponent keyword={setKeyWord} />
                <SearchAndCategories currentView={"VideoScreen"} />
              </View>
              <View style={styles.VideoList}>
                <FlatList
                  data={videos}
                  renderItem={({ item }) => <VideoItem item={item} />}
                  keyExtractor={(item) => {
                    // Ensure each item has a unique key
                    const key = item._id.toString();
                    return key;
                  }}
                />
              </View>
              <View style={[styles.VideoCategories, { marginBottom: 110, marginTop: -50 }]}>
                <Text style={{ fontSize: 18, marginTop: 12 }}>
                  Search by Categories
                </Text>
                <FlatList
                  style={{ flex: 1 }}
                  data={VideoCategoryData}
                  renderItem={({ item }) => <VideoCategoryItem item={item} />}
                  horizontal
                  keyExtractor={(item) => {
                    // Ensure each item has a unique key
                    const key = item.id.toString();
                    return key;
                  }}
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
