import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./AudioCategoryItemStyles";

const AudioCategoryItem = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.categoryItem}>
        <Text style={{ textAlign: "center", color: "white" }}>
          {item.name}{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AudioCategoryItem;
