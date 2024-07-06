import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MoodProgressBars from "./Chart";

// pass the mood data , max mood from main
const DayMoodChart = ({ day, data, maxHeightMood }) => {
  const countEmojis = (mood) => {
    //Filters the data array to count the number of times of each mood.
    return data.filter((item) => item.moodText === mood).length;
  };

  //total number of mood entires of per day
  const total = data.length;

  //get height based on total number of entries
  const getHeight = (count) => {
    // console.log(count / total);
    return total !== 0 ? (count / total) * 250.0 : 0;
  };

  const heights = {
    lovely: getHeight(countEmojis("Lovely")),
    sad: getHeight(countEmojis("Sad")),
    angry: getHeight(countEmojis("Angry")),
    worried: getHeight(countEmojis("Worried")),
    boring: getHeight(countEmojis("Boring")),
    neutral: getHeight(countEmojis("Neutral")),
    overwhelmed: getHeight(countEmojis("OverWhelmed")),
    happy: getHeight(countEmojis("Happy")),
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
    <View style={styles.dayContainer}>
      <Image style={styles.image} source={moodToImage[maxHeightMood]} />

      <View style={styles.barWithAxis}>
        <View style={styles.left}>
          <Text style={styles.axisText}>100%</Text>
          <Text style={styles.axisText}>90%</Text>
          <Text style={styles.axisText}>80%</Text>
          <Text style={styles.axisText}>70%</Text>
          <Text style={styles.axisText}>60%</Text>
          <Text style={styles.axisText}>50%</Text>
          <Text style={styles.axisText}>40%</Text>
          <Text style={styles.axisText}>30%</Text>
          <Text style={styles.axisText}>20%</Text>
          <Text style={styles.axisText}>10%</Text>
          <Text style={styles.axisText}>0%</Text>
        </View>
        <View style={styles.right}>
          <MoodProgressBars selectedEmoji={"😍"} barHeight={heights.lovely} />
          <MoodProgressBars selectedEmoji={"😭"} barHeight={heights.sad} />
          <MoodProgressBars selectedEmoji={"😡"} barHeight={heights.angry} />
          <MoodProgressBars selectedEmoji={"😟"} barHeight={heights.worried} />
          <MoodProgressBars selectedEmoji={"🥱"} barHeight={heights.boring} />
          <MoodProgressBars selectedEmoji={"😐"} barHeight={heights.neutral} />
          <MoodProgressBars
            selectedEmoji={"😨"}
            barHeight={heights.overwhelmed}
          />
          <MoodProgressBars selectedEmoji={"😄"} barHeight={heights.happy} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    marginTop: 45,
    paddingBottom: 100,
    // backgroundColor: "yellow",
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -27,
  },
  barWithAxis: {
    flexDirection: "row",
    marginTop: -280,
  },
  left: {
    flex: 1,
    alignItems: "flex-end",
    rowGap: 12,
    marginTop: 21,
    // paddingLeft: 5,
    // marginLeft: 5,
    // backgroundColor: "yellow",
  },

  axisText: {
    fontSize: 10,
    color: "#7D8597",
  },
  right: {
    flex: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingRight: 15,

    // backgroundColor: "red",
    // columnGap: 75,
    // marginHorizontal: 10,
  },

  chartContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  image: {
    width: 369,
    height: 280,
    // left: -15,
    alignSelf: "center",
    marginTop: -10,
    // backgroundColor: "yellow",
  },
});

export default DayMoodChart;
