import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Keyboard} from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../../components/InputField/InputField'
import { CheckBox } from 'react-native-elements'
import FilePicker from '../../../components/GetImages/FilePicker'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doctorRegistration } from '../../../services/doctorServices/doctorService'

const DoctorRegScreen4 = () => {
    const navigation = useNavigation()
    const screenHeight = Dimensions.get('window').height;

    // State variables for managing screen padding, additional details, and form validation
    const [screenPadding, setScreenPadding] = useState(0)
    const [bio, setBio] = useState('')
    const [unCheckedColor, setUnCheckedColor] = useState('#5C677D');

    const [isEmpty, setIsEmpty] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [proPic, setProPic] = useState(null);

    // Effect for managing keyboard visibility
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
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        
        };
      }, []);

      // Handler for navigating back to the previous screen
      const handleBackPress = ()=>{
        navigation.navigate('DoctorRegScreen3')
        
    }

    // Handler for cancelling the registration process
    const handleCancel = ()=>{
        navigation.navigate('LoginScreen')
      }

      


  //send doctor details to backend
const sendDoctor = async () => {
  try {
    const fullName = await AsyncStorage.getItem('fullName');
    const userName = await AsyncStorage.getItem('userName');
    const email = await AsyncStorage.getItem('email');
    const password = await AsyncStorage.getItem('password');
    const contactNumber = await AsyncStorage.getItem('contactNumber');
    const address = await AsyncStorage.getItem('address');
    const city = await AsyncStorage.getItem('city');
    const country = await AsyncStorage.getItem('country');
    const licenseSide1 = await AsyncStorage.getItem('licenseSide1');
    const licenseSide2 = await AsyncStorage.getItem('licenseSide2');
    const specialization = await AsyncStorage.getItem('specialization');
    const qualification = await AsyncStorage.getItem('qualification');
    const availableDays = await AsyncStorage.getItem('availableDays');
    const availableTimesDay1 = await AsyncStorage.getItem('availableTimesDay1');
    const availableTimesDay2 = await AsyncStorage.getItem('availableTimesDay2');
    const availableTimesDay3 = await AsyncStorage.getItem('availableTimesDay3');
    const availableTimesDay4 = await AsyncStorage.getItem('availableTimesDay4');
    const availableTimesDay5 = await AsyncStorage.getItem('availableTimesDay5');
    const availableTimesDay6 = await AsyncStorage.getItem('availableTimesDay6');
    const availableTimesDay7 = await AsyncStorage.getItem('availableTimesDay7');

    const userData = await doctorRegistration(
      fullName,
      userName,
      email,
      password,
      contactNumber,
      address,
      city,
      country,
      licenseSide1,
      licenseSide2,
      specialization,
      qualification,
      availableDays,
      availableTimesDay1,
      availableTimesDay2,
      availableTimesDay3,
      availableTimesDay4,
      availableTimesDay5,
      availableTimesDay6,
      availableTimesDay7,
      proPic,
      bio
    );

    if (userData != null) {
      navigation.navigate("LoginScreen");
    }
  } catch (error) {
    console.log(error);
  }
};



      
      // Handler for submitting the registration form
      const handleSubmit = ()=>{
        if(
          bio.trim() === '' ||
          proPic == null
        ){
          setIsEmpty(true)
          

        }else if(!isChecked){
          setUnCheckedColor('#E82519')
          setIsEmpty(false)
        }
        else{
          setIsEmpty(false)
          
          sendDoctor();
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
                <Text style={styles.subText}>Additional Details</Text>
                
                <FilePicker errMsg={"You have to select an image"} selectedImg={setProPic} label={"Upload a profile picture"}/>

                <InputField placeHolder={'Describe your expertise and approach. \n(max words 300)'} label={'Brief Bio :'} onChangeText={setBio} type={'textField'}/>
                  
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
          
          </View>
      </View>
  )
}

export default DoctorRegScreen4