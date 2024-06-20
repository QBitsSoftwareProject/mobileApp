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
import YAxisLabels from "./yAxis";
import { useRoute, useNavigation } from "@react-navigation/native";

import { getMoodsByUserId } from "../../services/moodAnalysisServices/moodAnalysisServices";
import { getAUser } from "../../services/userServices/userService";
import { getSuggestedGoals } from "../../services/goalsService/goalsService";
import { getTime } from "../TaskScreens/WelcomeScreen/GetTime";

const AnalysisGraph = () => {
  const [bHeight, setBHeight] = useState(0);
  const [sadHeight, setSadHeight] = useState(0);
  const [angryHeight, setAngryHeight] = useState(0);
  const [worriedHeight, setWorriedHeight] = useState(0);
  const [boringHeight, setBoringHeight] = useState(0);
  const [neutralHeight, setNeutralHeight] = useState(0);
  const [OverWhelmedHeight, setOverWhelmedHeight] = useState(0);
  const [happyHeight, setHappyHeight] = useState(0);

  const [data, setData] = useState([]);
  const [boringCount, setBoringCount] = useState("");
  const [AngryCount, setAngryCount] = useState("");
  const [sadCount, setSadCount] = useState("");
  const [worriedCount, setWorriedCount] = useState("");
  const [neutralCount, setNeutralCount] = useState("");
  const [OverWhelmedCount, setOverWhelmedCount] = useState("");
  const [happyCount, setHappyCount] = useState("");
  const [lovelyCount, setLovelyCount] = useState("");
  const [totalCount, setTotalCount] = useState("");
  const [loveheight, setLoveHeight] = useState("");
  const [lastInputData, setLastInputData] = useState(null);
  const [lastdata, setlast] = useState("");
  const [username, setUsername] = useState("");
  const [dateandtime, setDateAndTime] = "";

  const [distinctHeights, setDistinctHeights] = useState([]);

  const getStartOfWeek = (date) => {
    const start = new Date(date);
    const day = start.getDay(); // 0 (Sunday) to 6 (Saturday)
    const diff = start.getDate() + 1;
    start.setDate(diff);
    start.setHours(0, 0, 0, 0); // Set time to 00:00:00
    return start;
  };

  const getEndOfWeek = (date) => {
    const end = new Date(date);
    const day = end.getDay();
    const diff = end.getDate() - 6;
    end.setDate(diff);
    end.setHours(23, 59, 59, 999); // Set time to 23:59:59.999
    return end;
  };

  const filterDataByWeek = (data, dateField) => {
    const todayDate = new Date();

    const startDate = getEndOfWeek(todayDate);
    // console.log(todayDate);

    const endDate = getStartOfWeek(todayDate);
    // console.log("end", endDate);

    return data.filter((item) => {
      const todayDate = new Date(item[dateField]);

      return todayDate >= startDate && todayDate <= endDate;
    });
  };

  useEffect(() => {
    const dayBYWeek = filterDataByWeek(data, "date");
    // console.log(dayBYWeek);

    countEmoji(dayBYWeek);
    const lastIndex = dayBYWeek.length - 1;
    const lastInputData = dayBYWeek[lastIndex];
    if (lastInputData) {
      // console.log(lastInputData.moodText);
      setLastInputData(lastInputData.moodText); // Update lastInputData state
    }
  }, [data]);

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

    const oerWhelmed = dataArray.filter(
      (item) => item.moodText === "OverWhelmed"
    );
    setOverWhelmedCount(oerWhelmed.length);

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

  // call the getTime (good morning, evening)
  const dateValue = getTime();

  useEffect(() => {
    const total =
      boringCount +
      AngryCount +
      sadCount +
      neutralCount +
      OverWhelmedCount +
      worriedCount +
      happyCount +
      lovelyCount;

    setTotalCount(total);

    if (total !== 0) {
      const Loveheight = parseFloat(lovelyCount / total) * 250.0;
      setLoveHeight(Loveheight);

      const sadheight = parseFloat(sadCount / total) * 250.0;
      setSadHeight(sadheight);

      const angryheight = parseFloat(AngryCount / total) * 250.0;
      setAngryHeight(angryheight);

      const worriedheight = parseFloat(worriedCount / total) * 250.0;
      setWorriedHeight(worriedheight);

      const boringheight = parseFloat(boringCount / total) * 250.0;
      setBoringHeight(boringheight);

      const neutralheight = parseFloat(neutralCount / total) * 250.0;
      setNeutralHeight(neutralheight);

      const overWhelmedheight = parseFloat(OverWhelmedCount / total) * 250.0;
      setOverWhelmedHeight(overWhelmedheight);

      const happyheight = parseFloat(happyCount / total) * 250.0;
      setHappyHeight(happyheight);
    }
  }, [
    boringCount,
    AngryCount,
    sadCount,
    neutralCount,
    OverWhelmedCount,
    worriedCount,
    happyCount,
    lovelyCount,
  ]);

  const route = useRoute();
  const { selectedEmoji, count, moodText, ImageSource, moodIndex } =
    route.params;

  const [lastMoodText, setLastMoodText] = useState(moodText ?? lastInputData);

  useEffect(() => {
    if (moodText !== undefined && moodText !== null) {
      setLastMoodText(moodText);
    } else if (lastInputData !== undefined && lastInputData !== null) {
      setLastMoodText(lastInputData);
    }
  }, [moodText, lastInputData]);

  useEffect(() => {
    const heights = [
      boringHeight,
      sadHeight,
      angryHeight,
      worriedHeight,
      neutralHeight,
      OverWhelmedHeight,
      happyHeight,
      loveheight,
    ];
    const distinctHeights = [...new Set(heights)].sort((a, b) => b - a);
    setDistinctHeights(distinctHeights);
  }, [
    boringHeight,
    sadHeight,
    angryHeight,
    worriedHeight,
    neutralHeight,
    OverWhelmedHeight,
    happyHeight,
    loveheight,
  ]);

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
    } else if (lastMoodText === "OverWhelmed") {
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
          headLine={"Good" + " " + dateValue + " " + username}
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

            <View style={styles.barWithAxis}>
              <View style={styles.left}>
                <Text style={{ fontSize: 10 }}>100%</Text>
                <Text style={{ fontSize: 10, color: "#7D8597" }}>90%</Text>
                <Text style={{ fontSize: 10, color: "#7D8597" }}>80%</Text>
                <Text style={{ fontSize: 10, color: "#7D8597" }}>70%</Text>
                <Text style={{ fontSize: 10, color: "#7D8597" }}>60%</Text>
                <Text style={{ fontSize: 10 }}>50%</Text>
                <Text style={{ fontSize: 10, color: "#7D8597" }}>40%</Text>
                <Text style={{ fontSize: 10, color: "#7D8597" }}>30%</Text>
                <Text style={{ fontSize: 10, color: "#7D8597" }}>20%</Text>
                <Text style={{ fontSize: 10, color: "#7D8597" }}>10%</Text>
                <Text style={{ fontSize: 10 }}>0%</Text>
              </View>
              <View style={styles.right}>
                <MoodProgressBars selectedEmoji={"😍"} barHeight={loveheight} />
                <MoodProgressBars selectedEmoji={"😭"} barHeight={sadHeight} />
                <MoodProgressBars
                  selectedEmoji={"😡"}
                  barHeight={angryHeight}
                />
                <MoodProgressBars
                  selectedEmoji={"😟"}
                  barHeight={worriedHeight}
                />
                <MoodProgressBars
                  selectedEmoji={"🥱"}
                  barHeight={boringHeight}
                />
                <MoodProgressBars
                  selectedEmoji={"😐"}
                  barHeight={neutralHeight}
                />
                <MoodProgressBars
                  selectedEmoji={"😨"}
                  barHeight={OverWhelmedHeight}
                />
                <MoodProgressBars
                  selectedEmoji={"😄"}
                  barHeight={happyHeight}
                />
              </View>
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
  // graphContainer: {
  //   backgroundColor: "yellow",
  // },
  bar: {},
  continueButton: {
    backgroundColor: "#FFFFFF",
    width: 250,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 50,
    borderRadius: 75,
    borderColor: "#4ABFB4",
    borderWidth: 2,
    marginTop: 15,
  },
  continue: {
    color: "#101318",
    fontSize: 16,
  },
  // graphContent: {
  //   flexDirection: "row",
  //   alignItems: "flex-end",
  //   paddingRight: 5,
  //   paddingLeft: 15,
  // },

  barWithAxis: {
    flexDirection: "row",
    marginTop: -250,
  },
  left: {
    flex: 1,
    alignItems: "flex-end",
    rowGap: 12,
    paddingLeft: 5,
    marginLeft: 15,
  },
  right: {
    flex: 1,
    columnGap: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingRight: 15,
    paddingLeft: 10,
  },
});

export default AnalysisGraph;
