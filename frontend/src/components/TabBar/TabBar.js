import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from '../../screens/SettingScreen/SettingScreen';
import NotifyScreen from '../../screens/NotificationScreen/NotifyScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import HomeStack from '../../navigation/routes/HomeStack';
import TabBarIcon from './TabBarIcon';

const Tab = createBottomTabNavigator();

const TabBar = () => {


  return (
    <Tab.Navigator
        screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 85,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
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
