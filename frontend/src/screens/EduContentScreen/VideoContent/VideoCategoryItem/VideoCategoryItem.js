import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./VideoCategoryItemStyles";

const VideoCategoryItem = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.categoryItemContainer}>
        <Image source={item.imageLocation} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VideoCategoryItem;
