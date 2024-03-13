import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, TextInput, Text,StyleSheet, TouchableOpacity, Image } from 'react-native';

export const JournalEntry = () => {

  const route = useRoute();
  const { itemID, itemText } = route.params;

  // console.log(itemID);
  // console.log(itemText);

    const [inputJournal, setInputJournal] = useState(itemText);

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
          multiline={true}
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
      // marginTop:15,
      marginBottom:32,
      

      },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        
      },

    input: {
      height: 206,
      backgroundColor:'white',
      borderRadius:20,
      width: 360,
      lineHeight:20,
      paddingTop:22,
      paddingHorizontal:25,
      fontSize:13,
      fontWeight:'200'
      
    },

    button: {
        
        marginLeft: -51,
        marginTop:173
      },

      });