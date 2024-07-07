import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import {
  updateTaskCompleteness,
  viewASelectedTask,
} from "../../../services/taskServices/taskservice";
import loadingGif from "../../../assets/animation/loading.gif";

const TaskDescriptionScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [boxHeight, setBoxHeight] = useState(0);
  const [taskDetails, setTaskDetails] = useState(null);
  const [bgColor, setBgColor] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  const { taskId, completeness, index, type } = route.params;

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const response = await viewASelectedTask(taskId);

      setTaskDetails(response);
    } catch (error) {
      console.log(error);
    }
  };

  const taskNavigation = () => {
    switch (type) {
      case "journal":
        navigation.navigate("JournalStack", {
          screen: "AddNewJournal",
          params: { taskId: taskId },
        });
        break;

      case "resource":
        navigation.navigate("VideoScreen", {
          screen: "AllVideoScreen",
          params: { taskId: taskId },
        });
        break;

      case "community":
        navigation.navigate("CommunityStack", {
          screen: "CreatePost",
          params: { taskId: taskId, postCat: "Supportive" },
        });
        break;
    }
  };

  if (!taskDetails) {
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image source={loadingGif} />
      </View>
    );
  }

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

  //task completenss update
  const taskUpdate = async () => {
    try {
      setBgColor({
        backgroundColor: "#4ABFB4",
        borderColor: "white",

        color: "white",
      });

      setIsDisabled(true);
      await updateTaskCompleteness(taskId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      
        <TouchableOpacity style={styles.backBtn} onPress={handleBackPress}>
          <Image source={require("../../../assets/images/blackBack.png")} />
        </TouchableOpacity>

        {/* task step rendering ..................................................................................... */}

        <View style={{ height: scrollHeight - 190, alignItems: "center" }}>
          <ScrollView>
            <View style={styles.headTextBox}>
              <Text style={styles.task}>Task {index}</Text>
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

              {taskDetails.steps.map((item, index) => (
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

            {!completeness && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginVertical: 32,
                }}
              >
                {type === "none" ? (
                  <TouchableOpacity
                    style={[styles.btn, bgColor]}
                    onPress={taskUpdate}
                    disabled={isDisabled}
                  >
                    {!isDisabled ? (
                      <Text style={[styles.btnText]}>Mark As completed</Text>
                    ) : (
                      <Text style={[styles.btnText, { color: bgColor.color }]}>
                        completed
                      </Text>
                    )}
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.btn} onPress={taskNavigation}>
                    <Text style={styles.btnText}>Start</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </ScrollView>
        </View>
      
    </View>
  );
};

export default TaskDescriptionScreen;
