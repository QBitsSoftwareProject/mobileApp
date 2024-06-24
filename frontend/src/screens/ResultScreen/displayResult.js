import React , { useState, useEffect } from "react";
import styles from './resultStyle';
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import TabBar from "../../components/TabBar/TabBar";
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from "./doublebutton";
import Overlay from './instruction';
import axiosInstance from "../../api/axios";
// import { encryptData } from "../StressLevelAssessmentQuestions/encrypt";
import { fetchMarkById } from "../../services/stressMarksServices/stressMarkServices";


import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  ScrollView

} from "react-native";



const DisplayResultScreen = () => {

    const [lastMark,setLastMark] = useState(null);
    const [val,setVal] = useState('');

    
    useEffect ( () => {
      
      fetchMark();
      
    },[])    
        
  
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

        
        const navigation = useNavigation();

        const handleHistorybutton = () => {

          navigation.navigate('StressLevelHistoryScreen', {

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

       // get last stress level of the user


       const fetchMark = async () => {
         
        try {
          
          const response = await fetchMarkById();
          const userData = response 
          console.log(userData)
      
          if (response.length >= 0) {
            const mostRecentMark = userData[userData.length - 1].mark;
            console.log('Most Recent Mark:', mostRecentMark);
            setLastMark(mostRecentMark);
            setVal(1); 
          } else {
            console.log('No user data found.'); 
            
          }
        } catch (err) {
          console.log('Error fetching mark:', err); 
        }
      }; 

  
  const suggessionBtnFunction = () => {

    
    navigation.navigate('MindRelaxingMethod');
  };

   
        

  return (
    <View>
    <View>
      <HeaderSub headLine = 'Result' subHeadLine = 'understand and manage your stress better.' back = 'HomeScreen'/>
    </View>

    {/* <CustomButton  suggessionBtnFunction ={suggessionBtnFunction}></CustomButton> */}

    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 500 }}>

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

    </ScrollView>

      
    </View>

    
    
  );
};



export default DisplayResultScreen;