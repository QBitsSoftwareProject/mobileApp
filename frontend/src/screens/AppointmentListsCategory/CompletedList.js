import React from "react";
import { Text, ScrollView, View } from "react-native";
import DocCard from "../../components/Card/DocCard";
import DocNavDropDown from "../../components/DropDownMenu/DocNavDropDown";
import styles from "./styles";

const AcceptedAppointment = () => {
  // Mock data for appointment status
  const CompletedList = [
    {
      id: 1,
      image: require("../../assets/images/kitharringtonhair.jpg"),
      title: "Thishakya Perera",
      time: "05.30 PM.",
      date: "12/01/2024.",
      status: "Completed",
    },
    {
      id: 2,
      image: require("../../assets/images/kitharringtonhair.jpg"),
      title: "Sanuki Ahinsa",
      time: "05.30 PM.",
      date: "12/01/2024.",
      status: "Completed",
    },
    {
      id: 3,
      image: require("../../assets/images/kitharringtonhair.jpg"),
      title: "Dhanuka Pemasiri",
      time: "05.30 PM.",
      date: "12/01/2024.",
      status: "Completed",
    },
    {
      id: 4,
      image: require("../../assets/images/kitharringtonhair.jpg"),
      title: "Piyumi Silva",
      time: "05.30 PM.",
      date: "12/01/2024.",
      status: "Reject",
    },
    {
      id: 5,
      image: require("../../assets/images/kitharringtonhair.jpg"),
      title: "Pasan Bandara",
      time: "05.30 PM.",
      date: "12/01/2024.",
      status: "Completed",
    },
  ];

  // const screenHeight = Dimensions.get("window").height - 275;

  return (
    <View>
      <ScrollView style={{ height: 500 }}>
        <View
          style={{
            marginHorizontal: 15,
            marginVertical: 15,
            flex: 1,
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "flex-end",
            gap: 120,
          }}
        >
          <Text style={styles.descript2}>Completed List.</Text>

          <DocNavDropDown />
        </View>

        {/* appointment status cards */}
        <View style={{ marginBottom: 80 }}>
          {CompletedList.map((item) => (
            <DocCard
              key={item.id}
              image={item.image}
              title={item.title}
              cardName={"Completed"}
              time={item.time}
              date={item.date}
              status={item.status}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AcceptedAppointment;
