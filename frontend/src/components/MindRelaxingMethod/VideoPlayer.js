import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';

const { height, width } = Dimensions.get('window');

const VideoPlayer = ({ videoSource }) => {
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        useNativeControls
        source={{ uri: videoSource }}
        resizeMode="cover"
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
    width: width - 40, // Adjust width as needed
    height: height / 1.6, // Adjust height as needed
  },
});

export default VideoPlayer;
