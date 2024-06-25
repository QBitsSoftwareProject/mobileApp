import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { Dimensions } from "react-native";

const GoalsProgressBar = ({ cNumber, length, active, levels }) => {
  const percent = ((cNumber / length) * 100).toFixed(0); // Correct percentage calculation

  return (
    <View>
      <View style={styles.barContainer}>
        <View style={styles.backBar}>
          <View
            style={[styles.frontBar, { width: `${percent}%` }]} // Correct width application
          ></View>
        </View>
        <Text style={styles.percentage}>{percent}%</Text>
      </View>
      {active !== "hide" && <Text style={styles.progressTxt}>Active</Text>}
    </View>
  );
};

export default GoalsProgressBar;
