import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

const DayAndTime = ({ day, setTimeSlots, timeSlots }) => {
  const [textStart, setTextStart] = useState("");
  const [textEnd, setTextEnd] = useState("");

  const handleTime = (start, end) => {
    let time = `${start} - ${end}`;
    return time;
  };

  const removeTimeSlot = (index) => {
    const newTimeSlots = timeSlots.filter((_, i) => i !== index);
    setTimeSlots(newTimeSlots);
  };

  const handleOkBtn = () => {
    if (textStart && textEnd) {
      const finalTime = handleTime(textStart, textEnd);
      setTimeSlots([...timeSlots, finalTime]);
      setTextStart("");
      setTextEnd("");
    } else {
      alert("fill the time slots");
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
              style={{
                paddingHorizontal: 15,
                fontSize: 14,
                width: "100%",
                borderWidth: 1,
                borderColor: "#4A90BF",
                borderBottomColor: "#9E9D9D",
                backgroundColor: "white",
                borderRadius: 15,
                height: 40,
              }}
              placeholder="08.00AM"
              placeholderTextColor="#E4E5E6"
              onChangeText={setTextStart}
              value={textStart}
            />
          </View>

          <View style={styles.rightMiddle}>
            <TextInput
              style={{
                paddingHorizontal: 15,
                fontSize: 14,
                width: "100%",
                borderWidth: 1,
                borderColor: "#4A90BF",
                borderBottomColor: "#9E9D9D",
                backgroundColor: "white",
                borderRadius: 15,
                height: 40,
              }}
              placeholder="03.00PM"
              placeholderTextColor="#E4E5E6"
              onChangeText={setTextEnd}
              value={textEnd}
            />
          </View>

          <View style={styles.rightRight}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={handleOkBtn}
            >
              <Image
                source={require("../../assets/images/TimeSlot/add.png")}
                style={{ width: 30, height: 30, opacity: 0.7 }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>

        {timeSlots.length > 0 ? (
          timeSlots.map((slot, index) => (
            <View key={index} style={styles.rightBottomLeft}>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: "#4ABFB4",
                  borderBottomColor: "#9E9D9D",
                  padding: 10,
                  width: 150,
                }}
              >
                <Text>
                  {slot.from} - {slot.to}
                </Text>
              </View>
              <TouchableOpacity onPress={() => removeTimeSlot(index)}>
                <Image
                  style={{ opacity: 0.7 }}
                  source={require("../../assets/images/TimeSlot/remove2.png")}
                ></Image>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <>
            <View style={{ paddingHorizontal: 15 }}>
              <Text style={{ fontSize: 16, color: "gray", textAlign: "right" }}>
                Not Available Time Slot
              </Text>
            </View>
          </>
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
});
