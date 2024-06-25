import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "expo-checkbox";
import {
  getAGoal,
  updateCompleteness,
} from "../../services/goalsService/goalsService";
import { getAUser } from "../../services/userServices/userService";

const InsideGoalsScreen = ({ route }) => {
  const scrollHeight = Dimensions.get("window").height;
  const navigation = useNavigation();

  const { goalId, tab } = route.params;

  const [goal, setGoal] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState(null);

  //finding goals based on goalId

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getAGoal(goalId);

      const user = await getAUser();
      const selectOne = user.selectedGoals.find(
        (item) => item.goalId == goalId
      );

      if (tab == "viewGoals") {
        setSelectedGoal(selectOne);
      } else {
        setSelectedGoal(response);
      }

      setGoal(response);
    } catch (error) {
      console.log(error);
    }
  };

  //initially check the checkBox
  const isChecked = (item, num) => {
    if (item.completeness[num] == true) {
      return true;
    } else {
      return false;
    }
  };

  //Handler for checkBox
  const handleCheck = async (index, num, item) => {
    try {
      let updatedState = false;
      let completenessValue = -1;
      if (!isChecked(item, num)) {
        updatedState = true;
        completenessValue = 1;
      }
      await updateCompleteness({
        goalId: goalId,
        day: index + 1,
        objNum: num,
        newState: updatedState,
        value: completenessValue,
      });

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  // Handler for back button press
  const handleBackPress = () => {
    navigation.navigate("ViewGoalsScreen", { goalId: goalId });
  };

  if (!goal || (!selectedGoal && tab == "viewGoals")) {
    return;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity style={styles.backBtn} onPress={handleBackPress}>
          <Image source={require("../../assets/images/blackBack.png")} />
        </TouchableOpacity>

        {/* goals rendering ..................................................................................... */}

        <View style={{ height: scrollHeight - 190 }}>
          <ScrollView>
            <View style={styles.headTextBox}>
              <Text style={styles.goalHead}>{goal.title}</Text>
              <Text style={styles.goalDescription}>{goal.description}</Text>
            </View>

            {selectedGoal.objectivesState.map((item, index) => (
              <View key={index} style={styles.itemComponent}>
                <Text style={styles.dayText}>
                  {item.day ? "day" : "week"} {index + 1}
                </Text>

                {goal.objectives.map((obj, num) => (
                  <View key={num} style={styles.objComponent}>
                    <Text style={styles.headText}>
                      {num + 1}. {obj}
                    </Text>

                    {tab == "viewGoals" && (
                      <CheckBox
                        value={isChecked(item, num)}
                        onValueChange={() => handleCheck(index, num, item)}
                        style={{
                          padding: 10,
                          borderRadius: 5,
                          marginRight: 10,
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
