import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

// Array containing all tasks with their steps
const allTasks = [
  {
    id: 1,
    steps: {
      step1:
        "Welcome to today's meditation practice! Take a moment to unwind and embrace this mind-soothing activity. It's your ticket to a calm and relaxed state, offering a peaceful pause in your day to recharge and find inner balance.",
      step2:
        "Click the button, close your eyes, and immerse yourself in a 5-minute journey of mind relaxation. Let the soothing sounds heal your mind, guiding you towards tranquility.",
      step3:
        "After completing the meditation, take a few moments to linger in this relaxed state. Avoid diving into intense tasks; instead, gently ease into soft, calming activities.",
    },
  },
  {
    id: 2,
    steps: {
      step1: "task2-----1",
      step2: "task2-----2",
      step3: "task2-----3",
      step4: "task2-----4",
    },
  },
  {
    id: 3,
    steps: {
      step1: "task3-----1",
      step2: "task3-----2",
      step3: "task3-----3",
      step4: "task3-----4",
    },
  },
  {
    id: 4,
    steps: {
      step1: "task4-----1",
      step2: "task4-----2",
      step3: "task4-----3",
      step4: "task4-----4",
    },
  },
  {
    id: 5,
    steps: {
      step1: "task5-----1",
      step2: "task5-----2",
      step3: "task5-----3",
      step4: "task5-----4",
    },
  },
];

// Dummy data for step demo
const stepdemo = [
  { step1: "task5-----1" },
  { step2: "task5-----2" },
  { step3: "task5-----3" },
  { step4: "task5-----4" },
];

const TaskDescriptionScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [boxHeight, setBoxHeight] = useState(0);
  const { taskId, completeness } = route.params;

  const screenHeight = Dimensions.get("screen").height;

  // Finding the task based on the task ID
  const task = allTasks.find((step) => step.id == taskId);
  const getTask = task ? Object.values(task.steps) : [];

  // Handler for back button press
  const handleBackPress = () => {
    navigation.navigate("TaskListScreen");
  };

  // Callback function for layout event of the box
  const onBoxLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setBoxHeight(height);
  };

  const scrollHeight = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity style={styles.backBtn} onPress={handleBackPress}>
          <Image source={require("../../../assets/images/backBlack.png")} />
        </TouchableOpacity>

        {/* task step rendering ..................................................................................... */}

        <View style={{ height: scrollHeight - 190, alignItems: "center" }}>
          <ScrollView>
            <View style={styles.headTextBox}>
              <Text style={styles.task}>Task {taskId}</Text>
              <Text style={styles.taskHead}>Take today meditation</Text>
            </View>

            <View onLayout={onBoxLayout} style={{ paddingTop: 32 }}>
              <View
                style={{
                  width: 55,
                  alignItems: "center",
                  position: "absolute",
                }}
              >
                <View style={[styles.bar, { height: boxHeight }]}></View>
              </View>

              {getTask.map((item, index) => (
                <View key={index}>
                  <View style={[styles.stepContainer]}>
                    <View
                      style={{ flexDirection: "column", justifyContent: "" }}
                    >
                      <View
                        style={[
                          styles.stepBox,
                          {
                            backgroundColor:
                              index % 2 === 0 ? "#4ABFB4" : "#4A90BF",
                          },
                        ]}
                      >
                        <Text style={styles.stepText}>Step 0{index + 1}</Text>
                      </View>
                    </View>

                    <View style={styles.stepDescription}>
                      <Text style={styles.descrptionText}>{item}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            {/* btn ......................................................................................................................... */}

            {completeness === "incomplete" && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginVertical: 32,
                }}
              >
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>Start</Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default TaskDescriptionScreen;
