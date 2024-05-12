import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import styles from "./styles";
import GoalsProgressBar from "../GoalsProgressBar/GoalsProgressBar";

const ViewGoalCard = ({ title, subTitle, cNumber, length, goalId }) => {
  const navigation = useNavigation();

  const handlePress = (goalId) => {
    navigation.navigate("InsideGoalsScreen", { goalId, tab: "viewGoals" });
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

      <View>
        <GoalsProgressBar cNumber={cNumber} length={length} />
      </View>
    </TouchableOpacity>
  );
};

export default ViewGoalCard;
