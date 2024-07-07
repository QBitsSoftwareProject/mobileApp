import { View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./AudioStyles";

// components
import AudioItem from "./AudioItem";
import AudioData from "./AudioData";
import { getAudios, getFavoriteAudios } from "../../services/educationalServices/educationalServices";
import { getAUser } from "../../services/userServices/userService";
// components

export default function Audios([favorites]) {

  const [user, setUser] = useState({});
  const [userRole, setUserRole] = useState("");
  const [actionState, setActionState] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      let userInfo;
      try {
        const role = await AsyncStorage.getItem("role");
        setUserRole(role);
        if (role === "regularUser") {
          userInfo = await getAUser();
          setUser(userInfo);
          setFavAudioIds(user.favAudios);
        } else {
          throw new Error("Invalid role");
        }

      } catch (err) {
        setError(err.message);
      }
    };
    fetchUserData();
  }, [actionState]);

  const [favAudioIds, setFavAudioIds] = useState([]);

  const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null);
  const [audioData, setAudioData] = useState([]);

  useEffect(() => {
    const fetchAudioData = async () => {
      try {
        const response = await getAudios();
        setAudioData(response.data);
      } catch (error) {
        console.error('Error fetching audio data:', error);
      }
    };
    fetchAudioData();
  }, []);

  //fetch favorites
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        let favAudios;
        favAudios = await getFavoriteAudios(favAudioIds);
        if (favAudios) {
          setAudioData(favAudios.data);
        } else {
          setAudioData([]);
        }
      } catch (error) {
        console.error("Error fetching audios:", error);
      }
    };
    if (favorites) {
      fetchFavorites();
    }
  }, []);
  // fetch favorites


  const handlePlayPause = (id) => {
    setCurrentlyPlayingId((prevId) => (prevId === id ? null : id));
  };
  return (
    <View style={styles.container}>
      {audioData.map((item, index) => (
        <AudioItem
          user={user}
          actionStateFunction={setActionState}
          actState={actionState}
          key={index}
          item={item}
          isPlaying={currentlyPlayingId === item.id}
          onPlayPause={() => handlePlayPause(item.id)}
        />
      ))}
    </View>
  );
}
