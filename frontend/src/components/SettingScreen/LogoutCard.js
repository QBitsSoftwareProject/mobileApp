import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React, {useContext,useState}from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'



const SettingScreen = ({handleLogout, text,img}) => {

 


  return (
    <TouchableOpacity style = {styles.container} onPress={handleLogout}>

        <View style = {styles.first}>
            <Image 
            source={img}
            style = {styles.image}
            />
        </View>

        <View style = {styles.second}>
            <Text style = {styles.text}>{text}</Text>
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
    borderRadius:15,
    marginBottom:10
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

