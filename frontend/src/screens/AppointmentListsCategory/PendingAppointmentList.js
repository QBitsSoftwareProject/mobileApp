import React from "react";
import { Text, ScrollView, View } from "react-native";
import DocCard from "../../components/Card/DocCard";
import styles from "./styles";

const PendingAppointment = () => {
  // Mock data for appointment status
  const PendingList = [
    {
      id: 1,
      image: require("../../assets/images/kitharringtonhair.jpg"),
      title: "Thishakya Perera",
      time: "05.30 PM.",
      date: "12/01/2024.",
      contactNo: "+94 764555445",
      status: "Reject",
    },
    {
      id: 2,
      image: require("../../assets/images/kitharringtonhair.jpg"),
      title: "Sanuki Ahinsa",
      time: "05.30 PM.",
      date: "12/01/2024.",
      contactNo: "+94 710012120",
      status: "Reject",
    },
    {
      id: 3,
      image: require("../../assets/images/kitharringtonhair.jpg"),
      title: "Dhanuka Pemasiri",
      time: "05.30 PM.",
      date: "12/01/2024.",
      contactNo: "+94 710012120",
      status: "Reject",
    },
    {
      id: 4,
      image: require("../../assets/images/kitharringtonhair.jpg"),
      title: "Piyumi Silva",
      time: "05.30 PM.",
      date: "12/01/2024.",
      contactNo: "+94 703393993",
      status: "Reject",
    },
    {
      id: 5,
      image: require("../../assets/images/kitharringtonhair.jpg"),
      title: "Pasan Bandara",
      time: "05.30 PM.",
      date: "12/01/2024.",
      contactNo: "+94 764555445",
      status: "Reject",
    },
  ];

  return (
    <View>
      <ScrollView style={{ height: 500 }}>
        <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
          <Text style={styles.descript2}>Pending Appointment List.</Text>
        </View>

        {/* appointment status cards */}
        <View style={{ marginBottom: 80 }}>
          {PendingList.map((item) => (
            <DocCard
              key={item.id}
              image={item.image}
              title={item.title}
              cardName={"Pending"}
              time={item.time}
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
