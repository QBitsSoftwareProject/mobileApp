import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./AudioStyles";

import play_img from "../../assets/images/icons/audio_player/play.png";
import pause_img from "../../assets/images/icons/audio_player/pause.png";

function AudioItem({ item }) {
  return (
      <View style={styles.audioItem}>
        {/* playbutton */}
        <View style={styles.playBtnSection}>
          <TouchableOpacity>
            <View style={styles.imgContainer}>
              <Image source={play_img} style={styles.image} />
            </View>
          </TouchableOpacity>
        </View>
        {/* playbutton */}
        {/* description */}
        <View style={styles.descriptionSection}>
          <Text style={styles.audioTxt1}>{item.name}</Text>
          <Text>{item.author}</Text>
          <Text>{item.duration}</Text>
        </View>
        {/* description */}
      </View>
  );
}

export default AudioItem;
