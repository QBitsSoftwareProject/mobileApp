import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CheckBox from "expo-checkbox";
import styles from "./styles";
import TimeSlot from "./TimeSlot/TimeSlot";

const SelectionBars = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [timeSlotVisibility, setTimeSlotVisibility] = useState(false);
  const [count, setCount] = useState(1);
  const [times, setTimes] = useState([]);

  const handleCheck = () => {
    setIsChecked((prevChecked) => {
      setTimeSlotVisibility(!prevChecked);
      return !prevChecked;
    });
    setCount(1);

    if (!isChecked) {
      setTimes([]);
    }
  };
  const handleTimeBlock = (time) => {
    setTimes((prevTime) => [...prevTime, time]);
  };

  useEffect(() => {
    if (isChecked) {
      props.timeBlock(times);
    }
    props.dayBlock(isChecked);
  }, [isChecked, times]);

  return (
    <View>
      {isChecked && (
        <Text
          style={{
            fontSize: 12,
            fontWeight: "400",
            color: "#40495B",
            marginBottom: 7,
            textAlign: "right",
            opacity: 0.5,
          }}
        >
          You have to click plus button for save the time slot
        </Text>
      )}

      <View style={styles.container}>
        <Text style={styles.headText}>
          {props.num}. {props.headLine}
        </Text>

        <CheckBox
          value={isChecked}
          onValueChange={handleCheck}
          style={{ padding: 10, marginRight: 15, borderRadius: 5 }}
        />
      </View>
      {timeSlotVisibility && props.timeSlotVisible && (
        <View style={styles.timeSlotContainer}>
          {[...Array(count)].map((_, index) => (
            <TimeSlot
              key={index}
              setCount={setCount}
              slotNumber={count}
              onChange={handleTimeBlock}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default SelectionBars;
