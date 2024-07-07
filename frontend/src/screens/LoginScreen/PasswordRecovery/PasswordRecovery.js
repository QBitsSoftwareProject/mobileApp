import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { userLogin } from "../../../services/userServices/userService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";
import { checkExistsUser } from "../../../services/userServices/checkExistsUser";
import { checkExistsDoctor } from "../../../services/doctorServices/checkExistsDoctor";
import sendEmail from "../../../services/emailServices/sendEmail";
import passwordUpdate from "../../../services/passwordServices/passwordUpdate";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [nextPage, setNextPage] = useState(0);
  const [userId, setUserId] = useState();
  const [userRole, setUserRole] = useState();
  const [generatedPin, setGeneratedPin] = useState("");
  const [pin, setPin] = useState("");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate("LoginScreen");
  };

  const handleNext = async () => {
    try {
      if (nextPage === 0) {
        let user = await checkExistsDoctor(email);

        if (!user.user) {
          user = await checkExistsUser(email);
        }

        if (!user.user) {
          console.log("Email does not exist");
          setIsValid(false);
          return;
        }

        const pin = Math.floor(100000 + Math.random() * 900000).toString();
        console.log(pin);
        setGeneratedPin(pin);

        //send email
        await sendEmail(email, pin);

        setUserId(user.user);
        setUserRole(user.role);
        setNextPage(1);
        setIsValid(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pinCheck = () => {
    if (pin == generatedPin) {
      setNextPage(2);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleLoginPress = async () => {
    try {
      if (confirmPassword == newPassword) {
        await passwordUpdate(newPassword, userId, userRole);
        setIsValid(true);

        navigation.navigate("LoginScreen");
      } else {
        setIsValid(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // keyboard handling -----------------------------------------------------------------------------

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress}>
        <Image
          source={require("../../../assets/images/blackBack.png")}
          style={{ marginTop: 55 }}
        />
      </TouchableOpacity>

      <View style={styles.contains}>
        <Text style={{ marginTop: 32, fontSize: 32 }}> Account Recovery</Text>

        {nextPage == 0 ? (
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View style={{ marginTop: 64 }}>
              {!isValid && (
                <View style={{ alignItems: "center", marginBottom: 15 }}>
                  <Text style={{ color: "#E82519" }}>Email is not exists</Text>
                </View>
              )}

              <Text style={{ marginBottom: 10, opacity: 0.7 }}>
                Enter your email address
              </Text>

              <TextInput
                placeholder="Email"
                style={styles.inputField}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={handleNext}>
              <Text style={styles.loginText}>Next</Text>
            </TouchableOpacity>
          </View>
        ) : nextPage == 1 ? (
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View style={{ marginTop: 64 }}>
              {!isValid && (
                <View style={{ alignItems: "center", marginBottom: 15 }}>
                  <Text style={{ color: "#E82519" }}>
                    Pin number is incorrect
                  </Text>
                </View>
              )}

              <Text style={{ marginBottom: 10, opacity: 0.7 }}>
                Enter the pin we sent to your email address
              </Text>

              <TextInput
                placeholder="Pin"
                style={styles.inputField}
                onChangeText={(text) => setPin(text)}
              />
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={pinCheck}>
              <Text style={styles.loginText}>Next</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View style={{ marginTop: 64 }}>
              {!isValid && (
                <View style={{ alignItems: "center", marginBottom: 15 }}>
                  <Text style={{ color: "#E82519" }}>
                    Password doesn't match
                  </Text>
                </View>
              )}

              <Text style={{ marginBottom: 10, opacity: 0.7 }}>
                New Password
              </Text>

              <TextInput
                placeholder="New Password"
                style={styles.inputField}
                onChangeText={(text) => setNewPassword(text)}
                hide={true}
              />

              <Text style={{ marginBottom: 10, opacity: 0.7 }}>
                Confirm Password
              </Text>

              <TextInput
                placeholder="Confirm Password"
                style={styles.inputField}
                onChangeText={(text) => setConfirmPassword(text)}
                hide={true}
              />
            </View>

            <TouchableOpacity
              style={styles.loginBtn}
              onPress={handleLoginPress}
            >
              <Text style={styles.loginText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
  },
  contains: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#4ABFB4",
    height: 50,
    width: 300,
    backgroundColor: "white",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  loginBtn: {
    marginTop: 32,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: 50,
    width: 200,
    borderColor: "#4ABFB4",
    borderWidth: 1,
  },
  loginText: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
  },
  bottomBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 15,
  },
  bottomText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#7D8597",
  },
});

export default PasswordRecovery;
