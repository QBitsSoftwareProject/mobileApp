import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const SuggestGoalCard = ({ title, subTitle, goalId }) => {
  const navigation = useNavigation();

  const handlePress = (goalId) => {
    navigation.navigate("InsideGoalsScreen", { goalId, tab: "suggestGoal" });
  };
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => handlePress(goalId)}
    >
      <View>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <Image source={require("../../assets/images/addBtn.png")} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SuggestGoalCard;
