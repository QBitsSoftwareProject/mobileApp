import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { deleteAPost } from "../../services/postServices/postServices";
import EditPopupMessage from "../CF Pop-up/EditPop-up";

const EditDeletMenu = (props) => {
  const navigation = useNavigation();

  const [popupMessage, setPopupMessage] = useState("");

  const [isSavePress, setIsSavePress] = useState(false);

  const handleEdit = async () => {
    try {
      setPopupMessage("Edit your caption");
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

  const deletePost = async () => {
    try {
      await deleteAPost(props.postId);
      if (props.onDelete) {
        props.onDelete(props.postId);
      }
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  const displayDeleteAlert = () => {
    Alert.alert(
      "Are you sure!",
      "This action will delete your post permanently!",
      [
        {
          text: "cancel",
          onPress: () => {},
          style: "cancel",
        },
        { text: "Delete", onPress: () => deletePost() },
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
          id={props.postId}
          message={popupMessage}
          onConfirm={confirmMessage}
          onClose={closeMessage}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  DropPop: {
    width: 120,
    height: "auto",
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 3,
    padding: 10,
    top: 25,
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
    position: "absolute",
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

export default EditDeletMenu;
