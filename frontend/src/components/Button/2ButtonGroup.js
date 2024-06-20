import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const TwoButtonGroup = (props) => {
  // const[selectedTab, setSelectedTab] = useState(0);

  const navigation = useNavigation();

  const goList = () => {
    navigation.navigate("AvailableDoctors");
  };

  const goAppointment = () => {
    navigation.navigate("AppointmentStatus");
  };

  return (
    <View style={styles.button}>
      <TouchableOpacity
        style={{
          height: 40,
          backgroundColor: props.type === "list" ? "#5296C5" : "#fff",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
        onPress={() => {
          // setSelectedTab(0)
          goList();
        }}
      >
        <Text
          style={{
            color: props.type === "list" ? "#fff" : "#000",
            fontSize: 18,
            fontWeight: "500",
          }}
        >
          List
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 40,
          backgroundColor: props.type === "status" ? "#5296C5" : "#fff",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",

          flex: 1,
        }}
        onPress={() => {
          // setSelectedTab(1)
          goAppointment();
        }}
      >
        <Text
          style={{
            color: props.type === "status" ? "#fff" : "#000",
            fontSize: 18,
            fontWeight: "500",
          }}
        >
          Appointment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 25,
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default TwoButtonGroup;
