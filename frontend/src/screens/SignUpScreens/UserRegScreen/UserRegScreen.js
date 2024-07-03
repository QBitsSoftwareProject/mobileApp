import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../../components/InputField/InputField";
import CheckBox from "expo-checkbox";
import { userRegistration } from "../../../services/userServices/userService";
import { imageDb } from "../../../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import FilePicker from "../../../components/GetImages/FilePicker";
import loadingGif from "../../../assets/animation/loading.gif";
import { checkExistsUser } from "../../../services/userServices/checkExistsUser";

const UserRegScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [proPic, setProPic] = useState(null);
  const [proPicUrl, setProPicUrl] = useState("");

  const [unCheckedColor, setUnCheckedColor] = useState("#40495B");

  const [isEmpty, setIsEmpty] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailExist, setEmailExist] = useState(false);
  const [isPhoneNumValid, setIsPhoneNumValid] = useState(true);
  const [loader, setLoader] = useState(false);

  const screenHeight = Dimensions.get("window").height;

  const handleBackPress = () => {
    navigation.navigate("SelectionScreen");
  };

  const handleCancel = () => {
    navigation.navigate("WelcomeScreen");
  };

  //regular exprestion check for email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //regular exprestion check for phone number
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+\d{11}$/;
    return phoneRegex.test(phoneNumber);
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

  //image uploading function
  const firebaseUpload = async () => {
    try {
      if (proPic) {
        setLoader(true);

        const proPicRef = ref(imageDb, `user/profile/${v4()}`);
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

  const handleSubmit = async () => {
    //form validation
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
    } else if (!isChecked) {
      setUnCheckedColor("#E82519");
      setIsEmpty(false);
    } else if (!validateEmail(email)) {
      setIsEmailValid(false);
      setIsEmpty(false);
    } else if (!validatePhoneNumber(contactNo)) {
      setIsPhoneNumValid(false);
      setIsEmailValid(true);
      setIsEmpty(false);
    } else {
      setIsEmpty(false);
      setIsPhoneNumValid(true);
      setUnCheckedColor("#40495B");

      console.log("click");
      const checkUser = await checkExistsUser(email);

      if (checkUser.user != null) {
        setEmailExist(true);
        return;
      }

      const imageUrl = await firebaseUpload();
      if (imageUrl) {
        // If URL is obtained successfully, call sendDoctor
        await sendUser(imageUrl);
      } else {
        console.error("Failed to get profile picture URL");
      }
    }
  };

  const sendUser = async (imageUrl) => {
    try {
      console.log("12");
      const userData = await userRegistration(
        name,
        userName,
        email,
        password,
        contactNo,
        address,
        city,
        country,
        imageUrl
      );

      if (userData != null) {
        navigation.navigate("LoginScreen");
      }
    } catch (error) {
      console.log(error);
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
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <ScrollView>
            <View style={{ alignItems: "left" }}>
              <Text style={styles.headerText}>
                Please fill the following form with correct details.
              </Text>

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
                placeHolder={"Enter a new password"}
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

              <FilePicker
                errMsg={"You have to select an image"}
                selectedImg={setProPic}
                label={"Upload a profile picture"}
              />
            </View>

            <View style={{ marginBottom: 32 }}>
              <Text style={styles.privacyText}>Privacy and Policies</Text>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("PrivacyAndPolicy", {
                    prevScreen: "UserRegScreen",
                  })
                }
              >
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
                I acknowledge that I have read, understood, and agree to abide
                by the this app Privacy Policy and Terms of Service.
              </Text>
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

            {loader ? (
              <View style={styles.loader}>
                <Image source={loadingGif} />
              </View>
            ) : (
              <View style={{ marginVertical: 32, alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.submitBtn}
                  onPress={handleSubmit}
                >
                  <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.cancelBtn}
                  onPress={handleCancel}
                >
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default UserRegScreen;
