import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Keyboard} from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../../components/InputField/InputField'

const DoctorRegScreen4 = () => {
    const navigation = useNavigation()
    const screenHeight = Dimensions.get('window').height;

    const [screenPadding, setScreenPadding] = useState(0)
    const [bio, setBio] = useState('')
    const [isEmpty, setIsEmpty] = useState(false)

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
        navigation.navigate('DoctorRegScreen2')
        
    }
    const handleCancel = ()=>{
        navigation.navigate('WelcomeScreen')
      }
    
      const handleSubmit = ()=>{
        if(
          bio.trim() === ''
        ){
          setIsEmpty(true)
        }
        else{
          setIsEmpty(false)
          navigation.navigate('TabBar')
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


                  <InputField placeHolder={'Describe your qualification.(max words 300)'} label={'Educational Qualifications :'} onChangeText={setBio} type={'textField'}/>
                  
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