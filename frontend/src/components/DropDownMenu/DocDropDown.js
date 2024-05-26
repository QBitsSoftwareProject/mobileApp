import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const DocDropDown = (props) => {
  const ddArrow = require("../../assets/images/PostCardImages/droparrow.png");
  return (
    <TouchableOpacity onPress={() => handleDDMPress(props.ddArrow)}>
      <View style={styles.DropDown}>
        <View style={styles.container}>
          <Text style={styles.DDMtext}>{props.DDMtext}</Text>
          <Image source={ddArrow} style={styles.arrow} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  DropDown: {
    width: 90,
    height: 30,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 1,

    marginHorizontal: 7,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  DDMtext: {
    color: "#40495B",
    fontWeight: "400",
  },
  arrow: {
    width: 10,
    height: 10,
  },
});

export default DocDropDown;
