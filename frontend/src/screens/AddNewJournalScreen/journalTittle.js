import React, { useState,useEffect,useRef } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, TextInput, StyleSheet ,Image,TouchableOpacity} from 'react-native';


export const JournalTittle = ({newText,value}) => {   //value is current tittle, newText is after changing the tittle

const route = useRoute();
const { itemID,itemTittle, itemText } = route.params;
const [inputTittle, setInputTittle] = useState(value || '');

  
useEffect(() => {
     
    setInputTittle(value || '');

}, [value]);

  // console.log(itemID);
  // console.log(itemTittle);
  // console.log(itemText);

const handleInputChange = (text) => {
    setInputTittle(text); // Update local state
    newText(text);  // Call the parent's onChangeText callback
};
  

return(
        
  <View style={styles.container}>
    
    <TextInput
          style={styles.input}
          placeholder="Feeling happy today... "
          multiline={true}
          value={inputTittle}
          onChangeText={handleInputChange}
          
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
      fontWeight:'200',
      
    
      
    },

    edit:{
      marginLeft:290,
      marginTop:-45
      
      
  
    }
  });
    