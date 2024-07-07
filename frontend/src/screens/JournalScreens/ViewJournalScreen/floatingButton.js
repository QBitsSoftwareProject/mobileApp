import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  PanResponder,
  Dimensions,
} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const screenHeight = Dimensions.get('window').height;


export const FloatingButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.touchableOpacity,{top:screenHeight-220}]}
      onPress={props.handleFlotingPointButton} // Handle button press
    >
      <Image
        style={styles.floatingbutton}
        source={require("../../../assets/images/journal/floatingButton.png")} // Button image source
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    position: "absolute",
    // bottom: 90,
    left: 25,
    zIndex: 100,
  },
  floatingbutton: {
    resizeMode: "contain",
    width: 62.5,
    height: 62.5,
  },
});

export default FloatingButton; // Export FloatingButton component
