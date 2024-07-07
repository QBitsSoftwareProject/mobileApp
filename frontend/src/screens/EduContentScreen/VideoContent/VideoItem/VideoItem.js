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
// favorites

const VideoItem = ({ user, item, callTask, screen, actionStateFunction, actState }) => {

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // favorite video
        if (user.favVideos && (user.favVideos).includes(item._id)) {
          setIsFavorite(true)
        } else {
          setIsFavorite(false)
        }
        // favorite video
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUserData();
  }, [actionState]);

  const [Isfavorite, setIsFavorite] = useState(false);
  const [actionState, setActionState] = useState(false);


  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (status.durationMillis) {
      setDuration(status.durationMillis / 1000);
    }
  }, [status]);

  const handlePlayPress = () => {
    if (screen == "videoStack") {
      callTask();
    }

    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const editFavorites = () => {
    let newVideoFavs = [];
    if (user.favVideos && (user.favVideos).includes(item._id)) {
      newVideoFavs = (user.favVideos).filter(favId => favId !== item._id);
      setIsFavorite(false);
    } else if (user.favVideos && !(user.favVideos).includes(item._id)) {
      newVideoFavs = [item._id, ...user.favVideos];
      setIsFavorite(true);
    }
    editFavoriteVideos(user._id, newVideoFavs);
    actionStateFunction(!actState);
    setActionState(!actionState);
  }

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
                (Isfavorite) ? (<Image source={favorite} style={{ width: 25, height: 28 }} />) : (<Image source={notFavorite} style={{ width: 25, height: 28 }} />)
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
            <Image source={playImg} style={styles.image} />
          </View>
        </TouchableOpacity>
        <View style={{ width: "100%" }}>
          <Video
            ref={video}
            source={{ uri: item.downloadURL }}
            style={{
              height: 170,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              width: "100%",
            }} // Adjust height as needed
            isMuted={false}
            resizeMode="cover"
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            onError={(e) => console.log("Video Error: ", e)}
            onFullscreenUpdate={null} // Handle fullscreen updates
          />
          {status.isLoaded ? null : (
            <Text
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: [{ translateX: -50 }, { translateY: -50 }],
              }}
            >
              Loading...
            </Text>
          )}
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
