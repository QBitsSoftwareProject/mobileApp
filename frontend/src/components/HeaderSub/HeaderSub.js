import { View, Text, Image, Touchable, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { useNavigation } from '@react-navigation/core'

const HeaderSub = (props) => {
  const navigation = useNavigation();

  const handleBackPress = async () => {
    try {
      if (!props.userID) {
        // navigation.navigate(props.back)
        console.log(props.back);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 100)); // Example delay
        navigation.navigate(props.back, {
          userId: props.userID
        });
        console.log(props.userID); // Access props.userID instead of userID
      }
    } catch (error) {
      console.error('Error:', error); // Handle the error here, e.g., show a warning message
    }
  }



  return (
    
      <View style={styles.contains} >
        <ImageBackground source={require("../../assets/images/blueSqures.png")} style={styles.backImg}>


            <TouchableOpacity style={styles.backBtn} onPress={handleBackPress}> 
                <Image source={require(('../../assets/images/BackWhite.png'))}/>
            </TouchableOpacity>
            
            <Text style={styles.headlineTxt}>{props.headLine}</Text>
            <Text style={styles.subHeadlineTxt}>{props.subHeadLine}</Text>

        </ImageBackground>
      </View>
   
  )
}

export default HeaderSub