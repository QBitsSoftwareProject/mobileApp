import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { getAPost } from "../../services/postServices/postServices";

const EditPopupMessage = ({ message, onClose, onConfirm, id }) => {
  const [editedPostDescription, setEditedPostDescription] = useState("");

  const [onePost, setOnePost] = useState("");
  console.log(onePost);

  const fetchAPostData = async () => {
    try {
      const res = await getAPost(id);
      setOnePost(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPostData();
  }, []);

  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  if (!onePost) {
    return;
  }

  return (
    <Modal transparent animationType="slide" visible={!!message}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer1}>
          <Text style={styles.messageText}>{message}</Text>

          <TextInput
            style={styles.textinput}
            value={editedPostDescription}
            defaultValue={onePost.description}
            onChangeText={(text) => {
              // props.description(text);
              setEditedPostDescription(text);
            }}
            multiline
          />
          <TouchableWithoutFeedback onPress={handleModalClose}>
            <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
          </TouchableWithoutFeedback>

          <View style={styles.modalContainer2}>
            <TouchableOpacity onPress={onConfirm} style={styles.popupButton}>
              <Text style={styles.popupButtonText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onClose} style={styles.popupButton}>
              <Text style={styles.popupButtonText}>Cancel</Text>
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
    fontSize: 16,
    fontWeight: "400",
    color: "#40495B",
    textAlign: "left",
    marginBottom: 10,
  },
  textinput: {
    borderBottomWidth: 1,
    borderColor: "#3498db",
    padding: 10,
  },
  modalContainer2: {
    flexDirection: "row",
  },
  popupButton: {
    paddingTop: 20,
    marginHorizontal: 50,
  },
  popupButtonText: {
    color: "#101318",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
});
export default EditPopupMessage;
