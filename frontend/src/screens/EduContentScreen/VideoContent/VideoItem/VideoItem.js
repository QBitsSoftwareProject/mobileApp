import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Video } from "expo-av";
import VideoPlayerModal from "../../MediaComponents/Resource_VideoPlayerModal"; // Import the modal component
import styles from "./VideoItemStyles";

import playImg from "../../../../assets/images/icons/player/play.png";

// favorites
import favorite from "../../../../assets/images/favorites/favorite.png";
import notFavorite from "../../../../assets/images/favorites/notFavorite.png";
import { editFavoriteVideos } from "../../../../services/educationalServices/educationalServices";
import Toast from "react-native-toast-message";
// favorites

const VideoItem = ({ user, item, callTask, screen, actionStateFunction, actState, section }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const video = React.useRef(null);

  const [status, setStatus] = React.useState({});

  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (status.durationMillis) {
      setDuration(status.durationMillis / 1000);
    }
  }, [status]);

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("video item fav videos:", user.favVideos)
        console.log("video item fav videos ids:", item._id)
        // favorite video
        if (user.favVideos && (user.favVideos).includes(item._id)) {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
        // favorite video
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUserData();
  }, [actionState]);

  const [error, setError] = useState(null);

  const [Isfavorite, setIsFavorite] = useState(false);
  const [actionState, setActionState] = useState(false);

  const editFavorites = async () => {
    try {
      await editFavoriteVideos(item._id);
      if (Isfavorite) {
        Toast.show({
          type: "success",
          text1: "Video removed from favorites",
        });
      } else {
        Toast.show({
          type: "success",
          text1: "Video added to favorites",
        });
      }
      actionStateFunction((prev) => !prev);
      setActionState(!actionState);
      if (section != "fav") {
        setIsFavorite((prev) => !prev); // Directly toggle the state
      }
    } catch (err) {
      console.log("failed to add to favorites,error:", err.response.data)
    }
  }

  const handlePlayPress = () => {
    if (screen == "videoStack") {
      callTask();
    }
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <View>
      <View style={[styles.VideoItem, { paddingBottom: 20 }]}>
        <View style={{ width: "100%", height: 50, position: "absolute", zIndex: 150, display: "flex", alignItems: "flex-end" }}>
          <TouchableOpacity
            onPress={() => {
              editFavorites();
            }}
            style={{
              height: 50,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <View style={styles.addToFavBtn}>
              {
                (Isfavorite) ? (<Image source={favorite} style={{ width: 21, height: 18, resizeMode: "cover" }} />) : (<Image source={notFavorite} style={{ width: 19, height: 17, resizeMode: "cover" }} />)
              }
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handlePlayPress}
          style={{
            width: "100%",
            height: 170,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            zIndex: 100,
          }}
        >
          <View style={styles.imgContainer}>
            <Image source={playImg} />
          </View>
        </TouchableOpacity>
        <View style={{ width: "100%", height: 180 }}>
          <Image source={{ uri: item.thumbnailURL }} style={{ width: "100%", height: "100%" }} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "95%",
            alignSelf: "center",
            marginTop: 5,
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: 15,
              width: "80%",
              fontWeight: "500",
            }}
          >
            {item.title}
          </Text>

          <Text style={{ fontSize: 15 }}>{formatDuration(duration)}</Text>
        </View>
      </View>

      <VideoPlayerModal
        visible={isModalVisible}
        onClose={handleModalClose}
        videoSource={item.downloadURL}
        name={item.title}
      />
    </View >
  );
};

export default VideoItem;
