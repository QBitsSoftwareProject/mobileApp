import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';


const HeaderSub = (props) => {

    const navigation = useNavigation();
    const backbtn = () =>{
        navigation.navigate('MonthAnalysisScreen')
    }

  
    return (
      
        <View style={styles.contains} >
   
  
            <TouchableOpacity onPress={backbtn} style={styles.backBtn}> 

                  <Image source={require('../../assets/images/Back.png')}/>

            </TouchableOpacity>
              
              <Text style={styles.headlineTxt}>{props.headLine}</Text>
              <Text style={styles.sublineTxt}>{props.subheadLine}</Text>

  
        
        </View>
     
    )
  }

  const styles = StyleSheet.create({
    contains:{
        height:240,
        backgroundColor:'#F2F3F5',
        color:'red',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
    },
    backBtn:{
        marginTop:50,
        marginLeft:25
    },
    headlineTxt:{
        fontWeight: '600',
        fontSize: 36,
        color: '#1E1E1E',
        marginTop:15,
        textAlign:'center',
        paddingLeft:50,
        paddingRight:50
        
    },
    sublineTxt:{
        fontSize:16,
        textAlign:'center',
        marginTop:5,
        color:'#979DAC',
        marginBottom:25
    }
   
    
    
})
  
  export default HeaderSub