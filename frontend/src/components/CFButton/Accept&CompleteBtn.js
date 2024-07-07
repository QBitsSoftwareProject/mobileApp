import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";
import { updateStatusAppointments } from "../../services/appointmentServices/AppointmentServices";

const AcptComBtn = (props) => {
  const statusUpdate = async () => {
    try {
      if (props.AcptCom == "Accept") {
        await updateStatusAppointments(props.appId, "Accepted");
      } else if (props.AcptCom == "Complete") {
        await updateStatusAppointments(props.appId, "Completed");
      }
      props.onStatusChange();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        statusUpdate();
      }}
    >
      <View style={styles.ACbutton}>
        <Text style={styles.AcptCom}>{props.AcptCom}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ACbutton: {
    width: 100,
    height: 35,
    borderRadius: 20,
    backgrounColor: "#fff",
    borderWidth: 1.2,
    borderColor: "#4A90BF",
    marginHorizontal: 7,

    alignItems: "center",
    justifyContent: "center",
  },

  AcptCom: {
    color: "#40495B",
    fontWeight: "400",
  },
});

export default AcptComBtn;
