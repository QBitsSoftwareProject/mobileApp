import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'

const TimeSlot = (props) => {
    const [countVal, setCountVal] = useState(props.slotNumber);
    const [isPlusVisible, setIsPlusVisible] = useState(true);

    const [textInputValue1, setTextInputValue1] = useState('');
    const [textInputValue2, setTextInputValue2] = useState('');
    const [isEmpty, setIsEmpty] = useState(false)
    const [isTimeValid, setIsTimeValid] = useState(true)

    const validateTimeFormat = (time) => {
        const timePattern = /^(1[0-2]|0?[1-9])\.[0-5][0-9]\s?(AM|PM|am|pm)$/;

        return timePattern.test(time)
    }


    const handlePlus = ()=>{

        if(textInputValue1=='' || textInputValue2==''){
            setIsEmpty(true)

        }else if(!validateTimeFormat(textInputValue1) || !validateTimeFormat(textInputValue2)){
            setIsTimeValid(false) 
        }
        else{
            setIsEmpty(false)
            setIsTimeValid(true) 

            props.setCount((prevCount) => prevCount + 1);
            props.onChange([textInputValue1,textInputValue2])
            setIsPlusVisible(false);
        }
  
    }



  return (
    <View>
        {!isTimeValid && (
            <Text style={{color:'red', textAlign:'right', fontSize:12, marginBottom:3}}>Input format is not valid</Text>
        )}
        <View style={styles.timeBox}>

            <Text style={styles.timeText}>Time slot - {countVal}
            {isEmpty && (
                <Text style={{color:'red'}}> * </Text>
            )} 
            :</Text>

            <View style={styles.inputBox}>
                <TextInput 
                    placeholder='6.30PM' 
                    style={styles.timeInput} 
                    onChangeText={(text)=>{setTextInputValue1(text)}}
                    />
                <Text style={styles.timeText}>-</Text>
                <TextInput 
                    placeholder='7.00PM' 
                    style={styles.timeInput}
                    onChangeText={(text2)=>{setTextInputValue2(text2)}}
                    />
            </View>
            
            {isPlusVisible && (
                <TouchableOpacity onPress={handlePlus}>
                <Image source={require('../../../assets/images/plus.png')}/>
                </TouchableOpacity>
            )}
            {!isPlusVisible && (
                <View style={styles.hiddenImg}></View>
            )}

        </View>
        </View>
    
  )
}

export default TimeSlot