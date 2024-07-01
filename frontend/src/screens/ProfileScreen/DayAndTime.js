import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const DayAndTime = ({ day, setTimeSlots, timeSlots }) => {
  const [textStart, setTextStart] = useState("");
  const [textEnd, setTextEnd] = useState("");

  const isValidTimeFormat = (time) => {
    const regex = /^(0[1-9]|1[0-2])\.[0-5][0-9]\s?(AM|PM)$/i;
    return regex.test(time);
  };

  const removeTimeSlot = (index) => {
    const newTimeSlots = timeSlots.filter((_, i) => i !== index);
    setTimeSlots(newTimeSlots);
  };

  const handleOkBtn = () => {
    if (textStart && textEnd) {
      if (isValidTimeFormat(textStart) && isValidTimeFormat(textEnd)) {
        const newSlot = { from: textStart, to: textEnd };
        setTimeSlots([...timeSlots, newSlot]);
        setTextStart("");
        setTextEnd("");
      } else {
        alert("Please enter valid time formats (e.g., 10.00 AM)");
      }
    } else {
      alert("Please fill in both time slots");
    }
  };

  

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.rightUp}>
          <View style={styles.left}>
            <Text style={{ fontSize: 18 }}>{day}</Text>
          </View>

          <View style={styles.rightLeft}>
            <TextInput
              style={styles.input}
              placeholder="08.00AM"
              placeholderTextColor="#E4E5E6"
              onChangeText={setTextStart}
              value={textStart}
            />
          </View>

          <View style={styles.rightMiddle}>
            <TextInput
              style={styles.input}
              placeholder="03.00PM"
              placeholderTextColor="#E4E5E6"
              onChangeText={setTextEnd}
              value={textEnd}
            />
          </View>

          <View style={styles.rightRight}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleOkBtn}
            >
              <Image
                source={require("../../assets/images/TimeSlot/add.png")}
                style={styles.addImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        {timeSlots.length > 0 ? (
          timeSlots.map((slot, index) => (
            <View key={index} style={styles.rightBottomLeft}>
              <View style={styles.timeSlot}>
                <Text>{`${slot.from} - ${slot.to}`}</Text>
              </View>
              <TouchableOpacity onPress={() => removeTimeSlot(index)}>
                <Image
                  style={styles.removeImage}
                  source={require("../../assets/images/TimeSlot/remove2.png")}
                />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View style={{ paddingHorizontal: 15 }}>
            <Text style={styles.noTimeSlotText}>
              Not Available Time Slot
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default DayAndTime;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    gap: 15,
  },
  left: {
    width: 100,
  },
  rightUp: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  rightBottomLeft: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  input: {
    paddingHorizontal: 15,
    fontSize: 14,
    width: "100%",
    borderWidth: 1,
    borderColor: "#4A90BF",
    borderBottomColor: "#9E9D9D",
    backgroundColor: "white",
    borderRadius: 15,
    height: 40,
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  addImage: {
    width: 30,
    height: 30,
    opacity: 0.7,
  },
  timeSlot: {
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#4ABFB4",
    borderBottomColor: "#9E9D9D",
    padding: 10,
    width: 200,
    alignItems: "center",
  },
  removeImage: {
    opacity: 0.7,
  },
  noTimeSlotText: {
    fontSize: 16,
    color: "gray",
    textAlign: "right",
  },
});
