import React, {useEffect,useState} from 'react';
import { Text, View, Image, TouchableOpacity ,ScrollView,Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './MoodInputStyles';
import back from '../../assets/images/back.png';
import { useNavigation } from "@react-navigation/native";
import { storeCurrentMood , updateCurrentMood , fetchCurrentMoodInput} from '../../services/currentMoodInputServices/currentMoodInputServices';
import { getUserId } from '../../services/getUserIdService/getUserIdService';


const MoodInputScreen = () => {

  const navigation = useNavigation();

  const [optionValue, setOptionValue] = useState('');
  const [screenHeight, setScreenHeight] = useState('');
  const [happy, setHappy] = useState('');
  const [sad, setSad] = useState('');
  const [neutral, setNeutral] = useState('');
  const [worried, setWorried] = useState('');
  const [userId, setUserId] = useState('');

  

  


  const handleOptions = (value) => {
        // console.log(value);
        setOptionValue(value);
  }
  useEffect(() => {

  const windowSize = Dimensions.get('window');
  const windowHeight = windowSize.height;
  setScreenHeight(windowHeight);

   
  

  console.log(optionValue);
  setUserId("214224J");

  if(optionValue === 'happy'){
    setHappy(1);
    setSad(0);
    setNeutral(0);
    setWorried(0)
  }else if(optionValue === 'sad'){
    setHappy(0);
    setSad(1);
    setNeutral(0);
    setWorried(0)
  }else if(optionValue === 'neutral'){
    setHappy(0);
    setSad(0);
    setNeutral(1);
    setWorried(0)
  }else if(optionValue === 'worried'){
    setHappy(0);
    setSad(0);
    setNeutral(0);
    setWorried(1)
  }else{
    console.log("wrong value");
  }

   console.log(happy);
   console.log(sad);
   console.log(neutral);
   console.log(worried);
  },[optionValue])

  const getdata = async() => {
    try{
      const data = await fetchCurrentMoodInput();
      console.log(data);
   
  
    }
    catch(error){
      console(error);
    }
  } 
  
  useEffect ( () => {
    getdata()
  },[])  

  const handleSubmitBtn = async() => {
    if(optionValue){
      // storeCurrentMood(happy,sad,neutral,worried);
      updateCurrentMood(happy,sad,neutral,worried); 
      
      
    navigation.navigate("MindRelaxingMethod");
    }else{
      alert("Choose a mood");
    }
  }
  const handleBackBtn = () => {
    navigation.navigate("HomeScreen");
  }

  return (
    
      <SafeAreaView >
        <TouchableOpacity 
        onPress={handleBackBtn}
        style={styles.backBtn}  >
          <Image source={require('../../assets/images/back.png')} style={styles.backPng} />
        </TouchableOpacity>

        <View style={styles.horivontalBar}></View>
        <View style = {{height: screenHeight-282}}> 
        <ScrollView >
        <View style={styles.textArea}>
          <Text style={styles.textOne}>Hey there!</Text>
          <Text style={styles.textOne}>Ready to capture your mood? </Text>
          <Text style={styles.textOne}>Pick one emoji that perfectly sums up how you're feeling at this moment. </Text>
        </View>
        <View style={styles.imageArea}>
          <Image source={require('../../assets/images/ImmediatMoodInput/moodinput.png')} style={styles.mainImage} />
        </View>

        <View style={styles.imojiRow}>

          <TouchableOpacity style={[styles.leftImoji, optionValue === "sad" ? styles.selectedOption : null, ]}
            onPress={() => handleOptions("sad")}>
            <Image source={require('../../assets/images/ImmediatMoodInput/sad.png')} style={styles.optionImg} />
          </TouchableOpacity>

          <TouchableOpacity  style={[styles.rightImoji, optionValue === "happy" ? styles.selectedOption : null]} onPress={() => handleOptions("happy")}>
            <Image source={require('../../assets/images/ImmediatMoodInput/upset.png')} style={styles.optionImg} />
          </TouchableOpacity>

        </View>

        <View style={styles.imojiRowTwo}>

          <TouchableOpacity  style={[styles.leftImoji, optionValue === "worried" ? styles.selectedOption : null]} onPress={() => handleOptions("worried")}>
            <Image source={require('../../assets/images/ImmediatMoodInput/nervous.png')} style={styles.optionImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.rightImoji, optionValue === "neutral" ? styles.selectedOption : null]} onPress={() => handleOptions("neutral")}>
            <Image source={require('../../assets/images/ImmediatMoodInput/nutral.png')} style={styles.optionImg} />
          </TouchableOpacity>

        </View>

        {/* <Text>{optionValue}</Text> */}

        <TouchableOpacity 
        onPress={handleSubmitBtn}
        style= {styles.submitBtn}>
          <Text style = {styles.btnText}>Submit</Text>
        </TouchableOpacity>

        </ScrollView>
        </View>
      </SafeAreaView>
    
  );
};

export default MoodInputScreen;
