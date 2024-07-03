import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MoodProgressBars from "./Chart";

const DayMoodChart = ({ day, data }) => {
  const countEmojis = (mood) => {
    return data.filter((item) => item.moodText === mood).length;
  };

  const total = data.length;

  const getHeight = (count) => {
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

  return (
    <View style={styles.dayContainer}>
      <Text style={styles.dayTitle}>{day}</Text>
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
          <View style={styles.chartContainer}>
            <MoodProgressBars selectedEmoji={"😍"} barHeight={heights.lovely} />
            <MoodProgressBars selectedEmoji={"😭"} barHeight={heights.sad} />
            <MoodProgressBars selectedEmoji={"😡"} barHeight={heights.angry} />
            <MoodProgressBars
              selectedEmoji={"😟"}
              barHeight={heights.worried}
            />
            <MoodProgressBars selectedEmoji={"🥱"} barHeight={heights.boring} />
            <MoodProgressBars
              selectedEmoji={"😐"}
              barHeight={heights.neutral}
            />
            <MoodProgressBars
              selectedEmoji={"😨"}
              barHeight={heights.overwhelmed}
            />
            <MoodProgressBars selectedEmoji={"😄"} barHeight={heights.happy} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    // marginVertical: 10,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -27,
  },
  barWithAxis: {
    flexDirection: "row",
    // backgroundColor: "yellow",
    marginTop: 15,
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
});

export default DayMoodChart;
