// welcomescreen.js
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getTime } from './GetTime';


const WelcomeScreen = () => {

  const data={
    currentDay:"01",
    userName:"kovida",
    dayTime:getTime(),
    descrptionTxt:"It's a brand new day, and we're here to help you on your path to a stress-free life.Remember, you're not alone on this journey. We believe in your strength and resilience. Take it one day at a time, and trust the process. Each day brings you closer to a more relaxed and happier you. Stay committed, stay positive, and let's conquer stress together! ",
  };
  
  return (
    <LinearGradient colors={['#4A90BF', '#00453E']} style={styles.container}>
      <ImageBackground source={require('../../assets/images/squreBg.png')} style={styles.background}>
        <SafeAreaView style={styles.content}>

          <Text style={styles.headertxt}>Welcome</Text>
          <Text style={styles.daytxt}>Day {data.currentDay}</Text>
          <Text style={styles.greetingtxt}>Good {data.dayTime} {data.userName}! </Text>
          <Text style={styles.descriptiontxt}>{data.descrptionTxt}</Text>
      
      
          <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
            <TouchableOpacity style={styles.button}>

              <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                <Text style={styles.buttontxt}>Next</Text>    
              </View>
              <Image source={require("../../assets/images/right-arrow.png")} style={styles.icon}/>

            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default WelcomeScreen;


