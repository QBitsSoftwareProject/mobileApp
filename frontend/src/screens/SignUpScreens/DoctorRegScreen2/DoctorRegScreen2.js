import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Keyboard} from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../../components/InputField/InputField'
import { Picker } from '@react-native-picker/picker';

const DoctorRegScreen2 = () => {
    const navigation = useNavigation()
    const screenHeight = Dimensions.get('window').height;

    // State variables for storing form inputs
    const [licenseNo, setLicenseNo] = useState('')
    const [qualification, setQualification] = useState('')
    const [isEmpty, setIsEmpty] = useState(false)
    const [selectedValue, setSelectedValue] = useState('');

    // State variable for adjusting screen padding when keyboard is open
    const [screenPadding, setScreenPadding] = useState(0)

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
        navigation.navigate('DoctorRegScreen')
        
    }

    // Handler for moving to the next step or screen
    const handleNext = ()=>{
        if(
          licenseNo.trim() === '' ||
          qualification.trim() === ''
        ){
          setIsEmpty(true)
          
        }else if(selectedValue === '' || selectedValue === 'default'){
          setSelectedValue('default')
          setIsEmpty(false)
        }
        else{
          setIsEmpty(false)
          navigation.navigate('DoctorRegScreen3') 
          
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
                <Text style={styles.subText}>Professional Information</Text>
                
                  <InputField placeHolder={'PAT8735'} label={'Medical License Number :'} onChangeText={setLicenseNo}/>

                  <View>
                    <Text style={{fontSize:14, fontWeight:'400', color:'#40495B', marginBottom:7}}>Specialization :</Text>

                    <View style={styles.wrapper}>
                      <Picker
                          selectedValue={selectedValue}
                          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                          style={styles.picker}
                      >
                      <Picker.Item label="Select your speciality" value="default" style={styles.pickerItem}/>
                      <Picker.Item label="Option 1" value="option1" style={styles.pickerItem}/>
                      <Picker.Item label="Option 2" value="option2" style={styles.pickerItem}/>

                      </Picker>
                    </View>

                  </View> 

                  <InputField placeHolder={'ex_B.A. Biochemistry (Hons) - University of Oxford, UK M.B.B.S (Hons) University of Colombo'} label={'Educational Qualifications :'} onChangeText={setQualification} type={'textField'}/>
                  
              </View>
  
              {isEmpty && selectedValue!='default' && (
                 <View style={{alignItems:'center',marginTop:15}}>
                    <Text style={{color:'#E82519'}}>Input fields cannot be empty!</Text>
                </View>
              )}
              {selectedValue==='default' && (
                 <View style={{alignItems:'center',marginTop:15}}>
                    <Text style={{color:'#E82519'}}>Please select your specialization</Text>
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

export default DoctorRegScreen2