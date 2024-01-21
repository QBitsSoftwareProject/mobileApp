import React , { useState, useEffect } from "react";
import {getMark} from './getStressLevel';
import styles from './resultStyle';
import HeaderSub from "../../components/HeaderSub.js/HeaderSub";
import TabBar from "../../components/TabBar/TabBar";
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import stresslevelhistory from '../StressLevelHistory/stresslevelhistory';
import { CustomButton } from "./doublebutton";
import Overlay from './instruction';
import axiosInstance from "../../api/axios";


import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground

} from "react-native";



const DisplayResultScreen = ({ route ,navigation}) => {

    const [StressLevel, setStressLevel] = useState('');
    const [userID, setUserId] = useState('');
    const [lastMark,setLastMark] = useState('');

    const { stresslevel, userId } = route.params;

    useEffect(() => {
      const extractedUserId = userId;

  setLastMark(stresslevel);
  setUserId(extractedUserId); // Update the user ID without the array wrapper
  fetchMark(extractedUserId);
  console.log(extractedUserId);
}, [stresslevel, userId]);
    
    

        useEffect ( () => {
            console.log('Stress Level Mark:', StressLevel);
           
            
        },[StressLevel])

        let level;

        if(lastMark >= 0 && lastMark < 15){
          level = 'low';
        }
        else if(lastMark >= 15 && lastMark <= 27){
          level = 'moderate';
        }
        else{
          level = 'high';
        }

        const Stack = createStackNavigator();

        const handleHistorybutton = () => {

          navigation.navigate('StressLevelHistoryScreen', {
             user_id: userID,

          });
        }

        const handleTryAgainButton = () =>{
          navigation.navigate('Question', {
            
         });

         navigation.reset({
          index: 0,
          routes: [{ name: 'Question' }],
        });

        }

        //for intro overlay

        const [isOverlayVisible, setOverlayVisible] = useState(false);

        const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
       };


       const fetchMark = async (userID) => {
        // const userid = userID;
        try {
          console.log('Fetching mark for userID:', userID);
          const response = await axiosInstance.get(`/mark/get-mark-by-id/${userID}`);
          const userData = response.data.filter((item) => item.userid === userID);
      
          if (userData.length > 0) {
            const mostRecentMark = userData[userData.length - 1].mark;
            console.log('Most Recent Mark:', mostRecentMark);
            setLastMark(mostRecentMark);
          } else {
            console.log('No user data found.');
          }
        } catch (err) {
          console.log('Error fetching mark:', err);
        }
      };

      
    
        

       

       


  return (
    <View>
    <View>
      <HeaderSub headLine = 'Result' subHeadLine = 'understand and manage your stress better.'/>
    </View>

    <CustomButton></CustomButton>

    <Text style = {styles.pccText}>
    This numerical assessment reflects your 
    current stress quotient measured via the 
    Perceived Stress Scale (PSS).
    </Text>

    
      <View>
      <TouchableOpacity onPress={toggleOverlay}>
      <Image source={require("../../assets/images/instruction.png")} style = {styles.instructionimg} />
      </TouchableOpacity>

      <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay}  />
    </View>
      

      <ImageBackground source={require("../../assets/images/resultScreen/resultScreenBack.png")} style = {styles.backgroungimg} >

      <Text style = {styles.textStressLvl}>
      Your Stress Level is
      </Text>

    <View style = {styles.container}>
      <Text style = {styles.text}>
      {lastMark}
      </Text>
    </View>

    <Text style = {styles.textStressLvl2}>
      You have {level} level of stress
      </Text>

      </ImageBackground>

      <Text style = {styles.pccText}>
      A score between 0 and 15 indicates low 
      stress, 15 to 27 signifies moderate stress, 
      while a range of 27 to 40 indicates high 
      stress levels.
      </Text>

    <View style={{ flexDirection: 'row', justifyContent: 'center',alignItems: 'center' }}>

    <TouchableOpacity style={styles.historybtn} onPress={handleHistorybutton} >
      <Text style ={{ color: 'black', fontSize: 14, marginLeft:50  }}>History</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.historybtn} onPress={handleTryAgainButton} >
      <Text style ={{ color: 'black', fontSize: 14,marginLeft:40  }}>Try Again</Text>
    </TouchableOpacity>


    </View>

    <View style={{ position: 'absolute', top:900, left: 0, right: 0 }}>
        <TabBar/>
      </View>

      
    </View>

    
    
  );
};



export default DisplayResultScreen;