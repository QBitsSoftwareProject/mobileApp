import React, { useEffect, useState } from "react";
import {
  Text,
  ScrollView,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import CreateCard from "../../../components/AppointmentCard/CreateCard";
import styles from "./styles";
import HeaderSub from "../../../components/HeaderSub/HeaderSub";
import {
  deleteAllAppointments,
  getUserAppointments,
} from "../../../services/appointmentServices/AppointmentServices";
import loadingGif from "../../../assets/animation/loading.gif";
import notFoundGif from "../../../assets/animation/not-found.png";

const AppointmentStatus = () => {
  const screenHeight = Dimensions.get("window").height;

  const [appointments, setAppointments] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchAppointment();
  }, []);

  const fetchAppointment = async () => {
    try {
      const res = await getUserAppointments();
      setAppointments(res);

      if (res.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearAppointments = async () => {
    try {
      await deleteAllAppointments();
      setAppointments([]);
      setNotFound(true);
    } catch (error) {
      console.log(error);
    }
  };

  const displayDeleteAlert = () => {
    Alert.alert(
      "Are you sure!",
      "This action will delete your appointment history permanently!",
      [
        {
          text: "cancel",
          onPress: () => {},
          style: "cancel",
        },
        { text: "Delete", onPress: () => clearAppointments() },
      ],
      { cancelable: true }
    );
  };

  const onDeleteAppoitment = (appointmentId) => {
    setAppointments((prevappointments) =>
      prevappointments.filter(
        (appointments) => appointments._id !== appointmentId
      )
    );
  };

  if (!appointments) {
    return (
      <View style={styles.loadingIcon}>
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
      <ScrollView style={{ height: screenHeight - 340 }}>
        <View style={styles.content1}>
          <Text style={styles.descript2}>Appointment Status.</Text>
          <TouchableOpacity style={styles.viewBtn} onPress={displayDeleteAlert}>
            <Text style={styles.viewText}>Clear All</Text>
          </TouchableOpacity>
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

        
          {/* appointment status card  */}
          <View style={{ marginBottom: 120 }}>
            {appointments &&
              appointments.map((item) => (
                <CreateCard
                  appointmentId={item._id}
                  key={item._id}
                  image={item.doctorId.proPic}
                  title={item.doctorId.fullName}
                  cardName={"AppointmentStatus"}
                  time={item.time}
                  date={item.date}
                  status={item.status}
                  onDelete={onDeleteAppoitment}
                />
              ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AppointmentStatus;
