import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./style";
import CreateCard from "../../components/Card/CreateCard";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getDoctors } from "../../services/doctorServices/doctorService";
import AppointmentHeader from "../../components/AppointmentHeader/AppointmentHeader";
import loadingGif from "../../assets/animation/loading.gif";

const AvailableDoctor = () => {
  const screenHeight = Dimensions.get("window").height;
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

  if (!docList) {
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
      <AppointmentHeader headLine={"Specialists"} back={"HomeScreen"} />
      <SafeAreaView
        style={{
          paddingHorizontal: 25,
          zIndex: -1,
        }}
      >
        <ScrollView style={{ height: screenHeight - 280, paddingTop: 32 }}>
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

          {/* available doctors */}

          <View style={{ marginBottom: 80 }}>
            {docList.map((item) => (
              <CreateCard
                key={item._id}
                image={item.proPic}
                title={item.userName}
                cardName={"AvailableDoc"}
                university={item.qualification}
                hospital={item.workingPlace}
                onPress={() => {
                  pressHandler(item._id);
                }}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AvailableDoctor;
