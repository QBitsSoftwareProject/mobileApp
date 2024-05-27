import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SettingCard from '../../components/SettingScreen/SettingCard'
import LogoutCard from '../../components/SettingScreen/LogoutCard'


const SettingScreen = () => {
  return (
    <SafeAreaView>
      <View style={{marginRight:25,marginLeft:25}}>
        <Text style = {styles.SettingText}>Settings</Text>
        <SettingCard></SettingCard>
        <LogoutCard/>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
  SettingText:{
    alignSelf:'center',
    marginTop:32,
    fontSize:22,
    fontWeight:'500',
    marginBottom:32

  }
})

export default SettingScreen

