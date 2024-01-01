import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabBar from '../../components/TabBar/TabBar';


const NavContainer = () => {
  return (
    <NavigationContainer>
      <TabBar/>
    </NavigationContainer>
  )
}

export default NavContainer