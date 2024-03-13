import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from '../../screens/SettingScreen/SettingScreen';
import NotifyScreen from '../../screens/NotificationScreen/NotifyScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import HomeStack from '../../navigation/routes/HomeStack';
import TabBarIcon from './TabBarIcon';
import { Keyboard, View } from 'react-native';

const Tab = createBottomTabNavigator();

const TabBar = () => {

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',() => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',() => {
          setKeyboardVisible(false);
        }
      );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
    }, []);

  return (
      
          <Tab.Navigator
            screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              position: 'absolute',
              height: isKeyboardVisible ? 0:85,
              overflow:isKeyboardVisible ? 'hidden':'visible',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              marginTop:32,
            },
            headerShown:false
          }}
        >
          <Tab.Screen name='home' component={HomeStack} options={{tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} screenName={'home'}/>}}/>
    
          <Tab.Screen name='profile' component={ProfileScreen} options={{tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} screenName={'user'}/>}}/>
    
          <Tab.Screen name='Notification' component={NotifyScreen} options={{tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} screenName={'notification'}/>}}/>
    
          <Tab.Screen name='setting' component={SettingScreen} options={{tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} screenName={'setting'}/>}}/>
    
        </Tab.Navigator>
   
    
  );
};

export default TabBar;