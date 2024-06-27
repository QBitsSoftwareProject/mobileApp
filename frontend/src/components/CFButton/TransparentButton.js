import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const TransparentButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={props.onConfirm}>
        <View>
          <Text style={styles.btnText}>Save As Draft</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 250,
    height: 58,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#5296C5",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  btnText: {
    color: "#5296C5",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default TransparentButton;
