import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { Dimensions } from "react-native";

const GoalsProgressBar = ({ cNumber, length, active, levels }) => {
  const windowWidth = Dimensions.get("window").width;
  const percent = ((cNumber * 100) / length).toFixed(0);
  const barWidth = (percent * (windowWidth - 80)) / 100;

  return (
    <View>
      <View style={styles.barContainer}>
        <View style={styles.backBar}>
          <View style={[styles.frontBar, { width: barWidth }]}></View>
        </View>
        <Text style={styles.percentage}>{percent}%</Text>
      </View>

      {active != "hide" && <Text style={styles.progressTxt}>Active</Text>}
    </View>
  );
};

export default GoalsProgressBar;
