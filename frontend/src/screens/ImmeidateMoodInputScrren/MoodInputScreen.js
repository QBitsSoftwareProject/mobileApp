import React, {useEffect,useState} from 'react';
import { Text, View, Image, TouchableOpacity ,ScrollView,Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './MoodInputStyles';
import back from '../../assets/images/back.png';
import { useNavigation } from "@react-navigation/native";


const MoodInputScreen = () => {

  const navigation = useNavigation();

  const [optionValue, setOptionValue] = useState('');
  const [screenHeight, setScreenHeight] = useState('');

  const handleOptions = (value) => {
        // console.log(value);
        setOptionValue(value);
  }
  useEffect(() => {

  const windowSize = Dimensions.get('window');
  const windowHeight = windowSize.height;
  setScreenHeight(windowHeight);

  console.log(optionValue);
  // console.log(windowHeight);
  })

  const handleSubmitBtn = () => {
    navigation.navigate("MindRelaxingMethod");
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

          <TouchableOpacity style={[styles.leftImoji, optionValue === 30 ? styles.selectedOption : null, ]}
            onPress={() => handleOptions(30)}>
            <Image source={require('../../assets/images/ImmediatMoodInput/sad.png')} style={styles.optionImg} />
          </TouchableOpacity>

          <TouchableOpacity  style={[styles.rightImoji, optionValue === 20 ? styles.selectedOption : null]} onPress={() => handleOptions(20)}>
            <Image source={require('../../assets/images/ImmediatMoodInput/upset.png')} style={styles.optionImg} />
          </TouchableOpacity>

        </View>

        <View style={styles.imojiRowTwo}>

          <TouchableOpacity  style={[styles.leftImoji, optionValue === 10 ? styles.selectedOption : null]} onPress={() => handleOptions(10)}>
            <Image source={require('../../assets/images/ImmediatMoodInput/nervous.png')} style={styles.optionImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.rightImoji, optionValue === 5 ? styles.selectedOption : null]} onPress={() => handleOptions(5)}>
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
