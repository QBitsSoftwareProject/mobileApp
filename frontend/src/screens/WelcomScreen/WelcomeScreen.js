import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'

const quotes = [
    "Remember, your mental health matters take a moment to breathe, reflect, and prioritize your inner peace.",
    "In the journey of life, your mental well-being is the compass. Take a moment to recalibrate, reflect, and cherish your inner peace.",
    "Welcome to a space where your mental health takes center stage. Breathe deeply, reflect mindfully, and let tranquility guide your path.",
]

const WelcomeScreen = () => {
    const frameWidth = Dimensions.get("window").width * 0.8
    const frameHeight = Dimensions.get("window").height * 0.8

    const navigation = useNavigation();

    const handleLogin = ()=>{
        navigation.navigate("LoginScreen");
    }
    const handleGuest = ()=>{
        navigation.navigate('TabBar')
    }
    const handleSingUp = ()=>{
        navigation.navigate('SelectionScreen')
    }

  return (
    <LinearGradient colors={['#49B1F7', '#00453E']} style={{flex:1}}>
        <Image source={require('../../assets/images/bgSquare.png')} style={styles.bgImage}/>
        
        <View style={styles.container}>
            <View style={[styles.logoFrame, {height:frameHeight, width:frameWidth}]}>
                <Text style={styles.logoText}>LOGO</Text>
            </View>

            <Text style={styles.headText}>Make a better mindset</Text>

            <View style={{height:250}}>
                <Swiper style={styles.wrapper} showsButtons={false} paginationStyle={styles.pagination} dotColor='white'>

                    {quotes.map((quote, index)=>(
                        <View key={index} style={styles.slideBox}>
                            <Text style={styles.quoteText}>{quote}</Text>
                        </View>
                    ))}
                </Swiper>
            </View>

            <View style={styles.btnBox}>
                <TouchableOpacity style={[styles.btn, {backgroundColor:'#45B4FF'}]} onPress={handleSingUp}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn, {backgroundColor:'#4ABFB4'}]} onPress={handleLogin}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity onPress={handleGuest}>
                <Text style={styles.guestText}>Use as a guest</Text>
            </TouchableOpacity>

            <Text style={styles.bottomText}>Please use an earphone</Text>
            
        </View>
    </LinearGradient>
  
  )
}

export default WelcomeScreen