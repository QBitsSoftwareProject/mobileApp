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

const PostPop = (props) => {
  const navigation = useNavigation();

  const [popupMessage, setPopupMessage] = useState("");

  const [press, setPress] = useState(false);

  const handleEdit = async () => {
    try {
      setPopupMessage("Edit your caption");
      handlePress();
    } catch (error) {
      console.log(error);
    }
  };

  const confirmMessage = async () => {
    // navigation.navigate("");
  };

  const closeMessage = () => {
    setPopupMessage("");
  };

  const deletePost = async () => {
    try {
      handlePress();
      await deleteAPost(props.postId);
      if (props.onDelete) {
        props.onDelete(props.postId);
      }
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  const handlePress = () => {
    setPress(true);
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

  if (press) {
    return null; // Dismiss the component
  }

  return (
    <View style={styles.DropPop}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => handleEdit()}
          style={[styles.contains1, { gap: 25 }]}
        >
          <Text style={styles.DPtext}>{props.DPtext1}</Text>
          <Image
            source={require("../../assets/images/PostCardImages/Edit.png")}
            style={styles.edtImg}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={displayDeleteAlert}
          style={[styles.contains1, { gap: 15 }]}
        >
          <Text style={styles.DPtext}>{props.DPtext2}</Text>
          <Image
            source={require("../../assets/images/PostCardImages/DeleteBin.png")}
            style={styles.dltImg}
          />
        </TouchableOpacity>

        <EditPopupMessage
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
    width: 100,
    height: "auto",
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 1,
    marginHorizontal: 5,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 10,
    zIndex: 10,
  },
  container: {
    flex: 1,
    height: "auto",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  DPtext: {
    fontSize: 12,
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
  edtImg: {
    width: 11.5,
    height: 11.5,
  },

  dltImg: {
    width: 13.5,
    height: 13.5,
  },
});

export default PostPop;
