import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'






const SettingScreen = () => {
  return (
    <TouchableOpacity style = {styles.container}>

        <View style = {styles.first}>
            <Image 
            source={require('../../assets/images/Settings/Logout.png')}
            style = {styles.image}
            />
        </View>

        <View style = {styles.second}>
            <Text style = {styles.text}>Logout</Text>
        </View>

        <View style = {styles.third}>
            
        </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  
  container:{
    
    height:80,
    width:'100%',
    alignSelf:'center',
    flexDirection: 'row',
    backgroundColor:'white',
    borderRadius:15
  },

  first:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    
  },

  second:{
    flex:3,
    justifyContent:'center',
    
    
  },

  third:{
    flex:1,
    
    justifyContent:'center',
    alignItems:'center'
  },

  image:{
    width:40,
    height:40
  },

  text:{
    fontSize:18
  }

})

export default SettingScreen

