import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import styles from "./AudioStyles";

import playImg from "../../assets/images/icons/player/play.png";

// audio player modal
import AudioPlayerModal from "../../screens/EduContentScreen/MediaComponents/Resource_AudioPlayerModal.js";
// audio player modal

// favorites
import favorite from "../../assets/images/favorites/favorite.png";
import notFavorite from "../../assets/images/favorites/notFavorite.png";
// favorites

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
    <>
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
      <View style={{ backgroundColor: "orange", zIndex: 150, display: "flex", alignItems: "flex-end" }}>
        <TouchableOpacity
          style={{
            height: 50,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <View style={styles.addToFavBtn}>
            <Image source={favorite} style={{ width: 25, height: 28 }} />
          </View>
        </TouchableOpacity>
      </View>
    </>

  );
}

export default AudioItem;
