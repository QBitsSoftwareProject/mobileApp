import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";

const DocPop = (props, DropPopMsg) => {
  return (
    <View style={styles.DropPop}>
      <View style={styles.container}>
        <TouchableOpacity onPress={DropPopMsg} style={styles.arrow}>
          <Text style={styles.DPtext}>{props.DPtext1}</Text>
          <Text style={styles.DPtext}>{props.DPtext2}</Text>
          <Text style={styles.DPtext}>{props.DPtext3}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  DropPop: {
    width: 105,
    height: 80,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 1,
    marginHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  DPtext: {
    color: "#40495B",
    fontWeight: "400",
    lineHeight: 30,
  },
});

export default DocPop;
