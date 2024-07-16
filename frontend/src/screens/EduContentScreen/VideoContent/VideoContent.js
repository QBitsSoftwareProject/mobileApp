import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import styles from "./videoStyle";
import VideoItem from "./VideoItem/VideoItem";
import SearchAndCategories from "../../../components/SearchAndCategories/SearchAndCategories";
import VideoCategoryItem from "./VideoCategoryItem/VideoCategoryItem";
import loadingGif from "../../../assets/animation/loading.gif";
import VideoCategoryData from "./VideoCategoryData";
import {
  getVideos,
  getVideosBySearch,
} from "../../../services/educationalServices/educationalServices";
import AppointmentHeader from "../../../components/AppointmentHeader/AppointmentHeader";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { updateTaskCompleteness } from "../../../services/taskServices/taskservice";
import { getAUser } from "../../../services/userServices/userService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const VideoContent = () => {
  const route = useRoute();

  const [videos, setVideos] = useState();

  const [loading, setLoading] = useState(true);

  const [keyword, setKeyWord] = useState("");
  const [user, setUser] = useState();
  const [userRole, setUserRole] = useState("");
  const [actionState, setActionState] = useState(false);

  useFocusEffect(
    useCallback(() => {
      console.log(actionState)
      fetchVideos()
    }, [keyword, actionState])
  );

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

  useEffect(() => {
    const fetchUserData = async () => {
      let userInfo;
      try {
        const role = await AsyncStorage.getItem("role");
        setUserRole(role);
        if (role === "regularUser") {
          userInfo = await getAUser();
          setUser(userInfo);
        } else {
          throw new Error("Invalid role");
        }

      } catch (err) {
        setError(err.message);
      }
    };
    fetchUserData();
  }, [actionState]);

  const [error, setError] = useState(null);

  //call task update if there is a task
  const callTaskUpdate = () => {
    if (route.params && route.params.taskId) {
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
          {user && videos && videos.map((item, index) => (
            <View key={index}>
              <VideoItem
                user={user}
                actionStateFunction={setActionState}
                actState={actionState}
                item={item}
                callTask={() => callTaskUpdate()}
                screen={"videoStack"}

              />
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
