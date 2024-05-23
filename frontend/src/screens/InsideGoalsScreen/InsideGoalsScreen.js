import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";

const allGoals = [
  {
    id: 1,
    tittle: "Mindfulness Moments ",
    description:
      "Take 10! Practice daily mindfulness for peace. Try meditation, breathing exercises, or body scans to find calm in just 10 minutes for 3 days.",
    objectives: ["10 minutes meditation", "At 6.30 A.M."],
    objectivesState: [
      { day: 1, completeness: ["complete", "incomplete"] },
      { day: 2, completeness: ["incomplete", "complete"] },
      { day: 3, completeness: ["incomplete", "incomplete"] },
    ],
  },
  {
    id: 2,
    tittle: "Connect and Smile ",
    description:
      "Take 10! Practice daily mindfulness for peace. Try meditation, breathing exercises, or body scans to find calm in just 10 minutes.",
    objectives: ["10 minutes meditation", "At 6.30 A.M."],
    objectivesState: [
      { day: 1, completeness: ["complete", "incomplete"] },
      { day: 2, completeness: ["incomplete", "complete"] },
      { day: 3, completeness: ["incomplete", "incomplete"] },
    ],
  },
  {
    id: 3,
    tittle: "Write it Out ",
    description:
      "Twice a week, reach out! Socialize in-person, call, or message loved ones. Building connections for a happier you",
    objectives: ["10 minutes meditation", "At 6.30 A.M."],
    objectivesState: [
      { day: 1, completeness: ["complete", "incomplete"] },
      { day: 2, completeness: ["incomplete", "complete"] },
      { day: 3, completeness: ["incomplete", "incomplete"] },
    ],
  },
  {
    id: 4,
    tittle: "Mindfulness Moments ",
    description:
      "Take 10! Practice daily mindfulness for peace. Try meditation, breathing exercises, or body scans to find calm in just 10 minutes for 3 days.",
    objectives: ["10 minutes meditation", "At 6.30 A.M."],
    objectivesState: [
      { day: 1, completeness: ["complete", "incomplete"] },
      { day: 2, completeness: ["incomplete", "complete"] },
      { day: 3, completeness: ["incomplete", "incomplete"] },
    ],
  },
  {
    id: 5,
    tittle: "Connect and Smile ",
    description:
      "Take 10! Practice daily mindfulness for peace. Try meditation, breathing exercises, or body scans to find calm in just 10 minutes for 3 days.",
    objectives: ["10 minutes meditation", "At 6.30 A.M."],
    objectivesState: [
      { day: 1, completeness: ["complete", "incomplete"] },
      { day: 2, completeness: ["incomplete", "complete"] },
      { day: 3, completeness: ["incomplete", "incomplete"] },
    ],
  },
];

const InsideGoalsScreen = ({ route }) => {
  const scrollHeight = Dimensions.get("window").height;
  const navigation = useNavigation();

  const { goalId, tab } = route.params;

  //finding goals based on goalId
  const goal = allGoals.find((item) => item.id == goalId);

  //initially check the checkBox
  const isChecked = (item, num) => {
    if (item.completeness[num] == "complete") {
      return true;
    } else {
      return false;
    }
  };

  //Handler for checkBox
  const handleCheck = () => {
    console.log("jo");
  };

  // Handler for back button press
  const handleBackPress = () => {
    navigation.navigate("ViewGoalsScreen");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity style={styles.backBtn} onPress={handleBackPress}>
          <Image source={require("../../assets/images/backBlack.png")} />
        </TouchableOpacity>

        {/* goals rendering ..................................................................................... */}

        <View style={{ height: scrollHeight - 190, alignItems: "center" }}>
          <ScrollView>
            <View style={styles.headTextBox}>
              <Text style={styles.goalHead}>{goal.tittle}</Text>
              <Text style={styles.goalDescription}>{goal.description}</Text>
            </View>

            {goal.objectivesState.map((item, index) => (
              <View key={index} style={styles.itemComponent}>
                <Text style={styles.dayText}>Day 0{item.day}</Text>

                {goal.objectives.map((obj, num) => (
                  <View key={num} style={styles.objComponent}>
                    <Text style={styles.headText}>
                      {num + 1}. {obj}
                    </Text>

                    {tab == "viewGoals" && (
                      <CheckBox
                        checked={isChecked(item, num)}
                        onPress={handleCheck}
                        uncheckedColor="#5C677D"
                        checkedColor="#4ABFB4"
                        size={30}
                        containerStyle={{
                          padding: 0,
                          margin: 0,
                          backgroundColor: "transparent",
                        }}
                      />
                    )}
                  </View>
                ))}
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default InsideGoalsScreen;
