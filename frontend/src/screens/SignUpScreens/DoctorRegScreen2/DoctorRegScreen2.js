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
import { Picker } from "@react-native-picker/picker";
import FilePicker from "../../../components/GetImages/FilePicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { imageDb } from "../../../config/fireBase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import "react-native-get-random-values";
import { v4 } from "uuid";
import loadingGif from "../../../assets/animation/loading.gif";

const DoctorRegScreen2 = () => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;

  // State variables for storing form inputs
  const [licenseSide1, setLicenseSide1] = useState(null);
  const [licenseSide2, setLicenseSide2] = useState(null);

  const [licenseSide1Url, setLicenseSide1Url] = useState("");
  const [licenseSide2Url, setLicenseSide2Url] = useState("");

  const [qualification, setQualification] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [loader, setLoader] = useState(false);

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
    navigation.navigate("DoctorRegScreen");
  };

  //image uploading function
  const firebaseUpload = async () => {
    try {
      if (licenseSide1 && licenseSide2) {
        setLoader(true);

        const licenseSide1Ref = ref(imageDb, `doctor/license/${v4()}_1`);
        const licenseSide2Ref = ref(imageDb, `doctor/license/${v4()}_2`);

        // Read the file data from local URI
        const licenseSide1Data = await fetch(licenseSide1.uri);
        const licenseSide2Data = await fetch(licenseSide2.uri);

        // Convert the file data to blob
        const licenseSide1Blob = await licenseSide1Data.blob();
        const licenseSide2Blob = await licenseSide2Data.blob();

        // Upload the blobs to Firebase Storage
        await uploadBytes(licenseSide1Ref, licenseSide1Blob);
        const licenseSide1Url = await getDownloadURL(licenseSide1Ref);
        setLicenseSide1Url(licenseSide1Url);
        // console.log(licenseSide1Url)
        await AsyncStorage.setItem("licenseSide1", licenseSide1Url);

        await uploadBytes(licenseSide2Ref, licenseSide2Blob);
        const licenseSide2Url = await getDownloadURL(licenseSide2Ref);
        setLicenseSide2Url(licenseSide2Url);

        await AsyncStorage.setItem("licenseSide2", licenseSide2Url);
      } else {
        console.error("License images are not selected");
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  // save data to local storage
  const setItems = async () => {
    try {
      data = [
        ["specialization", selectedValue],
        ["qualification", qualification],
      ];

      await AsyncStorage.multiSet(data);
      // console.log("Multiple items saved successfully!");
    } catch (error) {
      console.error("Error saving multiple items:", error);
    }
  };

  // Handler for moving to the next step or screen
  const handleNext = () => {
    if (
      licenseSide1 === null ||
      licenseSide2 === null ||
      qualification.trim() === ""
    ) {
      setIsEmpty(true);
    } else if (selectedValue === "" || selectedValue === "default") {
      setSelectedValue("default");
      setIsEmpty(false);
    } else {
      setIsEmpty(false);

      firebaseUpload();

      //store the items
      setItems();

      navigation.navigate("DoctorRegScreen3");
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
            <Text style={styles.subText}>Professional Information</Text>

            <FilePicker
              errMsg={"You have to select an image"}
              selectedImg={setLicenseSide1}
              label={"Upload the doctor license front side picture"}
            />
            <FilePicker
              errMsg={"You have to select an image"}
              selectedImg={setLicenseSide2}
              label={"Upload the doctor license back side picture"}
            />

            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#40495B",
                  marginBottom: 7,
                }}
              >
                Specialization :
              </Text>

              <View style={styles.wrapper}>
                <Picker
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }
                  style={styles.picker}
                >
                  <Picker.Item
                    label="Select your speciality"
                    value="default"
                    style={styles.pickerItem}
                  />
                  <Picker.Item
                    label="Option 1"
                    value="option1"
                    style={styles.pickerItem}
                  />
                  <Picker.Item
                    label="Option 2"
                    value="option2"
                    style={styles.pickerItem}
                  />
                </Picker>
              </View>
            </View>

            <InputField
              placeHolder={
                "ex_B.A. Biochemistry (Hons) - University of Oxford, UK M.B.B.S (Hons) University of Colombo"
              }
              label={"Educational Qualifications :"}
              onChangeText={setQualification}
              type={"textField"}
            />
          </View>

          {isEmpty && selectedValue != "default" && (
            <View style={{ alignItems: "center", marginTop: 15 }}>
              <Text style={{ color: "#E82519" }}>
                Input fields cannot be empty!
              </Text>
            </View>
          )}
          {selectedValue === "default" && (
            <View style={{ alignItems: "center", marginTop: 15 }}>
              <Text style={{ color: "#E82519" }}>
                Please select your specialization
              </Text>
            </View>
          )}

          {loader ? (
            <View style={styles.loader}>
              <Image source={loadingGif} />
            </View>
          ) : (
            <View style={{ marginVertical: 32, alignItems: "center" }}>
              <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
                <Text style={styles.nextText}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default DoctorRegScreen2;
