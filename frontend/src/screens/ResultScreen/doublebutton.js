import React, { useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView,Button} from 'react-native';

export const CustomButton = () =>{
   
    
    return(
        <View style={styles.mainButton}>
            <View style={styles.veiwButton}>
            <TouchableOpacity
      
            style={[styles.veiwButton,{ backgroundColor:'#4A90BF' }]}>

            
            <Text style={styles.buttonTextone}>Result</Text>
            </TouchableOpacity>
           </View>

            <View style={styles.createButton}>
                <TouchableOpacity
            
             
           

            
            style={[styles.createButton,{ backgroundColor:'white'}]}>
            <Text style={styles.buttonTexttwo}>Suggestions</Text>

           

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
        marginTop:32,
        
       
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
    createButton:{
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

   
      buttonTextone: {
        fontSize: 14,
        fontWeight: '500',
        textAlign:'center',
        color:'white'
      },

      buttonTexttwo: {
        fontSize: 14,
        fontWeight: '500',
        textAlign:'center',
      },


});