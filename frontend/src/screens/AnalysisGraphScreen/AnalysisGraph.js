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
  const [worriedHeight, setWorriedHeight] = useState(0);
  const [boringHeight, setBoringHeight] = useState(0);
  const [neutralHeight, setNeutralHeight] = useState(0);
  const [dizzyHeight, setDizzyHeight] = useState(0);
  const [happyHeight, setHappyHeight] = useState(0);

  const [data, setData] = useState([]);
  const [boringCount, setBoringCount] = useState("");
  const [AngryCount, setAngryCount] = useState("");
  const [sadCount, setSadCount] = useState("");
  const [worriedCount, setWorriedCount] = useState("");
  const [neutralCount, setNeutralCount] = useState("");
  const [dizzyCount, setDizzyCount] = useState("");
  const [happyCount, setHappyCount] = useState("");
  const [lovelyCount, setLovelyCount] = useState("");
  const [totalCount, setTotalCount] = useState("");
  const [loveheight, setLoveHeight] = useState("");
  const [lastInputData, setLastInputData] = useState(null);
  const [lastdata, setlast] = useState("");
  const [username, setUsername] = useState("");

  const countEmoji = (dataArray) => {
    const boring = dataArray.filter((item) => item.moodText === "Boring");
    setBoringCount(boring.length);

    const angry = dataArray.filter((item) => item.moodText === "Angry");
    setAngryCount(angry.length);

    const sad = dataArray.filter((item) => item.moodText === "Sad");
    setSadCount(sad.length);

    const worried = dataArray.filter((item) => item.moodText === "Worried");
    setWorriedCount(worried.length);

    const neutral = dataArray.filter((item) => item.moodText === "Neutral");
    setNeutralCount(neutral.length);

    const dizzy = dataArray.filter((item) => item.moodText === "Dizzy");
    setDizzyCount(dizzy.length);

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
      boringCount +
      AngryCount +
      sadCount +
      neutralCount +
      dizzyCount +
      worriedCount +
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

      const worriedheight = parseFloat(worriedCount / total) * 200.0;
      setWorriedHeight(worriedheight);

      const boringheight = parseFloat(boringCount / total) * 200.0;
      setBoringHeight(boringheight);

      const neutralheight = parseFloat(neutralCount / total) * 200.0;
      setNeutralHeight(neutralheight);

      const dizzyheight = parseFloat(dizzyCount / total) * 200.0;
      setDizzyHeight(dizzyheight);

      const happyheight = parseFloat(happyCount / total) * 200.0;
      setHappyHeight(happyheight);
    }
  }, [
    boringCount,
    AngryCount,
    sadCount,
    neutralCount,
    dizzyCount,
    worriedCount,
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
      setEmoji("😭");
      setImageSource(
        require("../../assets/images/analysisMood/sadPicture.png")
      );
    } else if (lastMoodText === "Angry") {
      setEmoji("😡");
      setImageSource(
        require("../../assets/images/analysisMood/angryPicture.png")
      );
    } else if (lastMoodText === "Worried") {
      setEmoji("😟");
      setImageSource(
        require("../../assets/images/analysisMood/sickPicture.png")
      );
    } else if (lastMoodText === "Boring") {
      setEmoji("🥱");
      setImageSource(
        require("../../assets/images/analysisMood/sleepPicture.png")
      );
    } else if (lastMoodText === "Neutral") {
      // Assuming 'Nutral' is a typo and should be 'Neutral'
      setEmoji("😐");
      setImageSource(
        require("../../assets/images/analysisMood/nutralPicture.png")
      );
    } else if (lastMoodText === "Dizzy") {
      setEmoji("😨");
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
        <ScrollView horizontal>
          <View style={styles.graphContainer}>
            <Image style={styles.image} source={image} />
            <View style={styles.bar}>
              <MoodProgressBars selectedEmoji={"😍"} barHeight={loveheight} />
              <MoodProgressBars selectedEmoji={"😭"} barHeight={sadHeight} />
              <MoodProgressBars selectedEmoji={"😡"} barHeight={angryHeight} />
              <MoodProgressBars
                selectedEmoji={"😟"}
                barHeight={worriedHeight}
              />
              <MoodProgressBars selectedEmoji={"🥱"} barHeight={boringHeight} />
              <MoodProgressBars
                selectedEmoji={"😐"}
                barHeight={neutralHeight}
              />
              <MoodProgressBars selectedEmoji={"😨"} barHeight={dizzyHeight} />
              <MoodProgressBars selectedEmoji={"😄"} barHeight={happyHeight} />
            </View>
          </View>
        </ScrollView>
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
