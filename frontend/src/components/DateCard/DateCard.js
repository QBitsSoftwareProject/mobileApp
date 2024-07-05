import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useEffect, useState } from "react";
import React from "react";

const DateCard = (props) => {
  const [pressDateCard, setPressDateCard] = useState(false);

  const handleDatePress = () => {
    if (!props.change) {
      setPressDateCard(true);
      // props.press(true);
      props.onPress(props.indexKey);
      props.getDate(props.date);
    } else {
      setPressDateCard(false);
      // props.press(false);
      props.onPress(props.indexKey);
      props.getDate(null);
    }
  };

  useEffect(() => {
    if (!props.change) {
      setPressDateCard(false);
    }
  }, [props.change]);

  return (
    <View
      style={[
        styles.cardBox,
        { borderRadius: 20, borderWidth: pressDateCard === true ? 1 : 0 },
      ]}
    >
      <TouchableOpacity
        style={{ flexDirection: "column" }}
        onPress={() => handleDatePress(props.date)}
      >
        <Text style={styles.date}>{props.day}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    width: 40,
    height: 85,
    marginHorizontal: 8,
    backgroundColor: "white",
    borderColor: "#4A90BF",
    borderRadius: 20,
    elevation: 1,
  },

  date: {
    width: 20,
    height: 13,
    overflow: "hidden",
    marginHorizontal: 8,
    marginVertical: 15,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "#7D8597",
    lineHeight: 15,
  },
});

export default DateCard;
