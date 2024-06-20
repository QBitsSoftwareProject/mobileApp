import React from "react";
import { View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native"; // Import useRoute
import Card from "./card";

import HeaderSub from "../../components/HeaderSub/HeaderSub";

const MonthAnalysis = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { selectedEmoji, moodText, imageSource, moodIndex } =
    route.params || {};

  const inputYourMoodBtn = () => {
    navigation.navigate("MoodAnaysisScreen");
  };

  const monthlyAnalysisGraph = () => {
    navigation.navigate("MonthlyAnalysisGraphScreen");
  };

  const weeklyAnalysisGraph = () => {
    navigation.navigate("AnalysisGraphScreen", {
      selectedEmoji,
      moodText,
      imageSource,
      moodIndex,
    });
  };

  console.log(selectedEmoji);

  return (
    <View>
      <HeaderSub
        headLine={"Track your Mood"}
        subHeadLine={
          "Track, analyze, and understand your mood pattern and get suggestions"
        }
        back="HomeScreen"
      />

      <View style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 15 }}>
        <Card
          imageSource={require("../../assets/images/analysisMood/moodInput.png")}
          title="Input your Mood 😍"
          subtitle="Let Your Emotions Paint the Canvas of Your Day!"
          onPress={inputYourMoodBtn}
        />
      </View>

      <View style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 15 }}>
        <Card
          imageSource={require("../../assets/images/analysisMood/weeklyInputs.png")}
          title="Weekly input moods 📅 "
          subtitle="Track Your Mood Changes Weekly"
          onPress={weeklyAnalysisGraph}
        />
      </View>

      <View style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 15 }}>
        <Card
          imageSource={require("../../assets/images/analysisMood/analysis.png")}
          title="Monthly analysis of your moods 📈 "
          subtitle="Track Your Mood Changes monthly"
          onPress={monthlyAnalysisGraph}
        />
      </View>
    </View>
  );
};

export default MonthAnalysis;
