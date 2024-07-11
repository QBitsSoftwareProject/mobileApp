import React, { useState, useEffect } from "react";
import { View, Modal, Text, TextInput, TouchableOpacity } from "react-native";

const ResetPasswordPopUp = ({ isVisible, onClose, logout }) => {
  const handleLogout = () => {
    onClose();
    logout();
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
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
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            justifyContent: "center",
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
              Logout
            </Text>

            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                marginTop: 15,
                alignSelf: "center",
              }}
            >
              Are you sure to logout?
            </Text>
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
                  onPress={onClose}
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
                  onPress={handleLogout}
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
                    }}
                  >
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ResetPasswordPopUp;
