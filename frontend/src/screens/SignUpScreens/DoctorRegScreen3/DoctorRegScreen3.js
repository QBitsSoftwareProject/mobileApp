import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Keyboard} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../../components/InputField/InputField'
import styles from './styles'

const DoctorRegScreen3 = () => {
    const navigation = useNavigation()
    const screenHeight = Dimensions.get('window').height;

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
        navigation.navigate('DoctorRegScreen2')
        
    }

    const handleNext = ()=>{
          navigation.navigate('DoctorRegScreen4') 
   
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
                <Text style={styles.subText}>Availability and Contact:</Text>
                
                  <InputField placeHolder={''} label={'Days Available for Consultation :'} />

              </View>
  
              
              
  
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

export default DoctorRegScreen3