import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./VideoCategoryItemStyles";

const VideoCategoryItem = ({ item }) => {
  return (
    <View style={styles.categoryItemContainer}>
      <Image source={item.imageLocation} style={styles.categoryItemImage} />
      <Text style={styles.categoryItemText}>{item.name}</Text>
    </View>
  );
};

export default VideoCategoryItem;
