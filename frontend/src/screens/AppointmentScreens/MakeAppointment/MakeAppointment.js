import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import DateCard from "../../../components/DateCard/DateCard";
import TimeButton from "../../../components/Button/TimeButton";
import PopupMessage from "../../../components/Pop-up/Pop-upScreen";
import RegularButton from "../../../components/Button/RegularButton";
import { useNavigation } from "@react-navigation/native";
import { createAppointment } from "../../../services/appointmentServices/AppointmentServices";
import { viewADoctor } from "../../../services/doctorServices/doctorService";
import loardingGIF from "../../../assets/animation/loading.gif";
import Toast from "react-native-toast-message";

const MakeAppointment = ({ route }) => {
  const { id } = route.params;

  const [timeBtnpress, setTimebtnPress] = useState(false); // State to track time button press
  const [dateBtnPress, setDateBtnPress] = useState(false); // State to track date button press
  const [popupMessage, setPopupMessage] = useState(""); // State for popup message
  const [getTime, setGetTime] = useState();
  const [getDate, setGetDate] = useState();
  const [doctor, setDoctor] = useState();
  const [pressDay, setPressDay] = useState(null);
  const [selectedDateIndex, setSelectedDateIndex] = useState(null);
  const [datePressed, setDatePressed] = useState(false); // State to track if a date has been pressed

  const dateIncrement = (number) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + number);
    return currentDate.getDate();
  };

  const dayIncrement = (number) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + number);
    const day = currentDate.getDay();

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekdays[day];
  };

  const setAppointmentDate = (date) => {
    const appointmentDate = new Date();
    appointmentDate.setDate(date);
    setGetDate(appointmentDate);
  };

  const handleDatePress = (day) => {
    const dayMap = {
      Sun: 0,
      Mon: 1,
      Tue: 2,
      Wed: 3,
      Thu: 4,
      Fri: 5,
      Sat: 6,
    };
    setPressDay(dayMap[day]);
    setDatePressed(true); // Set datePressed to true when a date is pressed
  };

  useEffect(() => {
    fetchDoctor();
  }, []);

  const fetchDoctor = async () => {
    try {
      const res = await viewADoctor({ doctorId: id });
      setDoctor(res);
    } catch (error) {
      console.log(error);
    }
  };
  // Hook for navigation
  const navigation = useNavigation();

  const showMessage = (message) => {
    if (getTime) {
      setPopupMessage(message);
    } else {
      Alert.alert("Error!", "Date and Time is required!");
    }
  };

  const confirmMessage = async () => {
    try {
      await createAppointment(doctor._id, getDate, getTime);
      navigation.navigate("AppointmentStatus");
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Failed to create appointment",
        text1Style: { fontSize: 16, fontWeight: "300" },
        text2Style: { fontSize: 14, fontWeight: "200" },
        visibilityTime: 2000,
        position: "top",
      });
    }
    closeMessage();
  };

  const closeMessage = () => {
    setPopupMessage("");
  };

  const goBack = () => {
    navigation.navigate("AvailableDoctors");
  };

  if (!doctor) {
    return (
      <View style={styles.loardingGif}>
        <Image source={loardingGIF} />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ margin: 25 }}>
      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity style={styles.backBtn} onPress={goBack}>
          <Image source={require("../../../assets/images/blackBack.png")} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Doctor details */}
        <View style={styles.headerBox}>
          <Text style={styles.header}>Dr. {doctor.fullName}</Text>
        </View>

        <View style={styles.boxcontainer}>
          <Image
            source={{
              uri: doctor.proPic,
            }}
            style={styles.Image}
          />

          <View style={styles.description}>
            <Text style={styles.docDetails}>{doctor.qualification}</Text>
            <Text style={styles.docDetails}>{doctor.workplace}</Text>
            <Text style={styles.docDetails}>
              Contact No: {doctor.contactNumber}
            </Text>
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>About</Text>
          <Text style={styles.titledescription}>{doctor.bio}</Text>
        </View>

        {/* Date selection */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>Select Date{"\n"}</Text>

          <ScrollView style={{ flexDirection: "row" }} horizontal>
            {Array.from({ length: 7 }).map((item, index) => (
              <View key={index} style={{ paddingBottom: 10 }}>
                <DateCard
                  key={index}
                  date={dateIncrement(index)}
                  day={dayIncrement(index)}
                  indexKey={index}
                  selected={selectedDateIndex === index}
                  onPress={(idx) => {
                    setSelectedDateIndex(idx); // Update selected date index
                    handleDatePress(dayIncrement(index)); // Ensure only one card is selected at a time
                    setDateBtnPress(true);
                  }}
                  change={dateBtnPress && selectedDateIndex === index}
                  getDate={(date) => setAppointmentDate(date)}
                />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Time selection */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>Available Time Slot</Text>

          <View
            style={{
              height: "auto",
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 5,
              

              
            }}
          >
            {pressDay !== null &&
            doctor.availableTimes &&
            doctor.availableTimes[pressDay].length > 0 ? (
              doctor.availableTimes[pressDay].map((item, index) => (
                <TimeButton
                  key={index}
                  time={item}
                  indexKey={index}
                  press={setTimebtnPress}
                  change={timeBtnpress}
                  getTime={setGetTime}
                />
              ))
            ) : datePressed ? (
              <Text style={styles.noTimeSlotText}>No available time slots</Text>
            ) : null}
          </View>
        </View>

        <View style={{ marginBottom: 150 }}>
          <RegularButton
            name={"Make an appointment"}
            onPress={() => showMessage("Do you confirm???")}
          ></RegularButton>

          {/* Popup message */}
          <PopupMessage
            message={popupMessage}
            onConfirm={confirmMessage}
            onClose={closeMessage}
          />
          <Toast />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MakeAppointment;
