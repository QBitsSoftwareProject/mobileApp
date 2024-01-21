import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'
import styles from './styles';
import TimeSlot from './TimeSlot/TimeSlot';

const SelectionBars = (props) => {
    const [isChecked, setIsChecked] = useState(false)
    const [timeSlotVisibility, setTimeSlotVisibility] = useState(false)
    const [count, setCount] = useState(1)

    const handleCheck = () => {
        setIsChecked((prevChecked) => {
          setTimeSlotVisibility(!prevChecked);
          return !prevChecked;
        });
        setCount(1)
      };
      
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headText}>{props.headLine}</Text>
        <CheckBox  
            checked={isChecked} 
            onPress={handleCheck} 
            uncheckedColor='#5C677D'
            checkedColor='#4ABFB4'
            size={30}
            containerStyle={{padding:0, margin:0,backgroundColor:'transparent', }}
            
        />
      </View>
      {timeSlotVisibility && props.timeSlotVisible && (
        <View style={styles.timeSlotContainer}>
            {[...Array(count)].map((_, index) => (
            <TimeSlot key={index} setCount={setCount} slotNumber={count}/>
          ))}
        </View>
      )}
    </View>
  )
}

export default SelectionBars