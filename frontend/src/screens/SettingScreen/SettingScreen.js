import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'


const SettingScreen = () => {
  const navigation = useNavigation()
  
  const handleLogout = ()=>{
    navigation.navigate("WelcomeScreen")
  }
  return (
    <SafeAreaView>
      <TouchableOpacity 
        style={{marginHorizontal:25,marginVertical:100, backgroundColor:'yellow', width:300, height:50, borderRadius:20, alignItems:'center', justifyContent:'center'}} 
        onPress={handleLogout}>

        <Text >Logout</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default SettingScreen

