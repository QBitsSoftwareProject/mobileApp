import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import DateCard from "../../components/DateCard/DateCard";
import TimeButton from "../../components/Button/TimeButton";
import PopupMessage from "../../components/Pop-up/Pop-upScreen";
import RegularButton from "../../components/Button/RegularButton";
import { useNavigation } from "@react-navigation/native";
// import { createAppointment } from "../../servises/appointmentServise/AppointmentServise";
import {
  getADoctor,
  viewADoctor,
} from "../../services/doctorServices/doctorService";
import loardingGIF from "../../assets/animation/loading.gif";

// Mock data for date and time slots
const dateList = [
  { id: 1, date: "17", month: "Mon" },
  { id: 2, date: "18", month: "Tue" },
  { id: 3, date: "19", month: "Wed" },
  { id: 4, date: "20", month: "Thur" },
  { id: 5, date: "21", month: "Fri" },
  { id: 6, date: "22", month: "Sat" },
  { id: 7, date: "23", month: "Sun" },
];

const timeList = [
  { id: 1, time: "5.00PM" },
  { id: 2, time: "5.30PM" },
  { id: 3, time: "6.00PM" },
  { id: 4, time: "6.30PM" },
  { id: 5, time: "7.00PM" },
  { id: 6, time: "7.300PM" },
];

const doctorId1 = "6602fde8bdb3f4f68ebaa101";
const doctorId2 = "6603de56c39e6389183ec3c7";

const userId = "6602fde8bdb3f4f68ebaa101";

const MakeAppointment = ({ route }) => {
  const [numColumns, setNumColumns] = useState(2); // Number of columns for layout
  const [timeBtnpress, setTimebtnPress] = useState(false); // State to track time button press
  const [dateBtnPress, setDateBtnPress] = useState(false); // State to track date button press
  const [popupMessage, setPopupMessage] = useState(""); // State for popup message
  const [getTime, setGetTime] = useState();
  const [getDate, setGetDate] = useState();
  const [doctor, setDoctor] = useState();
  const { id } = route.params;

  useEffect(() => {
    fetchDoctor();
  }, []);

  const fetchDoctor = async () => {
    try {
      const res = await viewADoctor({ doctorId: id });
      setDoctor(res);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  // Hook for navigation
  const navigation = useNavigation();

  const showMessage = (message) => {
    setPopupMessage(message);
  };

  const confirmMessage = async () => {
    try {
      await createAppointment(doctorId1, userId, getDate, getTime);

      navigation.navigate("AppointmentStatus");
    } catch (error) {
      console.log(error);
    }
  };

  const closeMessage = () => {
    setPopupMessage("");
  };

  const goBack = () => {
    navigation.navigate("AvailableDoctors");
  };

  if (!doctor) {
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

  return (
    <SafeAreaView style={{ margin: 25 }}>
      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity style={styles.backBtn} onPress={goBack}>
          <Image source={require("../../assets/images/backBlack.png")} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Doctor details */}
        <View style={styles.headerBox}>
          <Text style={styles.header}>Dr. {doctor.userName}</Text>
        </View>

        <View style={styles.boxcontainer}>
          <View>
            <Image
              source={{
                uri: doctor.proPic,
              }}
              style={styles.Image}
            />
          </View>

          <View style={styles.description}>
            <Text style={styles.docDetails}>{doctor.qualification}</Text>

            <Text style={styles.docDetails}>{doctor.workPlace}</Text>
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>About</Text>

          <Text style={styles.titledescription}>{doctor.bio}</Text>
        </View>

        {/* Date selection */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>Select Date{"\n"}</Text>

          <View style={{ flexDirection: "row" }}>
            {dateList.map((item, index) => (
              <View key={item.id} style={{ paddingBottom: 10 }}>
                <DateCard
                  key={index}
                  date={item.date}
                  month={item.month}
                  indexKey={index}
                  press={setDateBtnPress}
                  change={dateBtnPress}
                  getDate={setGetDate}
                />
              </View>
            ))}
          </View>
        </View>

        {/* Time selection */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>Available Time Slot{"\n"}</Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {timeList.map((item, index) => (
              <TimeButton
                key={index}
                time={item.time}
                indexKey={index}
                press={setTimebtnPress}
                change={timeBtnpress}
                getTime={setGetTime}
              />
            ))}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MakeAppointment;
