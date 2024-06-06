import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ToggleSwitch from './ToogleButton'; // Correct the import path if needed

const SettingScreen = () => {

  
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Image 
          source={require('../../assets/images/Settings/sound.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.second}>
        <Text style={styles.text}>Background Music</Text>
      </View>

      <View style={styles.third}>
        <ToggleSwitch  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 10,
  },
  first: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  second: {
    flex: 3,
    justifyContent: 'center',
  },
  third: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 18,
  },
});

export default SettingScreen;
