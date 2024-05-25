import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import GoalsProgressBar from "../GoalsProgressBar/GoalsProgressBar";
import { useNavigation } from "@react-navigation/native";

const HistoryGoalCard = ({ title, cNumber, length, completedDate }) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>Completness</Text>
      </View>

      <View>
        <GoalsProgressBar cNumber={cNumber} length={length} active={"hide"} />
      </View>

      <View style={styles.cardBottom}>
        <Text style={styles.bottomText}>Perfect</Text>
        <Text style={styles.bottomText}>{completedDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HistoryGoalCard;
