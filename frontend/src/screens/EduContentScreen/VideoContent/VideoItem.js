import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";

import styles from "./VideoItemStyles";

// playbtn
import playBtn from "../../../assets/images/icons/player/play.png";
// playbtn

// dependencies

import Video from "react-native-video-player";

// dependencies

const VideoItem = ({ item }) => {
  return (
    <View>
      {/* video item */}
      <View style={styles.VideoItem}>
        <View
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <TouchableOpacity style={styles.playBtn}>
            <Image source={playBtn} />
          </TouchableOpacity>
          <Image
            source={item.thumbnail_loc}
            style={{
              width: "100%",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              position: "absolute",
            }}
          /> */}
          <Video
            source={{ uri: item.videoLocation }}
            style={{ width: 300, height: 200 }}
            controls={true}
          />
        </View>
        <View style={styles.VideoItemDetails}>
          <View style={styles.details1}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          </View>
          <View style={styles.details2}>
            <Text style={{ fontWeight: "bold" }}>10:15</Text>
          </View>
        </View>
      </View>
      {/* video item */}
    </View>
  );
};

export default VideoItem;
