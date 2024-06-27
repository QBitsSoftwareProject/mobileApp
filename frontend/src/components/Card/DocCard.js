import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import React from "react";
import AcptComBtn from "../CFButton/Accept&CompleteBtn";
import { updateStatusAppointments } from "../../services/appointmentServices/AppointmentServices";

const docCard = (props) => {
  const statusUpdate = async () => {
    try {
      if (props.cardName == "Pending") {
        await updateStatusAppointments(props.id, "Rejected");
        // console.log("Updated to Reject.", props.id, props.status);
      } else if (props.cardName == "Accepted") {
        await updateStatusAppointments(props.id, "Cancelled");
        // console.log("Updated to Cancel.", props.id, props.status);
      }
      props.onStatusChange();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.cardBox}>
      <View style={styles.content}>
        <View style={styles.content1}>
          <View style={styles.imageframe}>
            <Image source={{ uri: props.image }} style={styles.image} />
          </View>

          <View>
            <View>
              <Text style={styles.title}>{props.title}</Text>

              <View>
                <Text style={styles.description}>
                  Time: {props.time.from} - {props.time.to}
                </Text>
                <Text style={styles.description}>Date: {props.date}</Text>
                {props.cardName == "Pending" && (
                  <Text style={styles.description}>
                    Contact No: {props.contactNo}
                  </Text>
                )}
                {props.cardName == "Accepted" && (
                  <Text style={styles.description}>
                    Contact No: {props.contactNo}
                  </Text>
                )}
                {props.cardName == "Completed" && (
                  <Text style={styles.completedStatus}>
                    Status: {props.status}
                  </Text>
                )}
              </View>
            </View>
          </View>
        </View>
        {props.cardName == "Pending" && (
          <View style={styles.content2}>
            <TouchableOpacity
              onPress={() => {
                statusUpdate();
              }}
            >
              <Text style={styles.rejectedStatus}>Reject</Text>
            </TouchableOpacity>
            <AcptComBtn
              AcptCom={"Accept"}
              appId={props.id}
              onStatusChange={props.onStatusChange}
            />
            <Text>{props.status}</Text>
          </View>
        )}
        {props.cardName == "Accepted" && (
          <View style={styles.content2}>
            <TouchableOpacity
              onPress={() => {
                statusUpdate();
              }}
            >
              <Text style={styles.rejectedStatus}>Cancel</Text>
            </TouchableOpacity>
            <AcptComBtn
              AcptCom={"Complete"}
              appId={props.id}
              onStatusChange={props.onStatusChange}
            />
            <Text>{props.status}</Text>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardBox: {
    height: 150,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 1,
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  content1: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#40495B",
    marginBottom: 7,
  },
  description: {
    fontSize: 12,
    fontWeight: "500",
    color: "#5C677D",
  },
  completedStatus: {
    fontSize: 12,
    fontWeight: "500",
    color: "#0AC112",
  },
  content2: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
    alignItems: "baseline",
    alignSelf: "flex-end",
    gap: 25,
  },
  rejectedStatus: {
    fontSize: 15,
    fontWeight: "500",
    color: "#E82519",
  },
  imageframe: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight: 20,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default docCard;
