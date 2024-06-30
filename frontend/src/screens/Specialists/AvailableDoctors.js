import React, { useEffect, useState } from "react";
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./style";
import CreateCard from "../../components/Card/CreateCard";
import { useNavigation } from "@react-navigation/native";
import { getDoctors } from "../../services/doctorServices/doctorService";
import AppointmentHeader from "../../components/AppointmentHeader/AppointmentHeader";
import loadingGif from "../../assets/animation/loading.gif";

const AvailableDoctor = () => {
  const navigation = useNavigation();
  const [docList, setDocList] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await getDoctors();
      setDocList(res);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle navigation to appointment screen
  const pressHandler = (docId) => {
    navigation.navigate("MakeAppointment", { id: docId });
  };

  if (!docList.length) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={loadingGif} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <AppointmentHeader headLine={"Specialists"} back={"HomeScreen"} />
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 25 }}>
        <View style={{ flex: 1 }}>
          <View style={style.content1}>
            <Text style={style.descript2}>Available Doctors.</Text>
            <TouchableOpacity
              style={style.viewBtn}
              onPress={() => {
                navigation.navigate("AppointmentStatus");
              }}
            >
              <Text style={style.viewText}>My Appointments</Text>
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
            {docList.map((item) => (
              <CreateCard
                key={item._id}
                image={item.proPic}
                title={item.userName}
                cardName={"AvailableDoc"}
                university={item.qualification}
                hospital={item.workplace}
                contactNumber={item.contactNumber}
                onPress={() => {
                  pressHandler(item._id);
                }}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AvailableDoctor;
