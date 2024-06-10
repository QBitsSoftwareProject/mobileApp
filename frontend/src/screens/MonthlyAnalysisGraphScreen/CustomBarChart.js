import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import axios from 'axios';

const screenWidth = Dimensions.get('window').width;

const CustomBarChart = ({ positiveMoods, negativeMoods }) => {
  const [chartData, setChartData] = useState([]);
  const [yAxisMaxValue, setYAxisMaxValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const userid = '214102J';

      try {
        const getResponse = await axios.get(`http://192.168.43.51:3000/moodEntries/mood-entries-get/${userid}`);
        const responseData = getResponse.data;

        if (!Array.isArray(responseData)) {
          throw new Error('Invalid response data format');
        }

        const emojisByDate = {};

        responseData.forEach(entry => {
          const [day, month, year] = entry.date.split('/');
          const formattedDate = new Date(`${year}-${month}-${day}`).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

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

          const netCount = positiveCount - negativeCount;

          return { date, netCount };
        });

        const maxAbsValue = Math.max(...emojiCounts.map(count => Math.abs(count.netCount))) || 1;
        setYAxisMaxValue(maxAbsValue);
        setChartData(emojiCounts);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [positiveMoods, negativeMoods]);

  const yAxisLabels = Array.from({ length: yAxisMaxValue * 2 + 1 }, (_, i) => i - yAxisMaxValue);

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
      <ScrollView horizontal>
        <View style={styles.chartContainer}>
          <View style={styles.chart}>
            <View style={styles.zeroLine} />
            {chartData.map((data, index) => {
              const netCount = data.netCount;
              const barHeight = Math.abs(netCount) * (180 / yAxisMaxValue);
              const isPositive = netCount >= 0;

              return (
                <View key={index} style={styles.barWrapper}>
                  <View style={[
                    styles.bar,
                    {
                      height: barHeight,
                      backgroundColor: isPositive ? '#4ABFB4' : '#684c6b',
                      marginTop: isPositive ? 200 - barHeight : 200,
                      marginBottom: isPositive ? 200 : 200 - barHeight,
                      borderTopLeftRadius: isPositive ? 15 : 0,
                      borderTopRightRadius: isPositive ? 15 : 0,
                      borderBottomLeftRadius: isPositive ? 0 : 15,
                      borderBottomRightRadius: isPositive ? 0 : 15,
                    }
                  ]}>
                   
                  </View>
                </View>
              );
            })}
          </View>
          <View style={styles.xAxis}>
            {chartData.map((data, index) => (
              <Text key={index} style={styles.label}>{data.date}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F5',
    marginTop: 15,
  },
  yAxisView: {
    width: 50,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  yAxis: {
    justifyContent: 'space-between',
    height: 350,
  },
  yAxisLabel: {
    fontSize: 10,
    color: '#5C677D',
  },
  chartContainer: {
    height: 400,
    
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 400,
    
  },
  barWrapper: {
    alignItems: 'center',
    flexDirection: 'column',
    height: 400,
    justifyContent: 'flex-end',
  },
  bar: {
    width: 33,
    marginHorizontal: 15,
  },
  zeroLine: {
    position: 'absolute',
    width: '100%',
    height: 0.5,
    backgroundColor: '#5C677D',
    top: '50%',
    zIndex: 1,
  },
  xAxis: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -20,
    marginLeft: 0,
  },
  label: {
    fontSize: 10,
    color: '#5C677D',
    marginHorizontal: 5,
  },

});

export default CustomBarChart;
