import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


export const JournalTittle = () => {
    const [inputTittle, setInputTittle] = useState('');

    return(
        <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Feeling happy today... "
          
          value={inputTittle}
          onChangeText={(text) => setInputTittle(text)}
        />
        
      </View>
      
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      color:'white',
      marginBottom:32

      
    },
    input: {
      height: 69,
      backgroundColor:'white',
      borderRadius:20,
      paddingLeft:25,
      width: 344,
      
    },
  });
    