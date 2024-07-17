import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import styles from "../videoStyle";
import loadingGif from "../../../../assets/animation/loading.gif";

// components
import VideoItem from "../VideoItem/VideoItem";

import HeaderSub from "../../../../components/HeaderSub/HeaderSub";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { getFilteredVideos } from "../../../../services/educationalServices/educationalServices";
import { getAUser } from "../../../../services/userServices/userService";

const FilteredVideoContent = () => {

  const route = useRoute();

  const { category } = route.params; // Retrieve the passed category name

  const [videos, setVideos] = useState();

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState();
  const [actionState, setActionState] = useState(false);

  useFocusEffect(
    useCallback(() => {
      fetchUserData();
      fetchVideos();
    }, [actionState])
  );

  const fetchVideos = async () => {
    try {
      const response = await getFilteredVideos(category);
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserData = async () => {
    let userInfo;
    try {
      userInfo = await getAUser();
      setUser(userInfo);
    } catch (err) {
      setError(err.message);
    }
  };

  const [error, setError] = useState(null);

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
      <View>
        <FlatList
          data={[{ key: "unique-key" }]}
          renderItem={() => (
            <View>
              <HeaderSub
                back={"AllVideoScreen"}
                headLine={category + " Videos"}
              />
              <View
                style={[
                  styles.VideoList,
                  { paddingHorizontal: 25, marginBottom: 50 },
                ]}
              >
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
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default FilteredVideoContent;
