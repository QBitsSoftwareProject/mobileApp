import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import React from "react";
import { useState } from "react";

const TextCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image source={props.icon} />
      </View>

      <View style={styles.text}>
        <Text style={{ fontSize: 14, marginBottom: 4 }}>{props.title}</Text>
        <Text
          style={{
            fontSize: 12,
            color: "#868686",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          numberOfLines={1}
        >
          {props.subText.split(" ").slice(0, 10).join(" ")}
          {props.subText.split(" ").length > 10 ? " ..." : ""}
        </Text>
      </View>

      <View style={styles.editIcon}>
        <TouchableOpacity onPress={props.function}>
          <Image
            source={require("../../assets/images/ProfileIcons/edit.png")}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingRight: 25,
    marginBottom: 7,
  },

  icon: {
    flex: 1,
    opacity: 0.7,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 4,
    borderBottomColor: "#9E9D9D",
    borderBottomWidth: 1,
    height: 50,
    paddingTop: 5,
  },
  editIcon: {
    flex: 1,
    height: 50,
    alignItems: "flex-end",
    justifyContent: "center",
    borderBottomColor: "#9E9D9D",
    borderBottomWidth: 1,
  },
});

export default TextCard;
