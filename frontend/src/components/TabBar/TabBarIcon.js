import { View, Text, Image } from 'react-native'
import React from 'react'

const IconMapping = {
    home: require('../../assets/images/home.png'),
    user: require('../../assets/images/user.png'),
    notification: require('../../assets/images/notification.png'),
    setting: require('../../assets/images/setting.png'),
   
  };

  const TabBarIcon = ({focused,screenName}) => (
    <View style={{justifyContent:'center',alignItems:'center'}}>
        
        {focused ? (<Image source={require('../../assets/images/ellipse.png')} style={{ position:'absolute' }}/>) : null}
        <Image source={IconMapping[screenName]} />
    </View>
    
  )

export default TabBarIcon