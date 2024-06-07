// NavContainer.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabBar from '../../components/TabBar/TabBar';
import { BackgroundMusicProvider } from '../../components/SettingScreen/BackgroundMusicProvider';

const NavContainer = () => {
  return (
    <NavigationContainer>
      <BackgroundMusicProvider>
        <TabBar />
      </BackgroundMusicProvider>
    </NavigationContainer>
  );
};

export default NavContainer;
