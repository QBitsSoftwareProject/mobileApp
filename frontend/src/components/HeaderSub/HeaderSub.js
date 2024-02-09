import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';


const HeaderSub = (props) => {
  const navigation=useNavigation();
  
  const goBack = () => {
    navigation.navigate(props.backarrow)
  };
  
  return (
    
      <View style={styles.contains} >
        <ImageBackground source={require("../../assets/images/blueSqures.png")} style={styles.backImg}>

            <TouchableOpacity style={styles.backBtn} onPress={goBack}> 
                <Image source={require(('../../assets/images/BackWhite.png'))}/>
            </TouchableOpacity>
            
            <Text style={styles.headlineTxt}>{props.headLine}</Text>
            <Text style={styles.subHeadlineTxt}>{props.subHeadLine}</Text>

        </ImageBackground>
      </View>
   
  )
}

export default HeaderSub