import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Keyboard} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../../components/InputField/InputField'
import styles from './styles'
import SelectionBars from '../../../components/SelectionBars/SelectionBars'

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
 
                <SelectionBars headLine={"1. Monday"} timeSlotVisible={true}/>
                <SelectionBars headLine={"2. Tuesday"} timeSlotVisible={true}/>
                <SelectionBars headLine={"3. Wednesday"} timeSlotVisible={true}/>
                <SelectionBars headLine={"4. Thursday"} timeSlotVisible={true}/>
                <SelectionBars headLine={"5. Friday"} timeSlotVisible={true}/>
                <SelectionBars headLine={"6. Sturday"} timeSlotVisible={true}/>
                <SelectionBars headLine={"7. Sunday"} timeSlotVisible={true}/>

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