import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

const FloatingButton = ({ addNew }) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={addNew}>
      <Image
        style={styles.floatingbutton}
        source={require("../../assets/images/NavigationIcons/addNew.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    position: "absolute",
    bottom: 25,
    left: 25,
  },
  floatingbutton: {
    resizeMode: "contain",
    width: 62.5,
    height: 62.5,
  },
});

export default FloatingButton;
