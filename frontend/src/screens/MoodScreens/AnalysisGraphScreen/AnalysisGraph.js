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
  // State variables initialization
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [heights, setHeights] = useState({});
  const [maxHeightMood, setMaxHeightMood] = useState(null);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [hasNavigatedBack, setHasNavigatedBack] = useState(false); // Track if user has navigated back
  const [isToday, setIsToday] = useState(true); // Track if the current chart is today's chart
  const [currentDate, setCurrentDate] = useState("");

  // Array defining days of the week
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Function to group mood data by day
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

  // Function to calculate mood statistics
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

    // Finding the most frequent mood
    const maxMood = Object.keys(calculatedHeights).reduce((a, b) =>
      calculatedHeights[a] > calculatedHeights[b] ? a : b
    );

    return { calculatedHeights, maxMood };
  };

  // Effect to fetch mood data on component mount
  useEffect(() => {
    const fetchMoodInputs = async () => {
      try {
        const moodData = await getMoodsByUserId();
        const today = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 7); // Calculate date 7 days ago

        const filteredData = moodData.filter((item) => {
          const date = new Date(item.date);
          return date >= sevenDaysAgo && date <= today; // Filter mood data for last 7 days
        });

        setData(filteredData);
      } catch (err) {
        console.log("err" + err.message);
      }
    };

    fetchMoodInputs();
  }, []);

  // Effect to fetch user name on component mount
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

  // Effect to set current day index on component mount
  useEffect(() => {
    const today = new Date().getDay();
    setCurrentDayIndex(today - 1); // set current day index based on today (0: Sunday, 6: Saturday)
  }, []);

  // Function to update mood statistics based on current day data
  const updateMoodStats = (dayData) => {
    const { calculatedHeights, maxMood } = calculateMoodStats(dayData);
    setHeights(calculatedHeights);
    setMaxHeightMood(maxMood);
  };

  // Effect to update mood stats, disable next button, and set current date on data or state changes
  useEffect(() => {
    if (data.length > 0) {
      const groupedData = groupDataByDay(data);
      const currentDayData = groupedData[daysOfWeek[currentDayIndex]];
      updateMoodStats(currentDayData); // Update mood state based on current day data

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

  // Function to handle next button press
  const handleNext = () => {
    setCurrentDayIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % 7;
      setHasNavigatedBack(false);
      setIsToday(nextIndex === new Date().getDay() - 1);
      return nextIndex;
    });
  };

  // Function to handle back button press
  const handleBack = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex - 1 + 7) % 7);
    setHasNavigatedBack(true);
    setIsToday(false);
  };

  const dateValue = getTime();
  const groupedData = groupDataByDay(data);
  const currentDay = daysOfWeek[currentDayIndex];

  function formatDate(dateString) {
    // Parse the date string into a Date object
    const date = new Date(dateString);

    // Get the month name and day
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();

    // Format the date as "Month-DD"
    return `${month}-${day.toString().padStart(2, "0")}`;
  }

  const formattedDate = formatDate(currentDate);
  console.log(formattedDate); // Outputs: "July-03"

  // Mappings of moods to emojis and images
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
            <View style={styles.view1}>
              <TouchableOpacity onPress={handleBack}>
                <Image
                  source={require("../../../assets/images/leftback.png")}
                  style={styles.button}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.view2}>
              <Text style={styles.dateText}>{formattedDate}</Text>
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
  // graphContainer: {
  //   marginTop: -250,
  // },
  button: {
    alignSelf: "flex-end",
    top: 13,
  },
  buttonImage: {
    // top: 10,
    right: 120,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  dateText: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    top: 10,
  },
  view1: {
    flex: 2,
    // backgroundColor: "yellow",
  },
  view2: {
    flex: 2,
    // backgroundColor: "red",
  },
  view3: {
    flex: 2,
    // backgroundColor: "yellow",
  },
});

export default AnalysisGraph;
