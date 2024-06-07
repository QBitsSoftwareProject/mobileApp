import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const AcptComBtn = (props) => {
  return (
    <TouchableOpacity onPress={""}>
      <View style={styles.ACbutton}>
        <Text style={styles.AcptCom}>{props.AcptCom}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ACbutton: {
    width: 100,
    height: 35,
    borderRadius: 20,
    backgrounColor: "#fff",
    borderWidth: 1.2,
    borderColor: "#4A90BF",
    marginHorizontal: 7,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  AcptCom: {
    color: "#40495B",
    fontWeight: "400",
  },
});

export default AcptComBtn;
