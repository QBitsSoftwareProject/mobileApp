// ProfileScreen.js
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View ,SafeAreaView, ImageBackground} from 'react-native';
import styles from './profileStyles'
import TextCard from './TextCard'
import BioEditPopUp from './BioEditPopUp'
import React, { useEffect, useContext ,useState} from 'react';
import { BackgroundMusicContext } from '../../components/SettingScreen/BackgroundMusicProvider';
import { useFocusEffect } from '@react-navigation/native';

const ProfileScreen = () => {
  const { setBackgroundMusicValid } = useContext(BackgroundMusicContext);

  useFocusEffect(
    React.useCallback(() => {
      setBackgroundMusicValid(false);
      

      return () => {
        setBackgroundMusicValid(true);
        
      };
    }, [setBackgroundMusicValid])
  );

  
  const [isPopupVisibleName, setPopupVisibleName] = useState(false);
  const [isPopupVisibleUserName, setPopupVisibleUserName] = useState(false);
  const [isPopupVisibleEmail, setPopupVisibleEmail] = useState(false);
  const [isPopupVisibleContact, setPopupVisibleContact] = useState(false);
  const [isPopupVisibleAddress, setPopupVisibleAddress] = useState(false);
  const [isPopupVisibleCity, setPopupVisibleCity] = useState(false);
  const [isPopupVisibleCountry, setPopupVisibleCountry] = useState(false);

  const togglePopupName = () => {
    setPopupVisibleName(!isPopupVisibleName);
  };

  const togglePopupUserName = () => {
    setPopupVisibleUserName(!isPopupVisibleUserName);
  };

  const togglePopupEmail = () => {
    setPopupVisibleEmail(!isPopupVisibleEmail);
  };

  const togglePopupContact = () => {
    setPopupVisibleContact(!isPopupVisibleContact);
  };

  const togglePopupAddress = () => {
    setPopupVisibleAddress(!isPopupVisibleAddress);
  };

  const togglePopupCity = () => {
    setPopupVisibleCity(!isPopupVisibleCity);
  };

  const togglePopupCountry = () => {
    setPopupVisibleCountry(!isPopupVisibleCountry);
  };

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

    <Text style = {{alignSelf:'center', marginTop:15, fontSize:20}}>Profile</Text>

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

    <Text style = {{fontSize:18,marginBottom:5}}>Madusha Weerasinghe</Text>
    <Text style = {{fontSize:12,color:'#868686'}}>User ID : 00101A</Text>
    <Text style = {{fontSize:12,color:'#868686'}}>Acount Created : 02-feb-2024</Text>
    <Text style = {{fontSize:12,color:'#868686'}}>Account Type : Regular Person</Text>
        

      </View>

    </View>

    <View style = {styles.editInfo}>
      <Text style = {{fontSize:18, marginBottom:22}}>Your Info</Text>
      

      <TextCard title = "Name" subText= "B.M.Weerasinghe" icon={require('../../assets/images/ProfileIcons/name.png')} function = {togglePopupName}/>
      
      <TextCard title = "User Name" subText= "Madusha Weerasinghe" icon={require('../../assets/images/ProfileIcons/userName.png')} function ={togglePopupUserName}/>

      <TextCard title = "Email" subText= "madusha@gmail.com" icon={require('../../assets/images/ProfileIcons/email.png')} function ={togglePopupEmail}/>

      <TextCard title = "Contact Number" subText= "0712002043" icon={require('../../assets/images/ProfileIcons/contact.png')} function = {togglePopupContact}/>

      <TextCard title = "Address" subText= "67/1, welona place, kaubedda" icon={require('../../assets/images/ProfileIcons/address.png')} function = {togglePopupAddress}/>

      <TextCard title = "City" subText= "Moratuwa" icon={require('../../assets/images/ProfileIcons/city.png')} function ={togglePopupCity}/>

      <TextCard title = "Country" subText= "Sri Lanka" icon={require('../../assets/images/ProfileIcons/country.png')} function = {togglePopupCountry}/>

    </View>

    <BioEditPopUp isVisible={isPopupVisibleName} onClose={togglePopupName} title = "Edit Name" previousText = "B.M.Weerasinghe"/>
    <BioEditPopUp isVisible={isPopupVisibleUserName} onClose={togglePopupUserName} title = "Edit User Name" previousText = "Madusha Weerasinghe"/>
    <BioEditPopUp isVisible={isPopupVisibleEmail} onClose={togglePopupEmail} title = "Edit Email" previousText = "madusha@gmail.com"/>
    <BioEditPopUp isVisible={isPopupVisibleContact} onClose={togglePopupContact} title = "Edit Contact Number" previousText = "0712002043"/>
    <BioEditPopUp isVisible={isPopupVisibleAddress} onClose={togglePopupAddress} title = "Edit Address" previousText = "67/1, welona place, kaubedda"/>
    <BioEditPopUp isVisible={isPopupVisibleCity} onClose={togglePopupCity} title = "Edit City" previousText = "Moratuwa"/>
    <BioEditPopUp isVisible={isPopupVisibleCountry} onClose={togglePopupCountry} title = "Edit Country" previousText = "Sri Lanka"/>

    </View>
  )
}

export default ProfileScreen;
