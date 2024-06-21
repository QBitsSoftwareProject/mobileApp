import { Text, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./style";
import CreateCard from "../../components/Card/CreateCard";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import TwoButtonGroup from "../../components/Button/2ButtonGroup";
import { getDoctors } from "../../services/doctorServices/doctorService";

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

  return (
    <View>
      <HeaderSub
        headLine={"Doctor appointment"}
        subHeadLine={"Explore and find the perfect specialist."}
        back={"HomeScreen"}
      />

      <SafeAreaView style={{ padding: 20 }}>
        <ScrollView style={{ height: 500 }}>
          <TwoButtonGroup type={"list"} />

          <SearchBar />

          <View style={{ marginHorizontal: 15 }}>
            <Text style={style.descript2}>Available Doctors.</Text>
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
