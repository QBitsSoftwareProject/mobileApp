import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";

const DocPop = (props) => {
  const handlePress = (menuNumber) => {
    props.setIsPress((prev) => !prev);
    props.selectedMenu(menuNumber);
  };
  return (
    <View style={styles.DropPop}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handlePress("Completed")}>
          <Text style={styles.DPtext}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Rejected")}>
          <Text style={styles.DPtext}>Rejected</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Cancelled")}>
          <Text style={styles.DPtext}>Canceled</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  DropPop: {
    width: "100%",
    height: "auto",
    paddingVertical: 5,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 40,
    zIndex: 10,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  DPtext: {
    color: "#40495B",
    fontWeight: "400",
    lineHeight: 30,
  },
});

export default DocPop;
