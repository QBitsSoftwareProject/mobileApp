import { View, Text, FlatList, ScrollView, ImageBackground } from 'react-native';
import HeaderSub from "../../components/HeaderSub.js/HeaderSub";
import styles from './historystyle';
import React, { useState, useEffect } from "react";
import axiosInstance from '../../api/axios';
import { GetMonthAndDate } from '../StressLevelAssessmentQuestions/convertdatetime';
import TabBar from "../../components/TabBar/TabBar";
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';





const HelloWorldScreen = ({route,navigation}) => {
  const [historyData, setHistoryData] = useState([]);
  const [userID, setUserId] = useState('');

  const { user_id } = route.params;

  const fetchHistoryData = async (userid) => {
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

      const formattedData = Object.entries(groupedData)
        .map(([date, items]) => ({ date, items }))
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      // to sort by time
      formattedData.forEach(({ items }) => {
        items.sort((a, b) => {
          const timeA = new Date(`1970-01-01T${a.time}`);
          const timeB = new Date(`1970-01-01T${b.time}`);
          return timeB - timeA;
        });
      });

      setHistoryData(formattedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setUserId(user_id);
    console.log("id is", userID);
    fetchHistoryData(user_id); // Call fetchHistoryData here
  }, [user_id]);

  const Stack = createStackNavigator();

  const handleBackButton = () =>{
    navigation.navigate('DisplayResultScreen', {
      userId: userID
   });
  }

  const renderDateItem = ({ item, index }) => {
    const colors = ['#4ABFB4', '#4A90BF'];

    return (
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <View style={styles.verticalbar}></View>
          <GetMonthAndDate fulldate={item.date} color={colors[index % colors.length]} />
          </View>
      <View style={styles.rightSection}>
        {/* Render individual items for the date */}
        {item.items.map((dataItem, index) => (
          <View key={index} style={styles.row}>
            

            <Text style={styles.timetext}>{dataItem.time}</Text>
            
            <Text style={styles.stressLvlText}>Your Stress level 
            <View style={styles.markview}>
             <Text style={styles.markText}>{dataItem.mark} / </Text>
            </View>
            40
            </Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  const renderSeparator = () => <View style={styles.separator} />;

 
  return (
    
    
      <View style={{ flex: 1 }}>
        <HeaderSub headLine='History' subHeadLine='Past stress level.' BackButton={handleBackButton} />
        <ImageBackground source={require('../../assets/images/stresslevelhistory/historybc.png')}>
        <View style={styles.scrollArea}>
          
        <FlatList style={styles.FlatList}
          data={historyData}
          keyExtractor={(item) => item.date}
          renderItem={renderDateItem}
          ItemSeparatorComponent={renderSeparator}
        />
        
        </View>
        </ImageBackground>

        <View style={{ position: 'absolute', top:900, left: 0, right: 0 }}>
        <TabBar/>
      </View>
        
      </View>
      
    
    
  );
};

export default HelloWorldScreen;
