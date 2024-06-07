import React, { useEffect, useState } from "react";
import { Text, ScrollView, View, Image } from "react-native";
import DocCard from "../../components/Card/DocCard";
import styles from "./styles";
import { getDoctorAcceptedAppointments } from "../../services/appointmentServices/AppointmentServices";
import loardingGIF from "../../assets/animation/loading.gif";

const AcceptedAppointment = () => {
  const [acceptedData, setAcceptedData] = useState(null);

  const fetchAccAppointment = async () => {
    try {
      const response = await getDoctorAcceptedAppointments();
      setAcceptedData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAccAppointment();
  }, []);

  if (!acceptedData) {
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

  console.log(acceptedData);

  return (
    <View>
      <ScrollView style={{ height: 500 }}>
        <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
          <Text style={styles.descript2}>Accepted Appointment List.</Text>
        </View>

        {/* appointment status cards */}
        <View style={{ marginBottom: 80 }}>
          {acceptedData.map((item) => (
            <DocCard
              key={item.id}
              image={item.proPic}
              title={item.fullName}
              cardName={"Accepted"}
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

export default AcceptedAppointment;
