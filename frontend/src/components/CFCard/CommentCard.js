import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import React from "react";

const RegularCard = (props) => {
  return (
    <View style={styles.cardBox}>
      <View>
        <View style={styles.imageframe}>
          <Image source={props.image} style={styles.image} />
        </View>
      </View>

      <View style={styles.content2}>
        <View>
          <Text style={styles.sub}>{props.sub}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    width: "100%",
    height: 90,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 1,
    marginBottom: 15,
  },

  imageframe: {
    height: 60,
    width: 60,
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 50,
    overflow: "hidden",
    elevation: 2,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content2: {
    width: "70%",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#40495B",
  },
  sub: {
    fontSize: 12,
    fontWeight: "500",
    color: "#5C677D",
  },

  arrow: {
    width: 20,
    height: 20,
  },
});

export default RegularCard;
