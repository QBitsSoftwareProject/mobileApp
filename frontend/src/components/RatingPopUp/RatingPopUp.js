import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
import { SplitButton } from "../../screens/FeedbackScreen/ProgressBar";
import { updateAUser } from "../../services/userServices/userService";
import {
  updateAGoal,
  userGoalRating,
} from "../../services/goalsService/goalsService";

const RatingPopUp = ({ message, onClose, goalId, title }) => {
  const [select, setSelect] = useState();
  const [rateValue, setRateValue] = useState(null);

  const handleSaveButtonPress = async () => {
    try {
      if (rateValue) {
        await updateAGoal(goalId, {
          currentRating: rateValue,
          ratingCount: 1,
        });

        //update user rating state
        await userGoalRating(goalId);
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal transparent animationType="slide" visible={!!message}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer1}>
          <Text style={styles.messageText}>{message}</Text>
          <Text
            style={{ fontWeight: "500", textAlign: "center", fontSize: 20 }}
          >
            {title}
          </Text>

          <View style={styles.options}>
            <SplitButton rateFunction={setRateValue} />
          </View>

          <View style={styles.modalContainer2}>
            <TouchableOpacity
              onPress={handleSaveButtonPress}
              style={styles.popupButton}
            >
              <Text style={styles.popupButtonText}>Rate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer1: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    width: "90%",
  },
  messageText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#40495B",
    textAlign: "center",
    marginBottom: 10,
  },

  modalContainer2: {
    flexDirection: "row",
    justifyContent: "center",
  },
  popupButton: {
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  popupButtonText: {
    color: "#101318",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default RatingPopUp;
