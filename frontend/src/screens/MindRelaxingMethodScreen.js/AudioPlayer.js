import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const ExpandableCard = (props) => {
  const [sound, setSound] = useState(null);

  const playSound = async () => {
    try {
      if (!sound) {
        const { sound } = await Audio.Sound.createAsync(
          { uri: props.rUrl }
        );
        setSound(sound);
        await sound.playAsync();
      } else {
        await sound.replayAsync(); // Replay the sound if it's already loaded
      }
    } catch (error) {
      console.error('Failed to play the sound:', error);
    }
  };

  return (
    <View style={{ margin: 10 }}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={playSound}>
          <Image
            source={require('../../assets/images/MindRelaxingMethod/mp3playbutton.png')}
            style={styles.playButton}
          />
        </TouchableOpacity>
        <Text style={styles.method}>{props.methodName}</Text>
      </View>

      <Modal visible={isVisible} transparent>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <TouchableOpacity onPress={() => setIsVisible(false)} style={{ position: 'absolute', top: 20, right: 20 }}>
          <Text style={{ color: 'white' }}>Close</Text>
        </TouchableOpacity>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <AudioPlayer mp3={props.rUrl} />
        </View>
      </View>
    </Modal>
    
    </View>
  );
};

const styles = StyleSheet.create({
  playButton: {
    width: 50,
    height: 50,
  },
  method: {
    fontSize: 18,
    color: '#101318',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default ExpandableCard;
