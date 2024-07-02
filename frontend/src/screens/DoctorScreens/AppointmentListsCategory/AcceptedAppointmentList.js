import React, { useEffect, useState } from "react";
import { Text, ScrollView, View, Image } from "react-native";
import DocCard from "../../../components/Card/DocCard";
import styles from "./styles";
import { getDoctorAcceptedAppointments } from "../../../services/appointmentServices/AppointmentServices";
import loardingGIF from "../../../assets/animation/loading.gif";

const AcceptedAppointment = () => {
  const [acceptedData, setAcceptedData] = useState(null);
  const [refresh, setRefresh] = useState(false);

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
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

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
      monthNames[apDate.getMonth()] +
      "-" +
      apDate.getDate();
    return stringDate;
  };

  if (!acceptedData) {
    return (
      <View style={styles.loarding}>
        <Image source={loardingGIF} />
      </View>
    );
  }

  return (
    <View>
      <ScrollView style={{ height: "100%" }}>
        <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
          <Text style={styles.descript2}>Accepted Appointment List.</Text>
        </View>

        {/* appointment status cards */}
        <View style={{ marginBottom: 80 }}>
          {acceptedData.map((item) => (
            <DocCard
              id={item._id}
              key={item._id}
              image={item.userId.proPic}
              title={item.userId.fullName}
              cardName={"Accepted"}
              time={item.time}
              date={getapDate(item.date)}
              contactNo={item.userId.contactNumber}
              onStatusChange={handleRefresh}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AcceptedAppointment;
