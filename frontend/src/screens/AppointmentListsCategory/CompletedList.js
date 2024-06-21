import React, { useEffect, useState } from "react";
import { Text, ScrollView, View, Image } from "react-native";
import DocCard from "../../components/Card/DocCard";
import DocNavDropDown from "../../components/DropDownMenu/DocNavDropDown";
import styles from "./styles";
import {
  getDoctorCancelledAppointments,
  getDoctorCompletedAppointments,
  getDoctorRejectedAppointments,
} from "../../services/appointmentServices/AppointmentServices";
import loardingGIF from "../../assets/animation/loading.gif";

const CompletedAppointment = () => {
  const [completedData, setCompletedData] = useState(null);
  const [checkPage, setCheckPage] = useState("Completed");

  const fetchComAppointment = async () => {
    try {
      let response;

      if (checkPage == "Completed") {
        response = await getDoctorCompletedAppointments();
      } else if (checkPage == "Rejected") {
        response = await getDoctorRejectedAppointments();
      } else if (checkPage == "Cancelled") {
        response = await getDoctorCancelledAppointments();
      }

      setCompletedData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComAppointment();
  }, [checkPage]);

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

  const getapDate = (date) => {
    const apDate = new Date(date);
    let stringDate =
      apDate.getFullYear() + "-" + apDate.getMonth() + "-" + apDate.getDate();
    return stringDate;
  };

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
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.descript2}>Completed List.</Text>

          <DocNavDropDown check={setCheckPage} />
        </View>

        {/* appointment status cards */}
        <View style={{ marginBottom: 80 }}>
          {completedData.map((item) => (
            <DocCard
              key={item._id}
              image={item.userId.proPic}
              title={item.userId.fullName}
              cardName={"Completed"}
              time={item.time}
              date={getapDate(item.date)}
              status={item.status}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CompletedAppointment;
