import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
  Image,
} from "react-native";

export const FloatingButton = (props) => {
  const clickHandler = () => {
    alert("floating button pressed");
  };
  return (
    <TouchableOpacity
      style={[
        styles.touchableOpacity,
        props.isVisible ? styles.visible : styles.hidden,
      ]}
      onPress={props.btnCreate}
    >
      <Image
        style={styles.floatingbutton}
        source={require("../../assets/images/journal/floatingButton.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  visible: {
    position: "absolute",
    top: "62%",
    right: 0,
  },
  floatingbutton: {
    resizeMode: "contain",
    width: 70,
    height: 70,
  },
  hidden: {
    position: "absolute",
    top: "79%",
    right: 0,
  },
});
