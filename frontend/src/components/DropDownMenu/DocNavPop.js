import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";

const DocPop = (props) => {
  const handlePress = (menuNumber) => {
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
        <TouchableOpacity onPress={() => handlePress("Canceled")}>
          <Text style={styles.DPtext}>Canceled</Text>
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
    flexDirection: "column",
    alignItems: "center",
  },
  DPtext: {
    color: "#40495B",
    fontWeight: "400",
    lineHeight: 30,
  },
});

export default DocPop;
