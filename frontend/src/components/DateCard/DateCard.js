import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native'
import { useState } from 'react'
import React from 'react'


const DateCard = (props) => { 

  const [pressDateCard, setPressDateCard] = useState(false);
  const [cardKey, setCardKey] = useState('');

  const handleDatePress = ()=>{
    if(!props.change) {
      setPressDateCard(true);
      props.press(true)
      setCardKey(props.indexKey)

      props.getDate(props.date)
  
    }else if(props.indexKey===cardKey){
      setPressDateCard(false)
      props.press(false)
      setCardKey('')

      props.getDate(null)
    }
  }
  
	
    return( 
        <ScrollView style={[styles.cardBox, {borderRadius:20,borderWidth:pressDateCard===true ? 1 : 0}]}>
          <TouchableOpacity onPress={() => handleDatePress(props.date)}>
            <View >
              <Text style={styles.date}>{props.date}</Text>
              <Text style={styles.date}>{props.month}</Text>
            </View>
          </TouchableOpacity> 
        </ScrollView>
    ) 
  }

const styles = StyleSheet.create ({
    cardBox: {
      width:40,
      height:85,
      marginHorizontal:8,
      backgroundColor:"white",
      borderColor:'#4A90BF',
      borderRadius:20,
      elevation:1,
     
    },
    
    date: {
      marginHorizontal:8,
      marginVertical:15,
      textAlign:'center',
      fontSize:12,
      fontWeight:'bold',
      color: '#7D8597',
      lineHeight:15
    },  

  }
)

export default DateCard