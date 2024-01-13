import React , { useState, useEffect } from "react";
import {getMark} from './getStressLevel';
import styles from './resultStyle';
import HeaderSub from "../../components/HeaderSub.js/HeaderSub";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground

} from "react-native";


const DisplayResultScreen = ({ route }) => {

    const [StressLevel, setStressLevel] = useState('');


        useEffect(() => {
            const {allmarks} = route.params;
            const StressLevelMark = getMark(allmarks);
            setStressLevel(StressLevelMark);
            
        },[route.params]);

        useEffect ( () => {
            console.log('Stress Level Mark:', StressLevel);
        },[StressLevel])

        let level;

        if(StressLevel >= 0 && StressLevel < 15){
          level = 'low';
        }
        else if(StressLevel >= 15 && StressLevel <= 27){
          level = 'moderate';
        }
        else{
          level = 'high';
        }


  return (
    <View>
    <View>
      <HeaderSub headLine = 'Result' subHeadLine = 'understand and manage your stress better.'/>
    </View>

    <TouchableOpacity style={styles.tooglebtn} >
      <Text style ={{ color: 'black', fontSize: 14, alignSelf: "center" }}>Result</Text>
    </TouchableOpacity>

    <Text style = {styles.pccText}>
    This numerical assessment reflects your 
    current stress quotient measured via the 
    Perceived Stress Scale (PSS).
    </Text>

    <TouchableOpacity >
        <Image source={require("../../assets/images/instruction.png")} style = {styles.instructionimg} />
      </TouchableOpacity>

      <ImageBackground source={require("../../assets/images/resultScreen/resultScreenBack.png")} style = {styles.backgroungimg} >

      <Text style = {styles.textStressLvl}>
      Your Stress Level is
      </Text>

    <View style = {styles.container}>
      <Text style = {styles.text}>
      {StressLevel}
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

    <TouchableOpacity style={styles.historybtn} >
      <Text style ={{ color: 'black', fontSize: 14, marginLeft:50  }}>History</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.historybtn} >
      <Text style ={{ color: 'black', fontSize: 14,marginLeft:40  }}>Try Again</Text>
    </TouchableOpacity>


    </View>

      
    </View>

    
    
  );
};



export default DisplayResultScreen;