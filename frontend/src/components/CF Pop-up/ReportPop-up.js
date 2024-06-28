import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import { createReport } from "../../services/reportServices/reportServices";

const ReportPopupMessage = ({ message, onClose, postId }) => {
  const [select, setSelect] = useState();

  const handleSaveButtonPress = async () => {
    try {
      await createReport(postId, select);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal transparent animationType="slide" visible={!!message}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer1}>
          <Text style={styles.messageText}>{message}</Text>

          <View style={styles.options}>
            <RadioButton.Group
              onValueChange={(newValue) => setSelect(newValue)}
              value={select}
            >
              <View style={styles.option}>
                <RadioButton value="unwantedContent" color="#5296C5" />
                <Text>Unwanted Commercial content or spam</Text>
              </View>
              <View style={styles.option}>
                <RadioButton value="harassment" color="#5296C5" />
                <Text>Bullying, harassment or abuse</Text>
              </View>
              <View style={styles.option}>
                <RadioButton value="selfHarm" color="#5296C5" />
                <Text>Suicide or self-harm</Text>
              </View>
              <View style={styles.option}>
                <RadioButton value="violentContent" color="#5296C5" />
                <Text>Violent, hateful or disturbing content</Text>
              </View>
              <View style={styles.option}>
                <RadioButton value="scam" color="#5296C5" />
                <Text>Scam, fraud or false information</Text>
              </View>
              <View style={styles.option}>
                <RadioButton value="noInterest" color="#5296C5" />
                <Text>I do not want to see this</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.modalContainer2}>
            <TouchableOpacity onPress={onClose} style={styles.popupButton}>
              <Text style={styles.popupButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSaveButtonPress}
              style={styles.popupButton}
            >
              <Text style={styles.popupButtonText}>Report</Text>
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
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  messageText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#40495B",
    textAlign: "left",
    marginBottom: 10,
  },
  options: {
    marginBottom: 15,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  modalContainer2: {
    flexDirection: "row",
    paddingTop: 20,
  },
  popupButton: {
    marginHorizontal: 20,
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "red",
    // borderWidth: 2,
  },
  popupButtonText: {
    color: "#101318",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default ReportPopupMessage;
