import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ListItem } from "@rneui/base";
import { deleteAnAppointment } from "../../services/appointmentServices/AppointmentServices";

const CreateCard = (props) => {
  const currentDate = new Date(props.date);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleDelete = async () => {
    try {
      await deleteAnAppointment(props.appointmentId);
      if (props.onDelete) {
        props.onDelete(props.appointmentId);
      }
    } catch (error) {
      console.error("Failed to delete appointment:", error);
    }
  };

  const cardContent = (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.imageframe}>
        <Image source={{ uri: props.image }} style={styles.image} />
      </View>

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Dr. {props.title}</Text>

          {props.cardName == "AvailableDoc" && (
            <View>
              <Text style={styles.description}>{props.university}</Text>
              <Text style={styles.description}>{props.hospital}</Text>
              <Text style={styles.description}>
                Contact no: {props.contactNumber}
              </Text>
            </View>
          )}

          {props.cardName === "AppointmentStatus" && (
            <View>
              <Text style={styles.description}>
                Time: {props.time.from}-{props.time.to}
              </Text>
              <Text style={styles.description}>
                Date: {currentDate.getFullYear()}-
                {monthNames[currentDate.getMonth()]}-{currentDate.getDate()}
              </Text>
              <Text
                style={[
                  styles.description,
                  {
                    color:
                      props.status === "Accepted"
                        ? "#0AC112"
                        : props.status === "Rejected"
                        ? "#E82519"
                        : props.status === "Cancelled"
                        ? "#FF5733"
                        : props.status === "Pending"
                        ? "#FFC107"
                        : "black",
                  },
                ]}
              >
                Status: {props.status}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <View>
      {props.cardName === "AvailableDoc" ? (
        <TouchableOpacity style={styles.cardBox} onPress={props.onPress}>
          {cardContent}
        </TouchableOpacity>
      ) : (
        <ListItem.Swipeable
          rightContent={(reset) => (
            <View style={styles.rightContainer1}>
              <TouchableOpacity
                onPress={() => {
                  handleDelete();
                  reset();
                }}
                style={styles.button}
              >
                <Image
                  source={require("../../assets/images/CommentSecImages/mdi_delete.png")}
                  style={styles.delImg}
                />
              </TouchableOpacity>
            </View>
          )}
          rightStyle={styles.deleteBtn}
          containerStyle={styles.cardBox}
        >
          <ListItem.Content>{cardContent}</ListItem.Content>
        </ListItem.Swipeable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    height: 112,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    color: "#40495B",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#40495B",
    marginBottom: 2,
  },
  description: {
    fontSize: 12,
    fontWeight: "500",
    color: "#5C677D",
    lineHeight: 22,
  },
  imageframe: {
    height: 60,
    width: 60,
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 50,
    marginRight: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  rightContainer1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B0B4C0",
    borderRadius: 20,
    height: "85%",
  },
  rightContainer2: {
    backgroundColor: "transparent",
  },
  delImg: {
    width: 40,
    height: 40,
  },
  button: {
    height: 45,
    width: 120,
    borderRadius: 10,
    marginVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteBtn: {},
});

export default CreateCard;
