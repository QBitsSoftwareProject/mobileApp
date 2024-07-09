import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
import { SplitButton } from "../../screens/FeedbackScreen/ProgressBar";
import { updateMethodRatingById } from "../../services/mindRelaxingMethodService/mindRelaxingMethodService";


const RatingPopUp = ({ message, onClose, methodId, title ,visible, close, ratedUsers, currentRating }) => {
  const [select, setSelect] = useState();
  const [rateValue, setRateValue] = useState(0);

  // console.log(methodId);

  const handleSaveButtonPress = async () => {
    try {
      await updateMethodRatingById(methodId,rateValue,ratedUsers,currentRating)
      close()
      onClose("Your rate is invaluable. Thank you!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSipButtonPress =() => {
    try {
      close()
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal transparent animationType="slide" visible={visible}>
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
            <View style={styles.rate}>
            <TouchableOpacity
              onPress={handleSaveButtonPress}
              style={styles.popupButton}
            >
              <Text style={styles.popupButtonText}>Rate</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.skip}>
            <TouchableOpacity
              onPress={handleSipButtonPress}
              style={styles.popupButton}
            >
              <Text style={styles.popupButtonText}>Skip</Text>
            </TouchableOpacity>
            </View>
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

  skip:{
    flex:1,
    alignItems: "center",
  },
  rate:{
    flex:1,
    alignItems: "center",
  }
});

export default RatingPopUp;
