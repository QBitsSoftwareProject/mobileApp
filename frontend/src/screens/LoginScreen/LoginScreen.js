import { View, Text, Image, TextInput, TouchableOpacity, Keyboard, } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { userLogin } from '../../services/userServices/userService'

const userEmail='nethsarawmrc@gmail.com'
const userPassword='123'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(true)
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    const navigation = useNavigation()

    const handleBackPress = ()=>{
        navigation.navigate('WelcomeScreen')
    }
    const handleLoginPress = async ()=>{
        try{
            const userData = await userLogin(email, password);
            
            if (userData) {
                setIsValid(true)
                navigation.navigate('TabBar');
            }

        }catch(err){
            console.log(err)
            setIsValid(false)
        }
        
    }
    const handleSignUp = ()=>{
        navigation.navigate('SelectionScreen')
    }

    // keyboard handling -----------------------------------------------------------------------------
    

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',() => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',() => {
          setKeyboardVisible(false);
        }
      );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
    }, []);


  return (
    <View style={styles.container}>

        <TouchableOpacity onPress={handleBackPress}>
            <Image source={require("../../assets/images/backBlack.png")} style={{marginTop:55}}/>
        </TouchableOpacity>
       

       <View style={styles.contains}>
            <Image source={require("../../assets/images/login.png")} style={{marginTop:64}}/>

            <View style={{marginTop:64}}>
                {!isValid && (
                    <View style={{alignItems:'center',marginBottom:15}}>
                        <Text style={{color:'#E82519'}}>User name or password is incorrect</Text>
                    </View>
                    
                )}
                
                <TextInput placeholder='Email' style={styles.inputField} onChangeText={(text)=> setEmail(text)}/>
                <TextInput placeholder='Password' style={styles.inputField} onChangeText={(text)=> setPassword(text)}/>
            </View>
            
            <TouchableOpacity style={styles.loginBtn} onPress={handleLoginPress}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            {!isKeyboardVisible && (
                <View style={styles.bottomBox}>
                    <TouchableOpacity style={{padding:10}} onPress={handleSignUp}>
                        <Text style={styles.bottomText}>Sign Up</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{padding:10}}>
                        <Text style={styles.bottomText}>Need a Help?</Text>
                    </TouchableOpacity>
                </View>
            )}
            
        </View>
    </View>
  )
}

export default LoginScreen