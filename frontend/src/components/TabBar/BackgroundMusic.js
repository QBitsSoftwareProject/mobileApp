import React, { useEffect, useRef, useState } from 'react';
import { Audio } from 'expo-av'; // If using Expo, otherwise use a suitable library

const MusicPlayer = ({ play, url }) => {
  const sound = useRef(new Audio.Sound());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadSound = async () => {
      try {
        await sound.current.loadAsync({ uri: url }); // Load the sound from the provided URL
        sound.current.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        setIsLoaded(true); // Update the state to indicate the sound is loaded
      } catch (error) {
        console.error('Error loading sound', error);
      }
    };

    loadSound();

    return () => {
      sound.current.unloadAsync();
    };
  }, [url]);

  useEffect(() => {
    const controlSound = async () => {
      if (isLoaded) {
        if (play) {
          await sound.current.playAsync();
        } else {
          await sound.current.pauseAsync();
        }
      }
    };

    controlSound();
  }, [play, isLoaded]);

  const onPlaybackStatusUpdate = (status) => {
    if (status.didJustFinish && !status.isLooping) {
      sound.current.replayAsync();
    }
  };

  return null;
};

export default MusicPlayer;
