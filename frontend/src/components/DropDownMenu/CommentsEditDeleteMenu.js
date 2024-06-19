import { TouchableOpacity, View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { deleteAComment } from "../../services/commentServices/commentServices";
import CommentEditPopupMessage from "../CF Pop-up/CommentEditPop-up";

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
    setPopupMessage("");
  };

  const deleteComment = async () => {
    try {
      await deleteAComment(props.commentId);

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
          onPress: () => {},
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
          <Text style={styles.DPtext}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={displayDeleteAlert}
          style={[styles.contains1, { gap: 15 }]}
        >
          <Text style={styles.DPtext}>Delete</Text>
        </TouchableOpacity>
        {popupMessage != "" && (
          <CommentEditPopupMessage
            commentId={props.commentId}
            postId={props.postId}
            message={popupMessage}
            onConfirm={confirmMessage}
            onClose={closeMessage}
            onUpdate={props.onUpdate}
          />
        )}
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
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    zIndex: 100,
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
