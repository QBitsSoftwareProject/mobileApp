import { View, Text, Pressable, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../EduContentScreen/AllContent/style";
import { SafeAreaView } from "react-native-safe-area-context";

// components
import SearchBarComponent from "../../components/SearchBar/SearchBar";
import SearchAndCategories from "../../components/SearchAndCategories/SearchAndCategories";
import Carousel from "../../components/Carousel/Carousel";
import Categories from "../../components/Categories/Categories";
import Audios from "../../components/AudioList/Audios";
import { getVideos } from "../../services/educationalServices/educationalServices";
import VideoItem from "./VideoContent/VideoItem/VideoItem";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import { useNavigation } from "@react-navigation/native";
// components

const EduContent = () => {

  const navigation = useNavigation();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response;
        response = await getVideos();
        if (response) {
          setVideos(response.data.slice(0, 3));
        } else {
          setVideos([]);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <FlatList
          data={[{ key: "unique-key" }]}
          renderItem={() => {
            return (
              <View style={{ marginBottom: 90 }}>
                <View>
                  <HeaderSub back={"HomeScreen"} />
                </View>
                <View style={{ zIndex: 100 }}>
                  {/*categories */}
                  <SearchAndCategories currentView={"HomeScreen"} />
                  {/*categories */}
                </View>
                <SafeAreaView>
                  <Text style={styles.mainHeading}>Featured Resurces</Text>
                  <View>
                    <Carousel />
                  </View>
                  <Text style={styles.mainHeading2}>Recent Uploaded Videos</Text>
                  <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
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
                  <Text style={[styles.mainHeading2, { marginTop: 40 }]}>
                    Listen to Calm yourself
                  </Text>
                  <View>
                    <Audios />
                  </View>
                </SafeAreaView>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default EduContent;
