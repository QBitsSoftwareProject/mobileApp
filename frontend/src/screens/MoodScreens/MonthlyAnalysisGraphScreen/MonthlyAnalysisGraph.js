import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import CustomBarChart from "./CustomBarChart";
import HeaderSubSug from "../SuggestionsScreen/HeaderSubSug";
import { useNavigation } from "@react-navigation/native";

const MonthlyAnalysisGraph = () => {
  const screenHeight = Dimensions.get("window").height;

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
        back="HomeScreen"
      />
      <Text style={styles.text}>Analysis of your past 30 days mood inputs</Text>
      <ScrollView height={screenHeight - 300}>
        <CustomBarChart
          positiveMoods={positiveMoods}
          negativeMoods={negativeMoods}
        />

        <View style={styles.grpahBelow}>
          <View style={styles.pns}>
            <View style={styles.align}>
              <Image
                source={require("../../../assets/images/journal/negative.png")}
              />
            </View>
            <View>
              <Text style={styles.pnsTitle}>Positive Days</Text>
            </View>
          </View>

          <View style={styles.pns}>
            <View style={styles.align}>
              <Image
                source={require("../../../assets/images/journal/purple.png")}
              />
            </View>
            <View>
              <Text style={styles.pnsTitle}>Negative Days</Text>
            </View>
          </View>
        </View>

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
    marginTop: 42,
    width: 250,
    height: 58,
    backgroundColor: "#FFFFFF",
    borderRadius: 75,
    borderColor: "#599CCA",
    borderWidth: 2,
    marginBottom: 75,
  },
  text: {
    alignSelf: "center",
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },
  grpahBelow: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: -15,
  },
  pns: {
    marginLeft: 25,
    marginRight: 25,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  align: {
    alignItems: "center",
  },
  pnsTitle: {
    fontSize: 11,
    fontWeight: "300",
    marginLeft: 10,
    letterSpacing: 2,
  },
});

export default MonthlyAnalysisGraph;
