import { StyleSheet, TouchableOpacity, View, Text} from 'react-native'
import React from 'react'

const TimeButton = (props) => { 

const handleTimePress = ()=>{
  //pass
}

    return (

    <TouchableOpacity onPress={() => handleTimePress(props.time)}>
      <View style={styles.Tbutton}>
          <Text style={styles.time}>{props.time}</Text>
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