import React from "react";
import { StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

const FloatingButton = ({ addNew }) => {

  const screenHeight = Dimensions.get('window').height;

  return (
    <TouchableOpacity style={[styles.touchableOpacity,{top:screenHeight-480}]} onPress={addNew}>
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
    // bottom: 120,
    left: 25,
  },
  floatingbutton: {
    resizeMode: "contain",
    width: 62.5,
    height: 62.5,
  },
});

export default FloatingButton;
