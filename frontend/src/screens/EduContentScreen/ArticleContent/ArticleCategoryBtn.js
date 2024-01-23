import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./ArticleCategoryBtnStyles";

const ArticleCategoryBtn = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.categoryBtn}>
        <Text style={{ textAlign: "center" }}>{item.name} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleCategoryBtn;
