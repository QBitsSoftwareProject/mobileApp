import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'

const TimeSlot = (props) => {
    const [countVal, setCountVal] = useState(props.slotNumber);
    const [isPlusVisible, setIsPlusVisible] = useState(true);

    const handlePlus = ()=>{
        props.setCount((prevCount) => prevCount + 1);
        setIsPlusVisible(false);
        
    }
    
  return (
    
        <View style={styles.timeBox}>

            <Text style={styles.timeText}>Time slot - {countVal}  :</Text>

            <View style={styles.inputBox}>
                <TextInput placeholder='6.30PM' style={styles.timeInput}/>
                <Text style={styles.timeText}>-</Text>
                <TextInput placeholder='7.00PM' style={styles.timeInput}/>
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
      
    
  )
}

export default TimeSlot