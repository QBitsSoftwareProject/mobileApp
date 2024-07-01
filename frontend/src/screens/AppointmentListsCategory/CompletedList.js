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
  const [refresh, setRefresh] = useState(false);

  const fetchComAppointment = async () => {
    try {
      let response;

      if (checkPage === "Completed") {
        response = await getDoctorCompletedAppointments();
      } else if (checkPage === "Rejected") {
        response = await getDoctorRejectedAppointments();
      } else if (checkPage === "Cancelled") {
        response = await getDoctorCancelledAppointments();
      }

      setCompletedData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComAppointment();
  }, [checkPage, refresh]);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  if (!completedData) {
    return (
      <View style={styles.loarding}>
        <Image source={loardingGIF} />
      </View>
    );
  }

  const getapDate = (date) => {
    const apDate = new Date(date);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let stringDate =
      apDate.getFullYear() +
      "-" +
      monthNames[apDate.getMonth() + 1] +
      "-" +
      apDate.getDate();
    return stringDate;
  };

  return (
    <View>
      <ScrollView style={{ height: "100%" }}>
        <View
          style={{
            marginHorizontal: 15,
            marginVertical: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.descript2}>Completed List.</Text>
          <DocNavDropDown checkPage={checkPage} setCheckPage={setCheckPage} />
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
              onStatusChange={handleRefresh}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CompletedAppointment;
