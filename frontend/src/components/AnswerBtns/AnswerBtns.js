import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const AnswerBtns = ({ button, index, active, onPress }) => {
  return (
    <TouchableOpacity key={button.id} style={[styles.answerBox, {backgroundColor: active===index? 'rgba(100,247,203,0.5 )': 'white'}]} onPress={() => onPress(index)}>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

            <Text style={styles.answerTxt}>{button.id}. {button.text}</Text>
            <View style={[styles.ellipse, {backgroundColor: active===index? '#4ABFB4': 'white',borderColor:active===index? '#4ABFB4': '#4ABFB4'}]}></View>

        </View>
    </TouchableOpacity>

    
  )
}


export default AnswerBtns