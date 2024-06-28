// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
//   TextInput,
//   Button,
//   Image,
// } from "react-native";

// export const FloatingButton = (props) => {
//   const clickHandler = () => {
//     alert("floating button pressed");
//   };
//   return (
//     <TouchableOpacity
//       style={[
//         styles.touchableOpacity,
//         props.isVisible ? styles.visible : styles.hidden,
//       ]}
//       onPress={props.btnCreate}
//     >
//       <Image
//         style={styles.floatingbutton}
//         source={require("../../assets/images/journal/floatingButton.png")}
//       />
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   visible: {
//     position: "absolute",
//     top: "62%",
//     right: 0,
//   },
//   floatingbutton: {
//     resizeMode: "contain",
//     width: 70,
//     height: 70,
//   },
//   hidden: {
//     position: "absolute",
//     top: "79%",
//     right: 0,
//   },
// });
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

export const FloatingButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={props.handleFlotingPointButton} // Handle button press
    >
      <Image
        style={styles.floatingbutton}
        source={require("../../assets/images/journal/floatingButton.png")} // Button image source
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    position: "absolute",
    bottom: 40,
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
