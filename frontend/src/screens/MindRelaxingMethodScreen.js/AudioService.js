// AudioService.js

import { Audio } from 'expo-av';

export const playSound = async (url) => {
  try {
    const { sound } = await Audio.Sound.createAsync(
      { uri: url }
    );
    await sound.playAsync();
    return sound;
  } catch (error) {
    console.error('Failed to play the sound:', error);
    return null;
  }
};
