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
  const pan = useRef(new Animated.ValueXY()).current;

  const initialPosition = { x: 0, y: 0 }; // Initial position of the button
  const maxUpwardsDrag = 100; // Maximum upwards drag allowed
  const maxDownwardsDrag = 5; // Maximum downwards drag allowed

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        pan.setValue(initialPosition); // Reset the value for smooth start
      },
      onPanResponderMove: (e, gestureState) => {
        let newY = pan.y._offset - gestureState.dy; // Calculate new y position by subtracting dy

        // Constrain the button to stay within the limited drag range
        if (newY < initialPosition.y - maxUpwardsDrag) {
          newY = initialPosition.y - maxUpwardsDrag; // Limit dragging upwards to maxUpwardsDrag pixels above initial position
        } else if (newY > initialPosition.y + maxDownwardsDrag) {
          newY = initialPosition.y + maxDownwardsDrag; // Limit dragging downwards to maxDownwardsDrag pixels below initial position
        }

        pan.y.setValue(newY - pan.y._offset); // Apply the new y value
      },
      onPanResponderRelease: () => {
        pan.flattenOffset(); // Flatten the offset after release
        // Perform any additional actions on release if needed
      },
    })
  ).current;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          top: props.isCalendarVisible ? 0 : 390, // Adjust top position as needed
          transform: [{ translateY: pan.y }], // Only translate along y-axis
        },
      ]}
      {...panResponder.panHandlers} // Attach panHandlers for touch events
    >
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={props.btnCreate} // Handle button press
      >
        <Image
          style={styles.floatingbutton}
          source={require("../../assets/images/journal/floatingButton.png")} // Button image source
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70, // Button width
    height: 70, // Button height
    position: "absolute", // Positioning
    right: 0, // Align to the right
  },
  touchableOpacity: {
    width: 70, // Button width
    height: 70, // Button height
  },
  floatingbutton: {
    resizeMode: "contain", // Image resize mode
    width: 70, // Image width
    height: 70, // Image height
  },
});

export default FloatingButton; // Export FloatingButton component
