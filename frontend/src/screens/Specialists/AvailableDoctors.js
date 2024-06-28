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

const AvailableDoctor = () => {
  const screenHeight = Dimensions.get("window").height - 275;
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

  return (
    <View>
      <AppointmentHeader
        headLine={"Specialists"}
        subHeadLine={"Explore and find the perfect specialist."}
        back={"HomeScreen"}
      />
      <SafeAreaView
        style={{ height: screenHeight, paddingHorizontal: 25, paddingTop: 15 }}
      >
        <ScrollView style={{ height: "100%" }}>
          <View style={style.content1}>
            <Text style={style.descript2}>Available Doctors.</Text>
            <TouchableOpacity
              style={style.viewBtn}
              onPress={() => {
                navigation.navigate("AppointmentStatus");
              }}
            >
              <Text style={style.viewText}>History</Text>
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
