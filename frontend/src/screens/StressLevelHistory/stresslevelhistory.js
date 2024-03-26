import { View, Text, FlatList, ScrollView, ImageBackground } from 'react-native';
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import styles from './historystyle';
import React, { useState, useEffect } from "react";
import axiosInstance from '../../api/axios';
import { GetMonthAndDate } from '../StressLevelAssessmentQuestions/convertdatetime';
import TabBar from "../../components/TabBar/TabBar";
import { useNavigation } from '@react-navigation/native';





const HelloWorldScreen = ({route}) => {
  const [historyData, setHistoryData] = useState([]);
  const [userID, setUserId] = useState('');

  const { user_id } = route.params;

  //get history of stress level by newest first and groupde by date
  const fetchHistoryData = async (userid) => {
    try {
      const response = await axiosInstance.get(`/mark/get-sorted-mark-by-id/${userid}`);
      const userData = response.data;

      console.log(userData)

      // Transform groupedData into an array of objects

      const historyDataArray = Object.entries(userData).map(([date, items]) => ({
        date,
        items
      }));

 
      console.log(userData)

      

      setHistoryData(historyDataArray);
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setUserId(user_id);
    console.log("id is", userID);
    fetchHistoryData(user_id); // Call fetchHistoryData here
  }, [user_id]);

  const navigation = useNavigation();

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
            <View style={styles.markview}></View>
             <Text style={styles.markText}>{dataItem.mark} / </Text>
            
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
        <HeaderSub headLine='History' subHeadLine='Past stress level.' back = "DisplayResultScreen"  userID={userID} />
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
