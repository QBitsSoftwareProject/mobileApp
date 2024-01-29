import React, { useState } from 'react';
import { View, TextInput, StyleSheet ,Image,TouchableOpacity} from 'react-native';


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
        
        <View style={styles.edit}>
            <Image source ={require('../../assets/images/journal/title.png')}/>
          
        </View>

        
        
        
      </View>
      
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      color:'white',
      marginBottom:32,
      // marginTop:15,
      // backgroundColor:'red'

      
    },
    input: {
      height: 69,
      backgroundColor:'white',
      borderRadius:20,
      paddingLeft:25,
      width: 344,
      
    
      
    },

    edit:{
      marginLeft:290,
      marginTop:-45
      
      
  
    }
  });
    