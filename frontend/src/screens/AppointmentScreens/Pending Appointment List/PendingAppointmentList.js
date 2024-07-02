import React from "react";
import { Text, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateCard from "../../../components/Card/CreateCard";
import styles from "./styles";
import ButtonGroup from "../../../components/Button/ButtonGroup";
import HeaderSub from "../../../components/HeaderSub/HeaderSub";

const PendingAppointmentList = () => {
  // Mock data for appointment status
  const stateList = [
    {
      id: 1,
      image: require("../../../assets/images/kitharringtonhair.jpg"),
      title: "Dr. B.M. Weerasinghe.",
      time: "05.30 PM.",
      date: "12/01/2024.",
      status: "Accepted.",
    },
    {
      id: 2,
      image: require("../../../assets/images/kitharringtonhair.jpg"),
      title: "Dr. B.M. Weerasinghe.",
      time: "05.30 PM.",
      date: "12/01/2024.",
      status: "Rejected.",
    },
    {
      id: 3,
      image: require("../../../assets/images/kitharringtonhair.jpg"),
      title: "Dr. B.M. Weerasinghe.",
      time: "05.30 PM.",
      date: "12/01/2024.",
      status: "Rejected.",
    },
    {
      id: 4,
      image: require("../../../assets/images/kitharringtonhair.jpg"),
      title: "Dr. B.M. Weerasinghe.",
      time: "05.30 PM.",
      date: "12/01/2024.",
      status: "Canceled.",
    },
    {
      id: 5,
      image: require("../../../assets/images/kitharringtonhair.jpg"),
      title: "Dr. B.M. Weerasinghe.",
      time: "05.30 PM.",
      date: "12/01/2024.",
      status: "Accepted.",
    },
  ];

  return (
    <View>
      <HeaderSub
        headLine={"Appointment"}
        subHeadLine={"Review and manage appointment"}
        backarrow={"AvailableDoctors"}
      />

      <SafeAreaView style={{ margin: 25 }}>
        <ScrollView style={{ height: 500 }}>
          <ButtonGroup type={"status"} />

          <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
            <Text style={styles.descript2}>Appointment Status.</Text>
          </View>

          {/* appointment status cards */}
          <View style={{ marginBottom: 80 }}>
            {stateList.map((item) => (
              <CreateCard
                key={item.id}
                image={item.image}
                title={item.title}
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

export default PendingAppointmentList;
