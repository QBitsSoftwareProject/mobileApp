import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { View, Dimensions } from 'react-native';

const MoodLineGraph = ({ moodData }) => {
  const screenWidth = Dimensions.get('window').width;

  // Check if moodData exists
  if (!moodData) {
    // Return null or handle the case where moodData is undefined or null
    return null;
  }

  // Prepare data for the line chart
  const data = {
    labels: moodData.timestamps || [],
    datasets: [
      {
        data: moodData.positiveMoods || [],
        color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`, // Positive mood color
        strokeWidth: 2,
      },
      {
        data: moodData.negativeMoods || [],
        color: (opacity = 1) => `rgba(30, 144, 255, ${opacity})`, // Negative mood color
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0, // no decimal places
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Axis and label color
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Axis label color
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#ffa726', // Dot color
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default MoodLineGraph;
