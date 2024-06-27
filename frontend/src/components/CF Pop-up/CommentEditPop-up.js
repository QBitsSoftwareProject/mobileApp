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

import {
  getAComment,
  updateComment,
} from "../../services/commentServices/commentServices";

const CommentEditPopupMessage = ({ message, onClose, commentId, onUpdate }) => {
  const [editedComment, setEditedComment] = useState("");
  const [oneComment, setOneComment] = useState("");

  const fetchACommentData = async () => {
    try {
      const res = await getAComment(commentId);
      setOneComment(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveButtonPress = async () => {
    try {
      onClose();
      if (editedComment === "") {
        await updateComment(commentId, oneComment.content);
      } else {
        await updateComment(commentId, editedComment);
        onUpdate();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchACommentData();
  }, []);

  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  if (!oneComment) {
    return null;
  }

  return (
    <Modal transparent animationType="slide" visible={!!message}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer1}>
          <Text style={styles.messageText}>{message}</Text>

          <TextInput
            style={styles.textinput}
            defaultValue={oneComment.content}
            onChangeText={(text) => {
              setEditedComment(text);
            }}
            multiline
          />
          <TouchableWithoutFeedback onPress={handleModalClose}>
            <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
          </TouchableWithoutFeedback>

          <View style={styles.modalContainer2}>
            <TouchableOpacity onPress={onClose} style={styles.popupButton}>
              <Text style={styles.popupButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSaveButtonPress}
              style={styles.popupButton}
            >
              <Text style={styles.popupButtonText}>Save</Text>
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
    padding: 5,
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
export default CommentEditPopupMessage;
