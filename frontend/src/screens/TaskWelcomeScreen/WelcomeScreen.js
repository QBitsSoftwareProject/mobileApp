// welcomescreen.js
import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomeScreen = () => {
  return (
    <LinearGradient colors={['#4A90BF', '#00453E']} style={styles.container}>
      <ImageBackground source={require('../../assets/images/squreBg.png')} style={styles.background}>
        <View style={styles.content}>
          <Text style={styles.headertxt}>Welcome</Text>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

export default WelcomeScreen;


