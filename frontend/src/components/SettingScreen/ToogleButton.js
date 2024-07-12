import React, { useEffect, useRef, useState, useContext } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Animated,
} from "react-native";
import { BackgroundMusicContext } from "../SettingScreen/BackgroundMusicProvider";

const ToggleSwitch = () => {
  const { setBackgroundMusic, backgroundMusic, musicStop } = useContext(
    BackgroundMusicContext
  );
  const [isOn, setIsOn] = useState(backgroundMusic);
  const animatedValue = useRef(new Animated.Value(isOn ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  useEffect(() => {
    setBackgroundMusic(isOn);
  }, [isOn, setBackgroundMusic]);

  const thumbPosition = animatedValue.interpolate({
    inputRange: [0.1, 1.3],
    outputRange: [2, 26],
  });

  const trackColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["#4A90BF", "#4ABFB4"],
  });

  const onToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <TouchableWithoutFeedback onPress={onToggle}>
      <Animated.View style={[styles.track, { backgroundColor: trackColor }]}>
        <Animated.View
          style={[styles.thumb, { transform: [{ translateX: thumbPosition }] }]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  track: {
    width: 50,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    padding: 2,
  },
  thumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "white",
  },
});

export default ToggleSwitch;
