import React from "react";
import { Text, ScrollView, View, Image, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import DocCard from "../../components/Card/DocCard";
import styles from "./styles";
import { getDoctorPendingAppointments } from "../../services/appointmentServices/AppointmentServices";
import loardingGIF from "../../assets/animation/loading.gif";

const PendingAppointment = () => {
  const [pendingData, setPendingData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const fetchPendAppointment = async () => {
    try {
      const response = await getDoctorPendingAppointments();
      setPendingData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPendAppointment();
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

  if (!pendingData) {
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
          <Text style={styles.descript2}>Pending Appointment List.</Text>
        </View>

        {/* appointment status cards */}
        <View>
          {pendingData.map((item) => (
            <DocCard
              id={item._id}
              key={item._id}
              image={item.userId.proPic}
              title={item.userId.fullName}
              cardName={"Pending"}
              date={getapDate(item.date)}
              time={item.time}
              contactNo={item.userId.contactNumber}
              onStatusChange={handleRefresh}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PendingAppointment;
