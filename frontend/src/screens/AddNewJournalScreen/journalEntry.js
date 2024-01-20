import React, { useState } from 'react';
import { View, TextInput, Text,StyleSheet, TouchableOpacity, Image } from 'react-native';

export const JournalEntry = () => {
    const [inputJournal, setInputJournal] = useState('');

    const handleButtonPress = () => {
        // Handle button press logic here
        console.log('Button pressed!');
      };

    return(

        <View style={styles.container}>
            <View style ={styles.inputContainer}>
        <TextInput
          style={styles.input}
          
          placeholder="I have a happy day today.                                                       
          At school..,my class teacher give me a gift.. "
          textAlign='left'
          textAlignVertical='top'
         
          value={inputJournal}
          onChangeText={(text) => setInputJournal(text)}

         />
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Image source ={require('../../assets/images/journal/camera.png')}/>
          
        </TouchableOpacity>
        
        
      </View>
      </View>
      
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      color:'white',
      marginTop:15,
      marginBottom:32

      },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
      },

    input: {
      height: 206,
      backgroundColor:'white',
      borderRadius:20,
      width: 344,
      paddingLeft:25,
      paddingTop:22,
      
    },

    button: {
        
        marginLeft: -51,
        marginTop:173
      },

      });