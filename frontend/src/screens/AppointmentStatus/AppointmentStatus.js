import React, { useEffect, useState } from "react";
import { Text, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateCard from "../../components/Card/CreateCard";
import styles from "./styles";

import HeaderSub from "../../components/HeaderSub/HeaderSub";
import TwoButtonGroup from "../../components/Button/2ButtonGroup";
import { getUserAppointments } from "../../services/appointmentServices/AppointmentServices";

// Mock data for appointment status
const stateList = [
  {
    id: 1,
    image: require("../../assets/images/kitharringtonhair.jpg"),
    title: "Dr. B.M. Weerasinghe.",
    time: "05.30 PM.",
    date: "12/01/2024.",
    status: "Accepted.",
  },
  {
    id: 2,
    image: require("../../assets/images/kitharringtonhair.jpg"),
    title: "Dr. B.M. Weerasinghe.",
    time: "05.30 PM.",
    date: "12/01/2024.",
    status: "Rejected.",
  },
  {
    id: 3,
    image: require("../../assets/images/kitharringtonhair.jpg"),
    title: "Dr. B.M. Weerasinghe.",
    time: "05.30 PM.",
    date: "12/01/2024.",
    status: "Rejected.",
  },
  {
    id: 4,
    image: require("../../assets/images/kitharringtonhair.jpg"),
    title: "Dr. B.M. Weerasinghe.",
    time: "05.30 PM.",
    date: "12/01/2024.",
    status: "Canceled.",
  },
  {
    id: 5,
    image: require("../../assets/images/kitharringtonhair.jpg"),
    title: "Dr. B.M. Weerasinghe.",
    time: "05.30 PM.",
    date: "12/01/2024.",
    status: "Accepted.",
  },
];

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
  // console.log(appointments[0].doctorId);

  return (
    <View>
      <HeaderSub
        headLine={"Appointment"}
        subHeadLine={"Review and manage appointment"}
        backarrow={"AvailableDoctors"}
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
