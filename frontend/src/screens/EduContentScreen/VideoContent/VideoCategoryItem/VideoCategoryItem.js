import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./VideoCategoryItemStyles";
import { useNavigation } from "@react-navigation/native";

const VideoCategoryItem = ({ item }) => {

  const navigation = useNavigation();

  const navigateToScreen = () => {
    navigation.navigate('FilteredVideoScreen', { category: item.name });
  };

  return (
    <TouchableOpacity onPress={navigateToScreen}>
      <View style={styles.categoryItemContainer}>
        <Image source={item.imageLocation} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VideoCategoryItem;
