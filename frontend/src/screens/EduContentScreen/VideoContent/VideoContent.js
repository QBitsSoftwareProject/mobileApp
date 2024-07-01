import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
  Image,
} from "react-native";
import styles from "./videoStyle";
import SearchBarComponent from "../../../components/SearchBar/SearchBar";
import VideoItem from "./VideoItem/VideoItem";
import SearchAndCategories from "../../../components/SearchAndCategories/SearchAndCategories";
import VideoCategoryItem from "./VideoCategoryItem/VideoCategoryItem";
import HeaderSub from "../../../components/HeaderSub/HeaderSub";
import loadingGif from "../../../assets/animation/loading.gif";
import VideoCategoryData from "./VideoCategoryData";
import {
  getVideos,
  getVideosBySearch,
} from "../../../services/educationalServices/educationalServices";
import AppointmentHeader from "../../../components/AppointmentHeader/AppointmentHeader";
import { useRoute } from "@react-navigation/native";
import { updateTaskCompleteness } from "../../../services/taskServices/taskservice";

const VideoContent = () => {
  const route = useRoute();

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

  //call task update if there is a task
  const callTaskUpdate = () => {
    console.log(route.params);
    if (route.params.taskId) {
      taskUpdate();
    }
  };

  //task completenss update
  const taskUpdate = async () => {
    try {
      await updateTaskCompleteness(route.params.taskId);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image source={loadingGif} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <AppointmentHeader
        back={"HomeScreen"}
        headLine={"Educational content"}
        subHeadLine={"Enjoy featured resource to up your mood"}
        schema={"edu"}
        keyword={setKeyWord}
      />
      <View style={{ marginHorizontal: 25, zIndex: -1 }}>
        <SearchAndCategories currentView={"VideoScreen"} />
      </View>

      <ScrollView
        style={{ paddingHorizontal: 25, zIndex: -1, marginBottom: 110 }}
      >
        <View style={styles.VideoList}>
          {videos.map((item, index) => (
            <View key={index}>
              <VideoItem item={item} callTask={() => callTaskUpdate()} />
            </View>
          ))}
        </View>

        {keyword == "" && (
          <View style={[styles.VideoCategories, { marginBottom: 300 }]}>
            <Text style={{ fontSize: 18, marginTop: 12 }}>
              Search by Categories
            </Text>
            <FlatList
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
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoContent;
