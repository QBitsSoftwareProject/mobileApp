import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import GoalsProgressBar from "../GoalsProgressBar/GoalsProgressBar";
import { useNavigation } from "@react-navigation/native";

const HistoryGoalCard = ({ title, cNumber, length, dueDate }) => {
  const [level, setLevel] = useState();

  const completedDate = new Date(dueDate);
  const percent = (cNumber / length).toFixed(2) * 100;

  useEffect(() => {
    levelsCheck();
  }, []);

  const levelsCheck = () => {
    if (percent == 100) {
      setLevel("Excellent");
    } else if (percent >= 75) {
      setLevel("Perfect");
    } else if (percent >= 50) {
      setLevel("Goos");
    } else {
      setLevel("Try Again");
    }
  };

  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>Completeness</Text>
      </View>

      <View>
        <GoalsProgressBar cNumber={cNumber} length={length} active={"hide"} />
      </View>

      <View style={styles.cardBottom}>
        <Text style={styles.bottomText}>{level}</Text>
        <Text style={styles.bottomText}>
          {completedDate.getUTCFullYear()}-{completedDate.getUTCMonth() + 1}-
          {completedDate.getUTCDate()}
        </Text>
      </View>
    </View>
  );
};

export default HistoryGoalCard;
