import React, { useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView,Button,Image} from 'react-native';


export const EditDeletebutton = (props) =>{

    return(
        <View style={styles.mainButton}>
            
        {/* EditeButton */}
        <View style={styles.editButton}>
        <TouchableOpacity onPress={props.btnEdit}
  
        style={[styles.editButton,{ backgroundColor: '#D9D9D9;' }]}>
            <Image
            source={require('../../assets/images/journal/edit.png')}></Image>

        
        </TouchableOpacity>
        </View>

        
        
        {/* viewButton */}
        <View style={styles.deleteButton}>
        <TouchableOpacity 
        
        style={[styles.deleteButton,{ backgroundColor:'#D9D9D9;'}]}>
            <Image
            source={require('../../assets/images/journal/delete.png')}></Image>
    

       </TouchableOpacity>
        </View>

    </View>
    )
        
}

const styles = StyleSheet.create({
    mainButton:{
        flexDirection:'column',
        backgroundColor: '#D9D9D9',
        height:127,
        width:64,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        alignSelf:'flex-end'
        
        
        
        
        
       
    },
    editButton:{
        flex: 1,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        alignItems: 'center',
        justifyContent:'center',
        width:64,
        height:63.5,
        marginBottom:-10

    },
    deleteButton:{
        flex: 1,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        alignItems: 'center',
        justifyContent:'center',
        width:64,
        height:63.5,
        marginTop:-10
    },

   
      


});