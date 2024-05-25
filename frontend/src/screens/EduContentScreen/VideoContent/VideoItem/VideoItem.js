import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Video } from "expo-av";
import styles from "./VideoItemStyles";

import { MaterialIcons } from "@expo/vector-icons";

const VideoItem = ({ item }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenUpdate = (fullscreenUpdate) => {
    switch (fullscreenUpdate.fullscreenUpdate) {
      case Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT:
        setIsFullscreen(true);
        break;
      case Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT:
        break;
      case Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS:
        setIsFullscreen(false);
        break;
      case Video.FULLSCREEN_UPDATE_PLAYER_DID_DISMISS:
        break;
    }
  };

  return (
    <View style={styles.VideoItem}>
      <View style={{ position: "relative", justifyContent: "center", marginVertical: 100 }}>
        <Video
          ref={video}
          source={item.videoLocation}
          style={{ width: "100%", height: 220, borderRadius: 10 }} // Adjust height as needed
          useNativeControls
          // resizeMode="contain"
          // shouldPlay
          isMuted={false}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          onError={(e) => console.log("Video Error: ", e)}
          onFullscreenUpdate={null} // Handle fullscreen updates
        />
        {status.isLoaded ? null : (
          <Text style={{ position: "absolute", top: "50%", left: "50%", transform: [{ translateX: -50 }, { translateY: -50 }] }}>
            Loading...
          </Text>
        )}
      </View>
      {/* Fullscreen button */}
      <TouchableOpacity
        style={{ position: "absolute", top: 10, right: 10 }}
        onPress={() => video.current.presentFullscreenPlayer()}
      >
        <MaterialIcons name="fullscreen" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default VideoItem;
