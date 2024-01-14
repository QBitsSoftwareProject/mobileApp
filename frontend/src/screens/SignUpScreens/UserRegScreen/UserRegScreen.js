import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, KeyboardAvoidingView, } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../../components/InputField/InputField'
import { CheckBox } from 'react-native-elements';


const UserRegScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation()

  const screenHeight = Dimensions.get('window').height;

  const handleBackPress = ()=>{
      navigation.navigate('SelectionScreen')
  }

  return (
    <View style={styles.conatiner}>
        <TouchableOpacity onPress={handleBackPress}>
            <Image source={require("../../../assets/images/backBlack.png")} style={{marginTop:55}}/>
        </TouchableOpacity>

        <View style={{maxHeight:screenHeight - 87}}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView >
            <View style={{alignItems:'left'}}>
              <Text style={styles.headerText}>Please fill the following form with correct details.</Text>
              
                <InputField placeHolder={'B.M. Weerasinghe'} label={'Full name / Name with initial :'}/>
                <InputField placeHolder={'Madusha'} label={'User name :'}/>
                <InputField placeHolder={'ex@gmail.com'} label={'ex@gmail.com'}/>
                <InputField placeHolder={'+9412345678'} label={'Contact No :'}/>
                <InputField placeHolder={'67/1, welona place, kaubedda'} label={'Address :'}/>
                <InputField placeHolder={'Moratuwa'} label={'City :'}/>
                <InputField placeHolder={'Ex_Sri Lanka'} label={'Country :'}/>

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
                checkedColor='#4ABFB4'
                size={25}
                containerStyle={{padding:0, margin:0,backgroundColor:'transparent', }}
                title={'I acknowledge that I have read, understood, and agree to abide by the this app Privacy Policy and Terms of Service.'}
                textStyle={styles.agreemetnText}
               
              />
            </View>

            <View style={{marginVertical:32, alignItems:'center'}}>
              <TouchableOpacity style={styles.submitBtn}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cancelBtn}>
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