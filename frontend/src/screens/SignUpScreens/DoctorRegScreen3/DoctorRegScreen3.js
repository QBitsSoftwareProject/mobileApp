import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../../components/InputField/InputField";
import styles from "./styles";
import SelectionBars from "../../../components/SelectionBars/SelectionBars";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DoctorRegScreen3 = () => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;

  // State variables for managing screen padding and availability details
  const [screenPadding, setScreenPadding] = useState(0);

  const [isMonday, setIsMonday] = useState(false);
  const [isTuesday, setIsTuesday] = useState(false);
  const [isWednesday, setIsWednesday] = useState(false);
  const [isThursday, setIsThursday] = useState(false);
  const [isFriday, setIsFriday] = useState(false);
  const [isSaturday, setIsSaturday] = useState(false);
  const [isSunday, setIsSunday] = useState(false);

  const [isNext, setIsNext] = useState(false);

  const [availableTimesDay1, setAvailableTimesDay1] = useState([]);
  const [availableTimesDay2, setAvailableTimesDay2] = useState([]);
  const [availableTimesDay3, setAvailableTimesDay3] = useState([]);
  const [availableTimesDay4, setAvailableTimesDay4] = useState([]);
  const [availableTimesDay5, setAvailableTimesDay5] = useState([]);
  const [availableTimesDay6, setAvailableTimesDay6] = useState([]);
  const [availableTimesDay7, setAvailableTimesDay7] = useState([]);

  console.log(availableTimesDay1);

  // Effect for managing keyboard visibility
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        setScreenPadding(200);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setScreenPadding(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // Handler for navigating back to the previous screen
  const handleBackPress = () => {
    navigation.navigate("DoctorRegScreen2");
  };

  // Handler for moving to the next step or screen
  const handleNext = () => {
    setIsNext(true);

    const avbDays = updateAvailableDays();

    navigation.navigate("DoctorRegScreen4", {
      availableDays: avbDays,
      monday: availableTimesDay1,
      tuesday: availableTimesDay2,
      wednesday: availableTimesDay3,
      thursday: availableTimesDay4,
      friday: availableTimesDay5,
      saturday: availableTimesDay6,
      sunday: availableTimesDay7,
    });
  };

  // Function to update available days
  const updateAvailableDays = () => {
    let availableDays = [];

    if (isMonday) {
      availableDays.push("monday");
    }
    if (isTuesday) {
      availableDays.push("tuesday");
    }
    if (isWednesday) {
      availableDays.push("wednessday");
    }
    if (isThursday) {
      availableDays.push("thursday");
    }
    if (isFriday) {
      availableDays.push("friday");
    }
    if (isSaturday) {
      availableDays.push("saturday");
    }
    if (isSunday) {
      availableDays.push("sunday");
    }

    return availableDays;
  };

  return (
    <View style={styles.conatiner}>
      <TouchableOpacity onPress={handleBackPress}>
        <Image
          source={require("../../../assets/images/blackBack.png")}
          style={{ marginTop: 25 }}
        />
      </TouchableOpacity>

      <View style={{ maxHeight: screenHeight - 87 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: screenPadding }}>
          <View style={{ alignItems: "left" }}>
            <Text style={styles.headerText}>
              Please fill the following form with correct details.
            </Text>
            <Text style={styles.subText}>Availability and Contact:</Text>

            <SelectionBars
              num={1}
              headLine={"Monday"}
              timeSlotVisible={true}
              dayBlock={(check) => setIsMonday(check)}
              timeBlock={setAvailableTimesDay1}
            />
            <SelectionBars
              num={2}
              headLine={"Tuesday"}
              timeSlotVisible={true}
              dayBlock={(check) => {
                setIsTuesday(check);
              }}
              timeBlock={setAvailableTimesDay2}
            />
            <SelectionBars
              num={3}
              headLine={"Wednesday"}
              timeSlotVisible={true}
              dayBlock={(check) => setIsWednesday(check)}
              timeBlock={setAvailableTimesDay3}
            />
            <SelectionBars
              num={4}
              headLine={"Thursday"}
              timeSlotVisible={true}
              dayBlock={(check) => setIsThursday(check)}
              timeBlock={setAvailableTimesDay4}
            />
            <SelectionBars
              num={5}
              headLine={"Friday"}
              timeSlotVisible={true}
              dayBlock={(check) => setIsFriday(check)}
              timeBlock={setAvailableTimesDay5}
            />
            <SelectionBars
              num={6}
              headLine={"Sturday"}
              timeSlotVisible={true}
              dayBlock={(check) => setIsSaturday(check)}
              timeBlock={setAvailableTimesDay6}
            />
            <SelectionBars
              num={7}
              headLine={"Sunday"}
              timeSlotVisible={true}
              dayBlock={(check) => setIsSunday(check)}
              timeBlock={setAvailableTimesDay7}
            />
          </View>

          <View style={{ marginVertical: 32, alignItems: "center" }}>
            <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DoctorRegScreen3;
