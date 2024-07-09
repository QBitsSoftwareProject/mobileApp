import React from "react";
import { Text, ScrollView, View, Image } from "react-native";
import { useEffect, useState } from "react";
import DocCard from "../../../components/AppointmentCard/DocCard";
import styles from "./styles";
import { getDoctorPendingAppointments } from "../../../services/appointmentServices/AppointmentServices";
import loardingGIF from "../../../assets/animation/loading.gif";
import notFoundGif from "../../../assets/animation/not-found.png";

const PendingAppointment = () => {
  const [pendingData, setPendingData] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchPendAppointment();
  }, [refresh]);

  const fetchPendAppointment = async () => {
    try {
      const response = await getDoctorPendingAppointments();
      setPendingData(response);
      if (response.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

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

        {notFound && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: 32,
            }}
          >
            <Image
              source={notFoundGif}
              style={{ width: "70%", height: 250, opacity: 0.3 }}
            />
          </View>
        )}

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
