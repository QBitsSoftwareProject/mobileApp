import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { updateAUser } from "../../services/userServices/userService";
import { addAGoal } from "../../services/goalsService/goalsService";

const SuggestGoalCard = ({ title, subTitle, goalId, select }) => {
  const navigation = useNavigation();

  const handlePress = (goalId) => {
    navigation.navigate("InsideGoalsScreen", { goalId, tab: "suggestGoal" });
  };

  const handleAdd = async () => {
    try {
      await addAGoal(goalId);
      select(0);
    } catch (error) {
      console.log(error);
    }
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
      <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
        <Image source={require("../../assets/images/addBtn.png")} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SuggestGoalCard;
