import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./CategoryStyles";

function CategoryItem({ item }) {
  return (
    <TouchableOpacity>
      <View style={{alignItems:"center"}}>
        <View style={styles.CategoryItem}>
          <Image source={item.image}/>
        </View>
        <Text style={{ width: 100, textAlign: "center", marginTop: 10 }}>
          {item.category}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default CategoryItem;
