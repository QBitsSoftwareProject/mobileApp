import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const TransparentButton = (props) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onPress}>
      <Text style={styles.btnText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 334,
    height: 58,
    backgroundColor: "#5296C5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default TransparentButton;
