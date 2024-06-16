import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CustomBarChart from "./CustomBarChart";
import HeaderSubSug from "../SuggestionsScreen/HeaderSubSug";
import { useNavigation } from "@react-navigation/native";

const MonthlyAnalysisGraph = () => {
  const navigation = useNavigation();
  const positiveMoods = ["😄", "😍"]; // Add appropriate emojis for positive moods
  const negativeMoods = ["😐", "😭", "😡", "😟", "🥱", "😨"]; // Add appropriate emojis for negative moods

  const handlePressButton = async () => {
    navigation.navigate("MoodAnaysisScreen");
  };

  return (
    <View>
      <HeaderSubSug
        headLine="Monthly Analysis"
        subHeadLine="Track your monthly mood inputs"
      />
      <ScrollView height={470}>
        <CustomBarChart
          positiveMoods={positiveMoods}
          negativeMoods={negativeMoods}
        />

        <TouchableOpacity style={styles.setMood} onPress={handlePressButton}>
          <Text style={styles.mood}>Set mood</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  mood: {
    fontSize: 16,
    alignSelf: "center",
  },
  setMood: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 15,
    width: 250,
    height: 58,
    backgroundColor: "#FFFFFF",
    borderRadius: 75,
    borderColor: "#599CCA",
    borderWidth: 2,
    marginBottom: 75,
  },
});

export default MonthlyAnalysisGraph;
