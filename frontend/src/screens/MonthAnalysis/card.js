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
    padding: 15,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    gap: 5,
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  middleColumn: {
    flex: 2,
    width: "65%",
  },
  title: {
    fontSize: 18,
    color: "#101318",
  },
  subtitle: {
    marginTop: 5,
    fontSize: 12,
    color: "#5C677D",
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default Card;
