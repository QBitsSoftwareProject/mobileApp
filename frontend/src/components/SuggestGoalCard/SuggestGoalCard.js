import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";

const SuggestGoalCard = ({ title, subTitle }) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <Image source={require("../../assets/images/addBtn.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default SuggestGoalCard;
