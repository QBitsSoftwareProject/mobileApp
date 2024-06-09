import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SplitButton } from './ProgressBar';
import styles from './feedbackStyles';
import { QuestionButton } from './Switch';
import HeaderSub from '../../components/HeaderSub/HeaderSub';
import axios from 'axios';
import axiosInstance from "../../api/axios";

const Feedback = () => {
  const [satisfaction, setSatisfaction] = useState('');
  const [finterfaceValue, setFinterfaceValue] = useState('');
  const [design, setDesign] = useState('');
  const [speed, setSpeed] = useState('');
  const [consumption, setConsumption] = useState('');
  const [privacy, setPrivacy] = useState('');
  const [comments, setComments] = useState('');
  const [questionSix, setQuestionSix] = useState("");
  const [qOne, setQone] = useState(0);
  const [qTwo, setQtwo] = useState(0);
  const [qThree, setQthree] = useState(0);
  const [qFour, setQfour] = useState(0);
  const [qFive, setQfive] = useState(0);
  const [rateValue, setRateValue] = useState(0);
  const [userRate, setUserRate] = useState('');
  const [fDate, setDate] = useState('');
  const [fTime, setTime] = useState('');
  const [data, setData] = useState([]);


  useEffect(() => {
    if (qOne !== null) {
      const value = qOne === 0 ? 'User interface is intuitive and easy to navigate' : 'User interface is not intuitive and easy to navigate';
      setFinterfaceValue(value);
    }
  }, [qOne]);

  useEffect(() => {
    if (qTwo !== null) {
      const value = qTwo === 0 ? 'There are privacy settings or permissions that seem excessive or insufficient' : 'There are not privacy settings or permissions that seem excessive or insufficient';
      setPrivacy(value);
    }
  }, [qTwo]);

  useEffect(() => {
    if (qThree !== null) {
      const value = qThree === 1 ? 'App is slow to load or respond' : 'App is not slow to load or respond';
      setSpeed(value);
    }
  }, [qThree]);

  useEffect(() => {
    if (qFour !== null) {
      const value = qFour === 1 ? 'This app consumes excessive battery or data' : 'This app does not consume excessive battery or data';
      setConsumption(value);
    }
  }, [qFour]);

  useEffect(() => {
    if (qFive !== null) {
      const value = qFive === 1 ? 'There are elements of the design that are confusing or difficult to use' : 'There are not elements of the design that are confusing or difficult to use';
      setDesign(value);
    }
  }, [qFive]);

  useEffect(() => {
    if (rateValue === 0) {
      const satisfactionRate = `User satisfaction rate is: Not rated`;
      setUserRate(satisfactionRate);
    }
    else{
      const satisfactionRate = `User satisfaction rate is: ${rateValue}`;
      setUserRate(satisfactionRate);
    }
    
  }, [rateValue]);

  const getDeviceTimeAndDate= () => {
    const now = new Date();

    const date = now.toLocaleDateString(); 
    const time = now.toLocaleTimeString(); 

    setDate(date);
    setTime(time);


}

  const handleSubmit = async () => {
    getDeviceTimeAndDate();
    await storeData();
    setQuestionSix('');
  };

const storeData = async () => {

const userId = '214102J';

try {

const response = await axiosInstance.post('/Feedback/add-feedback' , {

        userid: userId,
        satisfication:userRate,
        finterface: finterfaceValue,
        privacy: privacy,
        speed: speed,
        consumption: consumption,
        design: design,
        comment: questionSix,
        date:fDate,
        time:fTime

        
      });

      if (response.status === 201) {
        console.log('Data saved successfully');
        alert('Thank you for your Feedback!!')
      } else {
        console.log('Errorrrr');
      }
    } catch (error) {
      console.log('Error:', );
    }

  };


  useEffect( ()=>{
    const fetchData = async()=>{
      const userid='214102J';

      
      try{
        const getResponse = await axiosInstance.get('/Feedback/getAll-feedback'); 
        setData(getResponse.data);
        console.log(data);
      }
      catch(error){
        console.log(error);
      }
    };
    fetchData();
  },[])

  return (
    <View contentContainerStyle={styles.container}>
      <ScrollView>
        <HeaderSub
          headLine={'Feedback'}
          subHeadLine={'Feel free to drop us your feedback.'}

          back = 'HomeScreen'
        />

        <Text style={styles.question1}>
          How satisfied are you overall with the support of our mental health application?
        </Text>

        <SplitButton rateFunction={setRateValue} />

        <QuestionButton qtext="1. Is the user interface intuitive and easy to navigate?" btnFunction={setQone} />
        <QuestionButton qtext="2. Are there any privacy settings or permissions that seem excessive or insufficient?" btnFunction={setQtwo} />
        <QuestionButton qtext="3. Is the app slow to load or respond?" btnFunction={setQthree} />
        <QuestionButton qtext="4. Does it consume excessive battery or data?" btnFunction={setQfour} />
        <QuestionButton qtext="5. Are there any elements of the design that are confusing or difficult to use?" btnFunction={setQfive} />

        <TextInput
          style={styles.textarea}
          multiline={true}
          numberOfLines={4}
          value={questionSix}
          onChangeText={(text) => setQuestionSix(text)}
          placeholder="Please tell us your reasons for giving this score here..."
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Send Feedback</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Feedback;
