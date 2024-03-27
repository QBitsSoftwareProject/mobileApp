import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Keyboard} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../../components/InputField/InputField'
import styles from './styles'
import SelectionBars from '../../../components/SelectionBars/SelectionBars'

const DoctorRegScreen3 = () => {
    const navigation = useNavigation()
    const screenHeight = Dimensions.get('window').height;

    // State variables for managing screen padding and availability details
    const [screenPadding, setScreenPadding] = useState(0)
    const [availableDays, setAvailableDays] = useState([])
    const [isNext, setIsNext] = useState(false)

    const [availableTimesDay1, setAvailableTimesDay1] = useState([])
    const [availableTimesDay2, setAvailableTimesDay2] = useState([])
    const [availableTimesDay3, setAvailableTimesDay3] = useState([])
    const [availableTimesDay4, setAvailableTimesDay4] = useState([])
    const [availableTimesDay5, setAvailableTimesDay5] = useState([])
    const [availableTimesDay6, setAvailableTimesDay6] = useState([])
    const [availableTimesDay7, setAvailableTimesDay7] = useState([])

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
          keyboardDidShowListener.remove()
          keyboardDidHideListener.remove()
        };
      }, []);

      // Handler for navigating back to the previous screen
    const handleBackPress = ()=>{
      navigation.navigate('DoctorRegScreen2')
        
    }

// Handler for moving to the next step or screen
    const handleNext = ()=>{
        console.log(availableTimesDay1)
        setIsNext(true)
        navigation.navigate('DoctorRegScreen4') 
   
    }
    
// Function to update available days
    const updateAvailableDays = (day) => {
      setAvailableDays(prevAvailableDays => [...prevAvailableDays, day]);
    };



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
 
                <SelectionBars num={1} headLine={"Monday"} timeSlotVisible={true} dayBlock={updateAvailableDays} timeBlock={setAvailableTimesDay1}/>
                <SelectionBars num={2} headLine={"Tuesday"} timeSlotVisible={true} dayBlock={updateAvailableDays} timeBlock={setAvailableTimesDay2}/>
                <SelectionBars num={3} headLine={"Wednesday"} timeSlotVisible={true} dayBlock={updateAvailableDays} timeBlock={setAvailableTimesDay3}/>
                <SelectionBars num={4} headLine={"Thursday"} timeSlotVisible={true} dayBlock={updateAvailableDays} timeBlock={setAvailableTimesDay4}/>
                <SelectionBars num={5} headLine={"Friday"} timeSlotVisible={true} dayBlock={updateAvailableDays} timeBlock={setAvailableTimesDay5}/>
                <SelectionBars num={6} headLine={"Sturday"} timeSlotVisible={true} dayBlock={updateAvailableDays} timeBlock={setAvailableTimesDay6}/>
                <SelectionBars num={7} headLine={"Sunday"} timeSlotVisible={true} dayBlock={updateAvailableDays} timeBlock={setAvailableTimesDay7}/>

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