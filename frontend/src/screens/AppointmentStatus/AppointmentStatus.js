import React, { useEffect, useState } from "react";
import { Text, ScrollView, View, Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateCard from "../../components/Card/CreateCard";
import styles from "./styles";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import TwoButtonGroup from "../../components/Button/2ButtonGroup";
import { getUserAppointments } from "../../services/appointmentServices/AppointmentServices";
import loadingGif from "../../assets/animation/loading.gif";

const AppointmentStatus = () => {
  const [appointments, setAppointments] = useState(null);
  const screenHeight = Dimensions.get("window").height;

  const fetchAppointment = async () => {
    try {
      const res = await getUserAppointments();
      setAppointments(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAppointment();
  }, []);

  if (!appointments) {
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image source={loadingGif} />
      </View>
    );
  }

  return (
    <View>
      <HeaderSub
        headLine={"Appointment"}
        subHeadLine={"Review and manage appointment"}
        back={"AvailableDoctors"}
      />

      <View style={{ paddingHorizontal: 25 }}>
        <ScrollView style={{ height: screenHeight - 250 }}>
          {/* <TwoButtonGroup type={"status"} /> */}
          <View style={{ marginHorizontal: 15, marginVertical: 32 }}>
            <Text style={styles.descript2}>Appointment Status.</Text>
          </View>

          {/* appointment status card  */}
          <View style={{ marginBottom: 80 }}>
            {appointments &&
              appointments.map((item) => (
                <CreateCard
                  key={item._id}
                  image={item.doctorId.proPic}
                  title={item.doctorId.fullName}
                  cardName={"AppointmentStatus"}
                  time={item.time}
                  date={item.date}
                  status={item.status}
                />
              ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AppointmentStatus;
