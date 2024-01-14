import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabBar from '../../components/TabBar/TabBar';
import LoginStack from '../routes/LoginStack';


const NavContainer = () => {
  return (
    <NavigationContainer>
      <LoginStack/>
    </NavigationContainer>
  )
}

export default NavContainer