// TabBar.js
import React, { useEffect, useState, useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from '../../screens/SettingScreen/SettingScreen';
import NotifyScreen from '../../screens/NotificationScreen/NotifyScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import HomeStack from '../../navigation/routes/HomeStack';
import TabBarIcon from './TabBarIcon';
import { Keyboard, View } from 'react-native';
import MusicPlayer from './BackgroundMusic';
import { BackgroundMusicContext } from '../SettingScreen/BackgroundMusicProvider';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  
  const { backgroundMusicValid , backgroundMusic } = useContext(BackgroundMusicContext);

  

  const firebaseAudioUrl = 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-9e556.appspot.com/o/music%2FBlue%20Sky%20-%20Anime%20Piano%20%20Relaxation%20and%20Inspiration.mp3?alt=media&token=63f0612a-cfaf-41c7-ac6c-a001512b5369';

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MusicPlayer play={backgroundMusic && backgroundMusicValid} url={firebaseAudioUrl} />
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            height: isKeyboardVisible ? 0 : 85,
            overflow: isKeyboardVisible ? 'hidden' : 'visible',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            marginTop: 32,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} screenName={'home'} />,
          }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} screenName={'user'} />,
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotifyScreen}
          options={{
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} screenName={'notification'} />,
          }}
        />
        <Tab.Screen
          name="setting"
          component={SettingScreen}
          
          options={{
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} screenName={'setting'} />,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabBar;
