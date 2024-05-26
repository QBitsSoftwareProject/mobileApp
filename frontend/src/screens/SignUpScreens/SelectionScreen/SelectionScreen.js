import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const SelectionScreen = () => {
    const navigation = useNavigation()

    const handleBackPress = ()=>{
        navigation.navigate('WelcomeScreen')
    }
    const handleUser = ()=>{
        navigation.navigate('UserRegScreen')
    }
    const handleDoctor = ()=>{
        navigation.navigate('DoctorRegScreen')
    }

  return (
    <View style={styles.conatiner}>
        <TouchableOpacity onPress={handleBackPress}>
            <Image source={require("../../../assets/images/backBlack.png")} style={{marginTop:55}}/>
        </TouchableOpacity>

        <View style={{alignItems:'center'}}>
            <Text style={styles.headerText}>Do you usually use this as a regular person or are you a doctor?</Text>
        
            <TouchableOpacity style={styles.selectBtn} onPress={handleUser}>
                <Text style={styles.btnText}>Regular Person</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.selectBtn} onPress={handleDoctor}>
                <Text style={styles.btnText}>Doctor</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

export default SelectionScreen