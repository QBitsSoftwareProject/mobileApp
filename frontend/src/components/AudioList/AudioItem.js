import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./AudioStyles";
import { Audio } from "expo-av";

import playImg from "../../assets/images/icons/player/play.png";
import pauseImg from "../../assets/images/icons/player/pause.png";

function AudioItem({ item }) {
  // const [sound, setSound] = useState();
  // const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   return () => {
  //     if (sound) {
  //       sound.unloadAsync();
  //     }
  //   };
  // }, [sound]);

  // const playPauseSound = async () => {
  //   if (sound) {
  //     if (isPlaying) {
  //       await sound.pauseAsync();
  //     } else {
  //       await sound.playAsync();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  // const loadSound = async () => {
  //   try {
  //     const { sound } = await Audio.Sound.createAsync(
  //       { uri:item.file },
  //       { shouldPlay: false }
  //     );
  //     setSound(sound);
  //   } catch (error) {
  //     console.error("Error loading audio:", error);
  //   }
  // };

  // useEffect(() => {
  //   loadSound();
  //   return () => {
  //     if (sound) {
  //       sound.unloadAsync();
  //     }
  //   };
  // }, []);

  return (
    <View style={styles.audioItem}>
      <View style={styles.playBtnSection}>
        <TouchableOpacity>
          {/* <TouchableOpacity onPress={playPauseSound}> */}
          <View style={styles.imgContainer}>
            <Image
              source={playImg}
              // source={isPlaying ? pauseImg : playImg}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionSection}>
        <Text style={styles.audioTxt1}>{item.name}</Text>
        <Text>{item.author}</Text>
        <Text>{item.file}</Text>
        <Text>{item.duration}</Text>
      </View>
    </View>
  );
}

export default AudioItem;
