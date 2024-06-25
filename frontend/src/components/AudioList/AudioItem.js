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
    <View style={styles.audioItem}>
      <View style={styles.playBtnSection}>
        <TouchableOpacity onPress={handlePlayPause}>
          <View style={styles.imgContainer}>
            <Image
              source={playImg}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionSection}>
        <Text style={styles.audioTxt1}>{item.title}</Text>
      </View>
      <View style={[styles.timeDuration, { position: "absolute", marginLeft: 335, marginTop: 50 }]}>
        <Text style={{ textAlign: "right", margin: 10 }}>{item.duration}</Text>
      </View>
      <AudioPlayerModal
        visible={modalVisible}
        onClose={handleCloseModal}
        audioSource={item}
        name={item.name}
      />
    </View>
  );
}

export default AudioItem;
