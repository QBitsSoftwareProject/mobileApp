import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Switch, TouchableOpacity, ScrollView } from 'react-native';
import {SplitButton} from './ProgressBar';
import styles from './feedbackStyles';
import { QuestionButton } from './Switch';
import HeaderSub from '../../components/HeaderSub/HeaderSub';


const Feedback = () => {
  
  const [questionOne, setQuestionOne] = useState(true);
  const [questionTwo, setQuestionTwo] = useState(false);
  const [questionThree, setQuestionThree] = useState(false);
  const [questionFour, setQuestionFour] = useState(false);
  const [questionFive, setQuestionFive] = useState(false);
  const [questionSix, setQuestionSix] = useState("");


  const handleSubmit = () => {
    // send feedback to server or store locally
    console.log({
      satisfication,
      interface: interfaceValue,
      design,
      responsive,
      consumption,
      privacy,
      comments,
    });
  };

return (
    <View contentContainerStyle={styles.container}>
      <ScrollView>

      {/* <Text style={styles.title1}>Feedback</Text>
      <Text style={styles.subtitle}>
        Feel free to drop us your feedback.
      </Text> */}


      <HeaderSub
      headLine={'FeedBack'}
      subHeadLine={'Feel free to drop us your feedback.'}/>

      

      

      <Text style={styles.question1}>
        How satisfied are you overall with the support of our mental health application?
      </Text>

      <SplitButton></SplitButton>

        {/* question */}
        <QuestionButton qtext = "1. Is the user interface intuitive and easy to navigate?" qvalue={1}></QuestionButton>
        <QuestionButton qtext = "2. Are there any privacy settings or permissions that seem excessive or insufficient?" qvalue={2}></QuestionButton>
        <QuestionButton qtext = "3. Is the app slow to load or respond?" qvalue={3}></QuestionButton>
        <QuestionButton qtext = "4. Does it consume excessive battery or data?" qvalue={4}></QuestionButton>
        <QuestionButton qtext = "5.  Are there any elements of the design that are confusing or difficult to use?" qvalue={5}></QuestionButton>

        
        <TextInput
          style={styles.textarea}
          multiline={true}
          numberOfLines={4}
          value={questionSix}
          onChangeText={(text) => questionSix(text)}
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
}

export default Feedback;



