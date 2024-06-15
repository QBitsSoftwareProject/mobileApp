import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import HeaderSubAnalysis from "./HeaderAnalysis";
import MoodProgressBars from "./Chart";
import { useRoute, useNavigation } from "@react-navigation/native";

import { getMoodsByUserId } from "../../services/moodAnalysisServices/moodAnalysisServices";
import { getAUser } from "../../services/userServices/userService";

const AnalysisGraph = () => {
  const [bHeight, setBHeight] = useState(0);
  const [sadHeight, setSadHeight] = useState(0);
  const [angryHeight, setAngryHeight] = useState(0);
  const [sickHeight, setSickHeight] = useState(0);
  const [sleepHeight, setSleepHeight] = useState(0);
  const [nutralHeight, setNutralHeight] = useState(0);
  const [scaredHeight, setScaredHeight] = useState(0);
  const [happyHeight, setHappyHeight] = useState(0);

  const [data, setData] = useState([]);
  const [sleepyCount, setSleepyCount] = useState("");
  const [AngryCount, setAngryCount] = useState("");
  const [sadCount, setSadCount] = useState("");
  const [sickCount, setSickCount] = useState("");
  const [nutralCount, setNutralCount] = useState("");
  const [scaredCount, setScaredCount] = useState("");
  const [happyCount, setHappyCount] = useState("");
  const [lovelyCount, setLovelyCount] = useState("");
  const [totalCount, setTotalCount] = useState("");
  const [loveheight, setLoveHeight] = useState("");
  const [lastInputData, setLastInputData] = useState(null);
  const [lastdata, setlast] = useState("");
  const [username, setUsername] = useState("");

  const countEmoji = (dataArray) => {
    const sleepy = dataArray.filter((item) => item.moodText === "Sleepy");
    setSleepyCount(sleepy.length);

    const angry = dataArray.filter((item) => item.moodText === "Angry");
    setAngryCount(angry.length);

    const sad = dataArray.filter((item) => item.moodText === "Sad");
    setSadCount(sad.length);

    const sick = dataArray.filter((item) => item.moodText === "Sick");
    setSickCount(sick.length);

    const nutral = dataArray.filter((item) => item.moodText === "Nutral");
    setNutralCount(nutral.length);

    const scared = dataArray.filter((item) => item.moodText === "Scare");
    setScaredCount(scared.length);

    const happy = dataArray.filter((item) => item.moodText === "Happy");
    setHappyCount(happy.length);

    const lovely = dataArray.filter((item) => item.moodText === "Lovely");
    setLovelyCount(lovely.length);
  };

  // call the set mood function
  useEffect(() => {
    const fetchMoodInputs = async (req) => {
      try {
        const moodData = await getMoodsByUserId();
        setData(moodData);
      } catch (err) {
        console.log("err" + err.message);
      }
    };

    fetchMoodInputs();
    // fetchUserData();
  }, []);

  // call the getAuser function for find username
  useEffect(() => {
    const getName = async (req) => {
      try {
        const name = await getAUser();
        // console.log("name from getAUser:", name);
        setUsername(name.userName);
      } catch (err) {
        console.log("err" + err.messasge);
      }
    };
    getName();
  }, []);

  useEffect(() => {
    countEmoji(data);
    const lastIndex = data.length - 1;
    const lastInputData = data[lastIndex];
    if (lastInputData) {
      // console.log(lastInputData.moodText);
      setLastInputData(lastInputData.moodText); // Update lastInputData state
    }
  }, [data]);

  useEffect(() => {
    const total =
      sleepyCount +
      AngryCount +
      sadCount +
      nutralCount +
      scaredCount +
      sickCount +
      happyCount +
      lovelyCount;

    setTotalCount(total);

    if (total !== 0) {
      const Loveheight = parseFloat(lovelyCount / total) * 200.0;
      setLoveHeight(Loveheight);

      const sadheight = parseFloat(sadCount / total) * 200.0;
      setSadHeight(sadheight);

      const angryheight = parseFloat(AngryCount / total) * 200.0;
      setAngryHeight(angryheight);

      const sickheight = parseFloat(sickCount / total) * 200.0;
      setSickHeight(sickheight);

      const sleepheight = parseFloat(sleepyCount / total) * 200.0;
      setSleepHeight(sleepheight);

      const nutralheight = parseFloat(nutralCount / total) * 200.0;
      setNutralHeight(nutralheight);

      const scaredheight = parseFloat(scaredCount / total) * 200.0;
      setScaredHeight(scaredheight);

      const happyheight = parseFloat(happyCount / total) * 200.0;
      setHappyHeight(happyheight);
    }
  }, [
    sleepyCount,
    AngryCount,
    sadCount,
    nutralCount,
    scaredCount,
    sickCount,
    happyCount,
    lovelyCount,
  ]);

  const route = useRoute();
  const { selectedEmoji, count, moodText, ImageSource, moodIndex } =
    route.params;

  // console.log("Initial moodtext:", moodText);
  // console.log("Initial lastInputData:", lastInputData);

  const [lastMoodText, setLastMoodText] = useState(moodText ?? lastInputData);

  useEffect(() => {
    if (moodText !== undefined && moodText !== null) {
      setLastMoodText(moodText);
    } else if (lastInputData !== undefined && lastInputData !== null) {
      setLastMoodText(lastInputData);
    }
  }, [moodText, lastInputData]);

  // console.log("Initial lastMoodText:", lastMoodText);

  const [emoji, setEmoji] = useState("");
  const [image, setImageSource] = useState("");

  useEffect(() => {
    if (lastMoodText === "Happy") {
      setEmoji("😄");
      setImageSource(
        require("../../assets/images/analysisMood/happyPicture.png")
      );
    } else if (lastMoodText === "Lovely") {
      setEmoji("😍");
      setImageSource(
        require("../../assets/images/analysisMood/lovelyPicture.png")
      );
    } else if (lastMoodText === "Sad") {
      setEmoji("😢");
      setImageSource(
        require("../../assets/images/analysisMood/sadPicture.png")
      );
    } else if (lastMoodText === "Angry") {
      setEmoji("😡");
      setImageSource(
        require("../../assets/images/analysisMood/angryPicture.png")
      );
    } else if (lastMoodText === "Sick") {
      setEmoji("🤒");
      setImageSource(
        require("../../assets/images/analysisMood/sickPicture.png")
      );
    } else if (lastMoodText === "Sleepy") {
      setEmoji("😴");
      setImageSource(
        require("../../assets/images/analysisMood/sleepPicture.png")
      );
    } else if (lastMoodText === "Nutral") {
      // Assuming 'Nutral' is a typo and should be 'Neutral'
      setEmoji("😐");
      setImageSource(
        require("../../assets/images/analysisMood/nutralPicture.png")
      );
    } else if (lastMoodText === "Scare") {
      setEmoji("😱");
      setImageSource(
        require("../../assets/images/analysisMood/scaredPicture.png")
      );
    } else {
      setEmoji("");
      setImageSource(null);
    }
  }, [lastMoodText]);

  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate("MonthAnalysisScreen", {});
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <HeaderSubAnalysis
          headLine={"Good Morning " + username}
          subheadLine={"You are feeling " + lastMoodText + " today"}
        />
        <View style={[styles.selectedEmojiContainer, { opacity: 0.2 }]}>
          <Text style={styles.selectedEmojiLeft}>{emoji}</Text>
          <Text style={styles.selectedEmojiRight}>{emoji}</Text>
        </View>
        <Text style={styles.selectedEmoji}>{emoji}</Text>
        <Text style={styles.moodText}>{lastMoodText}</Text>
        <View style={styles.graphContainer}>
          <Image style={styles.image} source={image} />
          <View style={styles.bar}>
            <MoodProgressBars selectedEmoji={"😍"} barHeight={loveheight} />
            <MoodProgressBars selectedEmoji={"😢"} barHeight={sadHeight} />
            <MoodProgressBars selectedEmoji={"😡"} barHeight={angryHeight} />
            <MoodProgressBars selectedEmoji={"🤒"} barHeight={sickHeight} />
            <MoodProgressBars selectedEmoji={"😴"} barHeight={sleepHeight} />
            <MoodProgressBars selectedEmoji={"😐"} barHeight={nutralHeight} />
            <MoodProgressBars selectedEmoji={"😱"} barHeight={scaredHeight} />
            <MoodProgressBars selectedEmoji={"😄"} barHeight={happyHeight} />
          </View>
        </View>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinuePress}
        >
          <Text style={styles.continue}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  selectedEmojiContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 44,
  },
  selectedEmoji: {
    fontSize: 130,
    alignItems: "center",
    // justifyContent: 'center',
    alignSelf: "center",
    marginTop: -180,
  },
  selectedEmojiLeft: {
    fontSize: 90,
    marginRight: 20,
  },
  selectedEmojiRight: {
    fontSize: 90,
    marginLeft: 20,
  },
  moodText: {
    fontSize: 23,
    fontWeight: "300",
    color: "#40495B",
    alignSelf: "center",
    marginTop: 10,
  },
  image: {
    width: 369,
    height: 280,
    marginTop: 10,
    alignSelf: "center",
  },
  graphContainer: {},
  bar: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  continueButton: {
    backgroundColor: "#FFFFFF",
    width: 250,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 100,
    borderRadius: 75,
    borderColor: "#4ABFB4",
    borderWidth: 2,
  },
  continue: {
    color: "#101318",
    fontSize: 16,
  },
});

export default AnalysisGraph;
