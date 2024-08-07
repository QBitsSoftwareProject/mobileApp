import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./MoodInputStyles";
// import back from "../../assets/images/back.png";
import { useNavigation } from "@react-navigation/native";
import {
  checkAndUpsertMood,
} from "../../services/currentMoodInputServices/currentMoodInputServices";
import { addMood } from "../../services/moodAnalysisServices/moodAnalysisServices";

const MoodInputScreen = () => {
  const navigation = useNavigation();

  const [optionValue, setOptionValue] = useState("");
  const [screenHeight, setScreenHeight] = useState("");
  const [happy, setHappy] = useState("");
  const [sad, setSad] = useState("");
  const [neutral, setNeutral] = useState("");
  const [worried, setWorried] = useState("");
  const [userId, setUserId] = useState("");

  const handleOptions = (value) => {
    // console.log(value);
    setOptionValue(value);
  };
  useEffect(() => {
    const windowSize = Dimensions.get("window");
    const windowHeight = windowSize.height;
    setScreenHeight(windowHeight);

    

    if (optionValue === "happy") {
      setHappy(1);
      setSad(0);
      setNeutral(0);
      setWorried(0);
    } else if (optionValue === "sad") {
      setHappy(0);
      setSad(1);
      setNeutral(0);
      setWorried(0);
    } else if (optionValue === "neutral") {
      setHappy(0);
      setSad(0);
      setNeutral(1);
      setWorried(0);
    } else if (optionValue === "worried") {
      setHappy(0);
      setSad(0);
      setNeutral(0);
      setWorried(1);
    } else {
      
    }
  }, [optionValue]);


  const handleSubmitBtn = async () => {
    if (optionValue) {
      await checkAndUpsertMood(happy, sad, neutral, worried);

      if(optionValue === 'happy'){
        await addMood("😄","Happy",10)
      }
      else if(optionValue === 'sad'){
        await addMood("😭","Sad",10)
      }
      else if(optionValue === 'neutral'){
        await addMood("😐","Neutral",10)
      }
      else if(optionValue === 'worried'){
        await addMood("😟","Worried",10)
      }

      navigation.navigate("MindRelaxingMethod");
    } else {
      alert("Choose a mood");
    }
  };
  const handleBackBtn = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View>
      <TouchableOpacity onPress={handleBackBtn} style={styles.backBtn}>
        <Image
          source={require("../../assets/images/backProfile.png")}
          style={styles.backPng}
        />
      </TouchableOpacity>

      <View style={{ height: screenHeight - 165 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.horivontalBar}></View>
          <View style={styles.textArea}>
            <Text
              style={[
                styles.textOne,
                { fontSize: 24, textAlign: "center", fontWeight: "500" },
              ]}
            >
              Hey there!
            </Text>
            <Text style={styles.textOne}>Ready to capture your mood? </Text>
            <Text style={styles.textOne}>
              Pick one emoji that perfectly sums up how you're feeling at this
              moment.{" "}
            </Text>
          </View>
          <View style={styles.imageArea}>
            {/* <Image
              source={require("../../assets/images/ImmediatMoodInput/moodinput.png")}
              style={styles.mainImage}
            /> */}
          </View>

          <View style={styles.imojiRow}>
            <TouchableOpacity
              style={[
                styles.leftImoji,
                optionValue === "sad" ? styles.selectedOption : null,
              ]}
              onPress={() => handleOptions("sad")}
            >
              <Image
                source={require("../../assets/images/ImmediatMoodInput/sad2.png")}
                style={styles.optionImg}
              />
              <Text>Sad</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.rightImoji,
                optionValue === "happy" ? styles.selectedOption : null,
              ]}
              onPress={() => handleOptions("happy")}
            >
              <Image
                source={require("../../assets/images/ImmediatMoodInput/happy.png")}
                style={styles.optionImg}
              />
              <Text>Happy</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.imojiRowTwo}>
            <TouchableOpacity
              style={[
                styles.leftImoji,
                optionValue === "worried" ? styles.selectedOption : null,
              ]}
              onPress={() => handleOptions("worried")}
            >
              <Image
                source={require("../../assets/images/ImmediatMoodInput/worried.png")}
                style={styles.optionImg}
              />
              <Text>Worried</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.rightImoji,
                optionValue === "neutral" ? styles.selectedOption : null,
              ]}
              onPress={() => handleOptions("neutral")}
            >
              <Image
                source={require("../../assets/images/ImmediatMoodInput/neutral2.png")}
                style={styles.optionImg}
              />
              <Text>Neutral</Text>
            </TouchableOpacity>
          </View>

          {/* <Text>{optionValue}</Text> */}

          <TouchableOpacity onPress={handleSubmitBtn} style={styles.submitBtn}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default MoodInputScreen;
