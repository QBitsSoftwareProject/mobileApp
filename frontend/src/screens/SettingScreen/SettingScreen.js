import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderSub from '../../components/HeaderSub.js/HeaderSub'


const SettingScreen = () => {
  return (
    <SafeAreaView>
      <HeaderSub headLine={'Goals'} subHeadLine={"\"Self-care is how you take your power back.- Lalah Delia\""}/>
      <View style={{marginRight:25,marginLeft:25}}>
        <Text >SettingScreen</Text>
      </View>
      
    </SafeAreaView>
  )
}

export default SettingScreen

