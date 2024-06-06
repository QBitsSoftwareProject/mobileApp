import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";

const DocPop = (props, DropPopMsg) => {
  return (
    <View style={styles.DropPop}>
      <View style={styles.container}>
        <TouchableOpacity onPress={DropPopMsg} style={styles.arrow}>
          <Text style={styles.DPtext}>{props.DPtext}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  DropPop: {
    width: 90,
    height: 40,
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
  },
});

export default DocPop;
