import { TouchableOpacity, View, Text} from 'react-native'
import React from 'react'
import styles from '../../screens/MakeAppointment/styles'

const TimeButton = (props) => { 
const handleTimePress = ()=>{
  //pass
}

    return(

    <TouchableOpacity onPress={() => handleTimePress(props.time)}>
      <View style={styles.Tbutton}>
      <Text style={styles.time}>{props.time}</Text>
      </View> 
    </TouchableOpacity> 
    )
  } 

export default TimeButton