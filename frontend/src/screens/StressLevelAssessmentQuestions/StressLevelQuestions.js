import React, { useState, useEffect } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import RadioButton from './optionfetch';
import { useNavigation } from '@react-navigation/native';
import DisplayResultScreen from '../ResultScreen/displayResult';
import TabBar from "../../components/TabBar/TabBar";
import { getMark } from "../ResultScreen/getStressLevel";
import { submitToDatabase } from "./sendMarkToDB.js";
import axiosInstance from "../../api/axios.js";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import { ProgressBar } from 'react-native-paper';

import axios from "axios";

const Question = () => {
  const [options, setOptions] = useState([]);
  const [ids, setIds] = useState([]);
  const [question, setQuestion] = useState('');
  const [id, setId] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [mark,setMark] = useState('');
  const [submit, setSubmit] = useState(false);
  const [stressLevel , setStressLevel] = useState('');

  // get Ids of questions
  
  useEffect(() => {
    const fetchQuestionIds = async () => {
      try {
        const response = await axiosInstance.get('/question/get-all-question-ids');
        // console.log(response.data);
        setIds(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestionIds();
  }, []);


  // get current qiestion id

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        
        const currentId = ids[currentQuestionIndex]._id;
        setId(currentId);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestions();
  }, [currentQuestionIndex, ids]);


  // get data relevent to the  question / (fetch by id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/question/get-question/${id}`);
        console.log(response.data);
        setQuestion(response.data);
        const optionTexts = response.data.options.map(option => option.OptionText);
        setOptions(optionTexts);
        const optionMarks = response.data.options.map(option => option.OptionMark);
        setMark(optionMarks);
      } catch (err) {
        console.log(err);
      }
     finally {
      setIsLoading(false);
    }
    };
    fetchData();

  }, [id]);


  // to store marks to get final mark

  const marks = [];
  const [allMarks, setAllMarks] = useState([]);

  
 

  const handleNextQuestion = () => {
    if (selectedOption) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null); // Reset selected option when moving to the next question
      setIsLoadingImage(true);

      //to get the mark of selected option
      const selectedOptionIndex = options.indexOf(selectedOption);
      const selectedOptionMark = mark[selectedOptionIndex];

      //to reset the array when came back to 1 question
      if(currentQuestionIndex === 0){
        allMarks.length = 0;
      }


      // console.log(selectedOptionMark);
      marks.push(selectedOptionMark);
      setAllMarks((prevAllMarks) => [...prevAllMarks, selectedOptionMark]);

      
      console.log(currentQuestionIndex);

      


      setTimeout(() => {
        setIsLoadingImage(false);
      }, 500); // Delay for one second (500 milliseconds)
    }
  };

  useEffect(() => {
    if(currentQuestionIndex >= ids.length ){
      setSubmit(true);
}
    console.log("All marks:", allMarks); // Log updated marks array
  }, [allMarks]);

  useEffect(() => {
    if(currentQuestionIndex + 1 !== ids.length ){
      setSubmit(true);
      }
    else{
      setSubmit(false);
    }
  }, [currentQuestionIndex ,ids.length]);

  


  

  
  const navigation = useNavigation();

  const id1 = '214012H';

  const handleSubmitButton = () => {
    if (selectedOption) {
      
      //to get the mark of selected option
      const selectedOptionIndex = options.indexOf(selectedOption);
      const selectedOptionMark = mark[selectedOptionIndex];
      // console.log(selectedOptionMark);
      marks.push(selectedOptionMark);
      setAllMarks((prevAllMarks) => [...prevAllMarks, selectedOptionMark]);
      
      
      console.log(currentQuestionIndex);

      const totMark = getMark(allMarks) + selectedOptionMark;
      
       console.log('tot mark is',totMark);
       setStressLevel(totMark);

       submitToDatabase(totMark, id1);

       Index = 0;
      
      navigation.navigate('DisplayResultScreen', {
        stresslevel: [totMark],
        userId: id1
      });

       
    }
  };

  const progress = ((currentQuestionIndex + 1) / ids.length);
  

  const handleBackButton = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setIsLoadingImage(true);
      allMarks.pop();
      console.log

      setTimeout(() => {
        setIsLoadingImage(false);
      }, 500); // Delay for one second (500 milliseconds)
    }

  };

  return (
    <SafeAreaView>
      
      <TouchableOpacity onPress={handleBackButton}>
        <Image source={require("../../assets/images/back.png")} style={{ width: 53, height: 53, marginLeft: 25 }} />
      </TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator size="large" color="#4ABFB4" style={{ marginTop: 40 }} />
      ) : (
        
        <>
          <ProgressBar progress={((currentQuestionIndex + 1) / 11)} color="#4ABFB4" style={{ marginTop: 32, width:375, alignSelf: "center", backgroundColor:"white" , height:10 , borderRadius:15}} />
          {question && question.question && (
            <>
              <Text style={styles.quesnum}>Question {currentQuestionIndex + 1} of {ids.length}</Text>
              <Text style={styles.quetext}>{question.question}</Text>
              
              {isLoadingImage ? (
                <ActivityIndicator size="large" color="#4ABFB4" style={{ marginTop: 89 , marginBottom: 88}} />
              ) : (
                <Image source={{ uri: question.imgurl }} style={{ width: 180, height: 180, marginTop: 33, alignSelf: "center" }}></Image>
              )}    
              </>
          )}
      
          <View style={{ margin: 15 }} >
            <RadioButton options={options} selectedOption={selectedOption} onSelect={setSelectedOption} selectedMark={mark} />
          </View>
        </>
      )}

      {submit ? (
        <TouchableOpacity style={styles.nextbtn} onPress={handleNextQuestion} disabled={!selectedOption}>
          <Text style={{ color: 'black', fontSize: 14, alignSelf: "center" }}>Next</Text>
        </TouchableOpacity>
      ) :(

        <TouchableOpacity style={styles.nextbtn} onPress={handleSubmitButton} disabled={!selectedOption}>
          <Text style={{ color: 'black', fontSize: 14, alignSelf: "center" }}>Submit</Text>
        </TouchableOpacity>

      )
      
      
      }

      

  
        
      
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  quesnum: {
    marginLeft: 22,
    marginTop: 15,
    color: "#4ABFB4",
    fontSize: 12,
  },

  quetext: {
    marginLeft: 22,
    marginTop: 20,
    color: "black",
    fontSize: 16,
  },

  nextbtn: {
    marginTop: 20,
    paddingVertical: 15,
    width: 144,
    height: 48,
    borderRadius: 20,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: '#4A90BF',
    backgroundColor: "white"
  }
});


export default Question;