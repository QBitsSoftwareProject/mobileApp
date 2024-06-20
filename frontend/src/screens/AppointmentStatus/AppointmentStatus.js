import React, { useEffect, useState } from "react";
import { Text, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateCard from "../../components/Card/CreateCard";
import styles from "./styles";

import HeaderSub from "../../components/HeaderSub/HeaderSub";
import TwoButtonGroup from "../../components/Button/2ButtonGroup";
import { getUserAppointments } from "../../services/appointmentServices/AppointmentServices";

const AppointmentStatus = () => {
  const [appointments, setAppointments] = useState(null);

  const fetchAppointment = async () => {
    try {
      const res = await getUserAppointments();
      setAppointments(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAppointment();
  }, []);

  if (!appointments) {
    return;
  }

  return (
    <View>
      <HeaderSub
        headLine={"Appointment"}
        subHeadLine={"Review and manage appointment"}
        back={"AvailableDoctors"}
      />

      <SafeAreaView style={{ margin: 25 }}>
        <ScrollView style={{ height: 500 }}>
          <TwoButtonGroup type={"status"} />
          <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
            <Text style={styles.descript2}>Appointment Status.</Text>
          </View>

          {/* appointment status card  */}
          <View style={{ marginBottom: 80 }}>
            {appointments.map((item) => (
              <CreateCard
                key={item._id}
                image={item.doctorId.proPic}
                title={item.doctorId.fullName}
                cardName={"AppointmentStatus"}
                time={item.time}
                date={item.date}
                status={item.status}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AppointmentStatus;
