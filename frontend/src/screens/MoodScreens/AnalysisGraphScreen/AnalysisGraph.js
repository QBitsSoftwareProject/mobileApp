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
  const [isBackDisabled, setIsBackDisabled] = useState(false);
  const [isToday, setIsToday] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [startDayIndex, setStartDayIndex] = useState(0);
  const [endDayIndex, setEndDayIndex] = useState(0);

  // get current date and get minus from it
  const today = new Date();
  today.setDate(today.getDate() - 1); // Subtract 1 day

  // set the state to current date
  const [currentDate, setCurrentDate] = useState(
    today.toISOString().split("T")[0]
  );

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

    const maxMood = Object.keys(calculatedHeights).reduce((a, b) =>
      calculatedHeights[a] > calculatedHeights[b] ? a : b
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

        const sevenDaysAgoFormatted = sevenDaysAgo.toISOString().split("T")[0];
        setStartDate(sevenDaysAgoFormatted);
        // console.log("startDate", startDate);

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
    setCurrentDayIndex(today - 1);
    setEndDayIndex(today - 1);
  }, []);

  useEffect(() => {
    const startIndex = new Date(startDate).getDay();
    setStartDayIndex(startIndex);
  }, [startDate]);

  const updateMoodStats = (dayData) => {
    const { calculatedHeights, maxMood } = calculateMoodStats(dayData);
    setHeights(calculatedHeights);
    setMaxHeightMood(maxMood);
  };

  useEffect(() => {
    if (data.length > 0) {
      const groupedData = groupDataByDay(data);
      const currentDayData = groupedData[daysOfWeek[currentDayIndex]];

      if (currentDayData.length === 0) {
        setMaxHeightMood(null);
        setHeights({});
      } else {
        updateMoodStats(currentDayData);
      }

      if (currentDayData.length > 0) {
        const date = new Date(currentDayData[0].date);
        date.setDate(date.getDate() + 1);
        setCurrentDate(date.toISOString().split("T")[0]);
      }

      setIsNextDisabled(currentDayIndex === endDayIndex);
      // console.log("startDayIndex", startDayIndex);
      setIsBackDisabled(currentDayIndex === startDayIndex);
    }
  }, [data, currentDayIndex]);

  const handleNext = () => {
    setCurrentDayIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % 7;
      setIsToday(nextIndex === new Date().getDay() - 1);
      return nextIndex;
    });
  };

  const handleBack = () => {
    setCurrentDayIndex((prevIndex) => {
      const nextIndex = (prevIndex - 1 + 7) % 7;
      setIsToday(false);
      return nextIndex;
    });
  };

  const dateValue = getTime();
  const groupedData = groupDataByDay(data);
  const currentDay = daysOfWeek[currentDayIndex];

  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    return `${month}-${day.toString().padStart(2, "0")}`;
  }

  function formatNextDate(dateString) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    return `${month}-${day.toString().padStart(2, "0")}`;
  }

  const formattedDate = formatDate(currentDate);
  const formattedNextDate = formatNextDate(currentDate);

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

  return (
    <ScrollView>
      <HeaderSubAnalysis headLine={"Good " + dateValue + " " + username} />
      {data.length === 0 ? (
        <View style={styles.emptyStateContainer}>
          <Text style={styles.text}>
            No mood data available for {currentDay}
          </Text>
          <Text style={styles.text}>{formattedNextDate}</Text>
        </View>
      ) : (
        <View>
          {maxHeightMood ? (
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
            </View>
          ) : (
            <View style={styles.emptyStateContainer}>
              <Text style={styles.text}>
                No mood data available for {currentDay}
              </Text>
              {/* <Text style={styles.text}>{formattedNextDate}</Text> */}
            </View>
          )}

          <View style={styles.navigationContainer}>
            <View style={styles.view1}>
              <TouchableOpacity
                style={[styles.button, isBackDisabled && styles.buttonDisabled]}
                onPress={handleBack}
                disabled={isBackDisabled}
              >
                <Image
                  source={require("../../../assets/images/leftback.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.view2}>
              <Text style={styles.dateText}>
                {maxHeightMood ? formattedDate : formattedNextDate}
              </Text>
            </View>

            <View style={styles.view3}>
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
        </View>
      )}

      <View>
        <DayMoodChart
          data={groupedData[currentDay]}
          maxHeightMood={maxHeightMood}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent:'center',
    
    alignItems:'center',
    gap:32,
    height:30

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
    marginTop: "-68%",
  },
  text: {
    fontSize: 16,
    fontWeight: "300",
    color: "#40495B",
    alignSelf: "center",
    marginTop: 20,
  },
  button: {
    // alignSelf: "flex-end",
    // top: 13,
    alignItems:'center',
    width:50,
    height:'100%',
    justifyContent:'center'
    
  },
  buttonImage: {
    // right: 120,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  dateText: {
    fontSize: 18,
    fontWeight: "400",
    // textAlign: "center",
    // top: 10,
  },
  view1: {
    // flex: 2,
  
    
  },
  view2: {
    // flex: 2,
    // backgroundColor:"yellow"
  },
  view3: {
    // flex: 2,
    // backgroundColor:"black"
  },
  emptyStateContainer: {
    alignItems: "center",
    marginTop: 50,
    
  },
});

export default AnalysisGraph;
