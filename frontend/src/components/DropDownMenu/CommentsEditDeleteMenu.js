import { TouchableOpacity, View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import EditPopupMessage from "../CF Pop-up/EditPop-up";
import { deleteAComment } from "../../services/commentServices/commentServices";

const CommentEditDeletMenu = (props) => {
  const [popupMessage, setPopupMessage] = useState("");

  const handleEdit = async () => {
    try {
      setPopupMessage("Edit your Comment");
    } catch (error) {
      console.log(error);
    }
  };

  const confirmMessage = async () => {
    setPopupMessage("");
  };

  const closeMessage = () => {
    props.onClose(false);
    setPopupMessage("");
  };

  const deleteComment = async () => {
    try {
      console.log("Deleting comment with ID:", props.commentId);
      props.onClose(false);
      await deleteAComment(props.commentId);
      console.log(props.commentId);
      if (props.onDelete) {
        props.onDelete(props.commentId);
      }
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  const displayDeleteAlert = () => {
    Alert.alert(
      "Are you sure!",
      "This action will delete your comment permanently!",
      [
        {
          text: "cancel",
          onPress: () => {
            props.onClose(false);
          },
          style: "cancel",
        },
        { text: "Delete", onPress: () => deleteComment() },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.DropPop}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => handleEdit()}
          style={[styles.contains1, { gap: 25 }]}
        >
          <Text style={styles.DPtext}>{props.DPtext1}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={displayDeleteAlert}
          style={[styles.contains1, { gap: 15 }]}
        >
          <Text style={styles.DPtext}>{props.DPtext2}</Text>
        </TouchableOpacity>

        <EditPopupMessage
          id={props.commentId}
          message={popupMessage}
          onConfirm={confirmMessage}
          onClose={closeMessage}
          onUpdate={props.onUpdate}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  DropPop: {
    width: 100,
    height: "auto",
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 3,
    padding: 10,
    top: 25,
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
    // position: "absolute",
  },
  container: {
    flex: 1,
    height: "auto",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  DPtext: {
    fontSize: 15,
    color: "#40495B",
    fontWeight: "400",
    lineHeight: 35,
  },
  contains1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default CommentEditDeletMenu;
