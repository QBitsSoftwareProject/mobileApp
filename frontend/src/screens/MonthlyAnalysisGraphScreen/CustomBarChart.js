import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const CustomBarChart = ({ positiveMoods, negativeMoods }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      data: [],
    }]
  });

  useEffect(() => {
    const fetchData = async () => {
      const userid = '214102J';

      try {
        const getResponse = await axios.get(`http://192.168.205.128:3000/moodEntries/mood-entries-get/${userid}`);
        const responseData = getResponse.data;

        const dates = responseData.map(entry => entry.date);
        const uniqueDates = Array.from(new Set(dates));

        const emojisByDate = {};

        responseData.forEach(entry => {
          const [day, month, year] = entry.date.split('/');
          const formattedDate = new Date(`${year}-${month}-${day}`).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

          if (!emojisByDate[formattedDate]) {
            emojisByDate[formattedDate] = [];
          }

          emojisByDate[formattedDate].push(entry.selectedEmoji);
        });

        const uniqueDatesArray = Object.keys(emojisByDate);
        const emojiCounts = uniqueDatesArray.map(date => {
          const emojis = emojisByDate[date];
          let positiveCount = 0;
          let negativeCount = 0;

          emojis.forEach(emoji => {
            if (positiveMoods.includes(emoji)) {
              positiveCount++;
            } else if (negativeMoods.includes(emoji)) {
              negativeCount++;
            }
          });

          const finalCount = positiveCount - negativeCount;

          return finalCount;
        });

        setChartData({
          labels: uniqueDatesArray,
          datasets: [{
            data: emojiCounts,
          }]
        });
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [positiveMoods, negativeMoods]);

  return (
    <View style={styles.container}>
      <View style={styles.yAxisContainer}>
        {chartData.datasets[0].data.map((item, index) => (
          <Text key={index} style={[styles.yAxisLabel, { color: item >= 0 ? '#4ABFB4' : '#F76C6C' }]}>
            {item}
          </Text>
        ))}
      </View>
      <View style={styles.chartContainer}>
        {chartData.datasets[0].data.map((item, index) => (
          <View key={index} style={styles.barWrapper}>
            <View style={[styles.bar, { height: Math.abs(item * 5), backgroundColor: item >= 0 ? '#4ABFB4' : '#F76C6C' }]} />
            <Text style={styles.xAxisLabel}>{chartData.labels[index]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  yAxisContainer: {
    justifyContent: 'space-between',
    marginRight: 5,
  },
  yAxisLabel: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5,
    transform: [{ rotate: '90deg' }],
  },
  chartContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  barWrapper: {
    alignItems: 'center',
    marginRight: 5,
  },
  xAxisLabel: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  bar: {
    width: 20,
    borderRadius: 5,
  },
});

export default CustomBarChart;



