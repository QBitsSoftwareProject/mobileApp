import React, { useEffect, useState } from "react";
import { Text, ScrollView, View, Image } from "react-native";
import DocCard from "../../../components/AppointmentCard/DocCard";
import DocNavDropDown from "../../../components/DropDownMenu/DocNavDropDown";
import styles from "./styles";
import {
  getDoctorCancelledAppointments,
  getDoctorCompletedAppointments,
  getDoctorRejectedAppointments,
} from "../../../services/appointmentServices/AppointmentServices";
import loardingGIF from "../../../assets/animation/loading.gif";
import notFoundGif from "../../../assets/animation/not-found.png";

const CompletedAppointment = () => {
  const [completedData, setCompletedData] = useState(null);
  const [checkPage, setCheckPage] = useState("Completed");
  const [refresh, setRefresh] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchComAppointment();
  }, [checkPage, refresh]);

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
          {checkPage === 'Completed' ? (
            <Text style={styles.descript2}>Completed List.</Text>
          ): checkPage === 'Rejected'? 
          (
            <Text style={styles.descript2}>Rejected List.</Text>
          ):(
            <Text style={styles.descript2}>Canceled List.</Text>
          )}
          <View style = {{zIndex:100}}>
          <DocNavDropDown checkPage={checkPage} setCheckPage={setCheckPage}/>
          </View>
        </View>

        {notFound && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: 32,
              zIndex:-1
            }}
          >
            <Image
              source={notFoundGif}
              style={{ width: "70%", height: 250, opacity: 0.3 }}
            />
          </View>
        )}

        {/* appointment status cards */}
        <View style={{ marginBottom: 80 , zIndex:-1}}>
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
