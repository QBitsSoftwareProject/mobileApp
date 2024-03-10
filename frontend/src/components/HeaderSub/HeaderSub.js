import { View, Text, Image, Touchable, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'

const HeaderSub = (props) => {
  return (
    
      <View style={styles.contains} >
        <ImageBackground source={require("../../assets/images/blueSqures.png")} style={styles.backImg}>

            <TouchableOpacity style={styles.backBtn}> 
                <Image source={require(('../../assets/images/BackWhite.png'))}/>
            </TouchableOpacity>
            
            <Text style={styles.headlineTxt}>{props.headLine}</Text>
            <Text style={styles.subHeadlineTxt}>{props.subHeadLine}</Text>

        </ImageBackground>
      </View>
   
  )
}



export default HeaderSub