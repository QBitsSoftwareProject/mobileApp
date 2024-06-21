// import React from 'react';
// import { Dimensions, ScrollView, View,  } from 'react-native';
// import { useState ,useEffect} from 'react';
// import { BarChart } from 'react-native-chart-kit';
// import axios from 'axios';

// const screenWidth = Dimensions.get('window').width;
// const chartWidth = screenWidth *1.5;

// const positiveMoods = ['😄', '😍', '😴']; // Add appropriate emojis for positive moods
// const negativeMoods = ['😢', '😡', '🤒', '😐', '😱']; // Add appropriate emojis for negative moods

// const MonthlyProgressBar = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [{
//       data: [],

//     }]
//   });

//   const [emojisByDate, setEmojisByDate] = useState({});

// useEffect(() => {
//   const fetchData = async () => {
//       const userid = '214102J';

//       try {
//           const getResponse = await axios.get(`http://192.168.43.51:3000/moodEntries/mood-entries-get/${userid}`);

//           const responseData = getResponse.data;
//           // console.log(responseData);

//           const emojisByDate = {};

//           responseData.forEach(entry => {
//             const [day, month, year] = entry.date.split('/');
//             const formattedDate = new Date(`${year}-${month}-${day}`).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

//             // Check if the date already exists in the object, if not, create an array for it
//             if (!emojisByDate[formattedDate]) {
//               emojisByDate[formattedDate] = [];
//             }

//             // Push the emoji to the array corresponding to its date
//             emojisByDate[formattedDate].push(entry.selectedEmoji);
//           });

//           // Convert the object to arrays for chart data
//           const uniqueDatesArray = Object.keys(emojisByDate);
//           const emojiCounts = uniqueDatesArray.map(date =>{
//             const emojis = emojisByDate[date];
//             let positiveCount = 0;
//             let negativeCount = 0;

//             emojis.forEach(emoji => {
//               if (positiveMoods.includes(emoji)) {
//                 positiveCount++;
//               } else if (negativeMoods.includes(emoji)) {
//                 negativeCount++;
//               }
//             });
//             return positiveCount - negativeCount;

//           });

//           // Set the state with the unique dates and corresponding emoji counts
//           setChartData({
//             labels: uniqueDatesArray,
//             datasets: [{
//               data: emojiCounts,

//             }]
//           });

//           // Set the state with the object of emojis by date
//           setEmojisByDate(emojisByDate);

//         } catch (error) {
//           console.log("Error fetching data:", error);
//         }
//       };

//       fetchData();
//     }, []);

// const chartConfig = {
//   backgroundGradientFrom: '#F5F5F5',
//   backgroundGradientTo: '#F5F5F5',
//   color: (opacity = 1) => `rgba(74, 191, 180, ${opacity})`,
//   labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//   barPercentage: 0.5,
//   propsForLabels: {
//     fontSize: 9,

//   },

// };

//   return (

//     <ScrollView horizontal>
//     <View style={{ alignItems: 'center', alignSelf: 'center' }}>
//     <BarChart
//       data={chartData}
//       width={chartWidth}
//       height={400}
//       yAxisLabel=""
//       chartConfig={chartConfig}
//       verticalLabelRotation={90}
//       fromZero={true}

//     />
//     </View>
//     </ScrollView>
//   );

// };
// export default MonthlyProgressBar;
