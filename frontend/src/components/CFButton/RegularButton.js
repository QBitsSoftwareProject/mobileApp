import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const RegularButton = (props) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onPress}>
      <Text style={styles.btnText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 250,
    height: 58,
    borderRadius: 50,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#4A90BF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  btnText: {
    color: "#40495B",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default RegularButton;
