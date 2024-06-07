import React, { useEffect, useState } from "react";
import { Text, ScrollView, View, Image } from "react-native";
import DocCard from "../../components/Card/DocCard";
import DocNavDropDown from "../../components/DropDownMenu/DocNavDropDown";
import styles from "./styles";
import { getDoctorCompletedAppointments } from "../../services/appointmentServices/AppointmentServices";
import loardingGIF from "../../assets/animation/loading.gif";

const CompletedAppointment = () => {
  const [completedData, setCompletedData] = useState(null);

  const fetchComAppointment = async () => {
    try {
      const response = await getDoctorCompletedAppointments();
      // setCompletedData(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComAppointment();
  }, []);

  if (!completedData) {
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

  console.log(completedData);

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
          {completedData.map((item) => (
            <DocCard
              key={item.id}
              image={item.proPic}
              title={item.fullName}
              cardName={"Completed"}
              // time={item.time}
              date={item.date}
              status={item.status}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CompletedAppointment;
