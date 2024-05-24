import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const arrow = require('../../assets/images/HomeCards/arrow.png')

const HomeCard = (props) => {
  return (
    <TouchableOpacity style={styles.cardBox}>

        
            <View style={styles.container}>

                <View style={styles.frame}>
                    <Image source={props.image} style={styles.cardImg}/>
                </View>
                
                <View style={{maxWidth:185}}>
                    <Text style={styles.headText}>{props.headLine}</Text>
                    <Text style={styles.subText}>{props.subHeadLine}</Text>
                </View>
                

                <Image source={arrow}/>
            </View>

    </TouchableOpacity>
  )
}

export default HomeCard