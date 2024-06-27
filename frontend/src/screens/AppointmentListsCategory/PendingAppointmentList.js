import React from "react";
import { Text, ScrollView, View, Image, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import DocCard from "../../components/Card/DocCard";
import styles from "./styles";
import { getDoctorPendingAppointments } from "../../services/appointmentServices/AppointmentServices";
import loardingGIF from "../../assets/animation/loading.gif";

const PendingAppointment = () => {
  const screenHeight = Dimensions.get("window").height - 275;
  const [pendingData, setPendingData] = useState(null);

  const fetchPendAppointment = async () => {
    try {
      const response = await getDoctorPendingAppointments();
      setPendingData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPendAppointment();
  }, []);

  if (!pendingData) {
    return (
      <View
        style={{
          // width: "100%",
          // height: "100%",
          // alignItems: "center",
          // justifyContent: "center",
          height: screenHeight,
          paddingHorizontal: 25,
          paddingTop: 15,
        }}
      >
        <Image source={loardingGIF} />
      </View>
    );
  }
  const getapDate = (date) => {
    const apDate = new Date(date);
    let stringDate =
      apDate.getFullYear() + "-" + apDate.getMonth() + "-" + apDate.getDate();
    return stringDate;
  };

  return (
    <View>
      <ScrollView style={{ height: 500 }}>
        <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
          <Text style={styles.descript2}>Pending Appointment List.</Text>
        </View>

        {/* appointment status cards */}
        <View style={{ marginBottom: 80 }}>
          {pendingData.map((item) => (
            <DocCard
              id={item._id}
              key={item._id}
              image={item.userId.proPic}
              title={item.userId.fullName}
              cardName={"Pending"}
              date={getapDate(item.date)}
              time={item.time}
              contactNo={item.userId.contactNumber}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PendingAppointment;
