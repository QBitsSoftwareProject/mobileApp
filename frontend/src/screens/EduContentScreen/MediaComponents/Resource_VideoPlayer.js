import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';

const { height, width } = Dimensions.get('window');

const VideoPlayer = ({ videoSource }) => {
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
