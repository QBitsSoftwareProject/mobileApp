import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Keyboard, KeyboardAvoidingView, } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../../components/InputField/InputField'

const DoctorRegScreen = () => {
    const navigation = useNavigation()
    const screenHeight = Dimensions.get('window').height;

    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNo, setContactNo] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [isEmpty, setIsEmpty] = useState(false)

    const [screenPadding, setScreenPadding] = useState(0)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          (event) => {
            setScreenPadding(200)
          }
          
        )
    
        const keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          () => {
            setScreenPadding(0)
          }
        )

        return () => {
          keyboardDidShowListener.remove()
          keyboardDidHideListener.remove()
        };
      }, []);
      
  
    const handleBackPress = ()=>{
        navigation.navigate('SelectionScreen')
        
    }

  
    const handleNext = ()=>{
      if(
        name.trim() === '' ||
        userName.trim() === '' ||
        email.trim() === '' ||
        contactNo.trim() === '' ||
        address.trim() === '' ||
        city.trim() === '' ||
        country.trim() === ''
      ){
        setIsEmpty(true)
      }
      else{
        setIsEmpty(false)
        navigation.navigate('DoctorRegScreen2')
       
      }

      
    }

    
  
    return (
      <View style={styles.conatiner}>
          <TouchableOpacity onPress={handleBackPress}>
              <Image source={require("../../../assets/images/backBlack.png")} style={{marginTop:55}}/>
          </TouchableOpacity>
  
          <View style={{maxHeight:screenHeight - 87, }}>

            <ScrollView contentContainerStyle={{paddingBottom:screenPadding}}>
              <View style={{alignItems:'left'}}>
                <Text style={styles.headerText}>Please fill the following form with correct details.</Text>
                <Text style={styles.subText}>Personal Information</Text>
                
                  <InputField placeHolder={'B.M. Weerasinghe'} label={'Full name / Name with initial :'} onChangeText={setName}/>
                  <InputField placeHolder={'Bimsara Madusha'} label={'User name :'} onChangeText={setUserName}/>
                  <InputField placeHolder={'ex@gmail.com'} label={'Email :'} onChangeText={setEmail}/>
                  <InputField placeHolder={'+9412345678'} label={'Contact No :'} onChangeText={setContactNo}/>
                  <InputField placeHolder={'67/1, welona place, kaubedda'} label={'Address :'} onChangeText={setAddress}/>
                  <InputField placeHolder={'Moratuwa'} label={'City :'} onChangeText={setCity}/>
                  <InputField placeHolder={'Ex_Sri Lanka'} label={'Country :'} onChangeText={setCountry}/>
  
              </View>
  
              {isEmpty && (
                 <View style={{alignItems:'center',marginTop:15}}>
                    <Text style={{color:'#E82519'}}>Input fields cannot be empty!</Text>
                </View>
              )}
  
              <View style={{marginVertical:32, alignItems:'center'}}>
                <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
                  <Text style={styles.nextText}>Next</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          
          </View>
      </View>
    )
  }

export default DoctorRegScreen