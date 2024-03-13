import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, TextInput, StyleSheet ,Image,TouchableOpacity} from 'react-native';


export const JournalTittle = () => {


  
 

  const route = useRoute();
  const { itemID,itemTittle, itemText } = route.params;

  const [inputTittle, setInputTittle] = useState(itemTittle);

  // console.log(itemID);
  // console.log(itemTittle);
  // console.log(itemText);
  

    return(
        <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Feeling happy today... "
          multiline={true}
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
      
      color:'white',
      marginBottom:32,
      // marginTop:15,
      

      
    },
    input: {
      height: 69,
      backgroundColor:'white',
      borderRadius:20,
      paddingLeft:25,
      width: 360,
      paddingHorizontal:35,
      lineHeight:20,
      fontSize:14,
      fontWeight:'200'
    
      
    },

    edit:{
      marginLeft:290,
      marginTop:-45
      
      
  
    }
  });
    