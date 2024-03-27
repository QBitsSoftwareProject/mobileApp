import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, KeyboardAvoidingView, } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../../components/InputField/InputField'
import { CheckBox } from 'react-native-elements';
import { userRegistration } from '../../../services/userServices/userService'


const UserRegScreen = () => {
  const navigation = useNavigation()

  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const [unCheckedColor, setUnCheckedColor] = useState('#5C677D');

  const [isEmpty, setIsEmpty] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneNumValid, setIsPhoneNumValid] = useState(true);
  

  const screenHeight = Dimensions.get('window').height;

  const handleBackPress = ()=>{
      navigation.navigate('SelectionScreen')
  }

  const handleCancel = ()=>{
    navigation.navigate('WelcomeScreen')
  }


  //regular exprestion check for email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //regular exprestion check for phone number
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+\d{11}$/;
    return phoneRegex.test(phoneNumber);
  };


  const handleSubmit = ()=>{

    //form validation
    if(
      name.trim() === '' ||
      userName.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      contactNo.trim() === '' ||
      address.trim() === '' ||
      city.trim() === '' ||
      country.trim() === ''
    ){
      setIsEmpty(true)

    }else if(!isChecked){
      setUnCheckedColor('#E82519')
      setIsEmpty(false)

    }else if(!validateEmail(email)){
      setIsEmailValid(false)
      setIsEmpty(false)
    }
    else if(!validatePhoneNumber(contactNo)){
      setIsPhoneNumValid(false)
      setIsEmailValid(true)
      setIsEmpty(false)
    }
    else{
      sendUser();
      setIsEmpty(false)
    }
  }

  const sendUser = async ()=>{
    try {
      const userData = await userRegistration(name, userName, email, password, contactNo, address, city, country)

      if(userData!=null){
        navigation.navigate("LoginScreen")
      }
      
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <View style={styles.conatiner}>
        <TouchableOpacity onPress={handleBackPress}>
            <Image source={require("../../../assets/images/backBlack.png")} style={{marginTop:55}}/>
        </TouchableOpacity>

        <View style={{maxHeight:screenHeight - 87}}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <ScrollView >
            <View style={{alignItems:'left'}}>
              <Text style={styles.headerText}>Please fill the following form with correct details.</Text>
              
                <InputField placeHolder={'B.M. Weerasinghe'} label={'Full name / Name with initial :'} onChangeText={setName}/>
                <InputField placeHolder={'Bimsara Madusha'} label={'User name :'} onChangeText={setUserName}/>         
                <InputField placeHolder={'ex@gmail.com'} label={'Email :'} onChangeText={setEmail} errMsg={!isEmailValid ? 'Email is not valid!':''}/>
                <InputField placeHolder={'Enter a new password'} label={'Password :'} onChangeText={setPassword}/> 
 
                <InputField placeHolder={'+9412345678'} label={'Contact No :'} onChangeText={setContactNo} errMsg={!isPhoneNumValid ? 'Phone number is not valid!':''}/>
                <InputField placeHolder={'67/1, welona place, kaubedda'} label={'Address :'} onChangeText={setAddress}/>
                <InputField placeHolder={'Moratuwa'} label={'City :'} onChangeText={setCity}/>
                <InputField placeHolder={'Ex_Sri Lanka'} label={'Country :'} onChangeText={setCountry} searchBox={true} query={country}/>

            </View>

            <View style={{marginBottom:32}}>
              <Text style={styles.privacyText}>Privacy and Policies</Text>

              <TouchableOpacity>
                <Text style={styles.privacyLink}>Click here to view our Privacy Policy for more information.</Text>
              </TouchableOpacity>
            </View>

            <View>
              <CheckBox  
                checked={isChecked} 
                onPress={() => setIsChecked(!isChecked)} 
                uncheckedColor={unCheckedColor}
                checkedColor='#4ABFB4'
                size={25}
                containerStyle={{padding:0, margin:0,backgroundColor:'transparent', }}
                title={'I acknowledge that I have read, understood, and agree to abide by the this app Privacy Policy and Terms of Service.'}
                textStyle={styles.agreemetnText}
               
              />
            </View>

            {isEmpty && (
               <View style={{alignItems:'center',marginTop:15}}>
                  <Text style={{color:'#E82519'}}>Input fields cannot be empty!</Text>
              </View>
            )}

            <View style={{marginVertical:32, alignItems:'center'}}>
              <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cancelBtn} onPress={handleCancel}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
         </KeyboardAvoidingView>
        </View>
    </View>
  )
}

export default UserRegScreen