import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Alert,
} from "react-native";
import { ListItem } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { notificationStatusUpdate } from "../../services/notificationService/notificationService";

const NotificationCard = (props) => {
  const navigation = useNavigation();

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

  //navigate to relevent reference page
  const handlePress = async () => {
    //status update (as  read)
    try {
      await notificationStatusUpdate(props.appId);
    } catch (error) {
      console.log(error);
    }

    //navigation to relevent screen
    if (props.type == "comment") {
      navigation.navigate("CommunityStack", {
        screen: "CommentPage",

        params: { postId: props.postId, previousScreen: "ProfileScreen" },
      });
    } else if (props.type == "appointment") {
      navigation.navigate("AppointmentStack", {
        screen: "AppointmentStatus",
        params: { postId: props.postId, previousScreen: "AvailableDoctors" },
      });
    }
    props.isRefresh((prev) => !prev);
  };

  const formattedDate = formatTimestamp(props.Date);

  return (
    <ListItem.Swipeable containerStyle={styles.cardContainer}>
      <ListItem.Content>
        <TouchableOpacity
          style={[styles.content1]}
          onPress={handlePress}
          disabled={
            props.status == "read" && props.type == "system" ? true : false
          }
        >
          {props.type != "system" ? (
            <View style={styles.imageframe}>
              <Image source={{ uri: props.image }} style={styles.image} />
            </View>
          ) : (
            <View style={styles.imageframe}>
              <Image
                source={require("../../assets/images/system.png")}
                style={styles.image}
              />
            </View>
          )}

          <View style={styles.content2}>
            {props.type != "system" ? (
              <Text>
                {props.type == "appointment" && (
                  <Text style={styles.title}>Dr. </Text>
                )}
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.commentContent}> {props.content}</Text>
              </Text>
            ) : (
              <Text>{props.content}</Text>
            )}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.date}>{formattedDate}</Text>

              {props.status == "unread" && (
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 100,
                    backgroundColor: "#4A90BF",
                  }}
                ></View>
              )}
            </View>
          </View>
        </TouchableOpacity>
      </ListItem.Content>
    </ListItem.Swipeable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    height: "auto",
    borderRadius: 20,
    marginBottom: 10,
  },
  content1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageframe: {
    height: 35,
    width: 35,
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
    width: "85%",
    flexDirection: "column",
    gap: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#40495B",
    margin: 10,
  },

  date: {
    fontSize: 10,
    fontWeight: "400",
    color: "#5C677D",
    marginBottom: 5,
  },
  commentContent: {
    fontSize: 14,
    fontWeight: "400",
  },
  rightContainer1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B0B4C0",
    borderRadius: 20,
    height: "90%",
  },
  rightContainer2: {
    backgroundColor: "transparent",
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
    // borderWidth: 1,
  },
  deleteBtn: {},
});

export default NotificationCard;
