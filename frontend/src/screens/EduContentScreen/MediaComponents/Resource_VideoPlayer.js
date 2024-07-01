import React, { useState, useEffect,useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { BackgroundMusicContext } from '../../../components/SettingScreen/BackgroundMusicProvider';
import { useFocusEffect } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const VideoPlayer = ({ videoSource }) => {

    const { setBackgroundMusicValid } = useContext(BackgroundMusicContext);

  useFocusEffect(
    React.useCallback(() => {
      setBackgroundMusicValid(false);
      

      return () => {
        setBackgroundMusicValid(true);
        
      };
    }, [setBackgroundMusicValid])
  );
  
    return (
        <Video
            style={styles.video}
            useNativeControls
            source={{ uri: videoSource }}
            isLooping
            resizeMode='cover'
        />
    );
};

const styles = StyleSheet.create({
    video: {
        width: "100%",
        height: "68%",
        borderRadius: 10,
    },
});

export default VideoPlayer;
