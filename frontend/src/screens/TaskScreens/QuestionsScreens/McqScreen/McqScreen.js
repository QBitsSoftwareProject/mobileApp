import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, TextInput,} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import AnswerBtns from '../../../../components/AnswerBtns/AnswerBtns'
import ProgressBar from '../../../../components/ProgressBar/ProgressBar'


// Array of questions with their IDs, questions, and types
const questions = [
    { id:1, question:"How long you realized you are stressed ?", type:'mcq'},
    { id:2, question:"How long you realized you are stressed ?", type:'mcq'},
    { id:3, question:"Who is the most important person to you that you'd like to spend time with right now?", type:'input'},
    { id:4, question:"How long you realized you are stressed ?", type:'mcq'},
    { id:5, question:"Who is the most important person to you that you'd like to spend time with right now?", type:'input'},
    

] 

// Button options for different questions
const buttons = {
    1: [
        { id: 1, text: 'About a week' },
        { id: 2, text: 'About a month' },
        { id: 3, text: 'More than month' },
        { id: 4, text: 'Not sure' },
    ],
    2: [
        { id: 1, text: 'About a week' },
        { id: 2, text: 'About a month' },
        { id: 3, text: 'More than month' },
        { id: 4, text: 'Not sure' },
    ],
    4: [
        { id: 1, text: 'About a week' },
        { id: 2, text: 'About a month' },
        { id: 3, text: 'More than month' },
        { id: 4, text: 'Not sure' },
    ],
};


const McqScreen = ({navigation}) => {
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
    const [qNumber,setQNumber] = useState(1)
  
    // Handler for selecting answer buttons
    const pressHandlerBtns = (btnId) => {
        setSelectedButtonIndex(btnId)
    }

    // Handler for moving to the next question
    const pressHandlerNext = () => {
        if (qNumber < questions.length) {
            if (selectedButtonIndex !== null || currentQuestion.type !== 'mcq') {
                setQNumber((prevQNumber) => prevQNumber + 1);
                setSelectedButtonIndex(null);
            }
        }else{
            navigation.navigate('TaskListScreen')// Navigating to the task list screen when all questions are answered
        }
    };

    // Handler for going back to the previous question or screen
    const backHandler = () => {
        if (qNumber > 1) {
            setQNumber((prevQNumber) => prevQNumber - 1);
            setSelectedButtonIndex(null); 
        } else {
            navigation.navigate('WelcomeScreen');// Navigating back to the welcome screen
        }
    };

    // Finding the current question based on the question number
    const currentQuestion = questions.find(question => question.id === qNumber);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#F2F3F5'}}>
        
        <View style={{marginLeft:25,marginRight:25,}}>

            <TouchableOpacity style={styles.backbtn} onPress={backHandler}>
                <Image source={require('../../../../assets/images/backBlack.png')}/>
            </TouchableOpacity>

            <ProgressBar qNumber={qNumber} length={questions.length}/>

            <FlatList data={questions.filter(question => question.id===qNumber)} renderItem={({ item }) => (
                    <Text style={styles.question}>{item.question}</Text>
                )}
                keyExtractor={(item) => item.id.toString()} 
            />


            {/* answers list--------------------------------------------------------------------------------------- */}
            <ScrollView >
                <View style={{paddingBottom:393}}>
            
                    <View style={{marginTop:32}}>

                    {currentQuestion && currentQuestion.type === 'mcq'  && (
                        buttons[qNumber].map((button, index) => (
                            <AnswerBtns
                                key={button.id}
                                button={button}
                                index={index}
                                active={selectedButtonIndex}
                                onPress={pressHandlerBtns}
                            />
                        ))
                    )}

                    {currentQuestion && currentQuestion.type === 'input' && (
                        <TextInput placeholder='Input your text here' style={styles.inputBox}/>
                    )}
                                  
                    </View>

                    
            {/* next btn-------------------------------------------------------------------------------------------- */}
                    <View style={{flex:1,flexDirection:'row',marginTop:70,justifyContent:'center'}}>

                        <TouchableOpacity style={styles.nextBtn} onPress={pressHandlerNext}>
                            <Text style={styles.nextBtnTxt}>Next</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </View>
        
    </SafeAreaView>
  )
}

export default McqScreen

