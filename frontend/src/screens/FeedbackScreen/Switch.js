import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";

export const QuestionButton = ({ qtext, btnFunction }) => {
  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(false);
  }, [btnFunction]); // Reset toggle switch when `btnFunction` changes

  return (
    <View style={styles.questionSection}>
      <View style={styles.left}>
        <Text style={styles.label}>{qtext}</Text>
      </View>
      <View style={styles.switchContainer}>
        <ToggleSwitch
          isOn={on}
          onColor="#4ABFB4"
          offColor="#979DAC"
          labelStyle={{ color: "black", fontWeight: "900" }}
          size="medium"
          onToggle={(isOn) => {
            setOn(isOn);
            btnFunction(isOn ? 0 : 1);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    marginLeft: -10,
    paddingRight: 35,
  },
  questionSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  left: {
    width: 300,
  },
  label: {
    lineHeight: 25,
    marginLeft: 25,
    fontSize: 14,
  },
});
