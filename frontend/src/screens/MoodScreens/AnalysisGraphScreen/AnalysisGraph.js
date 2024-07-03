import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import DayMoodChart from "./week";
import HeaderSubAnalysis from "./HeaderAnalysis";
import { getMoodsByUserId } from "../../../services/moodAnalysisServices/moodAnalysisServices";
import { getAUser } from "../../../services/userServices/userService";
import { getTime } from "../../TaskScreens/WelcomeScreen/GetTime";

const AnalysisGraph = () => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [heights, setHeights] = useState({});
  const [maxHeightMood, setMaxHeightMood] = useState(null);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [hasNavigatedBack, setHasNavigatedBack] = useState(false); // Track if user has navigated back
  const [isToday, setIsToday] = useState(true); // Track if the current chart is today's chart
  const [currentDate, setCurrentDate] = useState("");

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const groupDataByDay = (data) => {
    const groupedData = {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    };

    data.forEach((item) => {
      const date = new Date(item.date);
      const day = date.toLocaleString("en-US", { weekday: "long" });
      if (groupedData[day]) {
        groupedData[day].push(item);
      }
    });

    return groupedData;
  };

  const calculateMoodStats = (data) => {
    const moodCounts = data.reduce((acc, item) => {
      acc[item.moodText] = (acc[item.moodText] || 0) + 1;
      return acc;
    }, {});

    const totalCount = Object.values(moodCounts).reduce(
      (acc, count) => acc + count,
      0
    );

    const calculatedHeights = Object.keys(moodCounts).reduce((acc, mood) => {
      acc[mood] = (moodCounts[mood] / totalCount) * 250;
      return acc;
    }, {});

    const maxMood = Object.keys(calculatedHeights).reduce(
      (a, b) => (calculatedHeights[a] > calculatedHeights[b] ? a : b),
      ""
    );

    return { calculatedHeights, maxMood };
  };

  useEffect(() => {
    const fetchMoodInputs = async () => {
      try {
        const moodData = await getMoodsByUserId();
        const today = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 7);

        const filteredData = moodData.filter((item) => {
          const date = new Date(item.date);
          return date >= sevenDaysAgo && date <= today;
        });

        setData(filteredData);
      } catch (err) {
        console.log("err" + err.message);
      }
    };

    fetchMoodInputs();
  }, []);

  useEffect(() => {
    const getName = async () => {
      try {
        const name = await getAUser();
        setUsername(name.userName);
      } catch (err) {
        console.log("err" + err.message);
      }
    };
    getName();
  }, []);

  useEffect(() => {
    const today = new Date().getDay();
    setCurrentDayIndex(today - 1); // set current day index based on today (0: Sunday, 6: Saturday)
  }, []);

  const updateMoodStats = (dayData) => {
    const { calculatedHeights, maxMood } = calculateMoodStats(dayData);
    setHeights(calculatedHeights);
    setMaxHeightMood(maxMood);
  };

  useEffect(() => {
    if (data.length > 0) {
      const groupedData = groupDataByDay(data);
      const currentDayData = groupedData[daysOfWeek[currentDayIndex]];
      updateMoodStats(currentDayData);

      const nextDayIndex = (currentDayIndex + 1) % 7;
      const nextDayData = groupedData[daysOfWeek[nextDayIndex]];
      setIsNextDisabled(!hasNavigatedBack && isToday); // Disable next button if isToday and hasn't navigated back

      // Extract and set the date for the current day
      if (currentDayData.length > 0) {
        const date = new Date(currentDayData[0].date);
        date.setDate(date.getDate() + 1); // Increase the date by one day
        setCurrentDate(date.toISOString().split("T")[0]); // Format the date as YYYY-MM-DD
      }
    }
  }, [data, currentDayIndex, hasNavigatedBack, isToday]);

  const handleNext = () => {
    setCurrentDayIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % 7;
      setHasNavigatedBack(false);
      setIsToday(nextIndex === new Date().getDay() - 1);
      return nextIndex;
    });
  };

  const handleBack = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex - 1 + 7) % 7);
    setHasNavigatedBack(true);
    setIsToday(false);
  };

  const dateValue = getTime();
  const groupedData = groupDataByDay(data);
  const currentDay = daysOfWeek[currentDayIndex];

  const moodToEmoji = {
    Lovely: "😍",
    Sad: "😭",
    Angry: "😡",
    Worried: "😟",
    Boring: "🥱",
    Neutral: "😐",
    OverWhelmed: "😨",
    Happy: "😄",
  };

  const moodToImage = {
    Lovely: require("../../../assets/images/analysisMood/lovelyPicture.png"),
    Sad: require("../../../assets/images/analysisMood/sadPicture.png"),
    Angry: require("../../../assets/images/analysisMood/angryPicture.png"),
    Worried: require("../../../assets/images/analysisMood/sickPicture.png"),
    Boring: require("../../../assets/images/analysisMood/sleepPicture.png"),
    Neutral: require("../../../assets/images/analysisMood/nutralPicture.png"),
    OverWhelmed: require("../../../assets/images/analysisMood/scaredPicture.png"),
    Happy: require("../../../assets/images/analysisMood/happyPicture.png"),
  };

  return (
    <ScrollView>
      <HeaderSubAnalysis headLine={"Good " + dateValue + " " + username} />
      {maxHeightMood && (
        <View>
          <View style={[styles.selectedEmojiContainer, { opacity: 0.2 }]}>
            <Text style={styles.emojiTextLeft}>
              {moodToEmoji[maxHeightMood]}
            </Text>
            <Text style={styles.emojiTextRight}>
              {moodToEmoji[maxHeightMood]}
            </Text>
          </View>

          <Text style={styles.emoji}>{moodToEmoji[maxHeightMood]}</Text>
          <Text style={styles.text}>
            You are feeling {maxHeightMood} {currentDay}
          </Text>

          <View style={styles.navigationContainer}>
            <TouchableOpacity style={styles.button} onPress={handleBack}>
              <Image
                source={require("../../../assets/images/leftback.png")}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, isNextDisabled && styles.buttonDisabled]}
              onPress={handleNext}
              disabled={isNextDisabled}
            >
              <Image
                source={require("../../../assets/images/rightnext.png")}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View>
        <Text style={styles.dateText}>{currentDate}</Text>
        <DayMoodChart data={groupedData[currentDay]} />
      </View>
      <View style={styles.image}>
        <Image source={moodToImage[maxHeightMood]} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 100,
    // marginTop: 32,
    // backgroundColor: "yellow",
  },

  selectedEmojiContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  emojiTextLeft: {
    fontSize: 60,
    marginRight: 20,
  },
  emojiTextRight: {
    fontSize: 60,
    marginLeft: 20,
  },
  emoji: {
    fontSize: 100,
    alignItems: "center",
    alignSelf: "center",
    marginTop: -130,
  },

  image: {
    width: 369,
    height: 280,
    opacity: 0.8,
    alignSelf: "center",
    marginTop: -280,
  },
  text: {
    fontSize: 16,
    fontWeight: "300",
    color: "#40495B",
    alignSelf: "center",
    marginTop: 30,
  },
  graphContainer: {
    marginTop: -280,
  },
  button: {
    width: 60,
    height: 40,
    // backgroundColor: "yellow",
  },
  buttonImage: {
    alignSelf: "center",
    top: 16,
    width: 15,
    height: 15,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  dateText: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 10,
    marginTop: -27,
    // backgroundColor: "yellow",
    width: 100,

    alignSelf: "center",
  },
});

export default AnalysisGraph;
