import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { getMoodsByUserId } from "../../../services/moodAnalysisServices/moodAnalysisServices";

const screenWidth = Dimensions.get("window").width;

const CustomBarChart = ({ positiveMoods, negativeMoods }) => {
  // set state variables
  const [chartData, setChartData] = useState([]);
  const [yAxisMaxValue, setYAxisMaxValue] = useState(0);

  // get the start date
  const getStartDate = (daysAgo) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    date.setHours(0, 0, 0, 0); // Set time to 00:00:00
    return date;
  };

  // get the end date
  const getEndDate = () => {
    const date = new Date();
    date.setHours(23, 59, 59, 999); // Set time to 23:59:59.999
    return date;
  };

  // filter the data according to the range
  const filterDataByRange = (data, dateField) => {
    const endDate = getEndDate();
    const startDate = getStartDate(30);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);

    return data.filter((item) => {
      const itemDate = new Date(item[dateField]);
      itemDate.setHours(0, 0, 0, 0); // Adjust to start of the day
      // console.log("Item Date:", itemDate);

      return itemDate >= startDate && itemDate <= endDate;
    });
  };

  // fetch the mood data
  useEffect(() => {
    const fetchMoodInputs = async () => {
      try {
        const moodData = await getMoodsByUserId();
        // console.log("Fetched Mood Data:", moodData);

        if (!Array.isArray(moodData)) {
          throw new Error("Invalid response data format");
        }

        // Filter data for the last 30 days
        const dataByRange = filterDataByRange(moodData, "date");
        // console.log("Filtered Data by Range:", dataByRange);

        // group the mood inputs by date
        const emojisByDate = {};
        dataByRange.forEach((entry) => {
          const formattedDate = new Date(entry.date).toLocaleDateString(
            "en-US",
            {
              day: "numeric",
              month: "short",
            }
          );

          if (!emojisByDate[formattedDate]) {
            emojisByDate[formattedDate] = [];
          }
          // Add the moods to the corresponding date
          emojisByDate[formattedDate].push(entry.selectedEmoji);
        });

        //get an array of according to the dates
        const uniqueDatesArray = Object.keys(emojisByDate);

        // Map overcount moods according to the dates
        const emojiCounts = uniqueDatesArray.map((date) => {
          const emojis = emojisByDate[date];
          let positiveCount = 0;
          let negativeCount = 0;

          emojis.forEach((emoji) => {
            if (positiveMoods.includes(emoji)) {
              positiveCount++;
            } else if (negativeMoods.includes(emoji)) {
              negativeCount++;
            }
          });

          // calculate the difference of mood count
          const netCount = positiveCount - negativeCount;

          return { date, netCount };
        });
        // Calculate the maximum absolute value of net counts for the y-axis scale
        const maxAbsValue =
          Math.max(...emojiCounts.map((count) => Math.abs(count.netCount))) ||
          1;
        setYAxisMaxValue(maxAbsValue);
        setChartData(emojiCounts);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchMoodInputs();
  }, [positiveMoods, negativeMoods]);

  // genarate the values for yaxis
  const yAxisLabels = Array.from(
    { length: yAxisMaxValue * 2 + 1 },
    (_, i) => i - yAxisMaxValue
  );

  return (
    <View style={styles.container}>
      <View style={styles.yAxisView}>
        <View style={styles.yAxis}>
          {yAxisLabels.reverse().map((label, index) => (
            <View key={index}>
              <Text style={styles.yAxisLabel}>{label}</Text>
            </View>
          ))}
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chartContainer}>
          <View style={styles.chart}>
            <View style={styles.zeroLine} />
            {chartData.map((data, index) => {
              const netCount = data.netCount;
              const barHeight = Math.abs(netCount) * (180 / yAxisMaxValue);
              const isPositive = netCount >= 0;

              return (
                <View key={index} style={styles.barWrapper}>
                  <View
                    style={[
                      styles.bar,
                      {
                        height: barHeight,
                        backgroundColor: isPositive ? "#4ABFB4" : "#684c6b",
                        marginTop: isPositive ? 200 - barHeight : 200,
                        marginBottom: isPositive ? 200 : 200 - barHeight,
                        borderTopLeftRadius: isPositive ? 15 : 0,
                        borderTopRightRadius: isPositive ? 15 : 0,
                        borderBottomLeftRadius: isPositive ? 0 : 15,
                        borderBottomRightRadius: isPositive ? 0 : 15,
                      },
                    ]}
                  ></View>
                </View>
              );
            })}
          </View>
          <View style={styles.xAxis}>
            {chartData.map((data, index) => (
              <Text key={index} style={styles.label}>
                {data.date}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F3F5",
    marginTop: -5,
  },
  yAxisView: {
    width: 50,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  yAxis: {
    justifyContent: "space-between",
    height: 350,
  },
  yAxisLabel: {
    fontSize: 10,
    color: "#5C677D",
  },
  chartContainer: {
    height: 400,
  },
  chart: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 400,
  },
  barWrapper: {
    alignItems: "center",
    flexDirection: "column",
    height: 400,
    justifyContent: "flex-end",
  },
  bar: {
    width: 33,
    marginHorizontal: 15,
  },
  zeroLine: {
    position: "absolute",
    width: "100%",
    height: 0.5,
    backgroundColor: "#5C677D",
    top: "50%",
    zIndex: 1,
  },
  xAxis: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: -20,
    marginLeft: 0,
  },
  label: {
    fontSize: 10,
    alignSelf: "self",
    color: "#5C677D",
    marginHorizontal: 17.5,
  },
});

export default CustomBarChart;
