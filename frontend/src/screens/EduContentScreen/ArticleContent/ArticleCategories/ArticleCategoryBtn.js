import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./ArticleCategoryBtnStyles";
import { useNavigation } from "@react-navigation/native";

const ArticleCategoryBtn = ({ item }) => {
  const navigation = useNavigation();

  const navigateToScreen = () => {
    navigation.navigate("CategorizedArticleScreen", { category: item });
  };

  return (
    <TouchableOpacity onPress={navigateToScreen}>
      <View style={styles.categoryBtn}>
        <Text style={{ textAlign: "center", color: "white" }}>{item} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleCategoryBtn;
