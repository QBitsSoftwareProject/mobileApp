import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Alert,
} from "react-native";
import { ListItem } from "@rneui/themed";
import CommentEditPopupMessage from "../../components/CF Pop-up/CommentEditPop-up";
import { deleteAComment } from "../../services/commentServices/commentServices";

const CommentCard = (props) => {
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
    // props.onClose(false);
    setPopupMessage("");
  };

  const handleDelete = async () => {
    try {
      await deleteAComment(props.commentId);
      // props.onClose(false);

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
            // props.onClose(false);
          },
          style: "cancel",
        },
        { text: "Delete", onPress: () => handleDelete() },
      ],
      { cancelable: true }
    );
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;

    const minutes = Math.floor(diff / (1000 * 60));
    if (minutes < 60) {
      return `${minutes}min ago`;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours < 24) {
      return `${hours}h ago`;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days < 7) {
      return `${days}d ago`;
    }

    if (now.getFullYear() === date.getFullYear()) {
      return date.toLocaleString("default", { month: "short", day: "numeric" });
    }

    return date.toLocaleString("default", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formattedDate = formatTimestamp(props.Date);

  return (
    <ListItem.Swipeable
      rightContent={(reset) => (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#B0B4C0",
            borderRadius: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              displayDeleteAlert();
              reset();
            }}
            style={styles.button}
          >
            <Image
              source={require("../../assets/images/CommentSecImages/mdi_delete.png")}
              style={styles.delImg}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handleEdit();
              reset();
            }}
            style={styles.button}
          >
            <Image
              source={require("../../assets/images/CommentSecImages/mdi_edit.png")}
              style={styles.editImg}
            />
          </TouchableOpacity>
        </View>
      )}
      rightStyle={styles.deleteBtn}
      containerStyle={styles.cardContainer}
    >
      <ListItem.Content>
        <TouchableOpacity
          onPress={() => {
            handlePress(props.commentId);
            // handleReload();
          }}
          style={{ width: "100%" }}
        ></TouchableOpacity>

        <View style={styles.cardBox}>
          <View style={styles.content1}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.imageframe}>
                <Image source={{ uri: props.image }} style={styles.image} />
              </View>

              <View style={styles.content2}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
                <Text>{props.content}</Text>
              </View>
            </View>

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
      </ListItem.Content>
    </ListItem.Swipeable>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    alignSelf: "center",
    marginBottom: 15,
    backgroundColor: "red",
  },
  cardContainer: {
    backgroundColor: "white",
    height: "auto",
    borderRadius: 20,
  },
  content1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageframe: {
    height: 35,
    width: 35,
    backgroundColor: "gray",
    opacity: 0.5,
    borderRadius: 50,
    marginRight: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content2: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#40495B",
  },

  date: {
    fontSize: 12,
    fontWeight: "500",
    color: "#5C677D",
  },

  delImg: {
    width: 40,
    height: 40,
  },
  editImg: {
    width: 35,
    height: 35,
  },
  button: {
    height: 45,
    width: 120,
    borderRadius: 10,
    marginVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CommentCard;
