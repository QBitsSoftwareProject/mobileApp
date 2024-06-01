import { StyleSheet, TouchableOpacity, View, Text} from 'react-native'
import React, { useState } from 'react'

const TimeButton = (props) => { 
  const [pressButton, setPressButton] = useState(false);
  const [ key, setKey ] = useState('');

const handleTimePress = ()=>{
  if(!props.change) {
    setPressButton(true);
    props.press(true)
    setKey(props.indexKey)

    props.getTime(props.time)
    // console.log(props.indexKey)

  }else if(props.indexKey===key){
    setPressButton(false)
    props.press(false)
    setKey('')

    props.getTime(null)
  }
  
 
}

    return (

    <TouchableOpacity onPress={handleTimePress}>
      <View style={[styles.Tbutton, {backgroundColor: pressButton===true ? '#4A90BF': 'transparent'}]} >
          <Text style={[styles.time, {color: pressButton===true ? '#fff': '#4A90BF'}]}>
            {props.time}
          </Text>
      </View> 
    </TouchableOpacity> 
    )
  } 

const styles = StyleSheet.create ({
  Tbutton: {
    width:100,
    height:30,
    borderColor:'#4A90BF',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'transparent', 
    marginVertical:8,
    marginHorizontal:7,
   
  },
  time: {
    color: '#4A90BF', 
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical:5
  },
}) 

export default TimeButton