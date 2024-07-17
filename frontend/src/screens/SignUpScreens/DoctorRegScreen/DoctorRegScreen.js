import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../../components/InputField/InputField";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkExistsDoctor } from "../../../services/doctorServices/checkExistsDoctor";

const DoctorRegScreen = () => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;

  // State variables for storing form inputs
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  // State variables for validation and error handling
  const [isEmpty, setIsEmpty] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneNumValid, setIsPhoneNumValid] = useState(true);
  const [emailExist, setEmailExist] = useState(false);

  // State variable for adjusting screen padding when keyboard is open
  const [screenPadding, setScreenPadding] = useState(0);

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
    navigation.navigate("SelectionScreen");
  };

  // Function for validating email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //check email
  const checkEmail = () => {
    if (!isEmailValid) {
      return "Email is not valid!";
    } else if (emailExist) {
      return "Email is already exists";
    } else {
      return "";
    }
  };

  // Function for validating phone number format
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+\d{11}$/;
    return phoneRegex.test(phoneNumber);
  };

  // save data to local storage
  const setItems = async () => {
    try {
      data = [
        ["fullName", name],
        ["userName", userName],
        ["email", email],
        ["password", password],
        ["contactNumber", contactNo],
        ["address", address],
        ["city", city],
        ["country", country],
      ];

      await AsyncStorage.multiSet(data);
      // console.log("Multiple items saved successfully!");
    } catch (error) {
      console.error("Error saving multiple items:", error);
    }
  };

  // Handler for moving to the next step or screen
  const handleNext = async () => {
    try {
      if (
        name.trim() === "" ||
        userName.trim() === "" ||
        email.trim() === "" ||
        password.trim() === "" ||
        contactNo.trim() === "" ||
        address.trim() === "" ||
        city.trim() === "" ||
        country.trim() === ""
      ) {
        setIsEmpty(true);
      } else if (!validateEmail(email)) {
        setIsEmailValid(false);
        setIsEmpty(false);
        setIsPhoneNumValid(true);
      } else if (!validatePhoneNumber(contactNo)) {
        setIsPhoneNumValid(false);
        setIsEmailValid(true);
        setIsEmpty(false);
      } else {
        setIsEmpty(false);

        setIsPhoneNumValid(true);
        const checkUser = await checkExistsDoctor(email);

        if (checkUser.user != null) {
          setEmailExist(true);
          return;
        }

        setItems();

        navigation.navigate("DoctorRegScreen2");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.conatiner}>
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
            <Text style={styles.subText}>Personal Information</Text>

            <InputField
              placeHolder={"B.M. Weerasinghe"}
              label={"Full name / Name with initial :"}
              onChangeText={setName}
            />
            <InputField
              placeHolder={"Bimsara Madusha"}
              label={"User name :"}
              onChangeText={setUserName}
            />
            <InputField
              placeHolder={"ex@gmail.com"}
              label={"Email :"}
              onChangeText={setEmail}
              errMsg={checkEmail()}
            />
            <InputField
              placeHolder={"Password"}
              label={"Password :"}
              onChangeText={setPassword}
              hide={true}
            />
            <InputField
              placeHolder={"+9412345678"}
              label={"Contact No :"}
              onChangeText={setContactNo}
              errMsg={!isPhoneNumValid ? "Phone number is not valid!" : ""}
            />
            <InputField
              placeHolder={"67/1, welona place, kaubedda"}
              label={"Address :"}
              onChangeText={setAddress}
            />
            <InputField
              placeHolder={"Moratuwa"}
              label={"City :"}
              onChangeText={setCity}
            />
            <InputField
              placeHolder={"Ex_Sri Lanka"}
              label={"Country :"}
              onChangeText={setCountry}
              searchBox={true}
              query={country}
            />
          </View>

          {isEmpty && (
            <View style={{ alignItems: "center", marginTop: 15 }}>
              <Text style={{ color: "#E82519" }}>
                Input fields cannot be empty!
              </Text>
            </View>
          )}
          {(!isEmailValid || emailExist || !isPhoneNumValid) && (
            <View style={{ alignItems: "center", marginTop: 15 }}>
              <Text style={{ color: "#E82519" }}>Check your input data!</Text>
            </View>
          )}

          <View style={{ marginVertical: 32, alignItems: "center" }}>
            <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DoctorRegScreen;
