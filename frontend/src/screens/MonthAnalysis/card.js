import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const Card = ({ imageSource, title, subtitle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {/* Image column */}
      <View style={styles.column}>
        <Image source={imageSource} style={styles.image} />
      </View>

      {/* Title text column */}
      <View style={styles.middleColumn}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 110,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 15,

    gap: 25,
    elevation: 1,
  },
  column: {
    alignItems: "center",
  },
  middleColumn: {
    width: "80%",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#40495B",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#979DAC",
    width: "90%",
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default Card;
