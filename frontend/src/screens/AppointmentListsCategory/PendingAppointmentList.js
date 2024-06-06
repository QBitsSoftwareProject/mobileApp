import React from "react";
import { Text, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import DocCard from "../../components/Card/DocCard";
import styles from "./styles";
import { getDoctorPendingAppointments } from "../../services/appointmentServices/AppointmentServices";

const PendingAppointment = () => {
  const [acceptedData, setAcceptedData] = useState(null);

  const fetchAccAppointment = async () => {
    try {
      const response = await getDoctorPendingAppointments();
      setAcceptedData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAccAppointment();
  }, []);

  if (!acceptedData) {
    return;
  }

  console.log(acceptedData);

  return (
    <View>
      <ScrollView style={{ height: 500 }}>
        <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
          <Text style={styles.descript2}>Pending Appointment List.</Text>
        </View>

        {/* appointment status cards */}
        <View style={{ marginBottom: 80 }}>
          {acceptedData.map((item) => (
            <DocCard
              key={item.id}
              image={item.image}
              title={item.title}
              cardName={"Pending"}
              // time={item.time}
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
