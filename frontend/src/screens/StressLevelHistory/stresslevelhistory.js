import { View, Text, FlatList, ScrollView } from 'react-native';
import HeaderSub from "../../components/HeaderSub.js/HeaderSub";
import styles from './historystyle';
import React, { useState, useEffect } from "react";
import axiosInstance from '../../api/axios';
import { GetMonthAndDate } from '../StressLevelAssessmentQuestions/convertdatetime';

// ... (other imports and code)

const HelloWorldScreen = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const userid = '214224J';
    const fetchHistoryData = async () => {
      try {
        const response = await axiosInstance.get(`/mark/get-mark-by-id/${userid}`);

        const userData = response.data.filter(item => item.userid === userid);

        // Group data by date
        const groupedData = userData.reduce((acc, item) => {
          const date = item.date;
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(item);
          return acc;
        }, {});

        // Convert grouped data to an array of objects
        const formattedData = Object.entries(groupedData).map(([date, items]) => ({
          date,
          items,
        }));

        setHistoryData(formattedData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchHistoryData();
  }, []);

  const renderDateItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.leftSection}>
      <GetMonthAndDate fulldate={item.date} />
      </View>
      <View style={styles.rightSection}>
        {/* Render individual items for the date */}
        {item.items.map((dataItem, index) => (
          <View key={index} style={styles.row}>
            

            <Text>Time = {dataItem.time}</Text>
            <Text>Stress Level = {dataItem.mark}</Text>
          </View>
        ))}
      </View>
    </View>
    
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    
    
      <View style={{ flex: 1 }}>
        <HeaderSub headLine='History' subHeadLine='Past stress level.' />
        <FlatList
          data={historyData}
          keyExtractor={(item) => item.date}
          renderItem={renderDateItem}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    
    
  );
};

export default HelloWorldScreen;
