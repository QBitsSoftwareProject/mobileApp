import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderSub from "../../screens/MoodAnalysisScreen/Header";
import { useNavigation } from "@react-navigation/native";
import { addMood } from "../../services/moodAnalysisServices/moodAnalysisServices";
import Toast from "react-native-toast-message";

const MoodAnalysis = () => {
  const navigation = useNavigation();
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [moodIndex, setMoodIndex] = useState(null);
  const [count, setCount] = useState(0);
  const [moodText, setMoodText] = useState("");
  const [ImageSource, setImageSource] = useState("");
  const [isSettingMood, setIsSettingMood] = useState(false);

  const emojis = [
    {
      emoji: "😄",
      moodText: "Happy",
      imageSource: require("../../assets/images/analysisMood/happyPicture.png"),
    },
    {
      emoji: "😍",
      moodText: "Lovely",
      imageSource: require("../../assets/images/analysisMood/lovelyPicture.png"),
    },
    {
      emoji: "😭",
      moodText: "Sad",
      imageSource: require("../../assets/images/analysisMood/sadPicture.png"),
    },
    {
      emoji: "😡",
      moodText: "Angry",
      imageSource: require("../../assets/images/analysisMood/angryPicture.png"),
    },
    {
      emoji: "😟",
      moodText: "Worried",
      imageSource: require("../../assets/images/analysisMood/sickPicture.png"),
    },
    {
      emoji: "🥱",
      moodText: "Boring",
      imageSource: require("../../assets/images/analysisMood/sleepPicture.png"),
    },
    {
      emoji: "😐",
      moodText: "Neutral",
      imageSource: require("../../assets/images/analysisMood/nutralPicture.png"),
    },
    {
      emoji: "😨",
      moodText: "OverWhelmed",
      imageSource: require("../../assets/images/analysisMood/scaredPicture.png"),
    },
  ];

  const handlePress = (index) => {
    setSelectedEmoji(emojis[index].emoji);
    setMoodIndex(index);
    setMoodText(emojis[index].moodText);
    setImageSource(emojis[index].imageSource);
  };

  const handlePressButton = async () => {
    if (!selectedEmoji) {
      Toast.show({
        type: "success",
        text1: "Select your current mood!",
      });
      return;
    }

    const currentTime = new Date().getTime();
    const lastMoodTime = await AsyncStorage.getItem("lastMoodTime");

    if (
      lastMoodTime &&
      currentTime - parseInt(lastMoodTime, 10) < 3 * 60 * 60 * 1000
    ) {
      Toast.show({
        type: "error",
        text1: "You can set your mood once in every 3 hours!",
      });
      return;
    }

    await storedata();
    await AsyncStorage.setItem("lastMoodTime", currentTime.toString());

    navigation.navigate("AnalysisGraphScreen", {
      selectedEmoji,
      moodIndex,
      count,
      moodText: emojis[moodIndex].moodText,
      ImageSource,
    });
  };

  // call the add mood function
  const storedata = async () => {
    const count = 10;
    try {
      await addMood(selectedEmoji, emojis[moodIndex].moodText, count);
    } catch (error) {
      console.log(error);
    }
  };

  const radiusX = 150;
  const radiusY = 175;
  const totalEmojis = emojis.length;
  const angle = (360 / totalEmojis) * (Math.PI / 180);

  const getCenterPosition = (dimension, containerDimension) => {
    return (containerDimension - dimension) / 2;
  };

  return (
    <View style={{ height: "100%" }}>
      <HeaderSub headLine={"How are you feeling today!"} />

      <View style={{ height: "60%" }}>
        <View style={styles.circleContainer}>
          {emojis.map((emoji, index) => {
            const x = radiusX * Math.cos(index * angle);
            const y = radiusY * Math.sin(index * angle);

            return (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(index)}
                style={[styles.emojiWrapper, { left: x, top: y }]}
              >
                <Text style={styles.emojiText}>{emoji.emoji}</Text>
                <Text style={styles.moodtext}>{emoji.moodText}</Text>
              </TouchableOpacity>
            );
          })}
          {selectedEmoji && (
            <View
              style={[
                styles.emojiWrapper,
                {
                  left: getCenterPosition(330, 300),
                  top: getCenterPosition(390, 350),
                },
              ]}
            >
              <Text style={styles.selectemoji}>{selectedEmoji}</Text>
            </View>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.setMood} onPress={handlePressButton}>
        <Text style={styles.mood}>Set mood</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    position: "relative",
    alignContent: "center",
    alignSelf: "center",
    marginTop: 130,
    marginRight: 55,
    justifyContent: "center",
  },
  emojiWrapper: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  emojiText: {
    fontSize: 50,
  },
  selectemoji: {
    fontSize: 90,
  },
  setMood: {
    justifyContent: "center",
    alignSelf: "center",
    position: "relative",
    width: 250,
    height: 58,
    backgroundColor: "#FFFFFF",
    borderRadius: 75,
    borderColor: "#4ABFB4",
    borderWidth: 1,
    bottom: 100,
  },
  mood: {
    fontSize: 16,
    alignSelf: "center",
  },
  moodtext: {
    fontSize: 10,
    alignSelf: "center",
    fontweight: "50",
    marginTop: 2.5,
  },
});

export default MoodAnalysis;
