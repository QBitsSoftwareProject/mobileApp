import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View ,SafeAreaView, ImageBackground} from 'react-native'
import React from 'react'
import styles from './profileStyles'
import TextCard from './TextCard'

const ProfileScreen = () => {
  return (
    <View>
    <View>
      <TouchableOpacity>
      <Image
      source={require('../../assets/images/BackBlack.png')}
      style = {{marginTop:50, marginLeft:25}}
    />
    </TouchableOpacity>
    </View>

    <Text style = {{alignSelf:'center', marginTop:15, fontSize:18}}>Profile</Text>

    <View style = {styles.imageEdit}>

      <View style = {styles.imageEditLeft}>

      <ImageBackground source={require('../../assets/images/ProfileIcons/profileImage.png')} style = {{width:130, height:130}}>
          <View style = {{height:'100%'}}>
            <TouchableOpacity>
            <Image 
            source={require('../../assets/images/ProfileIcons/imageEdit.png')} style = {{width:130, height:130}}>

            </Image>
            </TouchableOpacity>
        
        </View>
        </ImageBackground>

      </View>

      <View style = {styles.imageEditRight}>

        

      </View>

    </View>

    <View style = {styles.editInfo}>
      <Text style = {{fontSize:18, marginBottom:22}}>Your Info</Text>
      

      <TextCard title = "Name" subText= "B.M.Weerasinghe" icon={require('../../assets/images/ProfileIcons/name.png')}/>
      
      <TextCard title = "User Name" subText= "Madusha Weerasinghe" icon={require('../../assets/images/ProfileIcons/userName.png')}/>

      <TextCard title = "Email" subText= "madusha@gmail.com" icon={require('../../assets/images/ProfileIcons/email.png')}/>

      <TextCard title = "Contact Number" subText= "0712002043" icon={require('../../assets/images/ProfileIcons/contact.png')}/>

      <TextCard title = "Address" subText= "67/1, welona place, kaubedda" icon={require('../../assets/images/ProfileIcons/address.png')}/>

      <TextCard title = "City" subText= "Moratuwa" icon={require('../../assets/images/ProfileIcons/city.png')}/>

      <TextCard title = "Country" subText= "Sri Lanka" icon={require('../../assets/images/ProfileIcons/country.png')}/>

    </View>

    </View>
  )
}

export default ProfileScreen

