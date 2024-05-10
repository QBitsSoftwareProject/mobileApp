import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { Dimensions } from "react-native";

const GoalsProgressBar = ({ cNumber, length, active }) => {
  const windowWidth = Dimensions.get("window").width;
  const percent = (cNumber / length).toFixed(2);
  const barWidth = percent * (windowWidth - 80);

  return (
    <View>
      <View style={styles.barContainer}>
        <View style={styles.backBar}>
          <View style={[styles.frontBar, { width: barWidth }]}></View>
        </View>
        <Text style={styles.percentage}>{percent * 100}%</Text>
      </View>

      {active != "hide" && <Text style={styles.progressTxt}>Active</Text>}
    </View>
  );
};

export default GoalsProgressBar;
