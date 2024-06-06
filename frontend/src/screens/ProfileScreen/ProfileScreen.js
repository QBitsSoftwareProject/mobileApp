// ProfileScreen.js
import React, { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
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

  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
