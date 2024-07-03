import React, { useRef } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  PanResponder,
  Animated,
  View,
} from "react-native";

const FloatingButton = ({ addNew }) => {
  const pan = useRef(new Animated.ValueXY({ x: 300, y: 320 })).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;

  return (
    <View style={StyleSheet.absoluteFill}>
      <Animated.View
        style={[pan.getLayout(), styles.touchableOpacity]}
        {...panResponder.panHandlers}
      >
        <TouchableOpacity onPress={addNew}>
          <Image
            style={styles.floatingbutton}
            source={require("../../assets/images/NavigationIcons/addNew.png")}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    position: "absolute",
  },
  floatingbutton: {
    resizeMode: "contain",
    width: 62.5,
    height: 62.5,
  },
});

export default FloatingButton;
