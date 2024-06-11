import React, { useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView,Button} from 'react-native';

export const CustomAnalysisButton = (props) =>{
   
    
    return(


        <View style={styles.mainButton}>

            {/*move to create journal page */}
            
            <View style={styles.analysisButton}>
            <TouchableOpacity onPress={props.analysisButton}
      
            style={[styles.analysisButton,{ backgroundColor: '#5296C5' }]}>

            <Text style={styles.buttonText1}>Analysis</Text>
            </TouchableOpacity>
            </View>

            
            
            {/*move to view journal page */}
            <View style={styles.veiwButton}>
            <TouchableOpacity onPress={props.btnAnalysis}

            
            
            style={[styles.veiwButton,{ backgroundColor:'white'}]}>
            <Text style={styles.buttonText2}>View</Text>

           </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    mainButton:{
        flexDirection:'row',
        backgroundColor: 'white',
        height:40,
        width:226,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        
        
        
        
        
       
    },
    veiwButton:{
        flex: 1,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        alignItems: 'center',
        justifyContent:'center',
        width:112,
        height:40

    },
    analysisButton:{
        flex: 1,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        alignItems: 'center',
        justifyContent:'center',
        width:112,
        height:40
    },

   
      buttonText1: {
        fontSize: 14,
        fontWeight: '500',
        textAlign:'center',
        color:'white'
      },

      buttonText2: {
        fontSize: 14,
        fontWeight: '500',
        textAlign:'center',
        color:'#5C677D'
      },


});
