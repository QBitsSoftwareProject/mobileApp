import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../EduContentScreen/AllContent/style";
import { SafeAreaView } from "react-native-safe-area-context";

// components
import SearchAndCategories from "../../components/SearchAndCategories/SearchAndCategories";
import Audios from "../../components/AudioList/Audios";
import { getVideos } from "../../services/educationalServices/educationalServices";
import VideoItem from "./VideoContent/VideoItem/VideoItem";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import { useNavigation } from "@react-navigation/native";
import loadingGif from "../../assets/animation/loading.gif";
// components

const EduContent = () => {
  const screenHeight = Dimensions.get("window").height;

  const [videos, setVideos] = useState();

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

  if (!videos) {
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
      <HeaderSub
        back={"HomeScreen"}
        headLine={"Educational content"}
        subHeadLine={"Enjoy featured resource to up your mood"}
      />
      <View style={[styles.Container, { height: screenHeight - 190 }]}>
        <View>
          <SearchAndCategories currentView={"EducationalScreen"} />
        </View>

        <ScrollView>
          <View style={{ paddingHorizontal: 25, marginTop: 15 }}>
            {/* <Text style={styles.mainHeading}>Featured Resources</Text> */}

            {/* <Carousel /> */}

            <Text style={styles.mainHeading2}>Here are your favorite videos</Text>

            <View style={{ marginTop: 20 }}>
              {videos.map((item, index) => (
                <View key={index}>
                  <VideoItem item={item} screen={"allStack"} />
                </View>
              ))}
            </View>

            <Text style={[styles.mainHeading2]}>Here are your favorite audios</Text>

            <Audios />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EduContent;
