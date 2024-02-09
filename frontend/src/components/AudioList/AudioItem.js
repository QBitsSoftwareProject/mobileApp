import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./AudioStyles";

import playImg from "../../assets/images/icons/player/play.png";
import pauseImg from "../../assets/images/icons/player/pause.png";

// sound player
import SoundPlayer from "react-native-sound-player";
// sound player

function AudioItem({ item }) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <View style={styles.audioItem}>
      {/* playbutton */}
      <View style={styles.playBtnSection}>
        <TouchableOpacity
          onPress={async () => {
            const audio = item.file;
            try {
              if (isPlaying) {
                SoundPlayer.pause();
              } else {
                SoundPlayer.playSoundFile(audio);
              }
              setIsPlaying(!isPlaying);
            } catch (error) {
              console.error("Error playing/pausing audio:", error);
            }
          }}
        >
          <View style={styles.imgContainer}>
            <Image
              source={isPlaying ? pauseImg : playImg}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </View>
      {/* playbutton */}
      {/* description */}
      <View style={styles.descriptionSection}>
        <Text style={styles.audioTxt1}>{item.name}</Text>
        <Text>{item.author}</Text>
        <Text>{item.file}</Text>
        <Text>{item.duration}</Text>
      </View>
      {/* description */}
    </View>
  );
}

export default AudioItem;
