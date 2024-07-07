import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import styles from "./AudioStyles";

import playImg from "../../assets/images/icons/player/play.png";

// audio player modal
import AudioPlayerModal from "../../screens/EduContentScreen/MediaComponents/Resource_AudioPlayerModal.js";
// audio player modal

// favorites
import favorite from "../../assets/images/favorites/favorite.png";
import notFavorite from "../../assets/images/favorites/notFavorite.png";
import { editFavoriteAudios } from "../../services/educationalServices/educationalServices.js";
// favorites

function AudioItem({ user, actionStateFunction, actState, item, onPlayPause }) {
  const [modalVisible, setModalVisible] = useState(false);

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


  const [error, setError] = useState(null);

  const editFavorites = () => {
    let newAudioFavs = [];
    if (user.favAudios && (user.favAudios).includes(item._id)) {
      console.log("present", newAudioFavs);
      newAudioFavs = (user.favAudios).filter(favId => favId !== item._id);
      setIsFavorite(false);
    } else if (user.favAudios && !(user.favAudios).includes(item._id)) {
      console.log("absent", newAudioFavs);
      newAudioFavs = [item._id, ...user.favAudios];
      setIsFavorite(true);
    }
    editFavoriteAudios(user._id, newAudioFavs);
    actionStateFunction(!actState);
    setActionState(!actionState);
  }

  const [Isfavorite, setIsFavorite] = useState(false);
  const [actionState, setActionState] = useState(false);

  const handlePlayPause = () => {
    setModalVisible(true);
    onPlayPause();
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.audioItem}>
        <TouchableOpacity onPress={handlePlayPause}>
          <View style={styles.playBtnSection}>
            <View style={styles.imgContainer}>
              <Image source={playImg} style={styles.image} />
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.descriptionSection}>
            <Text style={styles.audioTxt1}>{item.title}</Text>
          </View>
          <View>
            <Text>{item.duration}</Text>
            <TouchableOpacity
              onPress={() => {
                editFavorites();
              }}
              style={{
                marginTop: 10,
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
        </View>
        <AudioPlayerModal
          visible={modalVisible}
          onClose={handleCloseModal}
          audioSource={item}
          name={item.name}
        />
      </View>
    </>
  );
}

export default AudioItem;
