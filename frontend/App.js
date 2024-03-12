import React, { useState } from 'react';
import NavContainer from './src/navigation/navigationContainer/NavContainer';
import { View } from 'react-native';


export default function App() {
    return (
        <View style={{ height:860}}>
            <NavContainer/>         
        </View>
    
    );
  
}
