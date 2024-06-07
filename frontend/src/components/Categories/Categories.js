import React from "react";
import { Text, View, FlatList, Dimensions } from "react-native";
import categoryStyles from "../Categories/CategoryStyles";

// data import
import CategoryTypes from "./CategoryTypes";
import CategoryItem from "./CategoryItem";
// data import

const scr_width = Dimensions.get("window").width;

export default function Categories() {
  return (
    <View style={categoryStyles.Container}>
      <FlatList
        data={CategoryTypes}
        style={{ display: "flex", flexDirection: "column", width: scr_width }}
        horizontal
        renderItem={({ item, index }) => {
          return <CategoryItem key={index} item={item} />;
        }}
      />
    </View>
  );
}
