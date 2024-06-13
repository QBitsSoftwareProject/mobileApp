import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const arrow = require("../../assets/images/HomeCards/arrow.png");

const HomeCard = (props) => {
  const navigation = useNavigation();

  const handlePress = (cardName) => {
    if (cardName == "goals") {
      navigation.navigate("GoalsStack");
    } else if (cardName == "appointment") {
      navigation.navigate("AppointmentStack");
    } else if (cardName == "stressManagement") {
      navigation.navigate("TaskStack");
    }
    else if (cardName == "meditation") {
      navigation.navigate("CurrentMoodInputStack");
    }
  };

  return (
    <TouchableOpacity
      style={styles.cardBox}
      onPress={() => handlePress(props.cardName)}
    >
      <View style={styles.container}>
        <View style={styles.frame}>
          <Image source={props.image} style={styles.cardImg} />
        </View>

        <View style={{ maxWidth: 185 }}>
          <Text style={styles.headText}>{props.headLine}</Text>
          <Text style={styles.subText}>{props.subHeadLine}</Text>
        </View>

        <Image source={arrow} />
      </View>
    </TouchableOpacity>
  );
};

export default HomeCard;
