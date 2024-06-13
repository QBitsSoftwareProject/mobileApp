import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const RegularCard = (props) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("CreatePost", {
      postCat: props.title,
    });
  };

  return (
    <TouchableOpacity style={styles.cardBox} onPress={pressHandler}>
      <View>
        <View style={styles.imageframe}>
          <Image source={props.image} style={styles.image} />
        </View>
      </View>

      <View style={styles.content2}>
        <Text style={styles.title}>{props.title}</Text>

        <View>
          <Text style={styles.sub}>{props.sub}</Text>
        </View>
      </View>

      <View>
        <Image source={props.arrow} style={styles.arrow} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 90,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 1,
    marginBottom: 15,
    gap: 10,
  },

  imageframe: {
    height: 70,
    width: 70,
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 100,
    overflow: "hidden",
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  image: {
    width: "68%",
    height: "68%",
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
