import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import styles from "./AudioStyles";

import playImg from "../../assets/images/icons/player/play.png";

// audio player modal
import AudioPlayerModal from "../../screens/EduContentScreen/MediaComponents/Resource_AudioPlayerModal.js";
// audio player modal

function AudioItem({ item, onPlayPause }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePlayPause = () => {
    setModalVisible(true);
    onPlayPause();
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <TouchableOpacity style={styles.audioItem} onPress={handlePlayPause}>
      <View style={styles.playBtnSection}>
        <View style={styles.imgContainer}>
          <Image source={playImg} style={styles.image} />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",

          justifyContent: "space-between",
        }}
      >
        <View style={styles.descriptionSection}>
          <Text style={styles.audioTxt1}>{item.title}</Text>
        </View>

        <View style={{}}>
          <Text>{item.duration}</Text>
        </View>
      </View>

      <AudioPlayerModal
        visible={modalVisible}
        onClose={handleCloseModal}
        audioSource={item}
        name={item.name}
      />
    </TouchableOpacity>
  );
}

export default AudioItem;
