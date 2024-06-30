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
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../../components/InputField/InputField";
import CheckBox from "expo-checkbox";
import FilePicker from "../../../components/GetImages/FilePicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doctorRegistration } from "../../../services/doctorServices/doctorService";
import { imageDb } from "../../../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import "react-native-get-random-values";
import { v4 } from "uuid";
import loadingGif from "../../../assets/animation/loading.gif";

const DoctorRegScreen4 = ({ route }) => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;

  const {
    availableDays,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  } = route.params;

  // console.log(monday, tuesday, wednesday, thursday, friday, saturday, sunday);

  // State variables for managing screen padding, additional details, and form validation
  const [screenPadding, setScreenPadding] = useState(0);
  const [bio, setBio] = useState("");
  const [unCheckedColor, setUnCheckedColor] = useState("#5C677D");

  const [isEmpty, setIsEmpty] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [proPic, setProPic] = useState(null);
  const [proPicUrl, setProPicUrl] = useState("");
  const [loader, setLoader] = useState(false);

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
    navigation.navigate("DoctorRegScreen3");
  };

  // Handler for cancelling the registration process
  const handleCancel = () => {
    navigation.navigate("LoginScreen");
  };

  //image uploading function
  const firebaseUpload = async () => {
    try {
      if (proPic) {
        setLoader(true);
        const proPicRef = ref(imageDb, `doctor/profile/${v4()}`);
        const proPicData = await fetch(proPic.uri);
        const proPicBlob = await proPicData.blob();
        await uploadBytes(proPicRef, proPicBlob);

        const newProPicUrl = await getDownloadURL(proPicRef);
        setProPicUrl(newProPicUrl);

        return newProPicUrl; // Return the URL
      } else {
        console.error("Profile picture is not selected");
        return null;
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      return null;
    }
  };

  //send doctor details to backend
  const sendDoctor = async (imageUrl) => {
    try {
      const fullName = await AsyncStorage.getItem("fullName");
      const userName = await AsyncStorage.getItem("userName");
      const email = await AsyncStorage.getItem("email");
      const password = await AsyncStorage.getItem("password");
      const contactNumber = await AsyncStorage.getItem("contactNumber");
      const address = await AsyncStorage.getItem("address");
      const city = await AsyncStorage.getItem("city");
      const country = await AsyncStorage.getItem("country");
      const licenseSide1 = await AsyncStorage.getItem("licenseSide1");
      const licenseSide2 = await AsyncStorage.getItem("licenseSide2");
      const workplace = await AsyncStorage.getItem("workplace");
      const qualification = await AsyncStorage.getItem("qualification");
      console.log(monday);
      const userData = await doctorRegistration(
        fullName,
        userName,
        email,
        password,
        contactNumber,
        address,
        city,
        country,
        licenseSide1,
        licenseSide2,
        workplace,
        qualification,
        availableDays,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
        imageUrl,
        bio
      );

      if (userData != null) {
        clearAllData();
        navigation.navigate("LoginScreen");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearAllData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error("Error clearing AsyncStorage data:", error);
    }
  };

  // Handler for submitting the registration form
  const handleSubmit = async () => {
    if (bio.trim() === "" || proPic == null) {
      setIsEmpty(true);
    } else if (!isChecked) {
      setUnCheckedColor("#E82519");
      setIsEmpty(false);
    } else {
      setIsEmpty(false);

      const imageUrl = await firebaseUpload();
      if (imageUrl) {
        // If URL is obtained successfully, call sendDoctor
        await sendDoctor(imageUrl);
      } else {
        console.error("Failed to get profile picture URL");
      }
    }
  };

  return (
    <View style={styles.conatiner}>
      <TouchableOpacity onPress={handleBackPress}>
        <Image
          source={require("../../../assets/images/blackBack.png")}
          style={{ marginTop: 55 }}
        />
      </TouchableOpacity>

      <View style={{ maxHeight: screenHeight - 87 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: screenPadding }}>
          <View style={{ alignItems: "left" }}>
            <Text style={styles.headerText}>
              Please fill the following form with correct details.
            </Text>
            <Text style={styles.subText}>Additional Details</Text>

            <FilePicker
              errMsg={"You have to select an image"}
              selectedImg={setProPic}
              label={"Upload a profile picture"}
            />

            <InputField
              placeHolder={
                "Describe your expertise and approach. \n(max words 300)"
              }
              label={"Brief Bio :"}
              onChangeText={setBio}
              type={"textField"}
            />
          </View>

          <View style={{ marginBottom: 32 }}>
            <Text style={styles.privacyText}>Privacy and Policies</Text>

            <TouchableOpacity>
              <Text style={styles.privacyLink}>
                Click here to view our Privacy Policy for more information.
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              width: "90%",
            }}
          >
            <CheckBox
              value={isChecked}
              onValueChange={() => setIsChecked(!isChecked)}
              style={{ padding: 10, borderRadius: 5 }}
            />
            <Text style={{ color: unCheckedColor }}>
              I acknowledge that I have read, understood, and agree to abide by
              the this app Privacy Policy and Terms of Service.
            </Text>
          </View>

          {isEmpty && (
            <View style={{ alignItems: "center", marginTop: 15 }}>
              <Text style={{ color: "#E82519" }}>
                Input fields cannot be empty!
              </Text>
            </View>
          )}

          {loader ? (
            <View style={styles.loader}>
              <Image source={loadingGif} />
            </View>
          ) : (
            <View style={{ marginVertical: 32, alignItems: "center" }}>
              <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cancelBtn} onPress={handleCancel}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default DoctorRegScreen4;
