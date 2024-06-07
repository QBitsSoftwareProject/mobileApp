import React from "react";
import { Text, ScrollView, View, Image } from "react-native";
import { useEffect, useState } from "react";
import DocCard from "../../components/Card/DocCard";
import styles from "./styles";
import { getDoctorPendingAppointments } from "../../services/appointmentServices/AppointmentServices";
import loardingGIF from "../../assets/animation/loading.gif";

const PendingAppointment = () => {
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
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={loardingGIF} />
      </View>
    );
  }

  console.log(pendingData);

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
              key={item.id}
              image={item.userId.proPic}
              title={item.userId.fullName}
              cardName={"Pending"}
              // time={item.time}
              // time={props.time.from}-{props.time.to}
              date={item.date}
              contactNo={item.contactNo}
              status={item.status}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PendingAppointment;
