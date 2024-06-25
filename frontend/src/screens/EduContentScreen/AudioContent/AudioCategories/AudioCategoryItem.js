import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./AudioCategoryItemStyles";

const AudioCategoryItem = ({ item, selectedTagFunction, selectedTag }) => {

  return (
    <TouchableOpacity onPress={() => {
      selectedTagFunction(item)
    }}>
      <View style={[styles.categoryItem, { opacity: (selectedTag === item ? 1 : 0.7) }]}>
        <Text style={{ textAlign: "center", color: "white", fontWeight: "500" }}>
          {item}{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AudioCategoryItem;
