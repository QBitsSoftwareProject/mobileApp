import React, { useState, useEffect } from "react";
import {
  View,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAUser, updateAUser } from "../../services/userServices/userService";
import { getADoctor } from "../../services/doctorServices/doctorService";
import passwordUpdate from "../../services/passwordServices/passwordUpdate";
import Toast from "react-native-toast-message";

const ResetPasswordPopUp = ({ isVisible, onClose }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [userId, setUserId] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPasswordMatch(newPassword !== "" && newPassword === confirmPassword);
  }, [newPassword, confirmPassword]);

  const handleCancel = () => {
    setConfirmPassword("");
    setNewPassword("");
    setIsPasswordMatch(false);
    onClose();
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const role = await AsyncStorage.getItem("role");
        setUserRole(role);

        let userData;
        if (role === "regularUser") {
          userData = await getAUser();
          setRole("user");
        } else if (role === "doctor") {
          userData = await getADoctor();
          setRole("doctor");
        } else {
          throw new Error("Invalid user role");
        }

        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (user != null) {
      setUserId(user._id);
    }
  }, [user]);

  const handleChange = async () => {
    try {
      const update = await passwordUpdate(confirmPassword, userId, role);
      handleCancel();

      Toast.show({
        type: "success",
        text1: "Password reset successfully!",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#F2F3F5",
              padding: 20,
              borderRadius: 10,
              width: "80%",
            }}
          >
            <Text
              style={{ alignSelf: "center", fontSize: 18, marginBottom: 15 }}
            >
              Reset Password
            </Text>

            <Text style={{ marginBottom: 5, fontSize: 16 }}>
              New password :
            </Text>

            <TextInput
              style={{
                height: "auto",
                paddingHorizontal: 10,
                marginBottom: 10,
                fontSize: 16,
                width: "100%",
                borderColor: "#4ABFB4",
                borderWidth: 1,
                backgroundColor: "white",
                height: 45,
                borderRadius: 10,
              }}
              placeholder="new password"
              placeholderTextColor={"#D8D8D8"}
              value={newPassword}
              onChangeText={setNewPassword}
            />

            <Text style={{ marginBottom: 5, fontSize: 16 }}>
              Confirm password :
            </Text>

            <TextInput
              style={{
                height: "auto",
                paddingHorizontal: 10,
                marginBottom: 20,
                fontSize: 16,
                width: "100%",
                borderColor: "#4ABFB4",
                borderWidth: 1,
                backgroundColor: "white",
                height: 45,
                borderRadius: 10,
              }}
              placeholder="confirm password"
              placeholderTextColor={"#D8D8D8"}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View>
                <TouchableOpacity
                  onPress={handleCancel}
                  style={{
                    alignSelf: "center",
                    backgroundColor: "white",
                    width: 130,
                    height: 45,
                    justifyContent: "center",
                    borderRadius: 15,
                    borderColor: "#4ABFB4",
                    borderWidth: 1,
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 16,
                      color: "black",
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={handleChange}
                  style={{
                    alignSelf: "center",
                    backgroundColor: "white",
                    width: 130,
                    height: 45,
                    justifyContent: "center",
                    borderRadius: 15,
                    borderColor: "#4ABFB4",
                    borderWidth: 1,
                  }}
                  disabled={!isPasswordMatch}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 16,
                      color: !isPasswordMatch ? "#D8D8D8" : "black",
                    }}
                  >
                    Change
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ResetPasswordPopUp;
