import React, { useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView,Button} from 'react-native';

export const AnalysisSwitch = (props) =>{

    return(


        <TouchableOpacity onPress={props.btnAnalysis}
      
        style={[styles.analysisButton,{ backgroundColor: 'white' }]}>
    
        <Text style={styles.buttonText1}>My Journals</Text>
        </TouchableOpacity>
    
    )

 
}

const styles = StyleSheet.create({
    analysisButton:{
        borderRadius:75,
        width:255,
        height:58,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderColor:'#7D8597',
        borderWidth:2
        
    },

    buttonText1:{
        fontSize:16,
        color:'#101318',
        fontWeight:'400',

    },

})
