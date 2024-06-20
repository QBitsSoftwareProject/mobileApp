import { View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./AudioStyles";

// components
import AudioItem from "./AudioItem";
import AudioData from "./AudioData";
import { getAudios } from "../../services/educationalServices/educationalServices";
// components

export default function Audios() {

  const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null);
  const [audioData, setAudioData] = useState([]);

  useEffect(() => {
    const fetchAudioData = async () => {
      try {
        const response = await getAudios();
        setAudioData(response.data.slice(0,5));
      } catch (error) {
        console.error('Error fetching audio data:', error);
      }
    };
    fetchAudioData();
  }, []);


  const handlePlayPause = (id) => {
    setCurrentlyPlayingId((prevId) => (prevId === id ? null : id));
  };
  return (
    <View style={styles.container}>
      {audioData.map((item, index) => (
        <AudioItem
          key={index}
          item={item}
          isPlaying={currentlyPlayingId === item.id}
          onPlayPause={() => handlePlayPause(item.id)}
        />
      ))}
    </View>
  );
}
