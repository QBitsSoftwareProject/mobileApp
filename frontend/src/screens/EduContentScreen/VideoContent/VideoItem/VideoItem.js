import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Video } from "expo-av";
import VideoPlayerModal from "../../MediaComponents/Resource_VideoPlayerModal"; // Import the modal component
import styles from "./VideoItemStyles";

import playImg from "../../../../assets/images/icons/player/play.png";

const VideoItem = ({ item }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (status.durationMillis) {
      setDuration(status.durationMillis / 1000);
    }
  }, [status]);

  const handlePlayPress = () => {
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

  return (
    <View>
      <View style={[styles.VideoItem, { paddingBottom: 20 }]}>
        <View
          style={{
            position: "absolute",
            zIndex: 100,
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={handlePlayPress}>
            <View style={styles.imgContainer}>
              <Image source={playImg} style={styles.image} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%" }}>
          <Video
            ref={video}
            source={{ uri: item.downloadURL }}
            style={{
              height: 200,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              width: "100%",
            }} // Adjust height as needed
            useNativeControls
            isMuted={false}
            isLooping
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
    </View>
  );
};

export default VideoItem;
