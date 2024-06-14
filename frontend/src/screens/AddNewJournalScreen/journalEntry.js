import React, { useState,useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, TextInput, Text,StyleSheet, TouchableOpacity, Image } from 'react-native';

export const JournalEntry = ({newText,value}) => {  //value is current entry and newText is after changing the entry

const route = useRoute();
const { itemID = '', itemText = '' } = route.params ||{};

//itemID, itemText

  // console.log(itemID);
  // console.log(itemText);

const [inputJournal, setInputJournal] = useState(value || '');

useEffect(() => {
     
  setInputJournal(value || '');

}, [value]);

    // console.log(inputJournal);
    // console.log(value);

const handleInputChange = (text) => {
      setInputJournal(text); // Update local state
      newText(text);  // Call the parent's onChangeText callback
    };

  
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
          onChangeText={handleInputChange}

         />

         {/* <Text style={styles.time}>date</Text> */}
        
       
        
        
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
      fontWeight:'200',
      
      
    },

    button: {
        
        marginLeft: -51,
        marginTop:173
      },

      // time:{
      //   backgroundColor:'yellow',
      //   flex:1,
      //   marginTop:170,
      //   marginRight:25
      
        

      // }

      });