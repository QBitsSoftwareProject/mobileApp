import { View, Text, Image, Touchable, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'

const HeaderSub = (props) => {
  return (

      <View style={styles.contains} >
        <ImageBackground source={require("../../assets/images/headerTop.png")} style={styles.backImg}>

            <View style={{flexdirection:'row',alignItems:'center', marginBottom:32}}>
                <Text style={styles.headlineTxt}>{props.headLine}</Text>
                <Text style={styles.subHeadlineTxt}>{props.subHeadLine}</Text>
            </View>

            <View style={{alignItems:'center'}}>
              <View style={styles.profileFrame}>
                  <Image source={props.proPic} style={styles.profileImage}/>
              </View>
            </View>

        </ImageBackground>
      </View>
  
   
  )
}

export default HeaderSub