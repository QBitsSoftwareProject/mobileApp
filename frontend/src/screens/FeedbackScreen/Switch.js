import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Switch, TouchableOpacity, ScrollView } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'

export const QuestionButton =({qtext,qvalue})=> {
    
    const [on, setOn] = useState(false);
    const [value, setValue] = useState(0);

 
return(
<View style={styles.questionSection}> 

<View style={styles.left}>

<Text style={styles.label}>
  {qtext}
  {/* {value} */}
  </Text>

  </View >
  
<View style={styles.switchContainer}>
<ToggleSwitch
  isOn={on}
  onColor="#4ABFB4"
  offColor="#979DAC"
  labelStyle={{ color: 'black', fontWeight: '900' }}
  size="medium"
  onToggle={(isOn) => {

    setOn(isOn);
    console.log(isOn);
    if (isOn) {
      setValue(qvalue);
      
    } else {
      setValue(0);

    }

    }}
/>
</View>

</View>

)};


const styles = StyleSheet.create({

  

    switchContainer: {
      
       marginLeft:-10,
       paddingRight:35,
       
    },
    
    questionSection: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15,
  
    },
  
    left: {
        width:300,
    },

    label: {
        lineHeight:25,
        marginLeft:25,
        fontSize:14
    }

})

