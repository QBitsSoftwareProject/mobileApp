import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import GoalsProgressBar from "../GoalsProgressBar/GoalsProgressBar";

const ViewGoalCard = ({ title, subTitle, cNumber, length }) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
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
