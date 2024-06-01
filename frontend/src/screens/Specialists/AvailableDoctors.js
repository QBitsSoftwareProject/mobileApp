import { Text, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./style";
import CreateCard from "../../components/Card/CreateCard";

import HeaderSub from "../../components/HeaderSub/HeaderSub";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import TwoButtonGroup from "../../components/Button/2ButtonGroup";
import {
  getADoctor,
  getDoctors,
} from "../../services/doctorServices/doctorService";

// Mock data for available doctors
// const docList = [
//   {
//     id: 1,
//     image: require("../../assets/images/kitharringtonhair.jpg"),
//     title: "Dr. B.M. Weerasinghe.",
//     university: "MBBS, University of Colombo.",
//     regno: "234589.",
//     hospital: "Anuradhapura Genaral Hospital.",
//   },
//   {
//     id: 2,
//     image: require("../../assets/images/kitharringtonhair.jpg"),
//     title: "Dr. B.M. Amarasinghe.",
//     university: "MBBS, University of Colombo.",
//     regno: "234589.",
//     hospital: "Anuradhapura Genaral Hospital.",
//   },
//   {
//     id: 3,
//     image: require("../../assets/images/kitharringtonhair.jpg"),
//     title: "Dr. B.M. Samarasinghe.",
//     university: "MBBS, University of Colombo.",
//     regno: "234589.",
//     hospital: "Anuradhapura Genaral Hospital.",
//   },
//   {
//     id: 4,
//     image: require("../../assets/images/kitharringtonhair.jpg"),
//     title: "Dr. B.M. Jayasinghe.",
//     university: "MBBS, University of Colombo.",
//     regno: "234589.",
//     hospital: "Anuradhapura Genaral Hospital.",
//   },
//   {
//     id: 5,
//     image: require("../../assets/images/kitharringtonhair.jpg"),
//     title: "Dr. B.M. Ranasinghe.",
//     university: "MBBS, University of Colombo.",
//     regno: "234589.",
//     hospital: "Anuradhapura Genaral Hospital.",
//   },
// ];

const AvailableDoctor = () => {
  const navigation = useNavigation();

  const [searchPress, setSearchPress] = useState(false); // State variable to track if search bar is active
  const [filteredData, setFilteredData] = useState([]); // State variable to store filtered data based on search query
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

  const goBack = () => {
    setSearchPress(false); // Set searchPress state to false to exit search mode
    setFilteredData([]); // Clear filtered data
  };

  return (
    <View>
      <HeaderSub
        headLine={"Doctor appointment"}
        subHeadLine={"Explore and find the perfect specialist."}
        onPress={goBack}
      />

      <SafeAreaView style={{ margin: 25 }}>
        <ScrollView style={{ height: 500 }}>
          <TwoButtonGroup type={"list"} />

          <SearchBar press={setSearchPress} newData={setFilteredData} />

          <View style={{ marginHorizontal: 15 }}>
            <Text style={style.descript2}>Available Doctors.</Text>
          </View>

          {/* available doctors */}
          {!searchPress && (
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
          )}

          {/* filtered doctors */}
          {searchPress && (
            <View style={{ marginBottom: 80 }}>
              {filteredData.map((item) => (
                <CreateCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  cardName={"AvailableDoc"}
                  university={item.university}
                  regno={item.regno}
                  hospital={item.hospital}
                  onPress={pressHandler}
                />
              ))}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AvailableDoctor;
