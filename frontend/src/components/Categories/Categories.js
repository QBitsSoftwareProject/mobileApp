import React from "react";
import { Text, View, FlatList } from "react-native";
import categoryStyles from "../Categories/CategoryStyles";

// data import
import CategoryTypes from "./CategoryTypes";
import CategoryItem from "./CategoryItem";
// data import

export default function Categories() {
  return (
    <View style={categoryStyles.Container}>
      <View>
        <FlatList
          data={CategoryTypes}
          renderItem={({ item }) => {
            return <CategoryItem item={item} />;
          }}
        />
      </View>
    </View>
  );
}
