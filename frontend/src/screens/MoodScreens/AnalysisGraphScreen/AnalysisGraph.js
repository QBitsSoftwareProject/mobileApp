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
  // set useStates
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

  // set days of week array
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // grouping data by day
  const groupDataByDay = (data) => {
    // initialize the object to hold the mood inputs day by day
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
        groupedData[day].push(item); // get the total count per day
      }
    });

    return groupedData;
  };

  // get the number of each mood inputs per day
  const calculateMoodStats = (data) => {
    const moodCounts = data.reduce((acc, item) => {
      acc[item.moodText] = (acc[item.moodText] || 0) + 1;
      return acc;
    }, {});

    // get the total count per day
    const totalCount = Object.values(moodCounts).reduce(
      (acc, count) => acc + count,
      0
    );

    // calculate the height of a bar per each day
    const calculatedHeights = Object.keys(moodCounts).reduce((acc, mood) => {
      acc[mood] = (moodCounts[mood] / totalCount) * 250;

      return acc;
    }, {});

    // get the maximum enterd mood
    const maxMood = Object.keys(calculatedHeights).reduce((a, b) =>
      calculatedHeights[a] > calculatedHeights[b] ? a : b
    );
    return { calculatedHeights, maxMood };
  };

  // fetching mood data for past 7 days
  useEffect(() => {
    const fetchMoodInputs = async () => {
      try {
        const moodData = await getMoodsByUserId();

        const today = new Date();

        const sevenDaysAgo = new Date();

        sevenDaysAgo.setDate(today.getDate() - 7);

        const sevenDaysAgoFormatted = sevenDaysAgo.toISOString().split("T")[0];
        setStartDate(sevenDaysAgoFormatted);

        // filter mood data according to the date
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

  // get the user name
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

  // setting day indices (setting the sart day index and today index based on today date and start date of data)
  useEffect(() => {
    const today = new Date().getDay();
    setCurrentDayIndex(today === 0 ? 6 : today - 1); // Adjust index to start from Sunday
    setEndDayIndex(today === 0 ? 6 : today - 1); // Adjust end day index as well
  }, []);

  useEffect(() => {
    const startIndex = new Date(startDate).getDay();
    setStartDayIndex(startIndex);
  }, [startDate]);

  // updating the moods current day index is changed
  // get mood data for secific date
  const updateMoodStats = (dayData) => {
    const { calculatedHeights, maxMood } = calculateMoodStats(dayData);
    setHeights(calculatedHeights);
    setMaxHeightMood(maxMood);
  };

  //update the mood data and analysis whenever data or date index  changes
  useEffect(() => {
    // Only proceed if there is mood data available
    if (data.length > 0) {
      const groupedData = groupDataByDay(data);

      // get the moods for current day based on the index
      const currentDayData = groupedData[daysOfWeek[currentDayIndex]];

      if (currentDayData.length === 0) {
        setMaxHeightMood(null);
        setHeights({});
      } else {
        updateMoodStats(currentDayData);
      }
      // update the current date to the date of the first mood entry
      if (currentDayData.length > 0) {
        const date = new Date(currentDayData[0].date);
        date.setDate(date.getDate() + 1);
        setCurrentDate(date.toISOString().split("T")[0]);
      }

      setIsNextDisabled(currentDayIndex === 6);

      setIsBackDisabled(currentDayIndex === 0);
    }
  }, [data, currentDayIndex]);

  // handling next,back navihation
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

  // formating the dates
  const dateValue = getTime();
  const groupedData = groupDataByDay(data);

  // Get the name of the current day based on index
  const currentDay = daysOfWeek[currentDayIndex];

  // formating
  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    return `${month}-${day.toString().padStart(2, "0")}`;
  }

  // Function to format the next day's date string(this bcz nextday is Nan)
  function formatNextDate(dateString) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    return `${month}-${day.toString().padStart(2, "0")}`;
  }

  const formattedDate = formatDate(currentDate);
  const formattedNextDate = formatNextDate(currentDate);

  // Mapping mood texts to emoji characters.
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
    justifyContent: "center",

    alignItems: "center",
    gap: 32,
    height: 30,
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
    alignItems: "center",
    width: 50,
    height: "100%",
    justifyContent: "center",
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

  emptyStateContainer: {
    alignItems: "center",
    marginTop: 50,
  },
});

export default AnalysisGraph;
