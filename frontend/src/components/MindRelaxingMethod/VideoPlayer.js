import React , { useState, useEffect ,useContext} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { BackgroundMusicContext } from '../SettingScreen/BackgroundMusicProvider';
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
    <View style={styles.container}>
      <Video
        style={styles.video}
        useNativeControls
        source={{ uri: videoSource }}
        // resizeMode="cover"
        isLooping
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: width - 10, // Adjust width as needed
    height: height / 3, // Adjust height as needed
  },
});

export default VideoPlayer;
