import React, { useState, useRef } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Animated } from 'react-native';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleToggle = () => {
    const toValue = isOn ? 0 : 0.7;

    Animated.timing(animatedValue, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setIsOn(!isOn);
  };

  const thumbPosition = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 26], // Adjust these values based on your thumb size and track width
  });

  const trackColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#4A90BF', '#4ABFB4'],
  });

  return (
    <TouchableWithoutFeedback onPress={handleToggle}>
      <Animated.View style={[styles.track, { backgroundColor: trackColor }]}>
        <Animated.View style={[styles.thumb, { transform: [{ translateX: thumbPosition }] }]} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  track: {
    width: 50,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    padding: 2,
  },
  thumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'white',
  },
});

export default ToggleSwitch;
