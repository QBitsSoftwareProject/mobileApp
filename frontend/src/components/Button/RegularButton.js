import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";

const RegularButton = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => props.onPress()}>
        <Text style={styles.buttonText}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: "#4A90BF",
    backgroundColor: "white",
    borderRadius: 20,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#4A90BF",
    fontSize: 16,
    fontWeight: "400",
  },
});

export default RegularButton;
